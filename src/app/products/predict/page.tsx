import Hero from '@/components/koda/Hero'
import TrustStrip from '@/components/koda/TrustStrip'
import CTA from '@/components/koda/CTA'

const features = [
  {
    icon: 'stable' as const,
    title: 'Early Warning System',
    description: 'Detect equipment anomalies before failure. Reduce unplanned downtime by up to 70%.',
  },
  {
    icon: 'audit' as const,
    title: 'Maintenance Scheduling',
    description: 'AI-optimized maintenance windows. Replace parts at the right time, not too early or late.',
  },
  {
    icon: 'shield' as const,
    title: 'Asset Life Extension',
    description: 'Extend equipment lifespan through optimized operation parameters.',
  },
]

export default function PredictPage() {
  return (
    <>
      <Hero
        title="KODA Predict"
        subtitle="Predictive maintenance for industrial equipment. Monitor, analyze, and prevent failures before they happen."
        cta={{
          label: 'Request Demo',
          href: '/contact',
        }}
      />

      <TrustStrip items={features} />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">How It Works</h2>
          <div className="prose prose-neutral max-w-none">
            <p className="text-neutral-600 leading-relaxed mb-4">
              KODA Predict connects to your existing sensor infrastructure and applies machine learning models trained on industrial equipment data. The system continuously monitors vibration, temperature, pressure, and other parameters to detect patterns that indicate developing problems.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              When anomalies are detected, operators receive actionable alerts with recommended interventions. All predictions are logged for audit purposes, and the system learns from outcomes to improve accuracy over time.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Deployment options include on-premise installation for data-sensitive environments or cloud-hosted for rapid deployment.
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="See KODA Predict in action"
        description="Schedule a technical demonstration with your specific equipment data."
        primaryAction={{
          label: 'Request Demo',
          href: '/contact',
        }}
        variant="dark"
      />
    </>
  )
}
