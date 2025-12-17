interface HeroProps {
  title: string
  subtitle?: string
  cta?: {
    label: string
    href: string
  }
  imageSrc?: string
  imageAlt?: string
  variant?: 'default' | 'dark'
}

export default function Hero({
  title,
  subtitle,
  cta,
  imageSrc,
  imageAlt = 'Hero image',
  variant = 'default'
}: HeroProps) {
  const isDark = variant === 'dark'

  return (
    <section className={`relative min-h-[50vh] flex items-center ${isDark ? 'bg-neutral-900' : 'bg-neutral-50'}`}>
      {/* Background image if provided */}
      {imageSrc && (
        <div className="absolute inset-0">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      )}

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
          {title}
        </h1>

        {subtitle && (
          <p className={`text-lg md:text-xl leading-relaxed max-w-3xl mb-8 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
            {subtitle}
          </p>
        )}

        {cta && (
          <a
            href={cta.href}
            className="inline-flex items-center gap-2 px-6 py-3 bg-koda-red text-white font-medium rounded hover:bg-koda-red-dark transition-colors"
          >
            {cta.label}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>
    </section>
  )
}
