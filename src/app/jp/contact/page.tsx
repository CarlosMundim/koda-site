import Hero from '@/components/koda/Hero'

export default function JPContactPage() {
  return (
    <>
      <Hero
        title="お問い合わせ"
        subtitle="技術ブリーフィング、アセスメント、デモのご依頼。エンジニアリングチームが24時間以内に返信します。"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-bold text-neutral-900 mb-6">メッセージを送る</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">お名前</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-koda-red" placeholder="山田 太郎" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">会社名</label>
                  <input type="text" id="company" name="company" className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-koda-red" placeholder="株式会社サンプル" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">メールアドレス</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-koda-red" placeholder="yamada@example.co.jp" />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-neutral-700 mb-1">ご関心</label>
                  <select id="interest" name="interest" className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-koda-red">
                    <option value="">選択してください</option>
                    <option value="briefing">技術ブリーフィング</option>
                    <option value="assessment">現場アセスメント</option>
                    <option value="demo">製品デモ</option>
                    <option value="partnership">パートナーシップ</option>
                    <option value="other">その他</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">メッセージ</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-koda-red" placeholder="ご要件をお聞かせください..." />
                </div>
                <button type="submit" className="w-full px-6 py-3 bg-koda-red text-white font-medium rounded hover:bg-koda-red-dark transition-colors">
                  送信
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-xl font-bold text-neutral-900 mb-6">直接連絡</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">メール</h3>
                  <a href="mailto:koda@solunai.co.jp" className="text-koda-red hover:underline">koda@solunai.co.jp</a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">所在地</h3>
                  <p className="text-neutral-600">Solunai株式会社<br />東京都</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">返信時間</h3>
                  <p className="text-neutral-600">すべてのお問い合わせに24時間以内（営業日）に返信します。</p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">お約束</h3>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>• 24時間以内の初回返信</li>
                  <li>• 営業ではなくエンジニアとの技術議論</li>
                  <li>• 貴社のユースケースへの適合性を正直に評価</li>
                  <li>• 押し売りなし、義務なし</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
