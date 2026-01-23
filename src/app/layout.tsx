import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Software Developer Portfolio | Frontend Developer from India",
  description: "Skilled frontend developer from India with expertise in JavaScript, React, Next.js, and more. Creating responsive, fast, and user-friendly web applications.",
  keywords: ["Frontend Developer", "React Developer", "Next.js", "JavaScript", "Web Developer", "India"],
  authors: [{ name: "Developer" }],
  openGraph: {
    title: "Software Developer Portfolio",
    description: "Skilled frontend developer with expertise in JavaScript, React, and Next.js",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${sora.variable} antialiased bg-[#0a0a0f] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
