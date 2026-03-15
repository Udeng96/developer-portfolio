export interface Contact {
  type: "email" | "github" | "linkedin" | "website";
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  image: string;
  contacts: Contact[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
  icon?: string; // devicon CDN path
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface Career {
  company: string;
  position: string;
  period: {
    start: string;
    end: string;
  };
  description: string;
  responsibilities: string[];
}

export type ProjectCategory = "company" | "personal";

export interface Project {
  id: string;
  category: ProjectCategory;
  title: string;
  description: string;
  image: string;
  period: {
    start: string;
    end: string;
  };
  role: string;
  techStack: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const profile: Profile = {
  name: "홍길동",
  title: "Full-Stack Developer",
  bio: "5년차 풀스택 개발자로, 사용자 경험을 최우선으로 생각하며 확장 가능하고 유지보수하기 쉬운 코드를 작성합니다. 새로운 기술을 배우고 적용하는 것을 즐기며, 팀과의 협업을 통해 더 나은 결과를 만들어냅니다.",
  image: "/images/profile/avatar.svg",
  contacts: [
    { type: "email", label: "hello@example.com", url: "mailto:hello@example.com" },
    { type: "github", label: "GitHub", url: "https://github.com" },
    { type: "linkedin", label: "LinkedIn", url: "https://linkedin.com" },
  ],
};

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 5, icon: "react/react-original.svg" },
      { name: "Next.js", level: 4, icon: "nextjs/nextjs-original.svg" },
      { name: "TypeScript", level: 5, icon: "typescript/typescript-original.svg" },
      { name: "Tailwind CSS", level: 4, icon: "tailwindcss/tailwindcss-original.svg" },
      { name: "HTML/CSS", level: 5, icon: "html5/html5-original.svg" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 4, icon: "nodejs/nodejs-original.svg" },
      { name: "Spring Boot", level: 4, icon: "spring/spring-original.svg" },
      { name: "Python", level: 3, icon: "python/python-original.svg" },
      { name: "PostgreSQL", level: 4, icon: "postgresql/postgresql-original.svg" },
      { name: "MongoDB", level: 3, icon: "mongodb/mongodb-original.svg" },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker", level: 4, icon: "docker/docker-original.svg" },
      { name: "AWS", level: 3, icon: "amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Git", level: 5, icon: "git/git-original.svg" },
      { name: "CI/CD", level: 3, icon: "githubactions/githubactions-original.svg" },
      { name: "Linux", level: 4, icon: "linux/linux-original.svg" },
    ],
  },
];

export const careers: Career[] = [
  {
    company: "(주) ABC 테크놀로지",
    position: "시니어 풀스택 개발자",
    period: { start: "2023.01", end: "현재" },
    description: "B2B SaaS 플랫폼 개발팀에서 핵심 서비스 설계 및 개발을 담당하고 있습니다.",
    responsibilities: [
      "마이크로서비스 기반 백엔드 아키텍처 설계 및 구현",
      "React/Next.js 기반 프론트엔드 개발 리드",
      "코드 리뷰 및 주니어 개발자 멘토링",
      "CI/CD 파이프라인 구축 및 배포 자동화",
    ],
  },
  {
    company: "(주) 디지털 솔루션즈",
    position: "풀스택 개발자",
    period: { start: "2021.03", end: "2022.12" },
    description: "다양한 클라이언트 프로젝트를 수행하며 웹 애플리케이션 개발 전반을 담당했습니다.",
    responsibilities: [
      "Spring Boot + React 기반 웹 애플리케이션 개발",
      "REST API 설계 및 데이터베이스 모델링",
      "AWS 기반 인프라 구축 및 운영",
      "애자일 방법론 기반 프로젝트 관리 참여",
    ],
  },
  {
    company: "(주) 스타트업 허브",
    position: "주니어 개발자",
    period: { start: "2020.01", end: "2021.02" },
    description: "스타트업 환경에서 빠르게 프로토타입을 개발하고 서비스를 런칭하는 경험을 쌓았습니다.",
    responsibilities: [
      "Node.js + Express 기반 백엔드 API 개발",
      "프론트엔드 UI 컴포넌트 개발 및 유지보수",
      "데이터베이스 설계 및 쿼리 최적화",
    ],
  },
];

