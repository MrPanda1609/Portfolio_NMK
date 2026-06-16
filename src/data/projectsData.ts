import type { IconComponent } from "./profileData";
import {
  AudioLines,
  BarChart3,
  CalendarClock,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Mic,
  ShieldCheck,
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
    "Capstone project luyện thi VSTEP đa nền tảng, thể hiện phạm vi triển khai frontend/mobile với nhiều luồng sản phẩm thực tế.",
  role:
    "Responsibility: Mobile application implementation; frontend/admin flow understanding across UI, API state, dashboard and media workflows.",
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
    "Mobile app với auth, tab navigation, practice, exam, profile, wallet và course booking.",
    "Exam room cho 4 kỹ năng với timer, progress, autosave/resume và result states.",
    "Speaking/audio flow: permission, recording, playback, upload và feedback.",
    "Admin dashboard/content tooling dùng bảng, chart, form và role-based screens.",
  ],
  features: [
    {
      title: "Mobile learning app",
      text: "React Native/Expo app có route structure, secure session, haptics, audio và responsive tablet behavior.",
      icon: Smartphone,
    },
    {
      title: "Exam UX",
      text: "Phòng thi 4 kỹ năng với timer, navigation, warning states, autosave và kết quả.",
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

export const projects = [
  {
    title: vstepgoProject.title,
    type: vstepgoProject.type,
    summary: vstepgoProject.summary,
    slug: vstepgoProject.slug,
    icon: GraduationCap,
    proofIcon: ShieldCheck,
    mediaIcon: AudioLines,
    image: "/assets/evidence/dashboard-overview.png",
    tags: ["React Native", "Expo", "React", "TypeScript", "Admin UI"],
  },
];
