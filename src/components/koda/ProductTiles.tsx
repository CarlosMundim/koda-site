import Link from 'next/link'

interface Product {
  name: string
  tagline: string
  href: string
  icon?: string
}

interface ProductTilesProps {
  products: Product[]
  title?: string
  subtitle?: string
}

export default function ProductTiles({ products, title, subtitle }: ProductTilesProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-neutral-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className="group block p-6 bg-neutral-50 border border-neutral-200 rounded-lg hover:border-koda-red hover:shadow-sm transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-white border border-neutral-200 flex items-center justify-center text-koda-red shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-koda-red transition-colors mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {product.tagline}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
