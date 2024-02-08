import Navbar from "./Components/Navbar";
import { Acme } from "next/font/google";
import "./globals.css";

const acme = Acme({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Mouad Mounib",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${acme.className} max-sm:cursor-default bg-primary`}>
        {children}
      </body>
    </html>
  );
}
