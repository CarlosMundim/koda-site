import Hero from '@/components/koda/Hero'
import ProductTiles from '@/components/koda/ProductTiles'
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

export default function ProductsPage() {
  return (
    <>
      <Hero
        title="KODA Products"
        subtitle="Packaged AI solutions ready for industrial deployment. Each product is tested, documented, and supported with enterprise SLAs."
      />

      <ProductTiles products={products} />

      <CTA
        title="Need help choosing?"
        description="Our engineering team can assess your operation and recommend the right KODA products."
        primaryAction={{
          label: 'Request Assessment',
          href: '/contact',
        }}
      />
    </>
  )
}
