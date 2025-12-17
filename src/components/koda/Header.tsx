'use client'

import Link from 'next/link'
import { useState } from 'react'

const navItemsEN = [
  { label: 'Products', href: '/products' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Services', href: '/services' },
  { label: 'Security', href: '/security' },
  { label: 'Contact', href: '/contact' },
]

const navItemsJP = [
  { label: 'プロダクト', href: '/jp/products' },
  { label: 'ソリューション', href: '/jp/solutions' },
  { label: 'サービス', href: '/jp/services' },
  { label: 'セキュリティ', href: '/jp/security' },
  { label: 'お問い合わせ', href: '/jp/contact' },
]

interface HeaderProps {
  locale?: 'en' | 'jp'
}

export default function Header({ locale = 'en' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isJP = locale === 'jp'
  const navItems = isJP ? navItemsJP : navItemsEN
  const homeHref = isJP ? '/jp' : '/'
  const switchHref = isJP ? '/' : '/jp'
  const switchLabel = isJP ? 'EN' : 'JP'

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={homeHref} className="flex items-center gap-2">
            <span className="text-xl font-bold text-neutral-900">KODA</span>
            <span className="text-sm text-neutral-500">by Solunai</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Switch */}
          <div className="hidden md:flex items-center">
            <Link
              href={switchHref}
              className="text-sm font-medium text-koda-red hover:text-koda-red-dark transition-colors"
            >
              {switchLabel}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-neutral-100">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-neutral-100">
              <Link
                href={switchHref}
                className="text-sm font-medium text-koda-red hover:text-koda-red-dark"
                onClick={() => setMobileMenuOpen(false)}
              >
                {switchLabel === 'JP' ? '日本語に切替' : 'Switch to English'}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
