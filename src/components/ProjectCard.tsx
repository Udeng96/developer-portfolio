"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/data/portfolio";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({ project }: { project: Project }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="bg-card-bg border border-card-border rounded-xl overflow-hidden hover:border-accent/30 transition-all group">
        <div className="relative h-48 bg-skill-bar-bg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 min-w-0">
              <h3 className="text-lg font-semibold truncate">{project.title}</h3>
              {project.techStack.includes("Claude AI") && (
                <span className="flex-shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded bg-violet-100 text-violet-600 dark:bg-violet-900/40 dark:text-violet-300 whitespace-nowrap">
                  Claude AI
                </span>
              )}
            </div>
            <span className="text-xs text-muted whitespace-nowrap ml-2">
              {project.period.start} ~ {project.period.end}
            </span>
          </div>

          <p className="text-sm text-accent font-medium mb-3">{project.role}</p>

          <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-full bg-tag-bg text-tag-text font-medium"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 5 && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-tag-bg text-muted font-medium">
                +{project.techStack.length - 5}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="text-sm px-4 py-1.5 rounded-full bg-accent text-white font-semibold hover:opacity-90 active:scale-95 transition-all cursor-pointer"
            >
              자세히 보기
            </button>

          </div>
        </div>
      </div>

      {modalOpen && (
        <ProjectModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
