import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ToggleThemeProvider from "@/hooks/toogleTheme";
import Head from "next/head";

const cairo = Cairo({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: [
    "https://firebasestorage.googleapis.com/v0/b/test-6f98f.appspot.com/o/my%20Portfolio%2FmyImage.jpeg?alt=media&token=ef14721d-5216-47f2-836a-e5c9f876c66e",
  ],
  title: "Abdullah Mahmoud | Web & Mobile Developer",
  description:
    "Explore the portfolio of Abdullah Mahmoud, a skilled Web and Mobile Developer dedicated to crafting exceptional websites and mobile applications with a focus on user experience and innovative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <ToggleThemeProvider>
          <main className="app">
            <Header />
            {children}
            <Footer />
          </main>
        </ToggleThemeProvider>
      </body>
    </html>
  );
}
