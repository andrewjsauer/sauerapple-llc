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
  title: "sauerApple - Technology for Mountain Towns & Outdoor Spaces",
  description:
    "sauerApple LLC specializes in creating innovative software solutions for mountain towns and outdoor spaces, blending AI, sustainability, and community-driven development.",
  keywords: [
    "mountain towns",
    "outdoor technology",
    "AI solutions",
    "sustainability",
    "Big Bear",
    "software development",
    "tourism tech",
  ],
  authors: [{ name: "Andrew Sauer", url: "https://sauerapple.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${crimsonText.variable} ${roboto.variable}`}
        style={{
          backgroundImage: 'url("/images/background.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}
