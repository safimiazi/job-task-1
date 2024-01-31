"use client"
import Head from 'next/head';
import { Poppins } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ['italic', 'normal'],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={poppins.className}>
          <ThemeProvider>
            <main className="font-normal">
              <Header />
              <Toaster />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
