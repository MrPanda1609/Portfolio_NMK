import type { ComponentType } from "react";
import {
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  DatabaseZap,
  Gamepad2,
  GraduationCap,
  Layers3,
  MonitorSmartphone,
  Palette,
  Rocket,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";
import {
  SiAndroid,
  SiAntdesign,
  SiApple,
  SiBun,
  SiCss,
  SiDocker,
  SiExpo,
  SiGithubactions,
  SiGoogle,
  SiHtml5,
  SiJavascript,
  SiNpm,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiSvg,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";

export type IconComponent = ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;

export interface ProfileInfo {
  name: string;
  role: string;
  headline: string;
  education: string;
  birthYear: string;
  location: string;
  avatar: string;
  intro: string;
}

export interface SkillArea {
  id: string;
  label: string;
  title: string;
  icon: IconComponent;
  summary: string;
  strengths: string[];
  tools: string[];
}

export interface TechItem {
  name: string;
  category: "Languages" | "Frontend" | "Mobile" | "UI" | "State & Data" | "Tooling";
  icon: IconComponent;
  note: string;
  tone: "blue" | "cyan" | "green" | "black" | "orange" | "violet" | "rose" | "yellow";
}

export interface InterestItem {
  title: string;
  text: string;
  icon: IconComponent;
}

export const profileInfo: ProfileInfo = {
  name: "Nguyễn Minh Khôi",
  role: "Fresher Frontend Developer",
  headline: "Frontend-focused developer with mobile product experience.",
  education: "Công nghệ thông tin - Đại Học FPT HCM",
  birthYear: "2003",
  location: "Ho Chi Minh City, Vietnam",
  avatar: "/assets/avatar.jpg",
  intro:
    "Fresher Frontend Developer tốt nghiệp ngành Công nghệ thông tin, Đại học FPT HCM. Trọng tâm chuyên môn gồm React, TypeScript, responsive UI, client state và trải nghiệm mobile với React Native/Expo.",
};

export const quickFacts = [
  { label: "Education", value: "FPT University HCM" },
  { label: "Major", value: "Information Technology" },
  { label: "Focus", value: "Frontend Developer" },
  { label: "Also learning", value: "Mobile / AI tools" },
];

export const skillAreas: SkillArea[] = [
  {
    id: "frontend",
    label: "Frontend",
    title: "Web UI Engineering",
    icon: MonitorSmartphone,
    summary:
      "Xây dựng UI React theo hướng rõ luồng, component hóa tốt, có trạng thái loading/error/empty và responsive ổn định.",
    strengths: ["React component architecture", "Responsive layouts", "Form and route UX", "Reusable UI patterns"],
    tools: ["React", "TypeScript", "Vite", "TanStack Router", "Tailwind CSS"],
  },
  {
    id: "mobile",
    label: "Mobile",
    title: "Mobile-first Product UI",
    icon: Smartphone,
    summary:
      "Triển khai giao diện mobile với Expo/React Native, bao gồm navigation, audio permission, secure session và native feedback.",
    strengths: ["Expo Router", "Audio recording flow", "Secure local session", "Haptics and mobile navigation"],
    tools: ["React Native", "Expo", "expo-av", "SecureStore", "Android/iOS"],
  },
  {
    id: "uiux",
    label: "UI/UX",
    title: "Interactive Interface Design",
    icon: Palette,
    summary:
      "Thiết kế giao diện có hierarchy rõ, hover/press state, reveal motion, active state và pattern mở rộng thông tin theo panel.",
    strengths: ["Design tokens", "Motion and press states", "Clear information hierarchy", "Accessible controls"],
    tools: ["CSS", "Tailwind", "Lucide", "SVG", "React Icons"],
  },
  {
    id: "data",
    label: "State/Data",
    title: "Client State and API UX",
    icon: DatabaseZap,
    summary:
      "Tổ chức UI phản hồi theo server state: query, mutation, auth refresh, lỗi form và trạng thái async.",
    strengths: ["TanStack Query", "Token refresh", "API error messages", "Polling and mutation feedback"],
    tools: ["TanStack Query", "ky", "Fetch API", "Zustand", "TypeScript types"],
  },
  {
    id: "tools",
    label: "Tools",
    title: "Modern Frontend Tooling",
    icon: Wrench,
    summary:
      "Sử dụng toolchain phục vụ build nhanh, cấu trúc code rõ, dễ verify và dễ mở rộng khi quy mô dự án tăng.",
    strengths: ["Vite builds", "Package scripts", "CI/CD awareness", "Deployment context"],
    tools: ["npm", "Bun", "Vite", "Docker", "GitHub Actions", "Vercel"],
  },
];

export const interests: InterestItem[] = [
  {
    title: "New coding tech",
    text: "Theo dõi framework, thư viện và workflow mới trong hệ sinh thái frontend hiện đại.",
    icon: Sparkles,
  },
  {
    title: "AI exploration",
    text: "Tìm hiểu AI tools trong học tập, feedback sản phẩm và tối ưu quy trình phát triển phần mềm.",
    icon: Bot,
  },
  {
    title: "Gaming mindset",
    text: "Quan sát flow, feedback, reward, state và cảm giác tương tác từ trải nghiệm game.",
    icon: Gamepad2,
  },
];

export const timeline = [
  {
    title: "FPT University HCM",
    meta: "Information Technology",
    text: "Nền tảng ngành CNTT, tập trung nhiều vào frontend và sản phẩm web/mobile trong giai đoạn cuối.",
    icon: GraduationCap,
  },
  {
    title: "Frontend focus",
    meta: "React / TypeScript",
    text: "Ưu tiên xây giao diện rõ, có cấu trúc component và xử lý tốt trạng thái thực tế.",
    icon: Code2,
  },
  {
    title: "Mobile expansion",
    meta: "React Native / Expo",
    text: "Mở rộng năng lực sang trải nghiệm mobile đa nền tảng, đặc biệt ở audio flow và navigation.",
    icon: Smartphone,
  },
  {
    title: "AI curiosity",
    meta: "Learning by building",
    text: "Quan tâm cách AI kết hợp vào feedback, học tập, workflow và công cụ hỗ trợ developer.",
    icon: BrainCircuit,
  },
];

export const techCategories: TechItem["category"][] = [
  "Languages",
  "Frontend",
  "Mobile",
  "UI",
  "State & Data",
  "Tooling",
];

export const techStack: TechItem[] = [
  { name: "TypeScript", category: "Languages", icon: SiTypescript, note: "Typed UI/data models", tone: "blue" },
  { name: "JavaScript", category: "Languages", icon: SiJavascript, note: "Runtime language", tone: "yellow" },
  { name: "HTML5", category: "Languages", icon: SiHtml5, note: "Semantic structure", tone: "orange" },
  { name: "CSS", category: "Languages", icon: SiCss, note: "Responsive + motion", tone: "blue" },
  { name: "React", category: "Frontend", icon: SiReact, note: "Component UI", tone: "cyan" },
  { name: "Vite", category: "Frontend", icon: SiVite, note: "Fast web builds", tone: "violet" },
  { name: "TanStack Router", category: "Frontend", icon: SiReactrouter, note: "Typed routes", tone: "rose" },
  { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, note: "Utility styling", tone: "cyan" },
  { name: "React Native", category: "Mobile", icon: SiReact, note: "Mobile screens", tone: "cyan" },
  { name: "Expo", category: "Mobile", icon: SiExpo, note: "Mobile runtime", tone: "black" },
  { name: "Android", category: "Mobile", icon: SiAndroid, note: "Native target", tone: "green" },
  { name: "iOS", category: "Mobile", icon: SiApple, note: "Native target", tone: "black" },
  { name: "Google Sign-In", category: "Mobile", icon: SiGoogle, note: "Auth integration", tone: "orange" },
  { name: "Ant Design", category: "UI", icon: SiAntdesign, note: "Admin UI", tone: "blue" },
  { name: "Lucide", category: "UI", icon: Layers3, note: "Interface icons", tone: "green" },
  { name: "SVG", category: "UI", icon: SiSvg, note: "Vector visuals", tone: "orange" },
  { name: "Design Tokens", category: "UI", icon: Cpu, note: "Consistent UI system", tone: "violet" },
  { name: "TanStack Query", category: "State & Data", icon: SiReactquery, note: "Server state", tone: "rose" },
  { name: "Zustand", category: "State & Data", icon: DatabaseZap, note: "Small client stores", tone: "black" },
  { name: "ky / Fetch", category: "State & Data", icon: DatabaseZap, note: "API clients", tone: "green" },
  { name: "npm", category: "Tooling", icon: SiNpm, note: "Package scripts", tone: "rose" },
  { name: "Bun", category: "Tooling", icon: SiBun, note: "Project tooling", tone: "black" },
  { name: "Docker", category: "Tooling", icon: SiDocker, note: "Deployment context", tone: "blue" },
  { name: "GitHub Actions", category: "Tooling", icon: SiGithubactions, note: "CI/CD context", tone: "black" },
  { name: "Vercel", category: "Tooling", icon: SiVercel, note: "Frontend deploy", tone: "black" },
  { name: "Modern tooling", category: "Tooling", icon: Rocket, note: "Build/test mindset", tone: "green" },
];
