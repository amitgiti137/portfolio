import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";


export const metadata = {
  title: "Portfolio",
  description: "Portfolio that define works",
  icons: {
    icon: "assets/amit-dp.jpg", // tells browser "no favicon"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
