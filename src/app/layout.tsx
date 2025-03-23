import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Restaurant-Dashboard",
  description: "restaurant-dashboard application",
  openGraph: {
    title: "Restaurant-Dashboard",
    description: "restaurant-dashboard application",
    images: [
      {
        url: "../public/Home/pizza.jpg",
        width: 800,
        height: 600,
        alt: "Restaurant Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant-Dashboard",
    description: "restaurant-dashboard application",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
