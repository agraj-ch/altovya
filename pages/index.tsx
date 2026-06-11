import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const CALENDLY_URL = 'https://calendly.com/agrajchoudhary-social-2024-bhu/30min'

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 80
  window.scrollTo({ top, behavior: 'smooth' })
}

const navLinks = [
  { label: 'Why Altovya', href: 'why' },
  { label: 'How It Works', href: 'how' },
  { label: 'Guarantee', href: 'guarantee' },
  { label: 'FAQ', href: 'faq' },
]

const footerNavLinks = [
  { label: 'Why Altovya', href: 'why' },
  { label: 'How It Works', href: 'how' },
  { label: 'Guarantee', href: 'guarantee' },
  { label: 'FAQ', href: 'faq' },
]

const footerInfoLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

const proofItems = [
  '3+ qualified meetings in 60 days or we work free',
  'Setup fee refunded if target missed by day 90',
  '$300 per confirmed facility meeting',
]

const painCards = [
  {
    title: 'Relationship-driven selling has a ceiling',
    body: 'Your referral network only reaches so far. The facilities that don\'t already know you? They\'re invisible to your current strategy.',
  },
  {
    title: 'Director of Nursing turnover is brutal',
    body: 'Every time a DON moves on, your warm contact disappears with them. You\'re back to cold outreach, starting over.',
  },
  {
    title: 'Referrals are unpredictable by design',
    body: 'You can\'t schedule a referral. You can\'t forecast one. And you can\'t build a business around hope.',
  },
  {
    title: 'Facility administrators are hard to reach',
    body: 'They don\'t attend your webinars. They don\'t respond to cold calls. They barely check their inbox.',
  },
  {
    title: 'Geographic expansion is a guessing game',
    body: 'Which facilities actually have nursing gaps? Which are already over-registered with agencies? You\'re guessing.',
  },
  {
    title: "You don't have time to build an outreach system",
    body: 'Between staffing calls, payroll, and keeping clients happy, there\'s no bandwidth left for structured outbound.',
  },
]

const processSteps = [
  {
    num: '01',
    title: 'Research & targeting',
    body: 'We build a vetted list of facilities that match your service area and specialty mix. Every facility is mapped with basic contact infrastructure.',
    output: 'Vetted facility list with contact mapping',
  },
  {
    num: '02',
    title: 'Decision-maker identification',
    body: 'We identify the right person at each facility — DON, administrator, or whoever actually makes the staffing decision. Every contact is verified.',
    output: 'Verified name, title, and email per facility',
  },
  {
    num: '03',
    title: 'Personalized message construction',
    body: 'We craft a 3-touch email sequence tailored to each facility\'s profile. Your agency name, your value prop, your voice.',
    output: 'Personalised 3-touch email sequence',
  },
  {
    num: '04',
    title: 'Controlled outreach delivery',
    body: 'Outreach goes out on your behalf at a measured pace. We manage deliverability, timing, and compliance so your sender reputation stays clean.',
    output: 'Outreach live within 7–10 days of kickoff',
  },
  {
    num: '05',
    title: 'Follow-up & reply handling',
    body: 'The sequence handles follow-ups automatically. Every reply is flagged and routed to you in real time — no black hole.',
    output: 'You see every reply in real time',
  },
  {
    num: '06',
    title: 'Meeting qualification & booking',
    body: "We qualify each reply to confirm the contact is appropriate and genuinely interested. The final step is a confirmed calendar invite with a decision-maker.",
    output: 'Confirmed calendar invite with qualified contact',
  },
]