export const projects: Project[] = [
  // 회사 프로젝트
  {
    id: "company-1",
    category: "company",
    title: "이커머스 플랫폼",
    description:
      "대규모 온라인 쇼핑몰 플랫폼을 설계 및 개발했습니다. 상품 관리, 주문 처리, 결제 시스템을 담당했으며, 마이크로서비스 아키텍처를 도입하여 서비스 확장성을 개선했습니다.",
    image: "/images/projects/ecommerce.svg",
    period: { start: "2024.03", end: "2024.12" },
    role: "백엔드 리드 개발자",
    techStack: ["Spring Boot", "React", "PostgreSQL", "Docker", "AWS"],
    highlights: [
      "마이크로서비스 아키텍처 설계 및 구현",
      "일 평균 10만 건의 주문 처리 시스템 구축",
      "결제 시스템 연동 및 안정성 확보",
    ],
  },
  {
    id: "company-2",
    category: "company",
    title: "실시간 채팅 애플리케이션",
    description:
      "WebSocket 기반의 실시간 채팅 서비스를 개발했습니다. 그룹 채팅, 파일 공유, 읽음 확인 기능을 구현했으며, 동시 접속자 수 천명을 처리할 수 있는 아키텍처를 설계했습니다.",
    image: "/images/projects/chat-app.svg",
    period: { start: "2023.06", end: "2023.12" },
    role: "풀스택 개발자",
    techStack: ["Next.js", "Node.js", "Socket.io", "MongoDB", "Redis"],
    highlights: [
      "WebSocket 기반 실시간 메시징 구현",
      "파일 업로드 및 이미지 최적화",
      "동시 접속 5,000명 처리 가능한 서버 구축",
    ],
  },
  {
    id: "company-3",
    category: "company",
    title: "기업 관리 대시보드",
    description:
      "기업 내부용 데이터 관리 대시보드를 개발했습니다. 매출 데이터 시각화, 직원 관리, 프로젝트 트래킹 기능을 포함하며, 직관적인 UI/UX를 통해 업무 효율성을 크게 향상시켰습니다.",
    image: "/images/projects/dashboard.svg",
    period: { start: "2023.01", end: "2023.05" },
    role: "프론트엔드 개발자",
    techStack: ["React", "TypeScript", "D3.js", "Tailwind CSS", "REST API"],
    highlights: [
      "D3.js를 활용한 데이터 시각화 차트 구현",
      "반응형 대시보드 레이아웃 설계",
      "사용자 권한별 접근 제어 시스템 구축",
    ],
  },
  // 개인 프로젝트
  {
    id: "personal-1",
    category: "personal",
    title: "Actor Portfolio",
    description:
      "배우 포트폴리오 풀스택 웹 애플리케이션입니다. 프로필, 필모그래피, 갤러리, 수상 이력을 관리하는 관리자 페이지와 공개 포트폴리오 페이지로 구성되어 있으며, Google Cloud Storage를 통한 이미지 업로드 및 관리 기능을 구현했습니다.",
    image: "/images/projects/actor-portfolio.png",
    period: { start: "2026.03", end: "2026.03" },
    role: "기획 / 풀스택 개발",
    techStack: ["Spring Boot", "React", "TypeScript", "PostgreSQL", "GCS", "Vite"],
    highlights: [
      "Spring Boot + JPA 기반 REST API 설계 및 구현",
      "React + TypeScript 프론트엔드 (공개 페이지 + 관리자 CRUD)",
      "Google Cloud Storage 연동 이미지 업로드 시스템",
      "필모그래피, 갤러리, 수상 이력 CRUD 관리 기능",
    ],
    liveUrl: "https://actor-portfolio-green.vercel.app/",
  },
  {
    id: "personal-2",
    category: "personal",
    title: "개발자 포트폴리오",
    description:
      "Next.js와 Tailwind CSS를 활용한 개인 포트폴리오 웹사이트입니다. 다크/라이트 테마 전환, 반응형 디자인, 원형 차트 기술 스택 시각화 등의 기능을 구현했습니다.",
    image: "/images/projects/dashboard.svg",
    period: { start: "2026.03", end: "2026.03" },
    role: "기획 / 디자인 / 개발",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "next-themes"],
    highlights: [
      "다크/라이트 테마 토글 구현",
      "SVG 기반 원형 차트 스킬 시각화",
      "반응형 레이아웃 설계",
    ],
  },
];
