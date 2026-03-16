"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/data/portfolio";

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const goTo = (idx: number) => {
    if (idx < 0) setCurrent(images.length - 1);
    else if (idx >= images.length) setCurrent(0);
    else setCurrent(idx);
  };

  return (
    <div className="relative h-48 bg-skill-bar-bg overflow-hidden group/carousel">
      <div
        className="flex h-full transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStartX === null) return;
          const delta = touchStartX - e.changedTouches[0].clientX;
          if (Math.abs(delta) > 40) goTo(current + (delta > 0 ? 1 : -1));
          setTouchStartX(null);
        }}
      >
        {images.map((src, i) => (
          <div key={i} className="relative w-full h-full flex-shrink-0">
            <Image src={src} alt={`${alt} ${i + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={() => goTo(current - 1)}
            className="absolute left-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => goTo(current + 1)}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors cursor-pointer ${i === current ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const images = project.images && project.images.length > 0 ? project.images : null;

  return (
    <div className="bg-card-bg border border-card-border rounded-xl overflow-hidden hover:border-accent/30 transition-all group">
      {images ? (
        <ImageCarousel images={images} alt={project.title} />
      ) : (
        <div className="relative h-48 bg-skill-bar-bg overflow-hidden p-3">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300 p-3"
          />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <span className="text-xs text-muted whitespace-nowrap ml-2">
            {project.period.start} ~ {project.period.end}
          </span>
        </div>

        <p className="text-sm text-accent font-medium mb-3">{project.role}</p>

        <p className="text-sm text-muted leading-relaxed mb-4">
          {expanded ? project.description : `${project.description.slice(0, 80)}...`}
        </p>

        {expanded && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">주요 성과</h4>
            <ul className="space-y-1">
              {project.highlights.map((h, i) => (
                <li key={i} className="text-sm text-muted flex items-start gap-2">
                  <span className="text-accent mt-1">&#x2022;</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-full bg-tag-bg text-tag-text font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-accent hover:text-accent-hover font-medium transition-colors cursor-pointer"
          >
            {expanded ? "접기" : "자세히 보기"}
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm px-3 py-1 rounded-full bg-accent text-white hover:bg-accent-hover transition-colors font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Live
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm px-3 py-1 rounded-full bg-card-bg border border-card-border hover:border-accent/50 hover:text-accent transition-colors font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