const faqs = [
  {
    q: 'Why should I trust an agency with no track record?',
    a: "We're not going to pretend we're a 10-year-old firm with hundreds of testimonials. What we can show you is a specific method — the same steps we walk through for every client — and a contractual guarantee that puts our fee at risk. If we miss the target, you get meetings anyway or your setup fee back. That alignment is what drives the work.",
  },
  {
    q: 'Why do you only work with nursing staffing agencies?',
    a: "Because the facilities that nursing agencies call on — skilled nursing, assisted living, LTC — have a distinct decision-making structure and a distinct set of needs. A generalist outreach agency won't know a DON from a discharge planner. Specialising means the messaging lands correctly from the first email.",
  },
  {
    q: 'How do you source and verify facility contacts?',
    a: "We use a combination of public data sources, facility public records, and verification tooling. Every contact is checked for validity before it enters the sequence. If a facility's main contact line rings into a general lobby, we dig deeper until we find the actual decision-maker.",
  },
  {
    q: "What exactly counts as a 'qualified' meeting?",
    a: "A qualified meeting is a confirmed 30-minute conversation with a person who actually makes or directly influences the staffing decision — a DON, an administrator, a contracts director. A receptionist confirming 'yes we need nurses' does not count. A scheduler who screens calls for a DON does not count.",
  },
  {
    q: 'How much time will this require from me or my team?',
    a: "The kickoff session takes about 45 minutes. After that, you'll need to review and approve the email sequence once (roughly 30 minutes). Then you're on standby for replies — which land in your inbox as they come in. We handle everything else. Most clients spend less than two hours total in the first two weeks.",
  },
  {
    q: 'What if cold emails damage our reputation with facilities?',
    a: "That's a legitimate concern — and it's exactly why we control cadence, personalisation depth, and sender reputation carefully, rather than blasting high volumes. We also exclude facilities you already have a relationship with. The goal is to open doors, not knock them down.",
  },
  {
    q: 'Why not just hire a salesperson instead?',
    a: "A good sales hire can work. It's also expensive (base salary + commission + overhead), takes months to onboard, and carries turnover risk — especially when the person builds relationships with your facility contacts and then leaves. Outbound email works when a salesperson would: at the decision-making level, with the right message, consistently. At a fraction of the cost and no ongoing liability.",
  },
  {
    q: 'What types of facilities do you target?',
    a: "Skilled nursing facilities, assisted living communities, long-term care facilities, and memory care operations. We build the target list during kickoff based on your service area and specialty mix.",
  },
  {
    q: 'How long until I see the first meeting booked?',
    a: "The guarantee is 3 meetings in 60 days. That timeline starts from the day outreach goes live, which is within 7–10 days of kickoff. For most clients, first replies show up within 2–3 weeks of launch.",
  },
  {
    q: 'Will emails look like they come from me or from Altovya?',
    a: "They come from you. We set up and manage the sending infrastructure so the emails arrive from your agency's domain and look like they came from your team. Your prospect never sees our name.",
  },
  {
    q: "What if a facility I want excluded is on the list?",
    a: "That's handled at kickoff. You'll review and approve the full facility list before outreach begins, and you can exclude any facility for any reason. We'll confirm exclusions are reflected in the final targeting.",
  },
  {
    q: 'How do you handle replies from facility contacts?',
    a: "Every inbound reply is forwarded to you immediately — you see the full thread. We handle the qualification logic so you're not reading 'not interested' responses. When a contact shows intent, we brief you so you're prepared for the conversation.",
  },
  {
    q: "What if a facility says they're not interested?",
    a: "They're marked as such and removed from the sequence. We don't argue, re-pitch, or cycle back. You're left with a clean list of interested, qualified facilities — not a long tail of burned contacts.",
  },
  {
    q: 'Do I need any technical setup on my end?',
    a: "Minimal. We'll need you to confirm your agency's sending domain and add a DNS record. We handle everything from there. If you're unsure what any of that means, we'll walk you through it in minutes.",
  },
  {
    q: 'What happens after the initial 3-meeting guarantee is met?',
    a: "If we've delivered 3 meetings within 60 days, the guarantee is satisfied and you're in a position to evaluate whether the meetings converted into actual facility relationships. We don't lock clients into ongoing retainers. You can continue on a per-meeting or monthly basis if you're seeing results.",
  },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
  }, [])

  const openCalendly = () => {
    if ((window as any).Calendly) {
      ;(window as any).Calendly.initPopupWidget({ url: CALENDLY_URL })
    }
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>Altovya — Facility Outreach for Nursing Staffing Agencies</title>
        <meta name="description" content="Stop waiting for referrals. Start winning facilities on your terms." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Altovya',
              url: 'https://altovya.app',
              description: 'Facility outreach for nursing staffing agencies.',
              email: 'hello@altovya.app',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'US',
              },
            }),
          }}
        />
      </Head>

      {/* HEADER */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-neutral-bg/80 backdrop-blur-md border-b border-neutral-border/50'
            : 'bg-neutral-bg border-b border-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 md:px-10 flex justify-between items-center py-3" aria-label="Main navigation">
          {/* Logo */}
          <button onClick={() => scrollToSection('cta')} className="hover:opacity-80 transition shrink-0" aria-label="Altovya home">
            <Image src="/Altovya.png" alt="Altovya" width={120} height={32} priority />
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-neutral-muted hover:text-green-primary transition focus-visible:ring-2 focus-visible:ring-green-primary focus-visible:outline-none rounded-sm cursor-pointer bg-transparent border-none"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={openCalendly}
              className="bg-green-primary text-white rounded-sm px-5 py-2.5 text-sm font-medium hover:opacity-90 transition focus-visible:ring-2 focus-visible:ring-green-primary focus-visible:outline-none"
            >
              Book a Strategy Session
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 cursor-pointer bg-transparent border-none focus-visible:ring-2 focus-visible:ring-green-primary focus-visible:outline-none rounded-sm"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="block w-6 h-0.5 bg-neutral-text rounded-full" />
            <span className="block w-6 h-0.5 bg-neutral-text rounded-full" />
            <span className="block w-6 h-0.5 bg-neutral-text rounded-full" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Slide-in Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-xl transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center px-6 py-4 border-b border-neutral-border">
            <Image src="/Altovya.png" alt="Altovya" width={100} height={27} />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center cursor-pointer bg-transparent border-none text-neutral-text hover:text-green-primary transition focus-visible:ring-2 focus-visible:ring-green-primary focus-visible:outline-none rounded-sm"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col p-6 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  scrollToSection(link.href)
                  setMobileMenuOpen(false)
                }}
                className="w-full text-left text-sm text-neutral-text hover:text-green-primary hover:bg-green-light/50 transition cursor-pointer bg-transparent border-none rounded-sm px-3 py-3 min-h-[48px] focus-visible:ring-2 focus-visible:ring-green-primary focus-visible:outline-none"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                openCalendly()
              }}
              className="w-full bg-green-primary text-white rounded-sm px-5 py-3.5 text-sm font-medium hover:opacity-90 transition mt-4 min-h-[48px] focus-visible:ring-2 focus-visible:ring-green-primary focus-visible:outline-none"
            >
              Book a Strategy Session
            </button>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-10 py-20">
        <p className="text-xs uppercase tracking-widest text-green-primary font-semibold mb-6">
          Outbound for Nursing Staffing Agencies
        </p>
        <h1 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-neutral-text mb-6">
          Stop waiting for referrals.{' '}
          <em className="not-italic text-green-primary">Start winning facilities</em>{' '}
          on your terms.
        </h1>
        <p className="text-lg text-neutral-muted max-w-xl leading-relaxed mb-10">
          We build the outreach system that gets your agency in front of facility decision-makers.
          Research, personalisation, delivery, and qualification — handled end to end, with a
          guarantee that puts our fee at risk.
        </p>
        <div className="flex flex-wrap gap-4 mb-10">
          <button
            onClick={openCalendly}
            className="bg-green-primary text-white rounded-sm px-6 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Book a Strategy Session
          </button>
          <button
            onClick={() => scrollToSection('how')}
            className="border border-green-primary text-green-primary bg-transparent rounded-sm px-6 py-3 text-sm font-medium hover:bg-green-light transition"
          >
            See how it works
          </button>
        </div>
        <div className="flex flex-wrap gap-8">
          {proofItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-primary flex-shrink-0" />
              <span className="text-xs text-neutral-muted">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-neutral-border max-w-4xl mx-auto" />

      {/* PAIN SECTION */}
      <section id="why" className="max-w-4xl mx-auto px-10 py-20">
        <p className="text-xs uppercase tracking-widest text-green-primary font-semibold mb-4">
          The Problem
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-neutral-text mb-4 leading-snug">
          If any of this sounds familiar, your growth is capped.
        </h2>
        <p className="text-neutral-muted leading-relaxed mb-10 max-w-2xl">
          Most nursing staffing agencies hit a referral ceiling within the first few years.
          The strategies that got you here won't get you further.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {painCards.map((card, i) => (
            <div key={i} className="bg-white border border-neutral-border rounded-md p-6">
              <h3 className="font-semibold text-neutral-text text-sm mb-2">{card.title}</h3>
              <p className="text-sm text-neutral-muted leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-neutral-border max-w-4xl mx-auto" />

      {/* PROCESS SECTION */}
      <section id="how" className="max-w-4xl mx-auto px-10 py-20">
        <p className="text-xs uppercase tracking-widest text-green-primary font-semibold mb-4">
          How It Works
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-neutral-text mb-4 leading-snug">
          Six steps to a qualified facility meeting.
        </h2>
        <p className="text-neutral-muted leading-relaxed mb-14 max-w-2xl">
          No black-box agency process. You know exactly what's happening at every stage,
          and you approve the messaging before anything goes out.
        </p>

        <div className="border-t border-neutral-border">
          {processSteps.map((step, i) => (
            <div
              key={i}
              className={`grid grid-cols-[3rem_1fr] gap-5 py-7 ${i < processSteps.length - 1 ? 'border-b border-neutral-border' : ''}`}
            >
              <div className="font-serif text-2xl text-green-muted leading-none pt-0.5">
                {step.num}
              </div>
              <div>
                <h3 className="font-semibold text-sm text-neutral-text mb-1">{step.title}</h3>
                <p className="text-sm text-neutral-muted leading-relaxed">{step.body}</p>
                <span className="inline-block mt-3 text-xs bg-green-light text-green-primary px-2 py-1 rounded-sm font-medium">
                  {step.output}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-neutral-border max-w-4xl mx-auto" />

      {/* SAMPLE SECTION */}
      <section id="sample" className="max-w-4xl mx-auto px-10 py-20">
        <p className="text-xs uppercase tracking-widest text-green-primary font-semibold mb-4">
          Sample Outreach
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-neutral-text mb-4 leading-snug">
          What your first email looks like.
        </h2>
        <p className="text-neutral-muted leading-relaxed mb-10 max-w-2xl">
          Personalised, researched, and sent from your agency's domain. Every message
          is reviewed by you before it goes out.
        </p>

        <div className="bg-white border border-neutral-border rounded-md p-6">
          <div className="text-xs text-neutral-muted border-b pb-3 mb-4 space-y-1">
            <p><span className="font-medium">To:</span> contact@[facilityname].com</p>
            <p><span className="font-medium">Subject:</span> Quick question about your staffing needs</p>
          </div>
          <div className="text-sm text-neutral-muted leading-relaxed space-y-4">
            <p>Hi Sarah,</p>
            <p>
              I noticed your facility has been growing its Medicare census — congrats.
              When census rises, per-diem gaps become a real pressure point.
            </p>
            <p>
              We partner with nursing staffing agencies to open doors with facilities
              like yours, so we understand what DONs at SNFs are facing right now.
            </p>
            <p>
              Would a 20-minute chat make sense to see if there's a fit? No pressure —
              just exploring whether a conversation is worth having.
            </p>
            <p>Best,<br />James</p>
          </div>
        </div>
      </section>

      <hr className="border-neutral-border max-w-4xl mx-auto" />

      {/* GUARANTEE SECTION */}
      <section id="guarantee" className="bg-green-dark">
        <div className="max-w-4xl mx-auto px-10 py-16">
          <p className="text-green-label text-xs uppercase tracking-widest font-semibold mb-4">
            Our Guarantee
          </p>
          <h2 className="font-serif text-white text-3xl md:text-4xl leading-snug mb-5">
            3 confirmed meetings in 60 days.<br />
            Or your setup fee back. No negotiation.
          </h2>
          <p className="text-green-body leading-relaxed mb-10 max-w-2xl">
            We've structured a simple arrangement: you pay a $500 setup fee to get the campaign built.
            We guarantee 3 qualified meetings within 60 days. If we miss, you get the setup fee back
            and the first meeting on us anyway. If we hit, you have 3 new facility relationships
            to evaluate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: 'Setup fee: $500',
                body: "Fully refunded if we don't deliver 3 qualified meetings within 60 days of outreach launch.",
              },
              {
                title: 'Performance: $300/meeting',
                body: "You pay only for confirmed, qualified meetings — 30 minutes with a verified decision-maker.",
              },
              {
                title: 'Day 60 hard stop',
                body: "If we miss the 3-meeting target by day 60, the arrangement ends. No chasing, no extensions, no excuses.",
              },
              {
                title: 'First meeting free',
                body: "On us. Even if we fall short of 3 meetings, we deliver at least one at no additional charge so you're not left with nothing.",
              },
            ].map((card, i) => (
              <div key={i} className="bg-green-card border border-green-border rounded-md p-5">
                <h4 className="text-green-cardtitle text-sm font-semibold mb-1">{card.title}</h4>
                <p className="text-green-cardbody text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-neutral-border max-w-4xl mx-auto" />

      {/* FAQ SECTION */}
      <section id="faq" className="max-w-4xl mx-auto px-10 py-20">
        <p className="text-xs uppercase tracking-widest text-green-primary font-semibold mb-4">
          FAQ
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-neutral-text mb-4 leading-snug">
          Straight answers.
        </h2>
        <p className="text-neutral-muted leading-relaxed mb-12 max-w-2xl">
          You've probably been burned before. We don't blame you for being cautious.
          These are the questions we get asked most in discovery conversations.
        </p>

        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-neutral-border">
              <button
                onClick={() => toggleFaq(i)}
                className="w-full text-left flex justify-between items-center py-5 text-sm font-medium text-neutral-text hover:text-green-primary cursor-pointer bg-transparent border-none"
              >
                {faq.q}
                <span
                  className={`text-neutral-muted ml-4 text-lg leading-none transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}
                >
                  +
                </span>
              </button>
              {openFaq === i && (
                <p className="text-sm text-neutral-muted leading-relaxed pb-5 max-w-3xl">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="cta" className="max-w-4xl mx-auto px-10 pb-20">
        <div className="bg-white border border-neutral-border rounded-lg p-12 text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-green-primary font-semibold mb-4">
            Ready to start?
          </p>
          <h2 className="font-serif text-3xl text-neutral-text mb-4">
            Let's build your outreach campaign.
          </h2>
          <p className="text-neutral-muted leading-relaxed mb-8">
            It takes 30 minutes. We'll talk about your service area, your target
            facilities, and how to structure the campaign so the first meeting is booked
            within 60 days of launch — or your setup fee back.
          </p>
          <button
            onClick={openCalendly}
            className="bg-green-primary text-white rounded-sm px-9 py-4 text-base font-medium hover:opacity-90 transition"
          >
            Book a Strategy Session
          </button>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {proofItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-primary flex-shrink-0" />
                <span className="text-xs text-neutral-muted">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-dark" role="contentinfo">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Column 1 — Brand */}
            <div className="flex flex-col gap-4">
              <Image src="/Altovya.png" alt="Altovya" width={120} height={32} className="brightness-0 invert" />
              <p className="text-green-body text-sm leading-relaxed">
                Helping nursing staffing agencies build predictable facility acquisition systems.
              </p>
              <div className="flex items-center gap-3 mt-1">
                {/* LinkedIn */}
                <a href="#" aria-label="LinkedIn" className="text-green-label hover:text-white transition focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                {/* X/Twitter */}
                <a href="#" aria-label="X (Twitter)" className="text-green-label hover:text-white transition focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-sm">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2 — Navigation */}
            <div>
              <h4 className="text-green-cardtitle text-sm font-semibold mb-4">Navigation</h4>
              <ul className="flex flex-col gap-3">
                {footerNavLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-green-body text-sm hover:text-white transition cursor-pointer bg-transparent border-none p-0 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Info */}
            <div>
              <h4 className="text-green-cardtitle text-sm font-semibold mb-4">Company</h4>
              <ul className="flex flex-col gap-3">
                {footerInfoLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-green-body text-sm hover:text-white transition focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Contact */}
            <div>
              <h4 className="text-green-cardtitle text-sm font-semibold mb-4">Contact</h4>
              <ul className="flex flex-col gap-3 text-green-body text-sm">
                <li>
                  <a href="mailto:hello@altovya.app" className="hover:text-white transition focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-sm">
                    hello@altovya.app
                  </a>
                </li>
                <li>United States</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-border">
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-green-body">
            <span>© {new Date().getFullYear()} Altovya. All rights reserved.</span>
            <span>Built for predictable facility growth.</span>
          </div>
        </div>
      </footer>
    </>
  )
}