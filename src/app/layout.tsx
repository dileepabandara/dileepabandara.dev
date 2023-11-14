import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "@/components/NavBar";
import SiteInfo from "@/config/siteInfo";
import MainFont from "@/constants/fontStyle";
import Footer from "@/components/Footer";
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";
import { ThemeProvider } from "@/components/theme/themeProvider";

export const metadata: Metadata = {
  title: SiteInfo.username,
  description: SiteInfo.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${MainFont.className} bodyTheme`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <div className="relative flex flex-col h-screen">
            <NavBar />
            <main className="py-6 pb-5 md:pb-10 mt-20 md:mt-24 xs:mx-6 sm:mx-12 md:mx-16 flex-grow">
              {children}
            </main>
            <ThemeSwitcher />
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
