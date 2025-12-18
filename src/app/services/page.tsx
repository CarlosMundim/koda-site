import CTA from '@/components/koda/CTA'
import Hero from '@/components/koda/Hero'

const servicePoints = [
  'Human-led advisory, integration, and operational alignment.',
  'Delivered by Solunai engineers and consultants, not software.',
  'Each engagement keeps KODA Products and Solution Engines unchanged.',
]

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="KODA Services (human engagement only)"
        subtitle="Services are how Solunai supports deployment and governance. They are not products and not part of the internal engines."
        cta={{ label: 'Contact Solunai', href: 'https://www.solunai.co.jp/en/services' }}
        secondaryCta={{ label: 'View KODA Products', href: '/products' }}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Scope of Services</h2>
          <ul className="space-y-3 text-sm text-neutral-700 leading-relaxed mb-6">
            {servicePoints.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-koda-red" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-neutral-700 leading-relaxed mb-4">
            Detailed offerings (advisory, automation, simulation, sovereignty) are published on the Solunai site. This KODA subdomain only points to those human-delivered services.
          </p>
          <a href="https://www.solunai.co.jp/en/services" className="text-sm font-semibold text-koda-red hover:underline">
            View Solunai services
          </a>
        </div>
      </section>

      <CTA
        title="Speak with Solunai about services"
        description="Human-led support for deployment and governance."
        primaryAction={{ label: 'Go to Solunai services', href: 'https://www.solunai.co.jp/en/services' }}
        secondaryAction={{ label: 'Back to KODA Products', href: '/products' }}
        variant="dark"
      />
    </>
  )
}
