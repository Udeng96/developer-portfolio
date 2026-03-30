"use client";

import { educations, certifications } from "@/data/portfolio";
import CardCarousel from "./CardCarousel";

function EducationCard({ edu }: { edu: (typeof educations)[number] }) {
  return (
    <div className="bg-card-bg border border-card-border rounded-xl p-8 hover:border-accent/30 transition-colors">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-accent">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{edu.institution}</h3>
          <p className="text-sm text-accent font-medium">{edu.degree}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-muted mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
        {edu.period.start} ~ {edu.period.end}
      </div>

      {edu.description && (
        <p className="text-sm text-muted leading-relaxed">{edu.description}</p>
      )}
    </div>
  );
}

function CertificationCard({ cert }: { cert: (typeof certifications)[number] }) {
  return (
    <div className="bg-card-bg border border-card-border rounded-xl p-8 hover:border-accent/30 transition-colors">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-accent">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{cert.name}</h3>
          <p className="text-sm text-accent font-medium">{cert.issuer}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-muted mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
        취득일: {cert.date}
      </div>

      {cert.description && (
        <p className="text-sm text-muted leading-relaxed">{cert.description}</p>
      )}
    </div>
  );
}

export default function EducationCerts() {
  const cards = [
    ...educations.map((edu, i) => <EducationCard key={`edu-${i}`} edu={edu} />),
    ...certifications.map((cert, i) => <CertificationCard key={`cert-${i}`} cert={cert} />),
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-section-alt-bg transition-colors">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Education & Certifications</h2>
        <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
          학력 및 자격증 정보입니다
        </p>

        <div className="max-w-2xl mx-auto">
          <CardCarousel items={cards} />
        </div>
      </div>
    </section>
  );
}
