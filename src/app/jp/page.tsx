import Hero from '@/components/koda/Hero'
import TrustStrip from '@/components/koda/TrustStrip'
import ProductTiles from '@/components/koda/ProductTiles'
import DiagramBlock from '@/components/koda/DiagramBlock'
import CTA from '@/components/koda/CTA'

const products = [
  {
    name: 'KODA Predict',
    tagline: '設備の予知保全。ダウンタイム削減、資産寿命延長。',
    href: '/jp/products/predict',
  },
  {
    name: 'KODA Optimise',
    tagline: 'リアルタイム分析によるプロセス最適化。歩留まり向上、廃棄削減。',
    href: '/jp/products/optimise',
  },
  {
    name: 'KODA Vision',
    tagline: '外観検査と品質管理。人が見逃す欠陥を検出。',
    href: '/jp/products/vision',
  },
  {
    name: 'KODA Twin',
    tagline: '製造向けデジタルツインシミュレーション。導入前に変更をテスト。',
    href: '/jp/products/twin',
  },
  {
    name: 'ホワイトラベル',
    tagline: '貴社ブランドでKODA技術を展開。エンタープライズライセンス提供。',
    href: '/jp/products/white-label',
  },
]

const trustItems = [
  {
    icon: 'user' as const,
    title: 'オペレーター・イン・ザ・ループ',
    description: '人間のオペレーターが制御を維持。AIは意思決定を支援し、決して上書きしません。',
  },
  {
    icon: 'audit' as const,
    title: '監査・アクセス制御',
    description: '完全な監査証跡。ロールベースアクセス。エンタープライズグレードのセキュリティ。',
  },
  {
    icon: 'stable' as const,
    title: '安定デプロイ',
    description: 'テスト済み、バージョン管理されたリリース。予期せぬ更新なし。予測可能な運用。',
  },
]

export default function JPHomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="KODA — 統制運用を前提としたAI製品"
        subtitle="製造・産業向けエンタープライズAIツール。日本品質基準に準拠。オペレーター・イン・ザ・ループ設計。"
        cta={{
          label: '技術ブリーフィングを依頼',
          href: '/jp/contact',
        }}
        variant="dark"
      />

      {/* Triad Diagram */}
      <DiagramBlock
        title="KODAトライアド"
        description="購入するもの、それを動かすもの、成功を支援するもの。明確な分離。"
        imageSrc="/assets/koda/infographics/svg/koda-triad.svg"
        imageAlt="KODAトライアド: プロダクト、ソリューション、サービス"
        caption="プロダクト = 安全なパッケージ | ソリューション = 内部エンジン | サービス = 人的支援"
        variant="wide"
      />

      {/* Product Tiles */}
      <ProductTiles
        products={products}
        title="プロダクト"
        subtitle="導入準備完了のパッケージAIソリューション。各製品はテスト済み、文書化済み、サポート付き。"
      />

      {/* Trust Strip */}
      <TrustStrip
        items={trustItems}
        title="KODAが安全な理由"
      />

      {/* Adoption Timeline */}
      <DiagramBlock
        title="導入パス"
        description="パイロットから本番運用まで、段階的に進行。"
        imageSrc="/assets/koda/infographics/svg/koda-adoption-timeline.svg"
        imageAlt="KODA導入タイムライン: パイロット → 拡大 → 運用"
      />

      {/* CTA */}
      <CTA
        title="貴社の運用にKODAを評価しませんか？"
        description="エンジニアリングチームとの技術ブリーフィングをスケジュール。営業圧力なし、事実のみ。"
        primaryAction={{
          label: 'ブリーフィングを依頼',
          href: '/jp/contact',
        }}
        secondaryAction={{
          label: 'プロダクトを見る',
          href: '/jp/products',
        }}
        variant="dark"
      />
    </>
  )
}
