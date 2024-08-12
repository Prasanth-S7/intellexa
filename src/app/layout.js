import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/smoothScrolling";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Intellexa",
  description: "Technical Club of REC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
