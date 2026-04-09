"use client";

import { useState } from "react";
import { projects } from "@/data/portfolio";
import type { ProjectCategory } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

const INITIAL_SHOW = 3;

const tabs: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Company", value: "company" },
  { label: "Personal", value: "personal" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"all" | ProjectCategory>("all");
  const [showAll, setShowAll] = useState(false);

  const filtered = activeTab === "all"
    ? projects
    : projects.filter((p) => p.category === activeTab);

  const displayed = showAll ? filtered : filtered.slice(0, INITIAL_SHOW);
  const hasMore = filtered.length > INITIAL_SHOW;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
        <p className="text-muted text-center mb-4 max-w-2xl mx-auto">
          참여했던 주요 프로젝트들입니다
          <span className="ml-2 text-accent font-medium">총 {filtered.length}개</span>
        </p>
        <p className="text-xs text-muted text-center mb-8 flex items-center justify-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 flex-shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
          일부 사내 프로젝트는 저작권 보호를 위해 GitHub 소스코드를 제공하지 않습니다.
        </p>

        <div className="flex justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => { setActiveTab(tab.value); setShowAll(false); }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                activeTab === tab.value
                  ? "bg-accent text-white"
                  : "bg-card-bg border border-card-border text-muted hover:text-foreground hover:border-accent/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayed.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {hasMore && !showAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 rounded-full text-sm font-medium bg-card-bg border border-card-border text-muted hover:text-foreground hover:border-accent/50 transition-colors cursor-pointer"
            >
              더보기 ({filtered.length - INITIAL_SHOW}개 더)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
