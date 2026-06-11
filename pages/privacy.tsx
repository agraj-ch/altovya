import Head from 'next/head'
import Link from 'next/link'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Altovya</title>
        <meta name="description" content="Altovya Privacy Policy — how we collect, use, and protect your data." />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className="min-h-screen bg-neutral-bg">
        <div className="max-w-2xl mx-auto px-6 md:px-10 py-20">
          {/* Back link */}
          <Link href="/" className="text-sm text-green-primary hover:opacity-80 transition">
            ← Back to Home
          </Link>

          <h1 className="font-serif text-3xl md:text-4xl text-neutral-text mt-8 mb-8">
            Privacy Policy
          </h1>
          <p className="text-sm text-neutral-muted mb-10">
            Last updated: June 2026
          </p>

          <div className="prose prose-sm text-neutral-muted space-y-6">
            <section>
              <h2 className="font-serif text-xl text-neutral-text mb-3">1. Introduction</h2>
              <p className="leading-relaxed">
                Altovya (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) provides
                outbound outreach services for nursing staffing agencies through the website at
                altovya.app (the &ldquo;Site&rdquo;). This Privacy Policy explains how we collect,
                use, disclose, and safeguard your personal information when you visit our Site,
                book a strategy session, or submit a contact form.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-neutral-text mb-3">2. Information We Collect</h2>
              <p className="leading-relaxed mb-2"><strong>Information you provide directly:</strong></p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Name and email address when you submit a contact form (via Formspree)</li>
                <li>Name, email address, and scheduling preferences when you book a strategy session (via Calendly)</li>
              </ul>
              <p className="leading-relaxed mt-3">
                <strong>Information collected automatically:</strong> Our Site may automatically collect
                certain technical information, including your IP address, browser type, operating system,
                referring URLs, and pages visited. This data is processed by Vercel for infrastructure
                purposes and is not used for advertising or tracking.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-neutral-text mb-3">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-2">We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Schedule and manage strategy sessions</li>
                <li>Respond to contact form inquiries</li>
                <li>Deliver the outreach services described on our Site</li>
                <li>Improve our Site and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-neutral-text mb-3">4. Third-Party Services</h2>
              <p className="leading-relaxed mb-2">We rely on the following third-party services:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Calendly</strong> — for scheduling strategy sessions. Calendly&apos;s privacy policy:{' '}
                  <a href="https://calendly.com/privacy" className="text-green-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    calendly.com/privacy
                  </a>
                </li>
                <li>
                  <strong>Formspree</strong> — for processing contact form submissions. Formspree&apos;s privacy policy:{' '}
                  <a href="https://formspree.io/legal/privacy-policy" className="text-green-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    formspree.io/legal/privacy-policy
                  </a>
                </li>
                <li>
                  <strong>Vercel</strong> — for hosting our Site. Vercel&apos;s privacy policy:{' '}
                  <a href="https://vercel.com/legal/privacy-policy" className="text-green-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    vercel.com/legal/privacy-policy
                  </a>
                </li>
              </ul>
              <p className="leading-relaxed mt-3">
                These third-party services have their own privacy policies governing how they handle your data.
                We encourage you to review them.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-neutral-text mb-3">5. Data Retention</h2>
              <p className="leading-relaxed">
                We retain contact form submissions and scheduling information only as long as necessary
                to provide our services and fulfill the purposes described in this policy. Data stored
                in third-party services is retained according to each provider&apos;s data retention policies.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-neutral-text mb-3">6. Cookies</h2>
              <p className="leading-relaxed">
                Our Site does not use marketing or tracking cookies. Essential, functional cookies may
                be set by Calendly (for the scheduling widget) and Vercel (for infrastructure purposes).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-neutral-text mb-3">7. Your Rights</h2>
              <p className="leading-relaxed">
                You may request access to, correction of, or deletion of your personal information
                by contacting us at{' '}
                <a href="mailto:hello@altovya.app" className="text-green-primary hover:underline">
                  hello@altovya.app
                </a>. We will respond within a reasonable timeframe.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-neutral-text mb-3">8. Contact</h2>
              <p className="leading-relaxed">
                For questions about this Privacy Policy, contact us at{' '}
                <a href="mailto:hello@altovya.app" className="text-green-primary hover:underline">
                  hello@altovya.app
                </a>.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-neutral-text mb-3">9. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. The updated version will be
                indicated by an updated &ldquo;Last updated&rdquo; date. We encourage you to review
                this Privacy Policy periodically.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
