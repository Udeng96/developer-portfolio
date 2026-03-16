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
  website?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: {
    start: string;
    end: string;
  };
  description?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  description?: string;
}

export type ProjectCategory = "company" | "personal";

export interface Project {
  id: string;
  category: ProjectCategory;
  title: string;
  description: string;
  image: string;
  images?: string[];
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
  name: "장유정",
  title: "Full-Stack Developer",
  bio: "5년차 풀스택 개발자로, 사용자 경험을 최우선으로 생각하며 확장 가능하고 유지보수하기 쉬운 코드를 작성합니다. 새로운 기술을 배우고 적용하는 것을 즐기며, 팀과의 협업을 통해 더 나은 결과를 만들어냅니다.",
  image: "/images/profile/avatar.svg",
  contacts: [
    { type: "email", label: "docovlog@gmail.com", url: "mailto:docovlog@gmail.com" },
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
    company: "이에스이(주) (ESE Co., Ltd.)",
    position: "대리 / 풀스택 개발자",
    period: { start: "2021.09", end: "현재" },
    description: "U-City 통합관제플랫폼, 영상관제솔루션, 시설물관리시스템 등 ICT 솔루션을 개발·공급하는 영상서비스 전문기업에서 풀스택 개발을 담당하고 있습니다.",
    responsibilities: [
      "통합관제플랫폼 및 영상관제솔루션 웹 애플리케이션 개발",
      "Spring Boot 기반 백엔드 API 설계 및 구현",
      "React/TypeScript 기반 프론트엔드 개발",
      "시설물관리시스템, 도면관리시스템 등 SI 프로젝트 참여",
    ],
    website: "http://www.eseict.com",
  },
];

export const educations: Education[] = [
  {
    institution: "호서대학교",
    degree: "컴퓨터공학 이수",
    period: { start: "2017.03", end: "2021.02" },
    description: "컴퓨터공학 전공으로 소프트웨어 설계, 데이터베이스, 네트워크 등 전반적인 CS 지식을 학습했습니다.",
  },
];

export const certifications: Certification[] = [
  {
    name: "정보처리기사",
    issuer: "한국산업인력공단",
    date: "2021",
  },
];

export const projects: Project[] = [
  // 회사 프로젝트
  {
    id: "company-1",
    category: "company",
    title: "도시재생 관광 키오스크",
    description:
      "남해군 도시재생 사업의 일환으로 관광 정보를 제공하는 터치스크린 키오스크 애플리케이션을 개발했습니다. 관광지 안내, 버스 노선 조회, CCTV 실시간 영상, 날씨 정보 등을 제공하며, 스와이프 기반의 직관적인 터치 UI를 구현했습니다.",
    image: "/images/projects/kiosk/1.png",
    images: [
      "/images/projects/kiosk/1.png",
      "/images/projects/kiosk/2.png",
      "/images/projects/kiosk/3.png",
      "/images/projects/kiosk/4.png",
    ],
    period: { start: "2025.01", end: "2025.03" },
    role: "풀스택 개발자",
    techStack: ["Spring Boot", "React", "Vite", "Zustand", "Swiper", "JPA"],
    highlights: [
      "터치 최적화 멀티페이지 키오스크 UI 개발 (React + Zustand)",
      "관광지·맛집·바래길 등 카테고리별 콘텐츠 관리 시스템 구축",
      "CCTV 실시간 영상 스트리밍 연동",
      "기상청 API 연동 날씨 정보 제공",
      "콘텐츠 관리자 페이지 개발 (파일 업로드·페이지 편집)",
    ],
    githubUrl: "https://github.com/Udeng96/kiosk",
  },
  {
    id: "company-2",
    category: "company",
    title: "KAIST GIS 통합관제 플랫폼",
    description:
      "KAIST 캠퍼스 통합관제를 위한 GIS 기반 웹 플랫폼을 개발했습니다. Leaflet 기반 지도 위에 CCTV, 건물, 시설물 등을 마커로 표시하고, 이벤트 감지·순찰 관리·WebRTC 영상 스트리밍·즐겨찾기 등의 기능을 구현했습니다.",
    image: "/images/projects/gis/1.png",
    period: { start: "2025.04", end: "2025.12" },
    role: "풀스택 개발자",
    techStack: ["Spring Boot", "React", "TypeScript", "Leaflet", "WebRTC", "Zustand", "STOMP"],
    highlights: [
      "Leaflet + Proj4 기반 GIS 지도 시스템 구현",
      "WebRTC 실시간 CCTV 영상 스트리밍 연동",
      "STOMP WebSocket 기반 실시간 이벤트 알림 시스템",
      "순찰 경로 관리 및 드래그앤드롭 UI 구현",
      "시설물·건물·CCTV 마커 관리 및 범례 시스템 개발",
    ],
    githubUrl: "https://github.com/Udeng96/gis",
  },
  {
    id: "company-4",
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
    id: "company-5",
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
    id: "company-6",
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
