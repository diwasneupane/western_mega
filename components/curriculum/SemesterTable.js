'use client';

const TYPE_STYLES = {
  'Core Common':      'bg-blue-50 text-blue-700 border border-blue-200',
  'Core Discipline':  'bg-indigo-50 text-indigo-700 border border-indigo-200',
  'Core':             'bg-blue-50 text-blue-700 border border-blue-200',
  'Elective':         'bg-green-50 text-green-700 border border-green-200',
  'Compulsory':       'bg-amber-50 text-amber-700 border border-amber-200',
  'Minor':            'bg-purple-50 text-purple-700 border border-purple-200',
};

function TypeBadge({ type }) {
  if (!type) return null;
  const style = TYPE_STYLES[type] || 'bg-gray-50 text-gray-600 border border-gray-200';
  return (
    <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${style}`}>
      {type}
    </span>
  );
}

/**
 * SemesterTable — shared curriculum table for all program pages.
 *
 * Props:
 *   semesters: Array<{ sem: string, subjects: Array<{ code, name, credits, classification?, remarks? }>, total_credits: number }>
 *   accent:    { ring: string, bg: string, text: string, badge: string }  — Tailwind classes
 *   columns:   1 | 2  — number of semester cards per row (default: 1)
 */
export default function SemesterTable({ semesters, accent, columns = 1 }) {
  if (!semesters || semesters.length === 0) return null;

  const hasClassification = semesters.some(s =>
    s.subjects.some(sub => sub.classification)
  );
  const hasRemarks = semesters.some(s =>
    s.subjects.some(sub => sub.remarks)
  );

  const wrapperClass = columns === 2
    ? 'grid grid-cols-1 md:grid-cols-2 gap-6 items-start'
    : 'space-y-10';

  return (
    <div className={wrapperClass}>
      {semesters.map(({ sem, subjects, total_credits }) => (
        <div key={sem} className={`rounded-2xl border ${accent.ring} overflow-hidden shadow-sm`}>
          {/* Semester header */}
          <div className={`flex items-center justify-between px-5 py-3 ${accent.bg}`}>
            <h3 className={`font-semibold text-sm ${accent.text}`}>{sem}</h3>
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${accent.badge}`}>
              {total_credits} Credits
            </span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide w-28">Code</th>
                  <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Course Name</th>
                  <th className="px-4 py-2.5 text-center text-xs font-semibold text-gray-500 uppercase tracking-wide w-20">Credits</th>
                  {hasClassification && (
                    <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide w-40">Type</th>
                  )}
                  {hasRemarks && (
                    <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide w-36">Remarks</th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {subjects.map((s, i) => (
                  <tr key={i} className="hover:bg-gray-50/60 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs text-gray-500">{s.code}</td>
                    <td className="px-4 py-3 text-gray-800 font-medium leading-snug">{s.name}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-semibold">{s.credits}</td>
                    {hasClassification && (
                      <td className="px-4 py-3">
                        {s.classification ? <TypeBadge type={s.classification} /> : null}
                      </td>
                    )}
                    {hasRemarks && (
                      <td className="px-4 py-3 text-xs text-gray-400 italic">{s.remarks || ''}</td>
                    )}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-50 border-t border-gray-200">
                  <td colSpan={hasClassification && hasRemarks ? 6 : hasClassification || hasRemarks ? 5 : 4}
                      className="px-4 py-2.5 text-right text-xs font-semibold text-gray-500">
                    Semester Total:&nbsp;
                    <span className={`font-bold ${accent.text}`}>{total_credits} credits</span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
