"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-card-bg border border-card-border rounded-xl overflow-hidden hover:border-accent/30 transition-all group">
      <div className="relative h-48 bg-skill-bar-bg overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

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

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-accent hover:text-accent-hover font-medium transition-colors cursor-pointer"
        >
          {expanded ? "접기" : "자세히 보기"}
        </button>
      </div>
    </div>
  );
}
