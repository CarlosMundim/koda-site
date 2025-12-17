import Hero from '@/components/koda/Hero'
import CTA from '@/components/koda/CTA'

export default function WhiteLabelPage() {
  return (
    <>
      <Hero
        title="KODA White Label"
        subtitle="Deploy KODA technology under your brand. Enterprise licensing for system integrators, OEMs, and solution providers."
        cta={{
          label: 'Discuss Licensing',
          href: '/contact',
        }}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Partnership Model</h2>
          <p className="text-neutral-600 leading-relaxed mb-8">
            KODA White Label enables technology partners to integrate our industrial AI capabilities into their own products and services. Maintain your brand identity while leveraging proven AI technology.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mb-4">What&apos;s Included</h3>
          <ul className="space-y-3 text-neutral-600">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-koda-red mt-2 shrink-0"></span>
              <span>Full API access to KODA AI engines</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-koda-red mt-2 shrink-0"></span>
              <span>Customizable UI components</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-koda-red mt-2 shrink-0"></span>
              <span>Technical integration support</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-koda-red mt-2 shrink-0"></span>
              <span>Joint go-to-market programs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-koda-red mt-2 shrink-0"></span>
              <span>Volume-based pricing models</span>
            </li>
          </ul>
        </div>
      </section>

      <CTA
        title="Become a KODA partner"
        description="Explore white label licensing options for your business."
        primaryAction={{
          label: 'Contact Partnership Team',
          href: '/contact',
        }}
        variant="dark"
      />
    </>
  )
}
