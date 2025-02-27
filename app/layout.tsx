import Navbar from "./Components/Navbar";
import {Acme} from "next/font/google";
import "./globals.css";
import Contact from "@/app/Components/Contact/Contact";
import Links from "@/app/Components/Links";
import GoogleAnalytics from "@/app/Components/Analytics/GoogleAnalytics";

const acme = Acme({
    subsets: ["latin"],
    weight: "400",
});

export const metadata = {
    title: "Portfolio",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <GoogleAnalytics/>
        <body className={`${acme.className} max-sm:cursor-default bg-primary max-w-[1300px] mx-auto`}>
        <Navbar/>
        {children}
        <Contact/>
        <Links/>
        </body>
        </html>
    );
}
