import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "rsuite/dist/rsuite.min.css";
import { StoreProvider } from "@/store/StoreProvider";
import SideBar from "@/app/component/Sidebar";
import Allchildren from "./Allchildren";
import Header from "./component/Header";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { AI } from "./action";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Trade Tracker",
  description: "Your ultimate Trading Journel",
};

interface Database {
  Database: any;
}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} `}>
        <Toaster />
        <AI>
          <Providers
            attribute="class"
            // defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <StoreProvider>
             
              <div className="flex">
                <SideBar session={session} />
                <Header session={session} />
                <Allchildren session={session}>{children}</Allchildren>
              </div>
            </StoreProvider>
          </Providers>
        </AI>
        <Analytics />
      </body>
    </html>
  );
}
export const runtime = "edge";