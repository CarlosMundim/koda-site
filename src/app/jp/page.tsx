import CTA from '@/components/koda/CTA'
import DiagramBlock from '@/components/koda/DiagramBlock'
import Hero from '@/components/koda/Hero'
import ProductTiles from '@/components/koda/ProductTiles'
import TrustStrip from '@/components/koda/TrustStrip'

const products = [
  {
    name: 'KODA Cultural',
    tagline: '異文化の現場で伝達と引き継ぎを支援するパッケージ。',
    href: '/jp/products/cultural',
    logo: '/assets/koda/logos/web/koda-cultural-jp.png',
  },
  {
    name: 'KODA MedComm',
    tagline: '医療現場の説明と合意形成を支えるパッケージ。',
    href: '/jp/products/medcomm',
    logo: '/assets/koda/logos/web/koda-medcomm-jp.png',
  },
  {
    name: 'KODA Assist',
    tagline: '日常業務の準備と確認を静かに支援するパッケージ。',
    href: '/jp/products/assist',
    logo: '/assets/koda/logos/web/koda-assist-jp.png',
  },
  {
    name: 'KODA DocIntel',
    tagline: '文書運用と継続管理を支援するパッケージ。',
    href: '/jp/products/docintel',
    logo: '/assets/koda/logos/web/koda-docintel-jp.png',
  },
  {
    name: 'KODA Training',
    tagline: 'OJTの記録と継続を支援するパッケージ。',
    href: '/jp/products/training',
    logo: '/assets/koda/logos/web/koda-training-jp.png',
  },
  {
    name: 'KODA Industry',
    tagline: '現場知識の引き継ぎを支援するパッケージ。',
    href: '/jp/products/industry',
    logo: '/assets/koda/logos/web/koda-industry-jp.png',
  },
]

const solutionItems = [
  { title: 'KODA Predict', desc: '予兆検知と状態監視のエンジン。', href: '/jp/solutions' },
  { title: 'KODA Optimise', desc: '品質を守る最適提案エンジン。', href: '/jp/solutions' },
  { title: 'KODA Vision', desc: '検査支援の視覚推論エンジン。', href: '/jp/solutions' },
  { title: 'KODA Twin', desc: '計画検証のシミュレーションエンジン。', href: '/jp/solutions' },
  { title: 'White Label', desc: '制御された導入のための提供モデル。', href: '/jp/solutions' },
]

const trustItems = [
  {
    icon: 'user' as const,
    title: '判断は現場',
    description: '責任は人に残し、KODAは支援と記録のみ行います。',
  },
  {
    icon: 'audit' as const,
    title: '監査と権限',
    description: '記録とアクセス制御を前提に設計しています。',
  },
  {
    icon: 'stable' as const,
    title: '安定した導入',
    description: '段階導入とロールバックを常に用意します。',
  },
]

const limits = [
  '自動判断は行いません。最終判断は人が行います。',
  '成果の数値保証は行いません。共同検証で確認します。',
  '人事評価・採点には使用しません。',
  'データの扱いは合意したガバナンスに従います。',
]

