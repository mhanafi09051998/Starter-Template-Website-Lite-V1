import EnvironmentCard from './components/EnvironmentCard.jsx';

const reactLogo = '/react.svg';
const viteLogo = '/vite.svg';

const clientEnv = {
  title: import.meta.env.VITE_APP_TITLE || 'Not set',
  apiUrl: import.meta.env.VITE_API_URL || 'Not set'
};

const serverEnv =
  typeof __APP_CONFIG__ === 'undefined'
    ? { title: 'Missing', apiUrl: 'Missing' }
    : __APP_CONFIG__;

const commands = [
  { label: 'Vite Dev Server', value: 'npm run dev' },
  { label: 'Vite Production Build', value: 'npm run build && npm run preview' },
  { label: 'Next Dev Server', value: 'npm run dev:next' },
  { label: 'Next Production Build', value: 'npm run build:next && npm run start:next' }
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 pb-16 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 pt-16">
        <header className="space-y-4 text-center">
          <div className="flex items-center justify-center gap-6">
            <img src={viteLogo} alt="Vite logo" className="h-12 w-12" />
            <span className="text-4xl text-indigo-400">&times;</span>
            <img src={reactLogo} alt="React logo" className="h-12 w-12" />
          </div>
          <p className="text-sm uppercase tracking-[0.4em] text-indigo-300">
            Vite + React + Next.js + Tailwind
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Environment-ready starter kit
          </h1>
          <p className="mx-auto max-w-2xl text-base text-slate-300">
            This workspace ships with both a Vite + React application and a
            Next.js runtime. Tailwind CSS is preconfigured and dotenv is wired
            into both build pipelines so you can keep configuration in sync.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <EnvironmentCard
            title="Vite Client Runtime"
            description="Values imported via import.meta.env at build time."
            badge="VITE"
            data={clientEnv}
          />
          <EnvironmentCard
            title="Server / Shared Runtime"
            description="Injected through dotenv + Vite define for non-public configuration."
            badge="dotenv"
            data={serverEnv}
          />
        </section>

        <section className="rounded-3xl border border-white/5 bg-gradient-to-br from-indigo-600/30 to-blue-500/20 p-8 shadow-2xl shadow-indigo-900/40">
          <h2 className="text-2xl font-semibold text-white">
            Ready-to-run commands
          </h2>
          <p className="mt-2 text-sm text-indigo-100">
            Mix and match the Vite and Next.js entry points depending on the
            workflow you are testing.
          </p>
          <dl className="mt-6 grid gap-3 text-sm font-mono text-slate-100">
            {commands.map((command) => (
              <div
                key={command.label}
                className="rounded-xl border border-white/5 bg-black/30 px-4 py-3"
              >
                <dt className="text-xs uppercase tracking-[0.3em] text-indigo-200">
                  {command.label}
                </dt>
                <dd className="text-lg text-white">{command.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </div>
  );
}
