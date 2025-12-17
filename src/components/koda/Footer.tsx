import Link from 'next/link'

const footerLinks = {
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
}

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold text-neutral-900 mb-2">KODA</div>
            <p className="text-sm text-neutral-500 mb-4">
              Industrial AI products designed for controlled operation.
            </p>
            <p className="text-xs text-neutral-400">
              A Solunai brand
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-4">Products</h4>
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
            <h4 className="text-sm font-semibold text-neutral-900 mb-4">Company</h4>
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
            <h4 className="text-sm font-semibold text-neutral-900 mb-4">Parent Company</h4>
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
            <Link href="/security" className="text-xs text-neutral-400 hover:text-neutral-600">
              Privacy Policy
            </Link>
            <Link href="/security" className="text-xs text-neutral-400 hover:text-neutral-600">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
