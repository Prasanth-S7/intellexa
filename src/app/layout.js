import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/smoothScrolling";
const inter = Inter({ subsets: ["latin"] });
import { StarsBackground } from "@/components/ui/stars-background";

export const metadata = {
  title: "Intellexa",
  description: "Technical Club of REC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative">
          {/* <StarsBackground className="z-0" /> */}
          <div className="relative z-10">
            <SmoothScrolling>{children}</SmoothScrolling>
          </div>
        </div>
      </body>
    </html>
  );
}
