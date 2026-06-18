import type { IconComponent } from "./profileData";
import {
  AudioLines,
  BarChart3,
  CalendarClock,
  Clapperboard,
  FileText,
  Film,
  GraduationCap,
  History,
  LayoutDashboard,
  Mic,
  PlayCircle,
  Search,
  ShieldCheck,
  ShieldOff,
  Smartphone,
} from "lucide-react";

export interface ProjectScreenshot {
  src: string;
  alt: string;
  label: string;
  kind: "wide" | "browser" | "admin";
}

export interface ProjectFeature {
  title: string;
  text: string;
  icon: IconComponent;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  type: string;
  period: string;
  liveUrl?: string;
  summary: string;
  role: string;
  stack: string[];
  highlights: string[];
  features: ProjectFeature[];
  screenshots: ProjectScreenshot[];
  boundaries: string[];
}

export const vstepgoProject: ProjectDetail = {
  slug: "vstepgo",
  title: "VSTEPGO",
  type: "Capstone Project",
  period: "Final university project",
  summary:
    "Case study capstone về nền tảng luyện thi VSTEP, dùng làm evidence cho năng lực frontend/mobile, UI state và product flow.",
  role:
    "Responsibility: triển khai mobile application; nắm luồng frontend/admin qua UI, API state, dashboard và media workflow.",
  stack: [
    "React Native",
    "Expo Router",
    "React",
    "TypeScript",
    "Vite",
    "TanStack Query",
    "TanStack Router",
    "Tailwind CSS",
    "Ant Design",
    "Recharts",
    "expo-av",
    "SecureStore",
  ],
  highlights: [
    "Mobile app có auth, tab navigation, practice, exam, profile, wallet và course booking.",
    "Exam room cho 4 kỹ năng với timer, progress, autosave/resume và result states.",
    "Speaking/audio flow gồm permission, recording, playback, upload và feedback.",
    "Admin dashboard/content tooling với table, chart, form và role-based screens.",
  ],
  features: [
    {
      title: "Mobile learning app",
      text: "React Native/Expo app có route structure, secure session, haptics, audio và responsive tablet behavior.",
      icon: Smartphone,
    },
    {
      title: "Exam UX",
      text: "Phòng thi 4 kỹ năng với timer, navigation, warning states, autosave và result view.",
      icon: FileText,
    },
    {
      title: "Speaking practice",
      text: "Ghi âm, nhận diện giọng nói, feedback pronunciation/shadowing và speaking submission.",
      icon: Mic,
    },
    {
      title: "Learning dashboard",
      text: "Skill cards, activity heatmap, score trend, radar chart và recommendation context.",
      icon: BarChart3,
    },
    {
      title: "Course booking",
      text: "Luồng khóa học, booking 1-1, wallet coin, promo/top-up và confirmation states.",
      icon: CalendarClock,
    },
    {
      title: "Admin operations",
      text: "Dashboard, CRUD content, exam editor, user/course management và role-aware UI.",
      icon: LayoutDashboard,
    },
  ],
  screenshots: [
    {
      src: "/assets/evidence/dashboard-overview.png",
      alt: "VSTEPGO learner dashboard",
      label: "Learner dashboard",
      kind: "wide",
    },
    {
      src: "/assets/evidence/exam-reading-room.png",
      alt: "VSTEPGO reading exam room",
      label: "Exam room",
      kind: "wide",
    },
    {
      src: "/assets/evidence/exam-speaking-room.png",
      alt: "VSTEPGO speaking exam room",
      label: "Speaking flow",
      kind: "browser",
    },
    {
      src: "/assets/evidence/shadowing-feedback.png",
      alt: "VSTEPGO AI feedback modal",
      label: "Feedback UI",
      kind: "browser",
    },
    {
      src: "/assets/evidence/course-booking.png",
      alt: "VSTEPGO booking screen",
      label: "Booking",
      kind: "browser",
    },
    {
      src: "/assets/evidence/admin-dashboard.png",
      alt: "VSTEPGO admin dashboard",
      label: "Admin dashboard",
      kind: "admin",
    },
  ],
  boundaries: [
    "Đây là capstone project, không trình bày như sản phẩm công ty đang vận hành ở quy mô lớn.",
    "Adaptive learning trong phạm vi hiện tại là recommendation theo skill gap và SRS vocabulary.",
    "Writing/Speaking feedback là rubric-based với AI-assisted evidence/feedback, không claim điểm chính thức.",
  ],
};

