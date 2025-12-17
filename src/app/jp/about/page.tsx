import Hero from '@/components/koda/Hero'

export default function JPAboutPage() {
  return (
    <>
      <Hero
        title="KODAについて"
        subtitle="KODAはSolunaiが開発する産業AI製品ブランドです。統制運用を前提とした設計思想。"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="prose prose-neutral max-w-none">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">なぜKODAか</h2>
            <p className="text-neutral-600 mb-8">
              多くのAI製品は「自動化」を約束します。
              しかし製造現場では、自動化だけでは不十分です。
              必要なのは、人間が制御を維持しながら、AIの力を活用できる仕組みです。
            </p>
            <p className="text-neutral-600 mb-8">
              KODAは「統制運用」を設計の中心に据えています。
              オペレーターが常にループの中にいること。
              すべての判断が追跡可能であること。
              予期せぬ変更がないこと。
            </p>
            <h2 className="text-xl font-bold text-neutral-900 mb-4 mt-12">Solunaiについて</h2>
            <p className="text-neutral-600 mb-8">
              Solunai株式会社は東京を拠点とするAI企業です。
              製造業向けのエンタープライズAIソリューションを専門としています。
            </p>
            <p className="text-neutral-600">
              <a href="https://www.solunai.co.jp" target="_blank" rel="noopener noreferrer" className="text-koda-red hover:underline">
                Solunai企業サイトを見る →
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
