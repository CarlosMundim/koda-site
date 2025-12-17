import Hero from '@/components/koda/Hero'
import CTA from '@/components/koda/CTA'

export default function OptimisePage() {
  return (
    <>
      <Hero
        title="KODA Optimise"
        subtitle="Process optimization through real-time analysis. Improve yield, reduce waste, and lower energy consumption."
        cta={{
          label: 'Request Demo',
          href: '/contact',
        }}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Overview</h2>
          <p className="text-neutral-600 leading-relaxed mb-8">
            KODA Optimise analyzes your production processes in real-time and identifies opportunities for improvement. The system provides actionable recommendations to operators while maintaining full human control over implementation.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mb-4">Key Capabilities</h3>
          <ul className="space-y-3 text-neutral-600">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-koda-red mt-2 shrink-0"></span>
              <span>Real-time process parameter monitoring</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-koda-red mt-2 shrink-0"></span>
              <span>Energy consumption optimization</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-koda-red mt-2 shrink-0"></span>
              <span>Yield improvement recommendations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-koda-red mt-2 shrink-0"></span>
              <span>Waste reduction analysis</span>
            </li>
          </ul>
        </div>
      </section>

      <CTA
        title="Optimize your operations"
        description="Schedule an assessment to identify optimization opportunities in your processes."
        primaryAction={{
          label: 'Request Assessment',
          href: '/contact',
        }}
        variant="dark"
      />
    </>
  )
}