export const animeStreamingProject: ProjectDetail = {
  slug: "anime-streaming",
  title: "Anime Streaming Web",
  type: "Frontend Project",
  period: "Personal learning project",
  liveUrl: "https://animefetish.id.vn/",
  summary:
    "Frontend-only anime streaming website sử dụng public APIs, tập trung vào UI phim, tìm kiếm, trang chi tiết và trải nghiệm xem video.",
  role:
    "Responsibility: tự triển khai frontend application, routing, API integration, player UX, local history và các trạng thái giao diện.",
  stack: [
    "React",
    "Vite",
    "JavaScript",
    "React Router",
    "Framer Motion",
    "HLS.js",
    "Firebase",
    "CSS",
  ],
  highlights: [
    "Homepage có hero, danh sách mới cập nhật, top anime, category rows và continue watching.",
    "API layer có cache, fallback source, lọc anime Nhật Bản, chuẩn hóa dữ liệu và xử lý ảnh WebP.",
    "Watch page dùng HLS.js, lưu tiến trình xem, điều khiển player, gesture mobile và skip intro/ad segment.",
    "Auth/comment flow dùng Firebase cho đăng nhập, bình luận và trải nghiệm cá nhân hóa.",
    "Live domain: https://animefetish.id.vn/",
  ],
  features: [
    {
      title: "API-driven catalog",
      text: "Tích hợp public APIs để lấy danh sách anime, tìm kiếm, phân loại, chi tiết phim và tập phát.",
      icon: Film,
    },
    {
      title: "Search and filtering",
      text: "Search page có debounce, pagination, lọc anime-only và xử lý trạng thái loading/empty/error.",
      icon: Search,
    },
    {
      title: "Video player UX",
      text: "Watch page hỗ trợ HLS.js, server switching, keyboard controls, mobile gestures và fullscreen flow.",
      icon: PlayCircle,
    },
    {
      title: "Continue watching",
      text: "Lưu lịch sử xem bằng localStorage, hiển thị tiến trình và cho phép tiếp tục tập đang xem.",
      icon: History,
    },
    {
      title: "Auth and comments",
      text: "Firebase hỗ trợ Google/email auth, form đăng nhập và bình luận theo từng phim.",
      icon: ShieldCheck,
    },
    {
      title: "Learning scope",
      text: "Dự án phục vụ học tập frontend, không quảng cáo, không lợi nhuận và không vận hành thương mại.",
      icon: ShieldOff,
    },
  ],
  screenshots: [
    {
      src: "/assets/evidence/anime-streaming-home.png",
      alt: "Anime streaming website homepage",
      label: "Homepage",
      kind: "wide",
    },
    {
      src: "/assets/evidence/anime-streaming-detail.png",
      alt: "Anime streaming detail page",
      label: "Anime detail",
      kind: "wide",
    },
    {
      src: "/assets/evidence/anime-streaming-watch.png",
      alt: "Anime streaming watch page",
      label: "Watch player",
      kind: "wide",
    },
    {
      src: "/assets/evidence/anime-streaming-search.png",
      alt: "Anime streaming search page",
      label: "Search",
      kind: "wide",
    },
    {
      src: "/assets/evidence/anime-streaming-logo.png",
      alt: "Anime streaming project logo",
      label: "Project logo",
      kind: "browser",
    },
  ],
  boundaries: [
    "Đây là frontend-only personal learning project, không phải sản phẩm thương mại.",
    "Website sử dụng public APIs và chỉ trình bày trong portfolio để chứng minh năng lực frontend/API integration.",
    "Dự án không có quảng cáo, không tạo lợi nhuận và không được mô tả như dịch vụ vận hành chính thức.",
  ],
};

export const projects = [
  {
    title: vstepgoProject.title,
    type: vstepgoProject.type,
    summary: vstepgoProject.summary,
    slug: vstepgoProject.slug,
    icon: GraduationCap,
    proofIcon: ShieldCheck,
    mediaIcon: AudioLines,
    proofLabel: "Case study evidence",
    mediaLabel: "Mobile + Web + Admin",
    ctaLabel: "Xem case study",
    image: "/assets/evidence/dashboard-overview.png",
    tags: ["React Native", "Expo", "React", "TypeScript", "Admin UI"],
  },
  {
    title: animeStreamingProject.title,
    type: animeStreamingProject.type,
    summary: animeStreamingProject.summary,
    slug: animeStreamingProject.slug,
    icon: Clapperboard,
    proofIcon: ShieldOff,
    mediaIcon: PlayCircle,
    proofLabel: "Learning project",
    mediaLabel: "Frontend-only + API",
    ctaLabel: "Xem case study",
    image: "/assets/evidence/anime-streaming-home.png",
    tags: ["React", "Vite", "JavaScript", "React Router", "HLS.js", "Firebase"],
  },
];
