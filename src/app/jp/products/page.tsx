import Hero from '@/components/koda/Hero'
import ProductTiles from '@/components/koda/ProductTiles'

const products = [
  { name: 'KODA Predict', tagline: '設備の予知保全', href: '/jp/products/predict' },
  { name: 'KODA Optimise', tagline: 'プロセス最適化', href: '/jp/products/optimise' },
  { name: 'KODA Vision', tagline: '外観検査・品質管理', href: '/jp/products/vision' },
  { name: 'KODA Twin', tagline: 'デジタルツイン', href: '/jp/products/twin' },
  { name: 'ホワイトラベル', tagline: 'OEMライセンス', href: '/jp/products/white-label' },
]

export default function JPProductsPage() {
  return (
    <>
      <Hero
        title="KODAプロダクト"
        subtitle="各プロダクトは特定の運用課題に対応。まずは1つから検証し、段階的に展開。"
      />
      <ProductTiles products={products} />
    </>
  )
}
