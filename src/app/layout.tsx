import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../styles/globals.css";
import { Toaster } from "@/components/ui/toaster";

import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

import { cn } from "@/lib/utils";
import Header from "@/components/Header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "NEON OSS NEXTJS",
  description: "NEON OSS NEXTJS STARTER TEMPLATE",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Header />
          <main className="container">{children}</main>
          <Toaster />
        </body>
      </html>
    </SessionProvider>
  );
}
