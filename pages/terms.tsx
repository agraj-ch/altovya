import Head from 'next/head'
import Link from 'next/link'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service — Altovya</title>
        <meta name="description" content="Altovya Terms of Service — conditions governing your use of our services." />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className="min-h-screen bg-neutral-bg">
        <div className="max-w-2xl mx-auto px-6 md:px-10 py-20">
          {/* Back link */}
          <Link href="/" className="text-sm text-green-primary hover:opacity-80 transition">
            ← Back to Home
          </Link>

          <h1 className="font-serif text-3xl md:text-4xl text-neutral-text mt-8 mb-8">
            Terms of Service
          </h1>
          <p className="text-sm text-neutral-muted mb-10">
            Last updated: June 2026
          </p>

          <div className="prose prose-sm text-neutral-muted space-y-6">
            <section>
              <h2 className="font-serif text-xl text-neutral-text mb-3">1. Services</h2>
              <p className="leading-relaxed">
                Altovya provides outbound outreach services for tech staffing agencies. Our
                services include target account research, hiring signal detection, decision-maker
                identification, personalised email outreach, follow-up handling, and meeting
                qualification and booking.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-neutral-text mb-3">2. Engagement</h2>
              <p className="leading-relaxed">
                By booking a strategy session or entering into a service agreement with us, you
                agree to the terms outlined in your service agreement, including the pricing
                terms and performance guarantees described on our landing page.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-neutral-text mb-3">3. Guarantee</h2>
              <p className="leading-relaxed">
                Our performance guarantee — 3 qualified meetings within 60 days of outreach
                launch — is governed by the terms set out in your individual service agreement.
                The guarantee summary displayed on our landing page is for informational
                purposes only; the terms of your signed agreement take precedence.
              </p>
              <p className="leading-relaxed mt-3">
                The $750 setup fee is fully refundable if we fail to deliver the guaranteed
                3 qualified meetings by day 90. The refund excludes any domain registration
                fees or third-party infrastructure costs incurred on your behalf, as those
                domains and infrastructure assets remain your property regardless of campaign
                outcome.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-neutral-text mb-3">4. Client Responsibilities</h2>
              <p className="leading-relaxed">
                Clients are responsible for providing accurate information about their
                specialisation and target markets, reviewing and approving outreach messaging before
                sequences go live, and completing any required technical setup (such as DNS
                record configuration) within a reasonable timeframe.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-neutral-text mb-3">5. Intellectual Property</h2>
              <p className="leading-relaxed">
                All content on the Site, including text, graphics, logos, and the Altovya
                brand, is the property of Altovya and is protected by applicable intellectual
                property laws.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-neutral-text mb-3">6. Limitation of Liability</h2>
              <p className="leading-relaxed">
                Altovya provides its services on a best-efforts basis. While we commit to the
                performance terms in your service agreement and the contractual guarantee,
                we make no representations or warranties regarding specific business outcomes
                beyond the delivery of qualified meetings as defined in your agreement.
                To the fullest extent permitted by law, our liability is limited to the fees
                paid by you for the specific services giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-neutral-text mb-3">7. Third-Party Services</h2>
              <p className="leading-relaxed">
                Our Site uses Calendly for scheduling and Formspree for contact form processing.
                Use of these services is subject to their respective terms of service. We are
                not responsible for the availability or functionality of third-party services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-neutral-text mb-3">8. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of
                the United States and the state where Altovya operates. Any disputes shall be
                resolved through binding arbitration or in the courts of competent jurisdiction
                in that state.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-neutral-text mb-3">9. Contact</h2>
              <p className="leading-relaxed">
                For questions about these Terms, contact us at{' '}
                <a href="mailto:hello@altovya.app" className="text-green-primary hover:underline">
                  hello@altovya.app
                </a>.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-neutral-text mb-3">10. Changes</h2>
              <p className="leading-relaxed">
                We reserve the right to update these Terms at any time. Changes will be posted
                on this page with an updated revision date. Continued use of the Site or our
                services after changes constitutes acceptance of the revised Terms.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
