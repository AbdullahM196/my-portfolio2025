import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ToggleThemeProvider from "../hooks/toogleTheme";
import "./globals.css";

const cairo = Cairo({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: [
    "https://res.cloudinary.com/abdullah-mahmoud/image/upload/v1778424495/my_img_hv1poa.png",
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
        <ToastContainer
          position="top-center"
          autoClose={5000}
          transition={Bounce}
          draggable
          pauseOnHover
        />
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
