import Hero from '@/components/koda/Hero'
import TrustStrip from '@/components/koda/TrustStrip'
import ProductTiles from '@/components/koda/ProductTiles'
import DiagramBlock from '@/components/koda/DiagramBlock'
import CTA from '@/components/koda/CTA'

const products = [
  {
    name: 'KODA Predict',
    tagline: 'Predictive maintenance for industrial equipment. Reduce downtime, extend asset life.',
    href: '/products/predict',
  },
  {
    name: 'KODA Optimise',
    tagline: 'Process optimization through real-time analysis. Improve yield, reduce waste.',
    href: '/products/optimise',
  },
  {
    name: 'KODA Vision',
    tagline: 'Visual inspection and quality control. Detect defects humans miss.',
    href: '/products/vision',
  },
  {
    name: 'KODA Twin',
    tagline: 'Digital twin simulation for manufacturing. Test changes before deployment.',
    href: '/products/twin',
  },
  {
    name: 'White Label',
    tagline: 'Deploy KODA technology under your brand. Enterprise licensing available.',
    href: '/products/white-label',
  },
]

const trustItems = [
  {
    icon: 'user' as const,
    title: 'Operator-in-Loop',
    description: 'Human operators retain control. AI assists decisions, never overrides them.',
  },
  {
    icon: 'audit' as const,
    title: 'Audit & Access Control',
    description: 'Complete audit trails. Role-based access. Enterprise-grade security.',
  },
  {
    icon: 'stable' as const,
    title: 'Stable Deployment',
    description: 'Tested, versioned releases. No surprise updates. Predictable operation.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="KODA — Industrial AI products designed for controlled operation"
        subtitle="Enterprise-grade AI tools for manufacturing and industrial operations. Built for Japanese quality standards. Operator-in-loop by design."
        cta={{
          label: 'Request Technical Briefing',
          href: '/contact',
        }}
        variant="dark"
      />

      {/* Triad Diagram */}
      <DiagramBlock
        title="The KODA Triad"
        description="Clear separation between what you buy, what powers it, and how we help you succeed."
        imageSrc="/assets/koda/infographics/svg/koda-triad.svg"
        imageAlt="KODA Triad: Products, Solutions, Services"
        caption="Products = safe packages | Solutions = internal engines | Services = human engagement"
        variant="wide"
      />

      {/* Product Tiles */}
      <ProductTiles
        products={products}
        title="Products"
        subtitle="Packaged AI solutions ready for deployment. Each product is tested, documented, and supported."
      />

      {/* Trust Strip */}
      <TrustStrip
        items={trustItems}
        title="Why KODA is Safe"
      />

      {/* Adoption Timeline */}
      <DiagramBlock
        title="Adoption Path"
        description="From pilot to full operation in structured phases."
        imageSrc="/assets/koda/infographics/svg/koda-adoption-timeline.svg"
        imageAlt="KODA Adoption Timeline: Pilot → Expand → Operate"
      />

      {/* CTA */}
      <CTA
        title="Ready to evaluate KODA for your operation?"
        description="Schedule a technical briefing with our engineering team. No sales pressure, just facts."
        primaryAction={{
          label: 'Request Briefing',
          href: '/contact',
        }}
        secondaryAction={{
          label: 'View Products',
          href: '/products',
        }}
        variant="dark"
      />
    </>
  )
}
