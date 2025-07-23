import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Ayush Kumar Rai | AI/ML Engineer",
  description: "AI/ML Engineer with focus on Deep Learning, Natural Language Processing, and Computer Vision.",
  authors: [{ name: "Ayush Kumar Rai" }],
  keywords: ["AI", "Machine Learning", "Researcher", "Python", "Deep Learning", "NLP", "Computer Vision"],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  themeColor: '#030014',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <ClientBody>
        <div className={`font-sans bg-[#030014] text-white antialiased ${inter.variable}`}>
          {children}
          <Toaster position="top-center" richColors closeButton />
        </div>
      </ClientBody>
    </html>
  );
}
