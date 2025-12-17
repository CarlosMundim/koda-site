import Hero from '@/components/koda/Hero'
import TrustStrip from '@/components/koda/TrustStrip'
import ProductTiles from '@/components/koda/ProductTiles'
import DiagramBlock from '@/components/koda/DiagramBlock'
import CTA from '@/components/koda/CTA'

const products = [
  {
    name: 'KODA Cultural',
    tagline: 'Cross-cultural communication AI. Bridge language and cultural gaps in global operations.',
    href: '/products/cultural',
    logo: '/assets/koda/logos/web/koda-cultural-en.png',
  },
  {
    name: 'KODA MedComm',
    tagline: 'Medical communication assistant. Accurate, compliant healthcare documentation.',
    href: '/products/medcomm',
    logo: '/assets/koda/logos/web/koda-medcomm-en.png',
  },
  {
    name: 'KODA Assist',
    tagline: 'Operational assistant AI. Support frontline workers with real-time guidance.',
    href: '/products/assist',
    logo: '/assets/koda/logos/web/koda-assist-en.png',
  },
  {
    name: 'KODA DocIntel',
    tagline: 'Document intelligence platform. Extract insights from technical documentation.',
    href: '/products/docintel',
    logo: '/assets/koda/logos/web/koda-docintel-en.png',
  },
  {
    name: 'KODA Training',
    tagline: 'Training and simulation AI. Accelerate workforce upskilling with adaptive learning.',
    href: '/products/training',
    logo: '/assets/koda/logos/web/koda-training-en.png',
  },
  {
    name: 'KODA Industry',
    tagline: 'Industrial process AI. Optimize manufacturing with domain-specific intelligence.',
    href: '/products/industry',
    logo: '/assets/koda/logos/web/koda-industry-en.png',
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
        imageSrc="/assets/koda/hero/products/koda-home-hero.png"
        imageAlt="KODA Industrial AI"
        variant="dark"
      />

      {/* Triad Diagram */}
      <DiagramBlock
        title="The KODA Triad"
        description="Clear separation between what you buy, what powers it, and how we help you succeed."
        imageSrc="/assets/koda/infographics/koda-triad.png"
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
