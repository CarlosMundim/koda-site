interface HeroProps {
  title: string
  subtitle?: string
  eyebrow?: string
  qualifier?: string
  cta?: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
  imageSrc?: string
  imageAlt?: string
  variant?: 'default' | 'dark' | 'fullscreen'
}

export default function Hero({
  title,
  subtitle,
  eyebrow,
  qualifier,
  cta,
  secondaryCta,
  imageSrc,
  imageAlt = 'Hero image',
  variant = 'default'
}: HeroProps) {
  const isDark = variant === 'dark' || variant === 'fullscreen'
  const isFullscreen = variant === 'fullscreen' || variant === 'dark'

  return (
    <section className={`relative flex items-center justify-center ${isFullscreen ? 'min-h-screen' : 'min-h-[50vh]'} ${isDark ? 'bg-neutral-900' : 'bg-neutral-50'}`}>
      {/* Background image if provided */}
      {imageSrc && (
        <div className="absolute inset-0">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-neutral-900/30 to-neutral-900/70" />
        </div>
      )}

      <div className={`relative z-10 max-w-4xl mx-auto px-8 md:px-12 ${isFullscreen ? 'py-24 md:py-32' : 'py-16 md:py-24'} text-center`}>
        {eyebrow && (
          <p className={`text-sm md:text-base font-medium tracking-wider uppercase mb-6 ${isDark ? 'text-koda-red' : 'text-koda-red'}`}>
            {eyebrow}
          </p>
        )}

        <h1 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8 md:mb-12 tracking-tight ${isDark ? 'text-white' : 'text-neutral-900'}`}>
          {title}
        </h1>

        {subtitle && (
          <p className={`text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10 font-light ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
            {subtitle}
          </p>
        )}

        {qualifier && (
          <p className={`text-xs md:text-sm max-w-xl mx-auto mb-12 md:mb-16 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
            {qualifier}
          </p>
        )}

        {(cta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {cta && (
              <a
                href={cta.href}
                className="inline-flex items-center gap-3 px-8 py-4 bg-koda-red text-white font-medium rounded hover:bg-koda-red-dark transition-colors text-lg"
              >
                {cta.label}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className={`inline-flex items-center gap-2 px-6 py-4 font-medium rounded transition-colors text-lg ${isDark ? 'text-white border border-white/30 hover:bg-white/10' : 'text-neutral-700 border border-neutral-300 hover:bg-neutral-100'}`}
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}
      </div>

      {/* Scroll indicator for fullscreen */}
      {isFullscreen && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      )}
    </section>
  )
}
