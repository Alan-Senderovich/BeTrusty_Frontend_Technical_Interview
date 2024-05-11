import type { Metadata } from "next";
import "./globals.css";
import { Header, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "BeTrusty Challenge",
  description: "Challenge de Alan Senderovich",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <div className="flex flex-col-reverse lg:flex-row">
          <Navbar />
          <div className="w-full">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
