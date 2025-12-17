import Hero from '@/components/koda/Hero'
import TrustStrip from '@/components/koda/TrustStrip'
import ProductTiles from '@/components/koda/ProductTiles'
import DiagramBlock from '@/components/koda/DiagramBlock'
import CTA from '@/components/koda/CTA'

const products = [
  {
    name: 'KODA Cultural',
    tagline: '異文化コミュニケーションAI。グローバル運用における言語・文化の壁を解消。',
    href: '/jp/products/cultural',
    logo: '/assets/koda/logos/web/koda-cultural-jp.png',
  },
  {
    name: 'KODA MedComm',
    tagline: '医療コミュニケーション支援。正確でコンプライアント準拠の医療文書作成。',
    href: '/jp/products/medcomm',
    logo: '/assets/koda/logos/web/koda-medcomm-jp.png',
  },
  {
    name: 'KODA Assist',
    tagline: '業務アシスタントAI。リアルタイムガイダンスで現場作業者を支援。',
    href: '/jp/products/assist',
    logo: '/assets/koda/logos/web/koda-assist-jp.png',
  },
  {
    name: 'KODA DocIntel',
    tagline: '文書インテリジェンス。技術文書からインサイトを抽出。',
    href: '/jp/products/docintel',
    logo: '/assets/koda/logos/web/koda-docintel-jp.png',
  },
  {
    name: 'KODA Training',
    tagline: 'トレーニング・シミュレーションAI。適応学習で人材育成を加速。',
    href: '/jp/products/training',
    logo: '/assets/koda/logos/web/koda-training-jp.png',
  },
  {
    name: 'KODA Industry',
    tagline: '産業プロセスAI。ドメイン特化インテリジェンスで製造を最適化。',
    href: '/jp/products/industry',
    logo: '/assets/koda/logos/web/koda-industry-jp.png',
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
        imageSrc="/assets/koda/hero/products/koda-home-hero.png"
        imageAlt="KODA 産業AI"
        variant="dark"
      />

      {/* Triad Diagram */}
      <DiagramBlock
        title="KODAトライアド"
        description="購入するもの、それを動かすもの、成功を支援するもの。明確な分離。"
        imageSrc="/assets/koda/infographics/koda-triad.png"
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
