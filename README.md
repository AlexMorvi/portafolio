This is a Next.js portfolio project.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.jsx`. The page auto-updates as you edit the file.

## Contact Form Setup

The localized contact page at `/[lang]/contact` sends messages through the API route `app/api/contact/route.js`.

1. Create a local env file:

```bash
cp .env.example .env.local
```

2. Set required variables in `.env.local`:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=your_inbox_email
```

3. Optional sender value:

```env
CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
```

If required variables are missing, the API returns service unavailable and the UI shows a friendly error message.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
