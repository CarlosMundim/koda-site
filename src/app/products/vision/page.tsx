import Hero from '@/components/koda/Hero'
import CTA from '@/components/koda/CTA'

export default function VisionPage() {
  return (
    <>
      <Hero
        title="KODA Vision"
        subtitle="Visual inspection and quality control powered by computer vision. Detect defects with superhuman accuracy and speed."
        cta={{
          label: 'Request Demo',
          href: '/contact',
        }}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Overview</h2>
          <p className="text-neutral-600 leading-relaxed mb-8">
            KODA Vision uses deep learning models trained on manufacturing defect data to perform automated visual inspection. The system integrates with existing camera infrastructure and production lines.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mb-4">Applications</h3>
          <ul className="space-y-3 text-neutral-600">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-koda-red mt-2 shrink-0"></span>
              <span>Surface defect detection (scratches, dents, discoloration)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-koda-red mt-2 shrink-0"></span>
              <span>Assembly verification (missing components, misalignment)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-koda-red mt-2 shrink-0"></span>
              <span>Dimensional measurement and tolerance checking</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-koda-red mt-2 shrink-0"></span>
              <span>Label and marking verification</span>
            </li>
          </ul>
        </div>
      </section>

      <CTA
        title="See KODA Vision capabilities"
        description="Send us sample images from your production line for a proof-of-concept evaluation."
        primaryAction={{
          label: 'Request Evaluation',
          href: '/contact',
        }}
        variant="dark"
      />
    </>
  )
}
