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
  tooltip?: string; // 활용 설명
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

export interface ProjectPage {
  title: string;
  description: string;
  image?: string;
}

export interface PressLink {
  title: string;
  url: string;
  source: string;
}

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
  teamSize?: string;
  techStack: string[];
  highlights: string[];
  features?: string[];
  purpose?: string;
  pressLinks?: PressLink[];
  pages?: ProjectPage[];
  liveUrl?: string;
  githubUrl?: string;
}

export const profile: Profile = {
  name: "장유정",
  title: "Full-Stack Developer",
  bio: "백엔드로 시작해 프론트엔드까지, 서비스 전 과정을 직접 다뤄온 풀스택 개발자입니다.\n\nJava/Spring과 React/TypeScript로 4년 5개월간 공공 스마트시티 플랫폼을 개발하며 GIS·실시간 관제·데이터 시각화에 강점을 쌓아왔고, 개발자의 편의가 아닌 사용자의 경험을 기준으로 생각하는 그런 개발자를 목표로 하고 있습니다.",
  image: "/images/profile/avatar.jpg",
  contacts: [
    { type: "email", label: "docovlog@gmail.com", url: "mailto:docovlog@gmail.com" },
    { type: "linkedin", label: "LinkedIn", url: "https://linkedin.com" },
  ],
};

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      {
        name: "React", level: 5, icon: "react/react-original.svg",
        tooltip: "다수의 공공 관제 시스템 메인 UI 프레임워크로 활용. 복잡한 GIS 대시보드, 실시간 이벤트 패널, CCTV 뷰어 등 대규모 컴포넌트 설계 및 최적화 경험 다수.",
      },
      {
        name: "TypeScript", level: 5, icon: "typescript/typescript-original.svg",
        tooltip: "모든 React 프로젝트에 TypeScript 적용. 인터페이스·제네릭 설계, API 응답 타입 정의, 런타임 오류 사전 차단 등 타입 안정성 확보에 적극 활용.",
      },
      {
        name: "Next.js", level: 4, icon: "nextjs/nextjs-original.svg",
        tooltip: "App Router 기반 풀스택 개발 경험 (주간보고서 프로젝트). 서버 컴포넌트, 라우팅, API Routes 활용 가능. 이 포트폴리오 사이트도 Next.js로 제작.",
      },
      {
        name: "Zustand", level: 5,
        tooltip: "관제 시스템의 GIS 상태, 실시간 이벤트 필터, 선택된 마커 등 복잡한 전역 상태를 Zustand로 관리. Slice 패턴으로 모듈 분리 및 devtools 연동.",
      },
      {
        name: "Tailwind CSS", level: 0.5, icon: "tailwindcss/tailwindcss-original.svg",
        tooltip: "이 포트폴리오 프로젝트에서 기본 유틸리티 클래스 활용 수준. 실무 프로젝트는 주로 Styled Components · CSS Module 사용.",
      },
      {
        name: "HTML/CSS", level: 5, icon: "html5/html5-original.svg",
        tooltip: "Styled Components, CSS Module, 일반 CSS 등 다양한 방식으로 커스텀 UI 구현. 반응형 레이아웃, 애니메이션, 복잡한 레이어 구조 설계 가능.",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Spring Boot", level: 5, icon: "spring/spring-original.svg",
        tooltip: "10개 프로젝트 중 8개의 백엔드를 Spring Boot로 개발. REST API 설계, 인증/인가, 외부 API 연동(기상청·VWorld), 스케줄러, 파일 업로드 등 실무 전반 경험.",
      },
      {
        name: "Java", level: 4, icon: "java/java-original.svg",
        tooltip: "Spring Boot 프로젝트 전반의 주력 언어. JPA 엔티티 설계, 서비스 레이어 비즈니스 로직, 예외 처리 구조 등 실무 수준 활용.",
      },
      {
        name: "Python", level: 0.5, icon: "python/python-original.svg",
        tooltip: "KISA 취약점 점검 도구를 PyQt5·Paramiko·OpenPyXL로 개발한 경험. 스크립트 작성 수준으로 활용 가능.",
      },
      {
        name: "Fastify", level: 0.5, icon: "fastify/fastify-original.svg",
        tooltip: "주간보고서 프로젝트 백엔드를 Fastify + Prisma로 구성. 기본 CRUD API 구현 경험 있으나 실무 주력 언어는 아님.",
      },
      {
        name: "Node.js", level: 3, icon: "nodejs/nodejs-original.svg",
        tooltip: "Fastify 기반 API 서버 운영 및 Next.js 서버 사이드 로직 작성. npm 생태계·패키지 관리 능숙.",
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        name: "PostgreSQL", level: 4, icon: "postgresql/postgresql-original.svg",
        tooltip: "남해군 스마트 경로당 플랫폼 등 다수 프로젝트에서 메인 DB로 활용. 복잡한 조인 쿼리, 인덱스 설계, JPA와의 연동 경험.",
      },
      {
        name: "MySQL", level: 4, icon: "mysql/mysql-original.svg",
        tooltip: "다수 공공 프로젝트의 주력 DB. 테이블 설계, 인덱스 최적화, JPA 엔티티 매핑 등 실무 전반 경험.",
      },
      {
        name: "MariaDB", level: 0.5, icon: "mariadb/mariadb-original.svg",
        tooltip: "일부 프로젝트에서 MySQL 대체재로 사용. 기본 쿼리 및 연동 경험 수준.",
      },
      {
        name: "Prisma", level: 0.5, icon: "https://cdn.simpleicons.org/prisma",
        tooltip: "주간보고서 프로젝트에서 Fastify + PostgreSQL 연동에 Prisma ORM 사용. 기본 CRUD 및 스키마 마이그레이션 경험.",
      },
      {
        name: "JPA", level: 4, icon: "https://cdn.simpleicons.org/hibernate",
        tooltip: "Spring Boot 프로젝트 전반의 ORM. 연관관계 매핑, JPQL, QueryDSL 기초, N+1 문제 인식 및 해결 경험.",
      },
    ],
  },
  {
    category: "GIS & 시각화",
    items: [
      {
        name: "Leaflet", level: 4, icon: "https://cdn.simpleicons.org/leaflet",
        tooltip: "10개 프로젝트 중 7개에서 지도 구현의 핵심 라이브러리로 활용. 커스텀 마커·팝업·레이어·클러스터·히트맵·드로잉 툴 등 고급 기능 구현 경험.",
      },
      {
        name: "Highcharts", level: 4,
        tooltip: "이벤트 발생 추이, 수위 시계열, 단계별 통계, 유입·유출 대시보드 등 다양한 차트 유형 구현. 실시간 데이터 업데이트 및 커스텀 툴팁 설계 경험.",
      },
      {
        name: "VWorld", level: 3,
        tooltip: "화성시·화성특례시 프로젝트에서 국토부 VWorld API 기반 지도 연동. 타일 레이어 설정, 주소 검색, 레이어 전환(일반·위성) 구현.",
      },
    ],
  },
  {
    category: "실시간 통신",
    items: [
      {
        name: "WebSocket", level: 4,
        tooltip: "관제 시스템 전반에서 서버-클라이언트 실시간 이벤트 수신에 활용. 재연결 처리, 메시지 파싱, 상태 동기화 등 운영 환경 경험 다수.",
      },
      {
        name: "WebRTC", level: 3, icon: "https://cdn.simpleicons.org/webrtc",
        tooltip: "KAIST GIS 프로젝트에서 CCTV 실시간 영상 스트리밍 구현. P2P 연결 설정, 시그널링 서버 연동, 영상 스트림 렌더링 경험.",
      },
      {
        name: "STOMP", level: 1.5,
        tooltip: "KAIST GIS에서 Spring STOMP 기반 실시간 알림 수신 구현. 구독·발행 패턴 기초 수준 경험.",
      },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      {
        name: "Git", level: 5, icon: "git/git-original.svg",
        tooltip: "모든 프로젝트에서 Git 버전 관리. 브랜치 전략, PR 코드 리뷰, 충돌 해결, GitLab CI 기초 활용.",
      },
      {
        name: "Linux", level: 4, icon: "linux/linux-original.svg",
        tooltip: "공공 프로젝트 운영 서버(CentOS·Ubuntu) 배포 및 관리. 서비스 등록, 로그 모니터링, 방화벽 설정, 쉘 스크립트 작성 경험.",
      },
      {
        name: "Docker", level: 0.5, icon: "docker/docker-original.svg",
        tooltip: "기본 컨테이너 실행 및 docker-compose를 활용한 개발 환경 구성 수준. 실무 배포에서는 직접 서버 배포 방식 주로 사용.",
      },
      {
        name: "Vite", level: 4, icon: "vitejs/vitejs-original.svg",
        tooltip: "화성특례시·CCTV 민원관리 등 React 프로젝트의 빌드 도구로 활용. 개발 서버 설정, 프록시 구성, 빌드 최적화 경험.",
      },
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
    date: "2020.12",
  },
];

