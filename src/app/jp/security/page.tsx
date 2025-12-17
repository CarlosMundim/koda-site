import Hero from '@/components/koda/Hero'

export default function JPSecurityPage() {
  return (
    <>
      <Hero
        title="セキュリティと統制"
        subtitle="KODAは統制運用を前提として設計されています。監査対応、アクセス制御、安定運用。"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-xl font-bold text-neutral-900 mb-4">オペレーター・イン・ザ・ループ</h2>
              <p className="text-neutral-600">
                KODAは人間の判断を置き換えるのではなく、支援します。
                すべての重要な決定にはオペレーターの確認が必要です。
                AIが自動で本番変更を行うことはありません。
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-neutral-900 mb-4">監査証跡</h2>
              <p className="text-neutral-600">
                すべての操作、判断、変更が記録されます。
                いつ、誰が、何を、なぜ行ったかを追跡可能。
                コンプライアンス要件への対応を支援します。
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-neutral-900 mb-4">アクセス制御</h2>
              <p className="text-neutral-600">
                ロールベースのアクセス管理。
                必要な権限のみを必要な人に付与。
                企業のセキュリティポリシーと統合可能。
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-neutral-900 mb-4">安定デプロイ</h2>
              <p className="text-neutral-600">
                予期せぬ更新はありません。
                すべてのリリースはテスト済み、バージョン管理済み。
                ロールバック可能な設計。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
