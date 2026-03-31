"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Project } from "@/data/portfolio";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-xs font-bold uppercase tracking-widest text-accent">{children}</span>
      <div className="flex-1 h-px bg-card-border" />
    </div>
  );
}

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [activePageIdx, setActivePageIdx] = useState(0);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-background border border-card-border rounded-2xl shadow-2xl">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-card-bg border border-card-border hover:border-accent/50 hover:text-accent transition-all cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 대표 이미지 */}
        <div className="relative w-full aspect-video bg-black rounded-t-2xl overflow-hidden">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>

        <div className="p-6 space-y-8">
          {/* 제목 + 메타 */}
          <div className="pb-6 border-b border-card-border">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              {project.techStack.includes("Claude AI") && (
                <span className="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded bg-violet-100 text-violet-600 dark:bg-violet-900/40 dark:text-violet-300">
                  Claude AI
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="font-semibold text-accent">{project.role}</span>
              <span className="text-muted">|</span>
              <span className="text-muted">{project.period.start} ~ {project.period.end}</span>
              {project.teamSize && (
                <>
                  <span className="text-muted">|</span>
                  <span className="text-muted">👥 {project.teamSize}</span>
                </>
              )}
            </div>
          </div>

          {/* 기술 스택 */}
          <div>
            <SectionLabel>Tech Stack</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-full bg-tag-bg text-tag-text text-sm font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 제작 목적 */}
          {project.purpose && (
            <div>
              <SectionLabel>제작 목적</SectionLabel>
              <p className="text-base text-foreground leading-relaxed">{project.purpose}</p>
            </div>
          )}

          {/* 프로젝트 개요 */}
          <div>
            <SectionLabel>프로젝트 개요</SectionLabel>
            <p className="text-base text-foreground leading-relaxed">{project.description}</p>
          </div>

          {/* 내 역할 & 성과 */}
          <div>
            <SectionLabel>내 역할 & 성과</SectionLabel>
            <ul className="space-y-3">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 text-accent">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-base text-foreground leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 주요 기능 */}
          {project.features && project.features.length > 0 && (
            <div>
              <SectionLabel>주요 기능</SectionLabel>
              <ul className="space-y-2">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-foreground leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 언론 보도 */}
          {project.pressLinks && project.pressLinks.length > 0 && (
            <div>
              <SectionLabel>언론 보도</SectionLabel>
              <div className="space-y-2">
                {project.pressLinks.map((press, i) => (
                  <a
                    key={i}
                    href={press.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-card-border hover:border-accent/50 hover:bg-card-bg transition-all group"
                  >
                    <span className="text-xs font-bold px-2 py-1 rounded bg-accent/10 text-accent whitespace-nowrap">
                      {press.source}
                    </span>
                    <span className="text-sm text-foreground group-hover:text-accent transition-colors line-clamp-1 flex-1">
                      {press.title}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-muted flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* 페이지별 설명 - 탭 + 캐러셀 연동 */}
          {project.pages && project.pages.length > 0 && (
            <div>
              <SectionLabel>페이지별 설명</SectionLabel>
              {/* 탭 버튼 */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.pages.map((page, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePageIdx(i)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      activePageIdx === i
                        ? "bg-accent text-white"
                        : "bg-card-bg border border-card-border text-muted hover:border-accent/50 hover:text-foreground"
                    }`}
                  >
                    {page.title}
                  </button>
                ))}
              </div>
              {/* 선택된 탭 설명 */}
              {project.pages[activePageIdx] && (
                <div className="rounded-xl bg-card-bg border border-card-border overflow-hidden">
                  {project.pages[activePageIdx].image && (
                    <div className="relative w-full aspect-video bg-black">
                      <Image src={project.pages[activePageIdx].image!} alt={project.pages[activePageIdx].title} fill className="object-contain" />
                    </div>
                  )}
                  <div className="p-4">
                    <p className="font-bold text-base mb-1.5">{project.pages[activePageIdx].title}</p>
                    <p className="text-sm text-muted leading-relaxed">{project.pages[activePageIdx].description}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 링크 */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex gap-3 pt-2 border-t border-card-border">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card-bg border border-card-border hover:border-accent/50 hover:text-accent transition-all text-sm font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors text-sm font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  Live
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
