import Hero from '@/components/koda/Hero'

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact KODA"
        subtitle="Request a technical briefing, assessment, or demo. Our engineering team responds within 24 hours."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-xl font-bold text-neutral-900 mb-6">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-koda-red focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-koda-red focus:border-transparent"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-koda-red focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-neutral-700 mb-1">
                    Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-koda-red focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="briefing">Technical Briefing</option>
                    <option value="assessment">Site Assessment</option>
                    <option value="demo">Product Demo</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-koda-red focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-koda-red text-white font-medium rounded hover:bg-koda-red-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-bold text-neutral-900 mb-6">Direct Contact</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">Email</h3>
                  <a href="mailto:koda@solunai.co.jp" className="text-koda-red hover:underline">
                    koda@solunai.co.jp
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">Office</h3>
                  <p className="text-neutral-600">
                    Solunai Co., Ltd.<br />
                    Tokyo, Japan
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">Response Time</h3>
                  <p className="text-neutral-600">
                    We respond to all inquiries within 24 hours (business days).
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">What to expect</h3>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>• Initial response within 24 hours</li>
                  <li>• Technical discussion with engineers, not sales</li>
                  <li>• Honest assessment of fit for your use case</li>
                  <li>• No pressure, no obligation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
