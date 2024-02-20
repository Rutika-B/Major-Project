import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { CustomProvider } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { StoreProvider } from "@/store/StoreProvider";
import SideBar from "@/app/component/Sidebar";
import Allchildren from "./Allchildren";
import Header from "./component/Header";

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
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex">
            <SideBar />
            <Header/>
            <Allchildren>{children}</Allchildren>
            {/* <CustomProvider>{children}</CustomProvider> */}
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
