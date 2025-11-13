export default function EnvironmentCard({
  title,
  description,
  badge = 'runtime',
  data = {}
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-indigo-900/30 backdrop-blur">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">
            {badge}
          </p>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
      </div>
      {description ? (
        <p className="mb-4 text-sm text-slate-300">{description}</p>
      ) : null}

      <dl className="space-y-3 text-sm text-slate-200">
        {Object.entries(data).map(([key, value]) => (
          <div
            key={key}
            className="rounded-lg bg-slate-900/30 px-4 py-3 ring-1 ring-white/5"
          >
            <dt className="text-xs uppercase tracking-[0.25em] text-slate-400">
              {key}
            </dt>
            <dd className="font-mono text-base text-indigo-100 break-all">
              {String(value)}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
