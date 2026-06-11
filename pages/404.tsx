import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found — Altovya</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className="min-h-screen bg-neutral-bg flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="text-6xl font-serif text-green-primary mb-4">404</p>
          <h1 className="font-serif text-2xl text-neutral-text mb-3">Page not found</h1>
          <p className="text-neutral-muted text-sm leading-relaxed mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-block bg-green-primary text-white rounded-sm px-6 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </>
  )
}
