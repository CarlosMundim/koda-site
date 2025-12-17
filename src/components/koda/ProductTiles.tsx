import Link from 'next/link'
import Image from 'next/image'

interface Product {
  name: string
  tagline: string
  href: string
  logo?: string
}

interface ProductTilesProps {
  products: Product[]
  title?: string
  subtitle?: string
  locale?: 'en' | 'jp'
}

export default function ProductTiles({ products, title, subtitle, locale = 'en' }: ProductTilesProps) {
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
              <div className="flex flex-col gap-4">
                {product.logo && (
                  <div className="h-12 flex items-center">
                    <img
                      src={product.logo}
                      alt={product.name}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                )}
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