export default function JPHomePage() {
  return (
    <>
      {/* 1) Hero */}
      <Hero
        eyebrow="KODA by Solunai"
        title="統制された運用と説明責任のための産業AI"
        subtitle="プロダクトは導入可能なパッケージ。内部エンジンはガバナンス下に保持。サービスは人による支援のみ。判断は現場が行います。"
        qualifier="意思決定は管理者と技術者が行い、KODAは支援と記録で寄り添います。"
        cta={{ label: '技術的な説明を依頼', href: '/jp/contact' }}
        secondaryCta={{ label: 'KODAプロダクトを見る', href: '/jp/products' }}
        imageSrc="/assets/koda/hero/products/koda-home-hero.png"
        imageAlt="KODA industrial operations"
        variant="fullscreen"
      />

      {/* 2) What KODA is / is not */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:px-8 md:flex-row">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">KODAが提供すること</h2>
            <ul className="space-y-3 text-sm text-neutral-700 leading-relaxed">
              <li>統制された導入のためのパッケージプロダクト。</li>
              <li>内部に保持されるガバナンス下のエンジン。</li>
              <li>監査と権限管理を前提にした運用フロー。</li>
              <li>産業・公共分野の要求を意識した設計。</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">KODAが行わないこと</h2>
            <ul className="space-y-3 text-sm text-neutral-700 leading-relaxed">
              <li>自律制御や人を外した自動化。</li>
              <li>監督者・検査者・医療従事者の代替。</li>
              <li>サービスをソフトウェアとして装うこと。</li>
              <li>根拠のない効果保証や過度な表現。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3) Architecture overview */}
      <DiagramBlock
        title="アーキテクチャ概要"
        description="プロダクトは内部エンジンとガバナンスの上に構成。段階導入・版管理・監査性を標準とします。"
        imageSrc="/assets/koda/infographics/svg/koda-architecture-overview.svg"
        imageAlt="KODA layered architecture"
        caption="プロダクト（導入可能） / 内部エンジン（内部） / ガバナンス（人・規程・制御）"
        variant="wide"
      />
      <section className="bg-white py-6">
        <div className="mx-auto max-w-6xl px-6 md:px-8 text-sm text-neutral-700 leading-relaxed">
          「KODAプロダクトは内部のソリューションエンジンを基盤とし、人による支援を通じて導入運用されます。」
        </div>
      </section>

      {/* 4) Responsibility & autonomy model */}
      <DiagramBlock
        title="責任と自律度のモデル"
        description="基本は助言モード。自律度を上げる場合は、承認・安全策・現場ガバナンスを先に定義します。"
        imageSrc="/assets/koda/infographics/svg/koda-responsibility-model.svg"
        imageAlt="Responsibility model"
      />

      {/* 5) Reliability & failure handling */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">信頼性と障害時の扱い</h2>
          <p className="text-sm text-neutral-700 leading-relaxed mb-6">
            閾値、フォールバック、ロールバックを事前に合意します。通知は説明可能な形で提供します。
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {[{ title: '閾値と判断ゲート', desc: '基準とレビューを満たさない限り助言モードを維持。' }, { title: 'フォールバック', desc: 'データ変動や品質低下時は安全側の動作に戻します。' }, { title: 'ロールバック', desc: '版管理と事前合意した手順で、元に戻せる状態を確保。' }].map((item) => (
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
        title="KODAプロダクト"
        subtitle="内部エンジンをパッケージ化した導入可能なアプリケーション。エンジンの範囲は変えません。"
        locale="jp"
      />

      {/* 7) KODA Solution Engines */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">KODA内部エンジン（Solutions）</h2>
          <p className="text-sm text-neutral-700 leading-relaxed mb-6">
            プロダクトを支える内部エンジン。単体販売はしません。判断は常に人が行います。
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
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">サービス（人による提供）</h2>
          <p className="text-sm text-neutral-700 leading-relaxed mb-4">
            サービスは人による支援です。アドバイザリ、導入支援、運用調整をソルナイのチームが担当します。
          </p>
          <a href="https://www.solunai.co.jp/en/services" className="text-sm font-semibold text-koda-red hover:underline">
            ソルナイのサービスを見る
          </a>
        </div>
      </section>

      {/* 9) KODAの前提と制約 */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">KODAの前提と制約</h2>
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
        title="技術的な説明と資料提供を依頼する"
        description="アーキテクチャ、ガバナンス、導入計画について技術担当と確認できます。営業的な圧力はありません。"
        primaryAction={{ label: '説明を依頼', href: '/jp/contact' }}
        secondaryAction={{ label: 'KODAプロダクトを見る', href: '/jp/products' }}
        variant="dark"
      />
    </>
  )
}
