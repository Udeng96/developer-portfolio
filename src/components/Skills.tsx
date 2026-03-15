"use client";

import Image from "next/image";
import { skills } from "@/data/portfolio";
import type { Skill } from "@/data/portfolio";

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";
const RADIUS = 40;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function SkillRing({ skill }: { skill: Skill }) {
  const percent = (skill.level / 5) * 100;
  const offset = CIRCUMFERENCE - (percent / 100) * CIRCUMFERENCE;

  return (
    <div className="flex flex-col items-center gap-2 w-24">
      <div className="relative w-24 h-24">
        <svg viewBox="0 0 90 90" className="w-full h-full -rotate-90">
          <circle
            cx="45"
            cy="45"
            r={RADIUS}
            fill="none"
            stroke="var(--skill-bar-bg)"
            strokeWidth="5"
          />
          <circle
            cx="45"
            cy="45"
            r={RADIUS}
            fill="none"
            stroke="var(--skill-bar-fill)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            className="transition-all duration-700 ease-out"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center">
          {skill.icon ? (
            <Image
              src={`${DEVICON_BASE}${skill.icon}`}
              alt={skill.name}
              width={36}
              height={36}
              className="object-contain"
            />
          ) : (
            <span className="text-sm font-bold">{percent}%</span>
          )}
        </span>
      </div>
      <div className="text-center">
        <span className="text-xs font-medium leading-tight block">{skill.name}</span>
        <span className="text-[10px] text-muted">{percent}%</span>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-section-alt-bg transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Skills</h2>
        <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
          다양한 기술 스택을 활용하여 프로젝트를 수행합니다
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category) => (
            <div
              key={category.category}
              className="bg-card-bg border border-card-border rounded-xl p-6 hover:border-accent/30 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-6 text-accent text-center">{category.category}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.items.map((skill) => (
                  <SkillRing key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
