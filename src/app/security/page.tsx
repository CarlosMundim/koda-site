import Hero from '@/components/koda/Hero'
import TrustStrip from '@/components/koda/TrustStrip'
import CTA from '@/components/koda/CTA'

const securityPillars = [
  {
    icon: 'user' as const,
    title: 'Operator-in-Loop',
    description: 'All KODA products are designed with human oversight. AI provides recommendations, humans make decisions.',
  },
  {
    icon: 'audit' as const,
    title: 'Complete Audit Trail',
    description: 'Every action, prediction, and decision is logged. Full traceability for compliance and review.',
  },
  {
    icon: 'shield' as const,
    title: 'Access Control',
    description: 'Role-based permissions. Integration with enterprise identity systems. No unauthorized access.',
  },
]

export default function SecurityPage() {
  return (
    <>
      <Hero
        title="Security & Governance"
        subtitle="Industrial AI requires industrial-grade security. KODA products are built for regulated environments and enterprise governance requirements."
      />

      <TrustStrip items={securityPillars} title="Security Pillars" />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Deployment Options</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">On-Premise Deployment</h3>
              <p className="text-neutral-600 leading-relaxed">
                For organizations with strict data residency requirements. All processing occurs within your infrastructure. No data leaves your network.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Private Cloud</h3>
              <p className="text-neutral-600 leading-relaxed">
                Dedicated cloud infrastructure in your preferred region. Data isolation guaranteed. Available on AWS, Azure, and GCP.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Hybrid</h3>
              <p className="text-neutral-600 leading-relaxed">
                Sensitive processing on-premise, model updates from cloud. Balance security requirements with operational flexibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Compliance</h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            KODA products support compliance with major industrial and data protection frameworks:
          </p>
          <ul className="space-y-2 text-neutral-600">
            <li>• ISO 27001 Information Security</li>
            <li>• SOC 2 Type II</li>
            <li>• GDPR (EU data protection)</li>
            <li>• Japan APPI (個人情報保護法)</li>
            <li>• Industry-specific requirements on request</li>
          </ul>
        </div>
      </section>

      <CTA
        title="Security questions?"
        description="Request our detailed security documentation or schedule a call with our security team."
        primaryAction={{
          label: 'Request Security Docs',
          href: '/contact',
        }}
        variant="dark"
      />
    </>
  )
}
