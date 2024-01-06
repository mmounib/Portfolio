import Navbar from "./Components/Navbar";
import "./globals.css";
import { Acme } from "next/font/google";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
