export default function NextHome() {
  const title = process.env.NEXT_PUBLIC_APP_TITLE ?? 'Next.js Page';
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ?? 'https://api.example.com/next';

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 py-16 text-slate-100">
      <div className="w-full max-w-3xl space-y-6 rounded-3xl border border-white/5 bg-slate-900/70 p-10 shadow-2xl shadow-purple-900/40 backdrop-blur">
        <p className="text-xs uppercase tracking-[0.35em] text-indigo-300">
          Next.js endpoint
        </p>
        <h1 className="text-4xl font-semibold text-white">{title}</h1>
        <p className="text-slate-300">
          This page is rendered through Next.js and reads the environment values
          documented at{' '}
          <a
            className="text-indigo-300 underline-offset-4 hover:underline"
            href="https://nextjs.org/docs/basic-features/environment-variables"
            target="_blank"
            rel="noreferrer"
          >
            nextjs.org/docs/basic-features/environment-variables
          </a>
          .
        </p>
        <div className="rounded-2xl bg-black/40 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            NEXT_PUBLIC_API_URL
          </p>
          <p className="mt-2 font-mono text-lg text-indigo-100">{apiUrl}</p>
        </div>
        <p className="text-sm text-slate-400">
          Run <code className="rounded bg-black/50 px-2 py-1">npm run dev:next</code> to see
          this page locally while the Vite client continues to use the same
          Tailwind and dotenv pipeline.
        </p>
      </div>
    </main>
  );
}
