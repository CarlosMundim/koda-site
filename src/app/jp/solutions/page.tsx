import Hero from '@/components/koda/Hero'

export default function JPSolutionsPage() {
  return (
    <>
      <Hero
        title="KODAソリューション"
        subtitle="ソリューションはプロダクトを動かす内部エンジンです。個別販売はしていません。"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <p className="text-neutral-600 mb-8">
            KODAソリューションは、各プロダクトの基盤となるAIモデルと処理ロジックです。
            これらは直接購入するものではなく、プロダクトの一部として提供されます。
          </p>
          <ul className="space-y-4 text-neutral-700">
            <li>• <strong>AIモデル</strong> — 各ドメイン専用に訓練されたモデル</li>
            <li>• <strong>処理ロジック</strong> — データパイプラインと推論エンジン</li>
            <li>• <strong>統合レイヤー</strong> — 既存システムとの接続</li>
          </ul>
        </div>
      </section>
    </>
  )
}
