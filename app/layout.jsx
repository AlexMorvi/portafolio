import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Alexander Morales | Portfolio",
  description: "QA Automation Engineer portfolio focused on quality, DevOps and impact.",
  icons: {
    icon: "/LogoM.svg",
    shortcut: "/LogoM.svg",
    apple: "/LogoM.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={jetbrainsMono.variable}>
        {children}
      </body>
    </html>
  );
}
