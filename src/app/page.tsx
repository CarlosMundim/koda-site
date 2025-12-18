import CTA from '@/components/koda/CTA'
import DiagramBlock from '@/components/koda/DiagramBlock'
import Hero from '@/components/koda/Hero'
import ProductTiles from '@/components/koda/ProductTiles'
import TrustStrip from '@/components/koda/TrustStrip'

const products = [
  {
    name: 'KODA Cultural',
    tagline: 'Cross-cultural operational support packaged for deployment.',
    href: '/products/cultural',
    logo: '/assets/koda/logos/web/koda-cultural-en.png',
  },
  {
    name: 'KODA MedComm',
    tagline: 'Medical communication support packaged for clinical safety.',
    href: '/products/medcomm',
    logo: '/assets/koda/logos/web/koda-medcomm-en.png',
  },
  {
    name: 'KODA Assist',
    tagline: 'Daily preparation support packaged for frontline teams.',
    href: '/products/assist',
    logo: '/assets/koda/logos/web/koda-assist-en.png',
  },
  {
    name: 'KODA DocIntel',
    tagline: 'Document continuity support packaged for governance.',
    href: '/products/docintel',
    logo: '/assets/koda/logos/web/koda-docintel-en.png',
  },
  {
    name: 'KODA Training',
    tagline: 'On-the-job training continuity packaged for operations.',
    href: '/products/training',
    logo: '/assets/koda/logos/web/koda-training-en.png',
  },
  {
    name: 'KODA Industry',
    tagline: 'Knowledge handover support packaged for shop-floor use.',
    href: '/products/industry',
    logo: '/assets/koda/logos/web/koda-industry-en.png',
  },
]

const solutionItems = [
  { title: 'KODA Predict', desc: 'Prediction and early warning engine.', href: '/solutions' },
  { title: 'KODA Optimise', desc: 'Quality-aware optimisation engine.', href: '/solutions' },
  { title: 'KODA Vision', desc: 'Visual inference engine.', href: '/solutions' },
  { title: 'KODA Twin', desc: 'Simulation and digital twin engine.', href: '/solutions' },
  { title: 'White Label', desc: 'Deployment model for controlled sites.', href: '/solutions' },
]

const trustItems = [
  {
    icon: 'user' as const,
    title: 'Operator-in-loop',
    description: 'Human responsibility stays primary. KODA assists only.',
  },
  {
    icon: 'audit' as const,
    title: 'Audit & access',
    description: 'Traceable records and role-based access are standard.',
  },
  {
    icon: 'stable' as const,
    title: 'Stable deployment',
    description: 'Staged rollout, rollback-ready, no surprise behaviour.',
  },
]

const limits = [
  'No autonomous decision-making. People approve and implement.',
  'No guarantees of quantified outcomes without joint evidence.',
  'No use for HR evaluation, scoring, or personnel decisions.',
  'Data handling follows agreed governance; no unilateral uploads.',
]

