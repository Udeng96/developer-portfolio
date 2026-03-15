"use client";

import { useState } from "react";
import { projects } from "@/data/portfolio";
import type { ProjectCategory } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

const tabs: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Company", value: "company" },
  { label: "Personal", value: "personal" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"all" | ProjectCategory>("all");

  const filtered = activeTab === "all"
    ? projects
    : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
        <p className="text-muted text-center mb-8 max-w-2xl mx-auto">
          참여했던 주요 프로젝트들입니다
        </p>

        <div className="flex justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
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
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
