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
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Altovya.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://altovya.app" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://altovya.app" />
        <meta property="og:title" content="Altovya — Facility Outreach for Nursing Staffing Agencies" />
        <meta property="og:description" content="Stop waiting for referrals. Start winning facilities on your terms." />
        <meta property="og:image" content="https://altovya.app/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Altovya" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://altovya.app" />
        <meta name="twitter:title" content="Altovya — Facility Outreach for Nursing Staffing Agencies" />
        <meta name="twitter:description" content="Stop waiting for referrals. Start winning facilities on your terms." />
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