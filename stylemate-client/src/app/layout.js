

import { Poppins } from 'next/font/google'
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "StyleMate",
  description: "StyleMate is a design system for Next.js applications.",
  viewport : "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
