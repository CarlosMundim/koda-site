import Hero from '@/components/koda/Hero'
import CTA from '@/components/koda/CTA'

export default function TwinPage() {
  return (
    <>
      <Hero
        title="KODA Twin"
        subtitle="Digital twin simulation for manufacturing operations. Test changes in a virtual environment before deploying to production."
        cta={{
          label: 'Request Demo',
          href: '/contact',
        }}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Overview</h2>
          <p className="text-neutral-600 leading-relaxed mb-8">
            KODA Twin creates accurate digital replicas of your manufacturing processes. Use these simulations to test process changes, train operators, and optimize parameters without risking production disruption.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mb-4">Use Cases</h3>
          <ul className="space-y-3 text-neutral-600">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-koda-red mt-2 shrink-0"></span>
              <span>Process change simulation and validation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-koda-red mt-2 shrink-0"></span>
              <span>Operator training in safe virtual environment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-koda-red mt-2 shrink-0"></span>
              <span>What-if scenario analysis</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-koda-red mt-2 shrink-0"></span>
              <span>Capacity planning and bottleneck identification</span>
            </li>
          </ul>
        </div>
      </section>

      <CTA
        title="Build your digital twin"
        description="Discuss your simulation requirements with our engineering team."
        primaryAction={{
          label: 'Schedule Discussion',
          href: '/contact',
        }}
        variant="dark"
      />
    </>
  )
}
