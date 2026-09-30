import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import QueryProvider from "../providers/query-provider";
import { Toaster } from "sonner";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const _lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Linda Massage, Spa & Wellness Studio",
  description:
    "Enter a world of wellness, peace and harmony. Experience premium massage and spa treatments at Linda Studio.",
  keywords: [
    "Swedish Massage ",
    "Deep Tissue Massage ",
    "Hot Stone Massage ",
    "Sports Massage ",
    "Aromatherapy Massage ",
    "⁠Nuru Massage",
  ],
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <QueryProvider>
          <Header />
          {children}
          <Toaster
            position="top-right"
            richColors
            closeButton
            duration={3000}
          />
           <Footer/>
        </QueryProvider>
        <Analytics />
      </body>
    </html>
  );
}
