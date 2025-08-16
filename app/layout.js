import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import Navber from "@/components/Navber";
import Foother from "@/components/Foother";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home- Chitaynga",
  description: "Here is your best product",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* header element load here  */}
        <Navber/>
        {children}
        <Foother/>
      </body>
    </html>
  );
}
