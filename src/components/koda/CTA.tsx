interface CTAProps {
  title: string
  description?: string
  primaryAction: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
  variant?: 'default' | 'dark'
}

export default function CTA({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = 'default'
}: CTAProps) {
  const isDark = variant === 'dark'

  return (
    <section className={`py-16 md:py-24 ${isDark ? 'bg-neutral-900' : 'bg-neutral-50'}`}>
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
          {title}
        </h2>

        {description && (
          <p className={`text-lg mb-8 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
            {description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={primaryAction.href}
            className="inline-flex items-center gap-2 px-6 py-3 bg-koda-red text-white font-medium rounded hover:bg-koda-red-dark transition-colors"
          >
            {primaryAction.label}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {secondaryAction && (
            <a
              href={secondaryAction.href}
              className={`inline-flex items-center gap-2 px-6 py-3 font-medium rounded border transition-colors ${
                isDark
                  ? 'border-neutral-600 text-white hover:bg-neutral-800'
                  : 'border-neutral-300 text-neutral-700 hover:bg-white'
              }`}
            >
              {secondaryAction.label}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
