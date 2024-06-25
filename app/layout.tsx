import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import "./globals.css";
import theme from "./context/theme";
import MainContextProvider from "./context/MainProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopify",
  description:
    "A place for different products as per your need with a lot of variations",
  authors: [{ name: "M A Alim", url: "https://alim1496.github.io/" }],
  // metadataBase: new URL("https://alim-blog.vercel.app/"),
  openGraph: {
    title: "Shopify",
    description:
      "A place for different products as per your need with a lot of variations",
    type: "website",
    locale: "en_US",
    siteName: "shopify",
    // url: "https://alim-blog.vercel.app/",
    images: ["/main-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify",
    description:
      "A place for different products as per your need with a lot of variations",
    creator: "@alim1496",
    images: ["/main-og.png"],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <AppRouterCacheProvider>
            <MainContextProvider>{children}</MainContextProvider>
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
