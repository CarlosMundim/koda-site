import Hero from '@/components/koda/Hero'
import TrustStrip from '@/components/koda/TrustStrip'
import CTA from '@/components/koda/CTA'

const services = [
  {
    icon: 'user' as const,
    title: 'Technical Assessment',
    description: 'On-site evaluation of your operations. Identify opportunities for AI implementation. No obligation.',
  },
  {
    icon: 'audit' as const,
    title: 'Implementation Support',
    description: 'Engineering assistance during deployment. Integration with existing systems. Training for your team.',
  },
  {
    icon: 'stable' as const,
    title: 'Ongoing Operations',
    description: 'Model monitoring and retraining. Performance optimization. Technical support with SLAs.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="KODA Services"
        subtitle="Human expertise to ensure successful deployment and operation. Services complement our products — they are how we help you succeed."
      />

      <TrustStrip items={services} title="Service Categories" />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Engagement Model</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            KODA services are delivered by engineers, not salespeople. Every engagement starts with a technical assessment to ensure our products are appropriate for your use case.
          </p>
          <p className="text-neutral-600 leading-relaxed mb-8">
            We believe in honest evaluation. If KODA products are not the right fit, we will tell you. Our reputation depends on successful deployments, not sales volume.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mb-4">Service Phases</h3>
          <div className="space-y-6">
            <div className="border-l-2 border-koda-red pl-4">
              <h4 className="font-semibold text-neutral-900">1. Assessment (1-2 weeks)</h4>
              <p className="text-sm text-neutral-600">Evaluate current operations, identify AI opportunities, determine fit</p>
            </div>
            <div className="border-l-2 border-neutral-300 pl-4">
              <h4 className="font-semibold text-neutral-900">2. Pilot (4-8 weeks)</h4>
              <p className="text-sm text-neutral-600">Deploy product in controlled environment, validate performance, train operators</p>
            </div>
            <div className="border-l-2 border-neutral-300 pl-4">
              <h4 className="font-semibold text-neutral-900">3. Expansion (ongoing)</h4>
              <p className="text-sm text-neutral-600">Scale deployment, optimize models, provide ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Start with an assessment"
        description="No obligation technical evaluation of your operations."
        primaryAction={{
          label: 'Request Assessment',
          href: '/contact',
        }}
        variant="dark"
      />
    </>
  )
}