export const projects: Project[] = [
  // 회사 프로젝트
  {
    id: "company-2",
    category: "company",
    title: "KAIST GIS 통합관제 플랫폼",
    description:
      "KAIST 캠퍼스 통합관제를 위한 GIS 기반 웹 플랫폼을 개발했습니다. Leaflet 기반 지도 위에 CCTV, 건물, 시설물 등을 마커로 표시하고, 이벤트 감지·순찰 관리·WebRTC 영상 스트리밍·즐겨찾기 등의 기능을 구현했습니다.",
    image: "/images/projects/gis/2.png",
    images: [
      "/images/projects/gis/2.png",
      "/images/projects/gis/3.png",
      "/images/projects/gis/4.png",
      "/images/projects/gis/5.png",
    ],
    period: { start: "2025.04", end: "2025.12" },
    role: "풀스택 개발자",
    teamSize: "총 3명 (BE 1명, FE 2명)",
    techStack: ["Spring Boot", "React", "TypeScript", "Leaflet", "WebRTC", "Zustand", "STOMP"],
    highlights: [
      "Leaflet + Proj4 기반 GIS 지도 시스템 구현",
      "WebRTC 실시간 CCTV 영상 스트리밍 연동",
      "STOMP WebSocket 기반 실시간 이벤트 알림 시스템",
      "순찰 경로 관리 및 드래그앤드롭 UI 구현",
      "시설물·건물·CCTV 마커 관리 및 범례 시스템 개발",
    ],
    pages: [
      {
        title: "이벤트 탭",
        description: "캠퍼스 구역별 이벤트 현황을 조회합니다. 지난 이벤트 내역 모달을 통해 기간별 이벤트 이력을 확인할 수 있습니다.",
        image: "/images/projects/gis/2.png",
      },
      {
        title: "즐겨찾기 탭",
        description: "자주 사용하는 건물·CCTV를 즐겨찾기로 등록하고 구역별로 필터링하여 빠르게 접근할 수 있습니다.",
        image: "/images/projects/gis/3.png",
      },
      {
        title: "CCTV 등록",
        description: "지도에서 위치를 클릭하여 마커를 지정하고 CCTV 유형·명칭·RTSP 주소·VNS 관리번호를 입력해 등록합니다.",
        image: "/images/projects/gis/4.png",
      },
      {
        title: "순찰 그룹 등록",
        description: "구역별 CCTV를 선택하여 순찰 그룹을 구성합니다. 최소 3대 이상 선택 시 순찰 모드로 자동 전환됩니다.",
        image: "/images/projects/gis/5.png",
      },
    ],
  },
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
    role: "기획 / 단독 풀스택 개발",
    teamSize: "1명 (단독 개발)",
    techStack: ["Spring Boot", "React", "Vite", "Zustand", "Swiper", "JPA"],
    highlights: [
      "터치 최적화 멀티페이지 키오스크 UI 개발 (React + Zustand)",
      "관광지·맛집·바래길 등 카테고리별 콘텐츠 관리 시스템 구축",
      "CCTV 실시간 영상 스트리밍 연동",
      "기상청 API 연동 날씨 정보 제공",
      "콘텐츠 관리자 페이지 개발 (파일 업로드·페이지 편집)",
    ],
    pages: [
      {
        title: "메인 화면",
        description: "남해군에서 등록한 영상 또는 사진을 전체 화면으로 보여주는 메인 화면입니다. 날씨 정보와 함께 관광지 정보 바로가기를 제공합니다.",
        image: "/images/projects/kiosk/1.png",
      },
      {
        title: "관광지도",
        description: "남해군 전체 지도 위에 관광지 마커를 표시하고, 읍·면 탭 또는 지도 클릭으로 해당 지역의 주요 관광지 목록을 확인할 수 있습니다.",
        image: "/images/projects/kiosk/2.png",
      },
      {
        title: "관광지 상세",
        description: "선택한 관광지의 소개·주소·연락처·주차 정보 등 상세 내용을 이미지와 함께 제공합니다. 이전/다음 버튼으로 인근 관광지를 탐색할 수 있습니다.",
        image: "/images/projects/kiosk/3.png",
      },
      {
        title: "남해 12경",
        description: "남해를 대표하는 12경을 그리드 형태로 보여줍니다. 각 경을 터치하면 상세 소개 페이지로 이동합니다.",
        image: "/images/projects/kiosk/4.png",
      },
    ],
  },
  {
    id: "company-ssc",
    category: "company",
    title: "남해군 스마트 경로당 통합관제 플랫폼",
    description:
      "남해군 230개소 경로당과 1,800여 개 시설물을 실시간으로 모니터링하는 GIS 기반 통합관제 웹 플랫폼입니다. 화재·비상벨 이벤트 감지, CCTV 영상 관제, 시설물 상태 모니터링, 콘텐츠 스케줄 관리, 통계 대시보드 등을 제공하며, WebSocket 기반 실시간 알림과 다중 데이터베이스 연동을 통해 경로당 운영을 종합 관리합니다.",
    image: "/images/projects/namhae-ssc/1.png",
    images: [
      "/images/projects/namhae-ssc/1.png",
      "/images/projects/namhae-ssc/2.png",
      "/images/projects/namhae-ssc/3.png",
      "/images/projects/namhae-ssc/4.png",
      "/images/projects/namhae-ssc/5.png",
    ],
    period: { start: "2023.06", end: "2026.03" },
    role: "프로젝트 리더 / 풀스택 개발자",
    teamSize: "총 3명 (풀스택 3명)",
    techStack: ["Spring Boot", "React", "TypeScript", "Leaflet", "WebSocket", "Zustand", "PostgreSQL", "Highcharts"],
    highlights: [
      "프로젝트 리더로서 3인 팀 기술 방향 수립 및 일정 관리",
      "TTA 소프트웨어 품질인증(GS인증) 획득",
      "경남일보·보안뉴스·내외일보·국제뉴스 등 다수 언론 보도",
    ],
    features: [
      "Leaflet 기반 GIS 지도에 경로당·시설물 실시간 상태 표시",
      "WebSocket 기반 화재·비상벨 이벤트 실시간 알림 시스템",
      "CCTV 영상 관제 및 시설물 장애 모니터링 대시보드",
      "콘텐츠 스케줄링 및 경로당별 영상·공지 송출 관리",
      "Highcharts 기반 이벤트·시설·운영 통계 시각화",
      "PostgreSQL + MySQL + MariaDB 다중 DB 연동",
    ],
    pressLinks: [
      { source: "보안뉴스", title: "남해군, 3년 동안 스마트경로당 230개소 구축... 스마트경로당 시대 열다", url: "https://m.boannews.com/html/detail.html?idx=140643" },
      { source: "경남일보", title: "남해군, 스마트경로당 230개소 구축 완료", url: "https://www.gnnews.co.kr/news/articleView.html?idxno=624642" },
      { source: "내외일보", title: "남해군, 스마트경로당 230개소 구축 완료", url: "https://www.naewoeilbo.com/news/articleView.html?idxno=2253215" },
      { source: "국제뉴스", title: "남해군 전역에 '스마트경로당 시대' 활짝 피었다", url: "https://www.gukjenews.com/news/articleView.html?idxno=3441638" },
    ],
    pages: [
      {
        title: "메인 대시보드",
        description: "남해군 9개 읍·면별 경로당 수와 이벤트 현황을 GIS 지도 위에 실시간으로 표시합니다. 지역 클릭 시 해당 읍·면의 상세 경로당 목록으로 전환됩니다.",
        image: "/images/projects/namhae-ssc/1.png",
      },
      {
        title: "경로당 이벤트 관제",
        description: "화재·비상벨 이벤트 목록과 해당 경로당의 CCTV 영상을 동시에 확인합니다. 지도 위 경로당 마커 클릭 시 주변 CCTV 영상이 팝업으로 표시됩니다.",
        image: "/images/projects/namhae-ssc/2.png",
      },
      {
        title: "시설물 대시보드",
        description: "경로당별 시설물(비상벨·화재센서·셋톱박스·CCTV 등) 상태를 실시간으로 모니터링하고 장애 이력을 관리합니다.",
        image: "/images/projects/namhae-ssc/3.png",
      },
      {
        title: "콘텐츠 스케줄 관리",
        description: "경로당 TV에 표출할 영상 콘텐츠와 공지 알림을 업로드하고, 지역별·날짜별로 스케줄을 설정합니다.",
        image: "/images/projects/namhae-ssc/4.png",
      },
      {
        title: "통계",
        description: "이벤트 발생 현황, 지역별 비상벨 통계, 경로당 TOP10 발생률 등을 Highcharts 기반 차트로 시각화합니다.",
        image: "/images/projects/namhae-ssc/5.png",
      },
    ],
  },
  {
    id: "company-seongnam",
    category: "company",
    title: "성남시 스마트시티 통합플랫폼",
    description:
      "성남시 스마트시티 인프라를 실시간으로 모니터링하는 GIS 기반 통합관제 웹 플랫폼입니다. Kakao Maps 기반 지도 위에 119·112·부영이·IOT 등 10여 종의 이벤트를 실시간 관제하고, CCTV 다중 영상 플레이어, 행정동별 스마트 안전 통계, 레이어·범례 관리 등을 제공합니다.",
    image: "/images/projects/seongnam/1.png",
    images: [
      "/images/projects/seongnam/1.png",
      "/images/projects/seongnam/2.png",
      "/images/projects/seongnam/3.png",
      "/images/projects/seongnam/4.png",
    ],
    period: { start: "2023.03", end: "2025.04" },
    role: "풀스택 개발자",
    teamSize: "3명 (풀스택 3명)",
    techStack: ["Spring Boot", "Java", "MyBatis", "PostgreSQL", "WebSocket", "MQTT", "Quartz", "React", "TypeScript", "Webpack", "Leaflet", "Kakao Maps", "GeoServer", "Highcharts", "Redux Saga", "Zustand", "React Query", "MUI", "react-player"],
    purpose: "성남시 스마트시티 인프라(119·112·IOT·CCTV 등) 운영 효율화를 위해 GIS 기반 이벤트·영상·환경 데이터를 단일 플랫폼에서 통합 관제할 수 있도록 개발되었습니다.",
    highlights: [
      "Kakao Maps 기반 GIS 지도 위에 119·112·부영이·IOT 등 10여 종 이벤트 실시간 마커 표시",
      "이벤트 탭: 발생지역·타입·내용 복합 검색 및 100건+ 목록 실시간 조회",
      "CCTV 탭: 선택 위치 주변 CCTV 6분할 동시 재생 (react-player)",
      "스마트 안전 서비스 통계: 행정동별 이벤트 맵 + 유형별(부영이·119·112·NDMS 등) 집계",
      "범례 탭: GeoServer 레이어 On/Off, Daum 지도 타입 전환, Wi-Fi 데이터 업로드·다운로드",
      "상단바 실시간 기상정보(기온·습도·바람·미세먼지) 및 특보 마퀴 알림",
      "Spring WebSocket + Netty 기반 실시간 이벤트 수신 및 MQTT IoT 센서 연동",
      "Quartz 스케줄러 기반 주차·Wi-Fi 데이터 주기 수집, 다중 DB 연동",
    ],
    pages: [
      {
        title: "범례 · 레이어 설정",
        description: "재난·공공·학교·쉼터·인프라 등 카테고리별 GIS 레이어를 트리 구조로 On/Off 제어합니다. Daum 일반·위성 지도 전환, 자적건·행정동·교통상황 등 6종 레이어 설정, IOT 수질계측소 팝업에서 실시간 이온농도 차트를 확인할 수 있습니다.",
        image: "/images/projects/seongnam/2.png",
      },
      {
        title: "이벤트 관제 · GIS 지도",
        description: "발생지역·이벤트 타입·내용으로 복합 검색 후 GIS 지도에 클러스터 마커로 표시합니다. 검색 결과 100건+ 목록에서 이벤트를 선택하면 지도 중심이 이동하며 우측 패널에 주변 CCTV 영상이 표시됩니다.",
        image: "/images/projects/seongnam/3.png",
      },
      {
        title: "스마트 안전 서비스 통계",
        description: "행정동별 이벤트 발생 현황을 지도형 히트맵으로 표시하고, 부영이·119·112·NDMS·지능형·비상벨·수위계 등 유형별 집계를 카드로 보여줍니다. 오늘·이번주·이번달·최근 5년 등 기간 필터와 직접 날짜 선택을 지원합니다.",
        image: "/images/projects/seongnam/4.png",
      },
      {
        title: "메인 · 보안 유의 화면",
        description: "성남시 스마트시티 통합플랫폼 접속 시 표시되는 영상정보 보안 유의 안내 화면입니다. 개인정보보호법 제15조에 의거한 CCTV 영상 열람 기준과 보안 유의 사항을 안내합니다.",
        image: "/images/projects/seongnam/1.png",
      },
    ],
  },
  {
    id: "company-tamky",
    category: "company",
    title: "베트남 꽝남성 땀끼시 스마트시티 대시보드",
    description:
      "베트남 꽝남성 땀끼시(Tam Kỳ)를 위한 스마트시티 통합 대시보드입니다. Leaflet·Cesium 기반 GIS 지도 위에 경계 침입 감지·방문자 통계·기상 정보·조수위·Wi-Fi 현황 등 도시 인프라 데이터를 실시간으로 시각화합니다. 영어·베트남어 다국어를 지원하며, Highcharts 기반 다양한 통계 차트를 제공합니다.",
    image: "/images/projects/tamky/1.png",
    images: [
      "/images/projects/tamky/1.png",
      "/images/projects/tamky/2.png",
      "/images/projects/tamky/3.png",
      "/images/projects/tamky/4.png",
    ],
    period: { start: "2023.08", end: "2024.04" },
    role: "풀스택 개발자",
    teamSize: "3명 (풀스택 3명)",
    techStack: ["Spring Boot", "Java", "JPA", "PostgreSQL", "React", "TypeScript", "Vite", "Leaflet", "Cesium", "Highcharts", "Redux Saga", "i18next"],
    purpose: "베트남 꽝남성 땀끼시의 스마트시티 인프라(경계 감시·방문자 분석·기상·조수위·Wi-Fi 등)를 통합 모니터링하고, 도시 운영 효율화를 위한 데이터 시각화 플랫폼 구축을 목적으로 개발되었습니다.",
    highlights: [
      "Leaflet 기반 GIS 지도 위에 지역별 방문자 현황 마커 및 통계 차트 시각화",
      "Cesium 3D GIS 연동으로 입체적인 도시 공간 데이터 표현",
      "경계 침입 감지(Boundary Surveillance) — 구역별 침입·순찰 이벤트 실시간 감지 및 시간대별·주간·월간 통계",
      "방문자 통계 — 지역별 방문자 수 GIS 지도 표시 및 일별·주별 추이 차트",
      "기상 대시보드 — OpenWeatherMap API 연동, 현재 기온·습도·강수량 및 5일 예보 표시",
      "조수위·Wi-Fi 현황 모니터링 모듈 개발",
      "i18next 기반 영어·베트남어 다국어 지원",
      "Spring Boot + JPA + PostgreSQL 백엔드 REST API 설계 및 구현",
      "Highcharts 기반 시간대별·요일별·월별 복합 이벤트 통계 차트 구현",
    ],
    pages: [
      {
        title: "경계 침입 감지 — 이벤트 그래프",
        description: "garrison(주둔지)·suburb(외곽) 구역별 침입·순찰 감지 이벤트를 시간대별·주간·월간 Highcharts 라인 차트로 시각화합니다. 이상 패턴을 빠르게 파악할 수 있습니다.",
        image: "/images/projects/tamky/1.png",
      },
      {
        title: "경계 침입 감지 — 이벤트 카운트",
        description: "구역·이벤트 유형별 발생 건수를 일별·시간대별·요일별·월별 테이블로 집계합니다. 총계 하이라이트로 이상 다발 시간대를 즉시 확인할 수 있습니다.",
        image: "/images/projects/tamky/2.png",
      },
      {
        title: "기상 대시보드",
        description: "땀끼시 현재 기온·습도·강수량·풍속을 실시간으로 표시하고, 시간대별 기온 추이 차트 및 5일 요일별 날씨 예보 카드를 제공합니다.",
        image: "/images/projects/tamky/3.png",
      },
      {
        title: "방문자 통계",
        description: "지역(An Mỹ·An Phú·Hòa Thuận 등)별 방문자 수를 GIS 지도 위에 클러스터 마커로 표시하고, 일별·요일별·기간별 방문자 추이를 Highcharts 차트로 시각화합니다.",
        image: "/images/projects/tamky/4.png",
      },
    ],
  },
  {
    id: "company-3",
    category: "company",
    title: "화성특례시 스마트도시 통합관제 플랫폼",
    description:
      "화성특례시 스마트도시 인프라를 실시간으로 모니터링하는 GIS 기반 통합관제 웹 플랫폼입니다. VWorld 지도 위에 이벤트 마커·CCTV를 표시하고, 소방119·경찰112·순찰차·안전귀가 등 6개 유형의 이벤트를 실시간으로 관제합니다. CCTV 6분할 영상 플레이어, 히트맵 분석, 스마트도시 현황 통계 등을 제공합니다.",
    image: "/images/projects/hwaseong/1.png",
    images: [
      "/images/projects/hwaseong/1.png",
      "/images/projects/hwaseong/2.png",
      "/images/projects/hwaseong/3.png",
      "/images/projects/hwaseong/4.png",
      "/images/projects/hwaseong/5.png",
    ],
    period: { start: "2024.04", end: "2024.06" },
    role: "단독 풀스택 개발",
    teamSize: "1명 (단독 개발)",
    techStack: ["Spring Boot", "React", "TypeScript", "Vite", "Leaflet", "Zustand", "TanStack Query", "Highcharts", "WebSocket", "VWorld"],
    highlights: [
      "단독으로 프론트엔드·백엔드 전체 설계 및 구현",
      "VWorld 타일맵 기반 GIS 지도 위 이벤트·CCTV 마커 실시간 렌더링",
      "WebSocket 기반 소방119·경찰112·순찰차·안전귀가·재난·법무부 6종 이벤트 실시간 수신",
      "CCTV 6분할 영상 플레이어 및 지도 연동 구현",
      "이벤트 히트맵 시각화 및 기간별 통계 Excel 다운로드 기능 개발",
      "Zustand + TanStack Query 기반 상태 관리 아키텍처 설계",
    ],
    features: [
      "이벤트 탭: 이벤트 타입·내용·발생지역 조건 검색 및 지도 마커 표시",
      "CCTV 탭: CCTV명·종류 검색 및 지도 위치 연동",
      "범례 탭: 배경 지도 설정 (일반/위성 전환)",
      "지도 선택 위치 주변 CCTV 6분할 영상 자동 표시",
      "히트맵 분석: 기간별 이벤트 발생 밀도 시각화",
      "스마트도시 현황 통계: 금일·월별·기간 검색, Excel 다운로드",
    ],
    pages: [
      {
        title: "이벤트 관제 대시보드",
        description: "이벤트 타입·내용·발생지역으로 조건 검색하고 지도 위 마커로 실시간 확인합니다. 우측 패널에서 주변 CCTV 영상을 동시에 모니터링합니다.",
        image: "/images/projects/hwaseong/1.png",
      },
      {
        title: "CCTV 6분할 영상 플레이어",
        description: "지도에서 이벤트 또는 위치를 선택하면 인근 CCTV 영상이 6분할 화면으로 자동 표시됩니다.",
        image: "/images/projects/hwaseong/2.png",
      },
      {
        title: "CCTV 검색",
        description: "CCTV명·종류로 검색하여 지도 위 위치를 확인하고 영상 플레이어와 연동합니다.",
        image: "/images/projects/hwaseong/3.png",
      },
      {
        title: "범례 / 지도 설정",
        description: "배경 지도를 일반·위성으로 전환하고 시설물 범례를 확인합니다.",
        image: "/images/projects/hwaseong/4.png",
      },
      {
        title: "스마트도시 현황 통계",
        description: "소방119·경찰112 등 6종 이벤트의 금일·월별·기간별 통계를 확인하고 Excel로 다운로드합니다.",
        image: "/images/projects/hwaseong/5.png",
      },
    ],
  },
  {
    id: "company-6",
    category: "company",
    title: "화성시 수위감시 대시보드",
    description:
      "화성시 하천·저류지의 IoT 수위 센서를 실시간으로 모니터링하는 조기경보 시스템입니다. Leaflet 기반 위성지도 위에 센서 위치를 단계별(기본·주의·경계·위험)로 시각화하고, WebSocket으로 이벤트를 실시간 수신합니다. 기상청 특보 연동, 월별·일별·시간별 이벤트 통계 차트를 제공합니다.",
    image: "/images/projects/easapi/1.png",
    images: [
      "/images/projects/easapi/1.png",
      "/images/projects/easapi/2.png",
    ],
    period: { start: "2023.06", end: "2023.12" },
    role: "단독 풀스택 개발",
    teamSize: "1명 (단독 개발)",
    techStack: ["Spring Boot", "Java", "React", "TypeScript", "Leaflet", "WebSocket", "JPA", "기상청 API"],
    highlights: [
      "Leaflet 위성지도 기반 수위 센서 위치 실시간 시각화 (단계별 색상 마커)",
      "WebSocket 활용 이벤트 실시간 수신 및 통계 자동 갱신",
      "기상청 특보 API 연동 — 호우주의보·홍수경보 등 발령 현황 표시",
      "월별·일별·시간별 이벤트 발생 내역 테이블 및 수위 측정 차트",
      "IoT 센서·CCTV 관리 및 회원 권한 관리 백엔드 API 설계",
    ],
    pages: [
      {
        title: "메인 대시보드",
        description: "화성시 전역 하천·저류지의 수위 센서를 위성지도 위에 표시합니다. 우측 패널에서 기상 특보(호우주의보 등) 발령 현황과 이벤트 단계별(주의·경계·위험) 발생 건수를 도넛 차트로 실시간 확인할 수 있습니다.",
        image: "/images/projects/easapi/1.png",
      },
      {
        title: "센서 상세 & 이벤트 내역",
        description: "좌측 목록에서 센서를 선택하면 해당 위치로 지도가 포커싱되고, 우측에 월별·일별 이벤트 발생 내역 테이블과 시간별 수위 측정 상태 차트가 표시됩니다. 팝업에서 위치·좌표·최근 측정 수치를 바로 확인할 수 있습니다.",
        image: "/images/projects/easapi/2.png",
      },
    ],
  },
  {
    id: "company-4",
    category: "company",
    title: "화성시 CCTV 민원관리 대시보드",
    description:
      "화성시 CCTV 민원을 체계적으로 접수·처리·통계화하는 관리 대시보드입니다. Leaflet + VWorld 기반 지도 위에 민원 발생 위치를 마커로 표시하고, 시설물 현황과 이벤트를 통합 관리합니다. 민원 평가 항목별 집계와 Excel 다운로드 기능을 제공합니다.",
    image: "/images/projects/cms/1.png",
    images: [
      "/images/projects/cms/1.png",
      "/images/projects/cms/2.png",
      "/images/projects/cms/3.png",
    ],
    period: { start: "2024.03", end: "2024.03" },
    role: "단독 풀스택 개발",
    teamSize: "1명 (단독 개발)",
    techStack: ["Spring Boot", "Java", "React", "TypeScript", "Vite", "Leaflet", "VWorld", "Redux Toolkit", "JPA"],
    highlights: [
      "단독으로 프론트엔드·백엔드 전체 설계 및 구현",
      "Leaflet + VWorld 기반 지도 위 민원 마커 표시 및 조건 검색",
      "민원 유형·상태별 평가 항목 집계 및 통계 시각화",
      "시설물 관리 시스템(FMS) 연동 및 이벤트 현황 관리",
      "평가 데이터 Excel 다운로드 기능 구현",
    ],
    pages: [
      {
        title: "민원 목록 & 지도",
        description: "VWorld 지도 위에 민원 발생 위치를 마커로 표시하고, 처리 상태(등록 완료·평가 중·평가 완료·설치 완료)별로 색상을 구분합니다. 좌측 검색 패널에서 민원 기간·지역·주소·처리 상태로 조건 검색 후 결과를 리스트로 확인할 수 있습니다.",
        image: "/images/projects/cms/1.png",
      },
      {
        title: "민원 통계",
        description: "연도별 행정동 단위 민원 발생 현황을 월별 테이블로 집계합니다. 통계 데이터를 Excel로 다운로드할 수 있으며, 담당자별 처리 현황 파악에 활용됩니다.",
        image: "/images/projects/cms/2.png",
      },
      {
        title: "CCTV 설치 추천장소 등록",
        description: "민원 주소를 지도에서 직접 선택하거나 좌표로 입력해 CCTV 설치 추천 장소를 등록합니다. 관련 시설물·담당 기관·공람 포함 여부 등을 함께 설정하며, 등록된 정보는 민원 처리 흐름에 연동됩니다.",
        image: "/images/projects/cms/3.png",
      },
    ],
  },
  {
    id: "company-7",
    category: "company",
    title: "재난상황전파 시스템",
    description:
      "재난 이벤트 발생 시 유관기관에 상황을 즉시 전파하는 독립형 웹 시스템입니다. 이벤트 상세 정보(발생 유형·위치·좌표)를 GIS 지도와 함께 확인하고, SMS·공유 방식으로 화성시·행정스마트·행정자치센터 등 수신 대상을 선택해 상황을 전파합니다. 조치 및 보고서 기능도 포함합니다.",
    image: "/images/projects/dst/1.png",
    images: [
      "/images/projects/dst/1.png",
      "/images/projects/dst/2.png",
    ],
    period: { start: "2021.05", end: "2026.03" },
    role: "단독 풀스택 개발 (리팩토링)",
    teamSize: "1명 (단독 개발)",
    techStack: ["Spring Boot", "Kotlin", "Java", "React", "TypeScript", "Redux Saga", "Styled Components", "JPA"],
    highlights: [
      "기존 저품질 소스 전면 리팩토링 — FSD 디렉토리 구조 전환 및 타입 안정성 강화",
      "재난 이벤트 발생 위치·유형·좌표를 Leaflet GIS 지도와 함께 실시간 표시",
      "SMS·공유 방식으로 유관기관 수신 대상 트리 선택 및 상황 전파",
      "이벤트 목록 검색(일시·상태 필터), 조치 및 보고서 관리 기능",
      "Kotlin + Spring Boot 백엔드 → Java 전환 및 빌드 시스템 정비",
    ],
    pages: [
      {
        title: "이벤트 상세 정보",
        description: "재난 이벤트 발생 시 좌측 목록에서 항목을 선택하면 중앙 지도에 발생 위치와 반경이 표시됩니다. 우측 패널에서 발생 유형·일시·처리 상태·발생 위치·좌표를 확인하고, 이벤트 종료 처리를 할 수 있습니다.",
        image: "/images/projects/dst/1.png",
      },
      {
        title: "상황전파(SMS)",
        description: "이벤트 발생 시 화성시·행정스마트·행정자치센터 등 수신 대상 기관을 트리 형태로 선택하고, SMS 또는 공유 방식으로 상황을 전파합니다. 암호·만료 시간·제목·내용·CCTV 링크를 설정해 전송할 수 있습니다.",
        image: "/images/projects/dst/2.png",
      },
    ],
  },
  {
    id: "company-5",
    category: "company",
    title: "경기도 통합관제 플랫폼",
    description:
      "경기도 스마트시티 인프라를 위한 다중 모듈 통합관제 웹 플랫폼입니다. 재난 관제(GIS), 무인국사 관리(HAMS), 목적별 CCTV 열람 3개 독립 모듈로 구성되어 있으며, 각 모듈은 GIS 지도·Highcharts 차트·실시간 영상 플레이어를 통해 현장 상황을 종합 모니터링합니다.",
    image: "/images/projects/reapi/1.png",
    images: [
      "/images/projects/reapi/1.png",
      "/images/projects/reapi/2.png",
    ],
    period: { start: "2022.03", end: "2025.12" },
    role: "풀스택 개발자",
    teamSize: "2명 (풀스택 2명)",
    techStack: ["Spring Boot", "Java", "Kotlin", "React", "TypeScript", "Leaflet", "Highcharts", "Redux Saga", "MUI", "react-player"],
    highlights: [
      "재난 관제 모듈: Leaflet GIS 기반 재난·CCTV·모바일 이벤트 실시간 모니터링",
      "무인국사 관리(HAMS) 모듈: 국사별 CCTV 현황·실시간 상태 대시보드 및 GIS 연동",
      "목적별 CCTV 열람 모듈: 조건별 CCTV 검색 및 드래그앤드롭 레이아웃 영상 뷰어",
      "Highcharts 기반 이벤트·설비 통계 차트 시각화",
      "Spring Boot + Kotlin 혼합 백엔드 API 설계 및 구현",
      "2022~2025년 장기 운영 및 기능 고도화 유지보수",
    ],
    pages: [
      {
        title: "재난관제 대시보드",
        description: "Leaflet 기반 GIS 지도 위에 경기도 전역의 재난 이벤트를 실시간으로 표시합니다. 발생 지역·이벤트 타입으로 조건 검색이 가능하며, 이벤트 클릭 시 상세 정보와 주변 CCTV 영상을 우측 패널에서 바로 확인할 수 있습니다.",
        image: "/images/projects/reapi/1.png",
      },
      {
        title: "목적별 CCTV 열람",
        description: "방범·재난대응·교통 등 목적별로 분류된 CCTV를 검색하고, 드래그앤드롭으로 원하는 화면에 배치해 다중 영상을 동시에 열람합니다. 전체 START 기능으로 등록된 CCTV를 일괄 재생할 수 있습니다.",
        image: "/images/projects/reapi/2.png",
      },
    ],
  },
  // 개인 프로젝트
  {
    id: "personal-2",
    category: "personal",
    title: "ServerWatch — 서버 모니터링 도구",
    description:
      "내부망 Linux 서버를 SSH로 실시간 점검하는 데스크톱 모니터링 도구입니다. Claude AI를 활용해 설계·개발하였으며, 기존 2시간 소요되던 수동 점검 작업을 30분으로 단축했습니다.",
    image: "/images/projects/serverwatch/1.png",
    images: ["/images/projects/serverwatch/1.png"],
    period: { start: "2026.03", end: "2026.03" },
    role: "기획 / 단독 개발",
    teamSize: "1명 (단독 개발)",
    techStack: ["Python", "PyQt5", "Paramiko", "PyInstaller", "Claude AI"],
    purpose: "내부망 Linux 서버 다수를 매번 SSH로 직접 접속해 수작업으로 점검하던 과정이 반복적이고 시간 소모가 컸습니다. 이 과정을 GUI 도구로 자동화하여 점검 시간을 2시간 → 30분으로 대폭 단축했습니다.",
    highlights: [
      "Claude AI를 활용한 전체 아키텍처 설계 및 코드 생성",
      "SSH(Paramiko) 기반 다중 서버 원격 연결 및 서버 목록 저장·관리",
      "Uptime·CPU·Memory·Disk 사용률을 실시간 게이지 카드로 시각화",
      "ese@* 서비스·PostgreSQL·Nginx 서비스 상태 일괄 조회",
      "파티션별 디스크 용량·사용률 테이블 제공",
      "직접 셸 명령 전송 기능으로 즉각적인 서버 조작 가능",
      "PyInstaller 기반 macOS 단독 실행 앱(.app) 패키징",
      "점검 소요 시간 2시간 → 30분으로 단축",
    ],
    pages: [
      {
        title: "서버 모니터링 대시보드",
        description: "연결된 서버의 Uptime, CPU, Memory, Disk 사용률을 게이지 카드로 실시간 표시합니다. 서비스 상태(ese@*, PostgreSQL, Nginx) 및 파티션별 디스크 현황을 한 화면에서 확인할 수 있습니다.",
        image: "/images/projects/serverwatch/1.png",
      },
    ],
    githubUrl: "https://github.com/Udeng96/ServerWatch",
  },
  {
    id: "company-0",
    category: "personal",
    title: "KISA 취약점 점검 도구",
    description:
      "KISA 2026 주요정보통신기반시설 기술적 취약점 분석·평가 방법 상세가이드를 기반으로 개발된 보안 점검 자동화 데스크톱 도구입니다. SSH를 통해 대상 서버에 접속하여 50개 점검 항목을 자동 실행하고, 결과를 캡처·판정하여 Excel 보고서로 자동 생성합니다.",
    image: "/images/projects/kisa/1.png",
    period: { start: "2026.03", end: "2026.03" },
    role: "기획 / 단독 개발",
    teamSize: "1명 (단독 개발)",
    techStack: ["Python", "PyQt5", "Paramiko", "OpenPyXL", "Pillow", "Claude AI"],
    purpose: "16대 서버에서 약 90개 항목의 취약점 점검을 수작업으로 진행하던 중, 반복되는 명령어 입력·결과 캡처·보고서 작성에 막대한 시간이 소요되었습니다. 이 과정을 자동화하여 점검 시간을 대폭 단축하고 인적 오류를 줄이기 위해 제작했습니다.",
    highlights: [
      "Claude AI를 활용한 점검 항목별 명령어·판정 로직 설계 및 코드 생성",
      "SSH 원격 접속을 통한 실시간 보안 점검 자동화",
      "50개 KISA 점검 항목별 명령어 자동 입력·실행·캡처",
      "터미널 출력 기반 자동 판정 (양호/취약/해당없음)",
      "취약 항목 자동 조치 및 수동 확인 필요 항목 분리",
      "스크린샷 포함 Excel 보고서 자동 생성",
      "다중 서버 순차 점검 지원",
    ],
  },
  {
    id: "personal-1",
    category: "personal",
    title: "주간보고서 작성기",
    description:
      "솔루션 개발 본부의 주간 업무 보고서를 효율적으로 작성·관리하는 풀스택 웹 애플리케이션입니다. pnpm monorepo 구조로 Next.js 프론트엔드와 Fastify 백엔드를 분리하여 개발했으며, 공통 타입을 shared 패키지로 관리합니다.",
    image: "/images/projects/weekly-report/1.png",
    images: [
      "/images/projects/weekly-report/1.png",
      "/images/projects/weekly-report/2.png",
      "/images/projects/weekly-report/3.png",
      "/images/projects/weekly-report/4.png",
      "/images/projects/weekly-report/5.png",
    ],
    period: { start: "2026.03", end: "2026.03" },
    role: "기획 / 풀스택 개발",
    teamSize: "1명 (단독 개발)",
    techStack: ["Next.js", "TypeScript", "Fastify", "Prisma", "PostgreSQL", "Zustand", "React Query", "Tailwind CSS", "Claude AI"],
    purpose: "회사에서 매주 금요일 해당 주 업무 내역을 정리해 제출해야 하며, 연말에는 프로젝트별 투입 M/M과 업무 내역을 취합해 별도로 보고해야 합니다. 프로젝트가 많아질수록 수기로 관리하기 어려워지는 문제를 해결하고, 주간보고 작성과 연간 공수 집계를 한 곳에서 효율적으로 관리하기 위해 제작했습니다.",
    highlights: [
      "Claude AI를 활용한 아키텍처 설계, 코드 생성 및 디버깅 전 과정 지원",
      "pnpm monorepo 기반 프론트엔드·백엔드·공통 타입 패키지 분리 구성",
      "Next.js App Router + Zustand + React Query 기반 상태 관리",
      "Fastify + Prisma ORM 기반 REST API 서버 구현",
      "JWT 인증(회원가입·로그인·내 정보 조회) 시스템 개발",
      "프로젝트·주간보고서 CRUD 기능 구현",
      "Docker Compose 기반 PostgreSQL 개발 환경 구성",
    ],
    pages: [
      {
        title: "주간보고서 목록",
        description: "캘린더에서 주 단위로 날짜를 선택하면 해당 주의 업무 목록과 AI 요약이 표시됩니다. 금주 업무 실적과 차주 계획을 한눈에 확인할 수 있습니다.",
        image: "/images/projects/weekly-report/1.png",
      },
      {
        title: "업무 입력",
        description: "날짜·시간대·프로젝트를 선택하고 업무 내용을 계층형으로 입력합니다. 등록된 프로젝트를 태그로 선택하거나 직접 입력할 수 있습니다.",
        image: "/images/projects/weekly-report/2.png",
      },
      {
        title: "보관함",
        description: "지난 주차 보고서를 주 단위로 보관하고, 언제든지 열어볼 수 있습니다.",
        image: "/images/projects/weekly-report/3.png",
      },
      {
        title: "프로젝트 관리",
        description: "담당 프로젝트를 등록·수정·삭제합니다. 프로젝트 코드, 발주처 정보를 관리하며 업무 입력 시 태그로 연동됩니다.",
        image: "/images/projects/weekly-report/4.png",
      },
      {
        title: "통계",
        description: "연간 프로젝트별 투입 현황을 월별 캘린더 뷰와 투입 비율 차트로 시각화합니다. M/M(Man-Month) 단위로 공수를 자동 산출합니다.",
        image: "/images/projects/weekly-report/5.png",
      },
    ],
    githubUrl: "https://github.com/Udeng96/weekly-report",
  },
];
