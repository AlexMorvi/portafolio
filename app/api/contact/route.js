import { Resend } from "resend";
import { z } from "zod";

const PHONE_ALLOWED_CHARS = /^[+()\-\s\d]+$/;

function isValidPhone(phone = "") {
  const trimmed = phone.trim();

  if (!trimmed) {
    return true;
  }

  if (!PHONE_ALLOWED_CHARS.test(trimmed)) {
    return false;
  }

  const digitsOnly = trimmed.replace(/\D/g, "");
  return digitsOnly.length >= 7 && digitsOnly.length <= 15;
}

const contactSchema = z.object({
  firstname: z.string().trim().min(2).max(60),
  lastname: z.string().trim().min(2).max(60),
  email: z.string().trim().email().max(180),
  phone: z
    .string()
    .trim()
    .max(40)
    .optional()
    .default("")
    .refine((value) => isValidPhone(value), "Invalid phone number."),
  message: z.string().trim().min(10).max(4000),
  company: z.string().max(0).optional().or(z.literal("")),
});

const WINDOW_MS = 5 * 60 * 1000;
const MAX_REQUESTS = 3;
const bucket = new Map();

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") || "unknown";
}

function allowRequest(ip) {
  const now = Date.now();
  const entry = bucket.get(ip);

  if (!entry || now > entry.resetAt) {
    bucket.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) {
    return false;
  }

  entry.count += 1;
  return true;
}

function escapeHtml(value = "") {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request) {
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
    console.error("Contact service env vars are missing: RESEND_API_KEY or CONTACT_TO_EMAIL.");
    return Response.json(
      {
        error: "Service temporarily unavailable.",
        errorCode: "SERVICE_UNAVAILABLE",
      },
      { status: 503 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const ip = getClientIp(request);

  if (!allowRequest(ip)) {
    return Response.json(
      {
        error: "Too many requests. Please try again in a few minutes.",
        errorCode: "RATE_LIMITED",
      },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;

      if (fieldErrors.phone?.length) {
        return Response.json(
          { error: "Invalid phone number.", errorCode: "PHONE_INVALID" },
          { status: 400 }
        );
      }

      return Response.json(
        { error: "Invalid form data.", errorCode: "FORM_INVALID" },
        { status: 400 }
      );
    }

    const data = parsed.data;

    if (data.company) {
      return Response.json(
        { error: "Invalid request.", errorCode: "FORM_INVALID" },
        { status: 400 }
      );
    }

    const safeFirstname = escapeHtml(data.firstname);
    const safeLastname = escapeHtml(data.lastname);
    const safeEmail = escapeHtml(data.email);
    const safePhone = escapeHtml(data.phone || "N/A");
    const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br />");

    const subject = `Portfolio contact: ${safeFirstname} ${safeLastname}`;

    const result = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: data.email,
      subject,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
          <h2 style="margin-bottom:8px">New contact message</h2>
          <p style="margin:0 0 12px"><strong>Name:</strong> ${safeFirstname} ${safeLastname}</p>
          <p style="margin:0 0 12px"><strong>Email:</strong> ${safeEmail}</p>
          <p style="margin:0 0 12px"><strong>Phone:</strong> ${safePhone}</p>
          <p style="margin:0 0 8px"><strong>Message:</strong></p>
          <p style="margin:0">${safeMessage}</p>
        </div>
      `,
    });

    if (result.error) {
      return Response.json(
        {
          error: "Unable to send message right now.",
          errorCode: "SEND_FAILED",
        },
        { status: 502 }
      );
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch {
    return Response.json(
      { error: "Unexpected server error.", errorCode: "SERVER_ERROR" },
      { status: 500 }
    );
  }
}
