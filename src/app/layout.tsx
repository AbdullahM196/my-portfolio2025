import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import StoreProvider from "@/store/storeProvider";
import Footer from "@/components/Footer/Footer";

const cairo = Cairo({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic"],
});

export const metadata: Metadata = {
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
        <StoreProvider>
          <main className="app">
            <Header />
            {children}
            <Footer />
          </main>
        </StoreProvider>
      </body>
    </html>
  );
}
