import Hero from '@/components/koda/Hero'

export default function JPServicesPage() {
  return (
    <>
      <Hero
        title="KODAサービス"
        subtitle="人的支援と専門知識。アセスメントから導入、運用支援まで。"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">現場アセスメント</h3>
              <p className="text-neutral-600">
                貴社の運用環境を分析し、最適なKODAプロダクトを提案します。
              </p>
            </div>
            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">導入支援</h3>
              <p className="text-neutral-600">
                パイロットから本番展開まで、エンジニアが伴走します。
              </p>
            </div>
            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">トレーニング</h3>
              <p className="text-neutral-600">
                オペレーター向けの操作研修と管理者向けの運用研修。
              </p>
            </div>
            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">継続サポート</h3>
              <p className="text-neutral-600">
                運用開始後の技術サポートと定期レビュー。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
