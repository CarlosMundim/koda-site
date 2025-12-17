import Hero from '@/components/koda/Hero'
import CTA from '@/components/koda/CTA'

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About KODA"
        subtitle="Industrial AI products from Solunai. Built in Japan for global manufacturing operations."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Our Mission</h2>
          <p className="text-neutral-600 leading-relaxed mb-8">
            KODA exists to bring practical, controlled AI to industrial operations. We believe AI should enhance human capability, not replace human judgment. Every KODA product is designed with operators in the loop.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Part of Solunai</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            KODA is the industrial AI brand of <a href="https://www.solunai.co.jp" className="text-koda-red hover:underline">Solunai Co., Ltd.</a>, a Tokyo-based technology company focused on AI solutions for Japanese enterprise.
          </p>
          <p className="text-neutral-600 leading-relaxed mb-8">
            Our team combines deep manufacturing domain expertise with cutting-edge AI research. We understand both the technology and the operational reality of industrial environments.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Our Approach</h2>
          <ul className="space-y-4 text-neutral-600">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-koda-red mt-2 shrink-0"></span>
              <div>
                <strong>Evidence-based claims</strong> — We show real results, not marketing projections
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-koda-red mt-2 shrink-0"></span>
              <div>
                <strong>Transparent technology</strong> — We explain how our AI works, not hide behind black boxes
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-koda-red mt-2 shrink-0"></span>
              <div>
                <strong>Honest evaluation</strong> — We tell you if KODA is not the right fit
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-koda-red mt-2 shrink-0"></span>
              <div>
                <strong>Long-term partnership</strong> — We succeed when you succeed
              </div>
            </li>
          </ul>
        </div>
      </section>

      <CTA
        title="Learn more about Solunai"
        description="Visit our parent company website for more information."
        primaryAction={{
          label: 'Visit Solunai',
          href: 'https://www.solunai.co.jp',
        }}
        secondaryAction={{
          label: 'Contact Us',
          href: '/contact',
        }}
      />
    </>
  )
}
