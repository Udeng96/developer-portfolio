"use client";

import Image from "next/image";
import { profile, educations, certifications } from "@/data/portfolio";
import CardCarousel from "./CardCarousel";

export default function Hero() {
  const cards = [
    ...educations.map((edu, i) => (
      <div key={`edu-${i}`} className="flex items-center gap-4 p-4 rounded-lg bg-section-alt-bg border border-card-border">
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold">{edu.institution}</p>
          <p className="text-xs text-accent font-medium">{edu.degree}</p>
          <p className="text-xs text-muted mt-0.5">{edu.period.start} ~ {edu.period.end}</p>
        </div>
      </div>
    )),
    ...certifications.map((cert, i) => (
      <div key={`cert-${i}`} className="flex items-center gap-4 p-4 rounded-lg bg-section-alt-bg border border-card-border">
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold">{cert.name}</p>
          <p className="text-xs text-accent font-medium">{cert.issuer}</p>
          <p className="text-xs text-muted mt-0.5">취득일: {cert.date}</p>
        </div>
      </div>
    )),
  ];

  return (
    <section id="about" className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-card-border shadow-lg">
            <Image
              src={profile.image}
              alt={profile.name}
              width={224}
              height={224}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-1 text-center">
          {profile.name}
          <span className="ml-3 text-xl md:text-2xl font-medium text-muted">Jang You Jung</span>
        </h1>
        <p className="text-accent font-medium mb-5 text-center">{profile.title}</p>

        <p className="text-sm text-muted leading-relaxed mb-8 text-center max-w-2xl mx-auto whitespace-pre-line">{profile.bio}</p>

        {/* 학력/자격증 */}
        <p className="text-xs text-muted font-medium uppercase tracking-wider mb-3 text-center">Education & Certifications</p>
        <div className="hidden md:grid md:grid-cols-2 gap-3 max-w-2xl mx-auto">
          {cards}
        </div>
        <div className="md:hidden">
          <CardCarousel items={cards} />
        </div>
      </div>
    </section>
  );
}
