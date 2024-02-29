import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./embla.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MetasoftCo - İnteraktif Deneyim ve Yazılım Ajansı",
  description: "İnteraktif Deneyim ve Yazılım Ajansı",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://metasoftco.com",
    siteName: "MetasoftCo",
    countryName: "Turkey",
    title: "MetasoftCo - İnteraktif Deneyim ve Yazılım Ajansı",
    description: "İnteraktif Deneyim ve Yazılım Ajansı",
    images: "https://metasoftco.com/whiteLogo.png",
  },
  metadataBase: new URL("https://metasoftco.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-metasoftco-bg`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}