export default function HomePage() {
  return (
    <>
      {/* 1) Hero */}
      <Hero
        eyebrow="KODA by Solunai"
        title="Industrial AI designed for controlled operation and accountability"
        subtitle="Products are packaged for deployment. Solution Engines stay internal. Services are human-only. Operator-in-loop by default."
        qualifier="Decisions remain with engineers and supervisors. KODA supports, records, and preserves continuity."
        cta={{ label: 'Request technical explanation', href: '/contact' }}
        secondaryCta={{ label: 'View KODA Products', href: '/products' }}
        imageSrc="/assets/koda/hero/products/koda-home-hero.png"
        imageAlt="KODA industrial operations"
        variant="fullscreen"
      />

      {/* 2) What KODA is / is not */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:px-8 md:flex-row">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">What KODA is</h2>
            <ul className="space-y-3 text-sm text-neutral-700 leading-relaxed">
              <li>Packaged products for controlled deployment.</li>
              <li>Internal Solution Engines that stay governed.</li>
              <li>Operator-in-loop workflows with audit and access control.</li>
              <li>Designed for Japanese industrial and public-sector expectations.</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">What KODA is not</h2>
            <ul className="space-y-3 text-sm text-neutral-700 leading-relaxed">
              <li>Not an autonomous controller or hands-off automation.</li>
              <li>Not a replacement for supervisors, inspectors, or clinicians.</li>
              <li>Not a service business hidden as software.</li>
              <li>Not marketed with outcome guarantees without evidence.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3) Architecture overview */}
      <DiagramBlock
        title="Architecture overview"
        description="Products sit on top of Solution Engines and governed data flows. Deployments are staged, versioned, and auditable."
        imageSrc="/assets/koda/infographics/svg/koda-architecture-overview.svg"
        imageAlt="KODA layered architecture"
        caption="Products (deployable) / Solution Engines (internal) / Governance (people, policy, controls)"
        variant="wide"
      />
      <section className="bg-white py-6">
        <div className="mx-auto max-w-6xl px-6 md:px-8 text-sm text-neutral-700 leading-relaxed">
          KODA products are built on internal solution engines and delivered with human-led services.
        </div>
      </section>

      {/* 4) Responsibility & autonomy model */}
      <DiagramBlock
        title="Responsibility and autonomy model"
        description="Default stance is advisory. Any higher automation requires explicit approvals, safeguards, and site governance."
        imageSrc="/assets/koda/infographics/svg/koda-responsibility-model.svg"
        imageAlt="Responsibility model"
      />

      {/* 5) Reliability & failure handling */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Reliability and failure handling</h2>
          <p className="text-sm text-neutral-700 leading-relaxed mb-6">
            Confidence thresholds, fallbacks, and rollback plans are defined before deployment. Alerts stay explainable.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {[{ title: 'Confidence gates', desc: 'Signals stay advisory unless thresholds and reviews are met.' }, { title: 'Graceful fallback', desc: 'If data drifts or quality drops, systems revert to safe defaults.' }, { title: 'Rollback-ready', desc: 'Versioned releases with pre-agreed rollback steps and owners.' }].map((item) => (
              <div key={item.title} className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
                <h3 className="text-base font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <img
              src="/assets/koda/infographics/svg/koda-failure-fallback.svg"
              alt="Failure handling overview"
              className="w-full rounded-lg border border-neutral-200 bg-neutral-50 p-4"
            />
          </div>
        </div>
      </section>

      {/* 6) KODA Products */}
      <ProductTiles
        products={products}
        title="KODA Products"
        subtitle="Deployable applications that package the governed Solution Engines. No change to internal engine scope."
      />

      {/* 7) KODA Solution Engines */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">KODA Solution Engines</h2>
          <p className="text-sm text-neutral-700 leading-relaxed mb-6">
            Internal engines that power the products. Not sold standalone. Operator-in-loop remains mandatory.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {solutionItems.map((item) => (
              <a key={item.title} href={item.href} className="rounded-lg border border-neutral-200 bg-white p-4 hover:border-koda-red transition-colors">
                <h3 className="text-base font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 8) Services pointer */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Services (human delivery)</h2>
          <p className="text-sm text-neutral-700 leading-relaxed mb-4">
            Services are human engagement only. Advisory, integration, and operational alignment delivered by Solunai teams.
          </p>
          <a href="https://www.solunai.co.jp/en/services" className="text-sm font-semibold text-koda-red hover:underline">
            View Solunai services
          </a>
        </div>
      </section>

      {/* 9) Limits of KODA */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Limits of KODA</h2>
          <ul className="space-y-3 text-sm text-neutral-700 leading-relaxed">
            {limits.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-koda-red" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 10) CTA */}
      <CTA
        title="Request a technical explanation and documentation"
        description="Review architecture, governance, and deployment plans with an engineer. No sales pressure."
        primaryAction={{ label: 'Request explanation', href: '/contact' }}
        secondaryAction={{ label: 'View KODA Products', href: '/products' }}
        variant="dark"
      />
    </>
  )
}
