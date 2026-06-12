import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-pt-20">
      <Head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-192x192.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://altovya.app" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://altovya.app" />
        <meta property="og:title" content="Outbound Lead Generation for Tech Staffing Agencies | Altovya" />
        <meta property="og:description" content="We help tech staffing agencies book meetings with CTOs, engineering managers, and hiring leaders using signal-based outbound campaigns." />
        <meta property="og:image" content="https://altovya.app/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Altovya" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://altovya.app" />
        <meta name="twitter:title" content="Outbound Lead Generation for Tech Staffing Agencies | Altovya" />
        <meta name="twitter:description" content="We help tech staffing agencies book meetings with CTOs, engineering managers, and hiring leaders using signal-based outbound campaigns." />
        <meta name="twitter:image" content="https://altovya.app/og-image.png" />
        <meta name="twitter:site" content="@altovya" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}