import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/component/Sidebar";

import { CustomProvider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Trade Tracker",
  description: "Your ultimate Trading Journel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row relative">
          <div className="lg:mr-56">
            <Sidebar />
          </div>
          <CustomProvider>{children}</CustomProvider>
        

        </div>
      </body>
    </html>
  );
}
