interface ScopeRow {
  category: string
  products: string
  solutions: string
  services: string
}

interface ScopeTableProps {
  rows: ScopeRow[]
  title?: string
  subtitle?: string
}

export default function ScopeTable({ rows, title, subtitle }: ScopeTableProps) {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
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

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-neutral-100">
                <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900 border-b border-neutral-200">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900 border-b border-neutral-200">
                  Products
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900 border-b border-neutral-200">
                  Solutions
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900 border-b border-neutral-200">
                  Services
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900 border-b border-neutral-100">
                    {row.category}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-600 border-b border-neutral-100">
                    {row.products}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-600 border-b border-neutral-100">
                    {row.solutions}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-600 border-b border-neutral-100">
                    {row.services}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-koda-red"></span>
            <span>Products = Safe packages</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-neutral-400"></span>
            <span>Solutions = Internal engines</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-neutral-600"></span>
            <span>Services = Human engagement</span>
          </div>
        </div>
      </div>
    </section>
  )
}
