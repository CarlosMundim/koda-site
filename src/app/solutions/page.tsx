import Hero from '@/components/koda/Hero'
import ScopeTable from '@/components/koda/ScopeTable'
import CTA from '@/components/koda/CTA'

const scopeRows = [
  {
    category: 'Predictive Maintenance',
    products: 'KODA Predict (packaged)',
    solutions: 'Anomaly detection engine',
    services: 'Model training, tuning',
  },
  {
    category: 'Process Optimization',
    products: 'KODA Optimise (packaged)',
    solutions: 'Real-time optimization engine',
    services: 'Process analysis, implementation',
  },
  {
    category: 'Visual Inspection',
    products: 'KODA Vision (packaged)',
    solutions: 'Computer vision models',
    services: 'Custom model training',
  },
  {
    category: 'Digital Simulation',
    products: 'KODA Twin (packaged)',
    solutions: 'Simulation engine',
    services: 'Model building, validation',
  },
]

export default function SolutionsPage() {
  return (
    <>
      <Hero
        title="KODA Solutions"
        subtitle="The internal engines that power KODA products. Solutions are not sold directly — they are the technology foundation deployed through our packaged products."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Understanding the Triad</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            KODA maintains strict separation between <strong>Products</strong>, <strong>Solutions</strong>, and <strong>Services</strong>:
          </p>
          <ul className="space-y-3 text-neutral-600 mb-8">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-koda-red mt-2 shrink-0"></span>
              <span><strong>Products</strong> = Safe packages you can deploy</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0"></span>
              <span><strong>Solutions</strong> = Internal AI engines (not sold separately)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 shrink-0"></span>
              <span><strong>Services</strong> = Human expertise and support</span>
            </li>
          </ul>
          <p className="text-neutral-600 leading-relaxed">
            This separation ensures you always know what you&apos;re buying. Products are tested, versioned packages. Solutions are the technology inside. Services are how we help you succeed.
          </p>
        </div>
      </section>

      <ScopeTable
        rows={scopeRows}
        title="Products, Solutions, Services Mapping"
        subtitle="How our technology stack maps to what you receive"
      />

      <CTA
        title="Questions about our technology?"
        description="Our engineering team can explain how KODA solutions power our products."
        primaryAction={{
          label: 'Contact Engineering',
          href: '/contact',
        }}
        variant="dark"
      />
    </>
  )
}
