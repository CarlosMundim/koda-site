interface DiagramBlockProps {
  title: string
  description?: string
  imageSrc: string
  imageAlt: string
  caption?: string
  variant?: 'default' | 'wide'
}

export default function DiagramBlock({
  title,
  description,
  imageSrc,
  imageAlt,
  caption,
  variant = 'default'
}: DiagramBlockProps) {
  const maxWidth = variant === 'wide' ? 'max-w-5xl' : 'max-w-3xl'

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className={`${maxWidth} mx-auto px-6 md:px-8`}>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-neutral-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 md:p-8">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto"
          />
        </div>

        {caption && (
          <p className="mt-4 text-center text-sm text-neutral-500 italic">
            {caption}
          </p>
        )}
      </div>
    </section>
  )
}
