import type { Metadata } from "next";
import { Roboto, Crimson_Text } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-crimson-text",
});

export const metadata: Metadata = {
  title: "sauerApple (sour apple)",
  description:
    "sauerApple LLC is a software development company specializing in fullstack web and mobile applications in Big Bear, CA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${crimsonText.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
