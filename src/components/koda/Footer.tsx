import Link from 'next/link'

const footerLinksEN = {
  products: [
    { label: 'KODA Predict', href: '/products/predict' },
    { label: 'KODA Optimise', href: '/products/optimise' },
    { label: 'KODA Vision', href: '/products/vision' },
    { label: 'KODA Twin', href: '/products/twin' },
    { label: 'White Label', href: '/products/white-label' },
  ],
  company: [
    { label: 'About KODA', href: '/about' },
    { label: 'Security & Governance', href: '/security' },
    { label: 'Contact', href: '/contact' },
  ],
  parent: [
    { label: 'Solunai Corporate', href: 'https://www.solunai.co.jp' },
  ],
  labels: {
    products: 'Products',
    company: 'Company',
    parent: 'Parent Company',
    description: 'Industrial AI products designed for controlled operation.',
    brand: 'A Solunai brand',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
  },
}

const footerLinksJP = {
  products: [
    { label: 'KODA Predict', href: '/jp/products/predict' },
    { label: 'KODA Optimise', href: '/jp/products/optimise' },
    { label: 'KODA Vision', href: '/jp/products/vision' },
    { label: 'KODA Twin', href: '/jp/products/twin' },
    { label: 'ホワイトラベル', href: '/jp/products/white-label' },
  ],
  company: [
    { label: 'KODAについて', href: '/jp/about' },
    { label: 'セキュリティ', href: '/jp/security' },
    { label: 'お問い合わせ', href: '/jp/contact' },
  ],
  parent: [
    { label: 'Solunai 企業サイト', href: 'https://www.solunai.co.jp' },
  ],
  labels: {
    products: 'プロダクト',
    company: '会社情報',
    parent: '親会社',
    description: '統制運用を前提としたAI製品。',
    brand: 'Solunaiブランド',
    privacy: 'プライバシーポリシー',
    terms: '利用規約',
  },
}

interface FooterProps {
  locale?: 'en' | 'jp'
}

export default function Footer({ locale = 'en' }: FooterProps) {
  const footerLinks = locale === 'jp' ? footerLinksJP : footerLinksEN
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold text-neutral-900 mb-2">KODA</div>
            <p className="text-sm text-neutral-500 mb-4">
              {footerLinks.labels.description}
            </p>
            <p className="text-xs text-neutral-400">
              {footerLinks.labels.brand}
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-4">{footerLinks.labels.products}</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-4">{footerLinks.labels.company}</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Parent */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-4">{footerLinks.labels.parent}</h4>
            <ul className="space-y-2">
              {footerLinks.parent.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} Solunai Co., Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href={locale === 'jp' ? '/jp/security' : '/security'} className="text-xs text-neutral-400 hover:text-neutral-600">
              {footerLinks.labels.privacy}
            </Link>
            <Link href={locale === 'jp' ? '/jp/security' : '/security'} className="text-xs text-neutral-400 hover:text-neutral-600">
              {footerLinks.labels.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
