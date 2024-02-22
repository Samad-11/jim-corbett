import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TiThMenu } from "react-icons/ti";
import Nav from '@/components/layout/nav'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jim Corbett Travell Guide",
  description: "Welcome to the travel guide of Jim Corbett National Park",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='forest'>
      <body className={inter.className}>
        <main className="mih-h-screen" >
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
