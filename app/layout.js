import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";

import { Inter } from "next/font/google";
import Footer from "./_components/Footer";

const inter = Inter({
  subsets: ["latin", "greek"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / Agrodynamiki O.E.",
    default: "Welcome / Agrodynamiki O.E.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="el">
      <body
        className={`${inter.className} antialiased bg-main-100 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />

        <div className="flex-1 px-6 py-12">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
