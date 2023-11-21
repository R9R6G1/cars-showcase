import { Metadata } from "next";
import "./globals.css";

import { Navbar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "CarHub",
  description: "Discover the best cars in the woeld.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
