const FLOW_ITEMS = [
  { title: 'Specification', subtitle: 'SDD artifacts' },
  { title: 'Agents', subtitle: 'Agentic execution' },
  { title: 'Validation', subtitle: 'Guardrails & tests' },
  { title: 'Delivery', subtitle: 'Release with confidence' },
];

export default function ResearchFlowDiagram() {
  return (
    <section
      aria-label='Research flow diagram'
      className='w-full rounded-2xl border border-white/10 bg-black/30 p-4 sm:p-5'
    >
      <h4 className='text-lg font-semibold text-white mb-4'>Agentic Delivery Model</h4>
      <ol className='flex flex-col md:flex-row md:items-stretch md:justify-between gap-3 md:gap-2'>
        {FLOW_ITEMS.map((item, index) => (
          <li key={item.title} className='flex flex-col md:flex-row md:items-center md:flex-1'>
            <article className='rounded-xl border border-emerald-500/35 bg-emerald-500/10 px-4 py-3 text-left md:min-h-[84px] md:flex-1'>
              <h5 className='text-sm font-semibold text-white leading-tight'>{item.title}</h5>
              <p className='mt-1 text-xs text-zinc-200 leading-relaxed'>{item.subtitle}</p>
            </article>

            {index < FLOW_ITEMS.length - 1 && (
              <span
                aria-hidden='true'
                className='text-emerald-400 text-base md:text-lg font-mono leading-none self-center py-1 md:py-0 md:px-2'
              >
                <span className='md:hidden'>↓</span>
                <span className='hidden md:inline'>→</span>
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
