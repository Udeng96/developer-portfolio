"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { skills } from "@/data/portfolio";
import type { Skill } from "@/data/portfolio";

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";
const RADIUS = 40;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const CATEGORY_COLORS: Record<string, { ring: string; text: string; border: string }> = {
  Frontend:         { ring: "#60a5fa", text: "text-blue-400",    border: "border-blue-400/20" },
  Backend:          { ring: "#34d399", text: "text-emerald-400", border: "border-emerald-400/20" },
  Database:         { ring: "#a78bfa", text: "text-violet-400",  border: "border-violet-400/20" },
  "GIS & 시각화":   { ring: "#38bdf8", text: "text-sky-400",     border: "border-sky-400/20" },
  "실시간 통신":    { ring: "#fb923c", text: "text-orange-400",  border: "border-orange-400/20" },
  "DevOps & Tools": { ring: "#f97316", text: "text-orange-400",  border: "border-orange-400/20" },
};

// 레벨 체계 (일관성)
const LEVELS = [
  { min: 5,   label: "주력",  color: "#fbbf24", isPrimary: true  }, // 금색 + 별
  { min: 4,   label: "숙련",  color: "#34d399", isPrimary: false },
  { min: 3,   label: "활용",  color: "#60a5fa", isPrimary: false },
  { min: 2,   label: "기초",  color: "#a78bfa", isPrimary: false },
  { min: 0,   label: "입문",  color: "#94a3b8", isPrimary: false },
];

function getLevelInfo(level: number) {
  return LEVELS.find((l) => level >= l.min) ?? LEVELS[LEVELS.length - 1];
}

// 범례 컴포넌트
function Legend() {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {LEVELS.map((lv) => (
        <div key={lv.label} className="flex items-center gap-1.5">
          {lv.isPrimary ? (
            <span className="text-sm" style={{ color: lv.color }}>★</span>
          ) : (
            <span
              className="w-2.5 h-2.5 rounded-full inline-block"
              style={{ background: lv.color }}
            />
          )}
          <span className="text-xs text-muted font-medium">{lv.label}</span>
        </div>
      ))}
      <div className="flex items-center gap-1.5 ml-2 pl-3 border-l border-card-border">
        <span className="text-xs text-white bg-card-border rounded px-1.5 py-0.5 font-bold" style={{ fontSize: "9px" }}>i</span>
        <span className="text-xs text-muted font-medium">마우스 올려 상세 보기</span>
      </div>
    </div>
  );
}

function SkillRing({ skill, color, animate }: { skill: Skill; color: string; animate: boolean }) {
  const percent = (skill.level / 5) * 100;
  const targetOffset = CIRCUMFERENCE - (percent / 100) * CIRCUMFERENCE;
  const currentOffset = animate ? targetOffset : CIRCUMFERENCE;
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const levelInfo = getLevelInfo(skill.level);
  const hasTooltip = !!skill.tooltip;
  const isPrimary = skill.level >= 5;

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center gap-2"
      onMouseEnter={() => hasTooltip && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 팝오버 카드 */}
      {hovered && hasTooltip && (
        <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 z-50 w-72 rounded-2xl border border-card-border bg-card-bg shadow-2xl p-4 pointer-events-none">
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-card-border w-0 h-0" />
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-[7px] border-r-[7px] border-t-[7px] border-l-transparent border-r-transparent border-t-card-bg w-0 h-0 -translate-y-px" />

          {/* 헤더 */}
          <div className="flex items-center gap-2 mb-3">
            {isPrimary && <span className="text-sm" style={{ color: levelInfo.color }}>★</span>}
            <span className="font-bold text-sm">{skill.name}</span>
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-full ml-auto"
              style={{ background: `${levelInfo.color}22`, color: levelInfo.color }}
            >
              {levelInfo.label}
            </span>
          </div>

          {/* 레벨 바 (5칸) */}
          <div className="flex gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-1.5 flex-1 rounded-full"
                style={{ background: i <= Math.round(skill.level) ? color : "var(--skill-bar-bg)" }}
              />
            ))}
          </div>

          <p className="text-xs text-muted leading-relaxed">{skill.tooltip}</p>
        </div>
      )}

      {/* 링 */}
      <div
        className={`relative w-20 h-20 rounded-full transition-transform duration-200 ${hasTooltip ? "cursor-pointer hover:scale-110" : ""}`}
      >
        {/* 주력 스킬 글로우 링 */}
        {isPrimary && (
          <div
            className="absolute inset-[-3px] rounded-full animate-pulse"
            style={{ background: `conic-gradient(${levelInfo.color}44, transparent, ${levelInfo.color}44)` }}
          />
        )}

        <svg viewBox="0 0 90 90" className="w-full h-full -rotate-90 relative z-10">
          <circle cx="45" cy="45" r={RADIUS} fill="none" stroke="var(--skill-bar-bg)" strokeWidth="6" />
          <circle
            cx="45" cy="45" r={RADIUS}
            fill="none"
            stroke={isPrimary ? levelInfo.color : color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={currentOffset}
            className="transition-all duration-[2000ms] ease-out"
            style={{ filter: hovered ? `drop-shadow(0 0 6px ${color})` : "none" }}
          />
        </svg>

        {/* 아이콘 */}
        <span className="absolute inset-0 flex items-center justify-center z-10">
          {skill.icon ? (
            <Image
              src={skill.icon.startsWith("http") ? skill.icon : `${DEVICON_BASE}${skill.icon}`}
              alt={skill.name}
              width={32}
              height={32}
              className={`object-contain${skill.icon.startsWith("http") ? " dark:invert" : ""}`}
            />
          ) : (
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-extrabold"
              style={{ backgroundColor: `${color}22`, color }}
            >
              {skill.name.split(/[\s\/]/).map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
            </span>
          )}
        </span>

        {/* 주력 ★ 뱃지 */}
        {isPrimary && (
          <span
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[9px] z-20"
            style={{ background: levelInfo.color, color: "#000" }}
          >
            ★
          </span>
        )}

        {/* ℹ 뱃지 (주력 아닌 것) */}
        {!isPrimary && hasTooltip && (
          <span
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold text-white z-20"
            style={{ background: color }}
          >
            i
          </span>
        )}
      </div>

      {/* 이름 + 레벨 */}
      <div className="text-center">
        <span className="text-xs font-semibold leading-tight block whitespace-nowrap">{skill.name}</span>
        <span
          className="text-[10px] font-bold mt-0.5 block"
          style={{ color: levelInfo.color }}
        >
          {isPrimary ? `★ ${levelInfo.label}` : levelInfo.label}
        </span>
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-section-alt-bg transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Skills</h2>
        <p className="text-muted text-center mb-6 max-w-2xl mx-auto">
          실무 프로젝트 기반으로 쌓아온 기술 스택입니다
        </p>

        <Legend />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => {
            const colors = CATEGORY_COLORS[category.category] ?? {
              ring: "var(--skill-bar-fill)", text: "text-accent", border: "border-accent/20",
            };
            return (
              <div
                key={category.category}
                className={`bg-card-bg border ${colors.border} rounded-2xl p-6 transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1.5 h-5 rounded-full" style={{ background: colors.ring }} />
                  <h3 className={`text-base font-bold ${colors.text}`}>{category.category}</h3>
                </div>
                <div className="flex flex-wrap justify-center gap-5">
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
