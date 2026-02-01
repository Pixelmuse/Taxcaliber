import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GtmManager from "@/components/analytics/GtmManager";
import KlaroLoader from "@/components/analytics/KlaroLoader";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

const displayFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Taxcaliber | High Caliber Service, Zero Stress",
    template: "%s | Taxcaliber",
  },
  description:
    "Virtual CPA and bookkeeping services for individuals, small businesses, and rental property owners.",
  metadataBase: new URL("https://taxcaliber.com"),
  icons: {
    icon: [
      { url: "/images/brand/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/brand/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/brand/favicon.ico" },
    ],
    apple: [{ url: "/images/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "android-chrome", url: "/images/brand/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "android-chrome", url: "/images/brand/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/images/brand/site.webmanifest",
  openGraph: {
    title: "Taxcaliber | High Caliber Service, Zero Stress",
    description:
      "Bookkeeping and tax preparation for small businesses and rental property owners — done virtually, accurately, and on time.",
    url: "https://taxcaliber.com",
    siteName: "Taxcaliber",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/brand/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Taxcaliber - virtual CPA and bookkeeping services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxcaliber | High Caliber Service, Zero Stress",
    description:
      "Bookkeeping and tax preparation for small businesses and rental property owners — done virtually, accurately, and on time.",
    images: ["/images/brand/social-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <link href="/klaro.css" rel="stylesheet" />
        <link href="/klaro-overrides.css" rel="stylesheet" />
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TL3KG9MW');`,
          }}
        />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      </head>
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TL3KG9MW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <div className="page">
          <Script
            id="organization-ld-json"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "AccountingService",
                name: "Taxcaliber, LLC",
                url: "https://taxcaliber.com",
                logo: "https://taxcaliber.com/images/taxcaliber-logo-385x150.png",
                telephone: "+1-602-819-3395",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "19820 N 7th St. Ste 230",
                  addressLocality: "Phoenix",
                  addressRegion: "AZ",
                  postalCode: "85027",
                  addressCountry: "US",
                },
                areaServed: "US",
              }),
            }}
          />
          <Header />
          <Suspense fallback={null}>
            <GtmManager />
          </Suspense>
          <KlaroLoader />
          <main>{children}</main>
          <Footer />
        </div>
        <div id="klaro" suppressHydrationWarning />
      </body>
    </html>
  );
}
