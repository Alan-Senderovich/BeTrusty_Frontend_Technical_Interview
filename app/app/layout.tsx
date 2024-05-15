import type { Metadata } from "next";
import { Header, Navbar } from "@/components";
import { AppProvider } from "@/redux/providers";
import "./globals.css";

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
        <div className="flex flex-col-reverse md:flex-row">
          <AppProvider>
            <Navbar />
            <div className="w-full">
              <Header />
              {children}
            </div>
          </AppProvider>
        </div>
      </body>
    </html>
  );
}
