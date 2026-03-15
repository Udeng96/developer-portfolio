import { careers } from "@/data/portfolio";

export default function Career() {
  return (
    <section id="career" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Career</h2>
        <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
          지금까지의 경력 사항입니다
        </p>

        <div className="relative">
          {/* 타임라인 세로선 */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-card-border md:-translate-x-px" />

          <div className="space-y-12">
            {careers.map((career, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* 타임라인 점 */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1.5 mt-2 z-10 ring-4 ring-background" />

                {/* 카드 */}
                <div className={`ml-14 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-card-bg border border-card-border rounded-xl p-6 hover:border-accent/30 transition-colors">
                    <div className="flex items-center gap-2 text-xs text-muted mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                      {career.period.start} ~ {career.period.end}
                    </div>

                    <h3 className="text-lg font-semibold mb-1">{career.company}</h3>
                    <p className="text-sm text-accent font-medium mb-3">{career.position}</p>
                    <p className="text-sm text-muted leading-relaxed mb-4">{career.description}</p>

                    <ul className="space-y-1.5">
                      {career.responsibilities.map((item, i) => (
                        <li key={i} className="text-sm text-muted flex items-start gap-2">
                          <span className="text-accent mt-0.5 flex-shrink-0">&#x2022;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
