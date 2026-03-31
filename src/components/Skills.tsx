"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { skills } from "@/data/portfolio";
import type { Skill } from "@/data/portfolio";

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";
const RADIUS = 40;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const CATEGORY_COLORS: Record<string, { ring: string; text: string; border: string }> = {
  Frontend: { ring: "#60a5fa", text: "text-blue-400", border: "hover:border-blue-400/30" },
  Backend: { ring: "#34d399", text: "text-emerald-400", border: "hover:border-emerald-400/30" },
  "DevOps & Tools": { ring: "#f97316", text: "text-orange-400", border: "hover:border-orange-400/30" },
};

const LEVEL_LABEL: Record<number, string> = {
  5: "주력 기술",
  4: "능숙",
  3: "실무 경험",
  2: "학습 중",
  1: "기초",
};

function getLevelLabel(level: number): string {
  if (level >= 5) return "주력 기술";
  if (level >= 4) return "능숙";
  if (level >= 3) return "실무 경험";
  if (level >= 1) return "기초 활용";
  return "기초";
}

function SkillRing({
  skill,
  color,
  animate,
}: {
  skill: Skill;
  color: string;
  animate: boolean;
}) {
  const percent = (skill.level / 5) * 100;
  const targetOffset = CIRCUMFERENCE - (percent / 100) * CIRCUMFERENCE;
  const currentOffset = animate ? targetOffset : CIRCUMFERENCE;
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 닫기
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div ref={ref} className="relative flex flex-col items-center gap-2 w-24">
      {/* 팝오버 카드 */}
      {open && skill.tooltip && (
        <div
          className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50 w-64 rounded-xl border border-card-border bg-card-bg shadow-xl p-3 text-left"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 화살표 */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-card-border" />
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-r-[7px] border-t-[7px] border-l-transparent border-r-transparent border-t-card-bg translate-y-[-1px]" />

          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold">{skill.name}</span>
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: `${color}22`, color }}
            >
              {getLevelLabel(skill.level)}
            </span>
          </div>
          <p className="text-xs text-muted leading-relaxed">{skill.tooltip}</p>
        </div>
      )}

      {/* 링 */}
      <button
        onClick={() => skill.tooltip && setOpen((v) => !v)}
        className={`relative w-24 h-24 rounded-full ${skill.tooltip ? "cursor-pointer" : "cursor-default"}`}
        title={skill.tooltip ? `${skill.name} 상세 보기` : undefined}
      >
        <svg viewBox="0 0 90 90" className="w-full h-full -rotate-90">
          <circle cx="45" cy="45" r={RADIUS} fill="none" stroke="var(--skill-bar-bg)" strokeWidth="5" />
          <circle
            cx="45"
            cy="45"
            r={RADIUS}
            fill="none"
            stroke={color}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={currentOffset}
            className="transition-all duration-[2000ms] ease-out"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center">
          {skill.icon ? (
            <Image
              src={skill.icon.startsWith("http") ? skill.icon : `${DEVICON_BASE}${skill.icon}`}
              alt={skill.name}
              width={36}
              height={36}
              className={`object-contain${skill.icon.startsWith("http") ? " dark:invert" : ""}`}
            />
          ) : (
            <span
              className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-extrabold"
              style={{ backgroundColor: `${color}22`, color }}
            >
              {skill.name
                .split(/[\s\/]/)
                .map((w) => w[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </span>
          )}
        </span>
      </button>

      <div className="text-center">
        <span className="text-xs font-medium leading-tight block">{skill.name}</span>
        {skill.tooltip && (
          <span className="text-[9px] text-muted/60 mt-0.5 block">클릭하여 자세히</span>
        )}
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-section-alt-bg transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Skills</h2>
        <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
          각 기술을 클릭하면 활용 경험을 확인할 수 있습니다
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category) => {
            const colors =
              CATEGORY_COLORS[category.category] ?? {
                ring: "var(--skill-bar-fill)",
                text: "text-accent",
                border: "hover:border-accent/30",
              };
            return (
              <div
                key={category.category}
                className={`bg-card-bg border border-card-border rounded-xl p-6 ${colors.border} transition-colors`}
              >
                <h3 className={`text-lg font-semibold mb-6 ${colors.text} text-center`}>
                  {category.category}
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {category.items.map((skill) => (
                    <SkillRing key={skill.name} skill={skill} color={colors.ring} animate={visible} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
