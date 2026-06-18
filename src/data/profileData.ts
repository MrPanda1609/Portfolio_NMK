import type { ComponentType } from "react";
import {
  Bot,
  BrainCircuit,
  Code2,
  DatabaseZap,
  Gamepad2,
  GraduationCap,
  MonitorSmartphone,
  Palette,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";
import androidIcon from "devicon/icons/android/android-original.svg";
import antDesignIcon from "devicon/icons/antdesign/antdesign-original.svg";
import appleIcon from "devicon/icons/apple/apple-original.svg";
import bunIcon from "devicon/icons/bun/bun-original.svg";
import cssIcon from "devicon/icons/css3/css3-original.svg";
import dockerIcon from "devicon/icons/docker/docker-original.svg";
import expoIcon from "devicon/icons/expo/expo-original.svg";
import githubActionsIcon from "devicon/icons/githubactions/githubactions-original.svg";
import googleIcon from "devicon/icons/google/google-original.svg";
import htmlIcon from "devicon/icons/html5/html5-original.svg";
import javascriptIcon from "devicon/icons/javascript/javascript-original.svg";
import npmIcon from "devicon/icons/npm/npm-original-wordmark.svg";
import reactIcon from "devicon/icons/react/react-original.svg";
import reactNativeIcon from "devicon/icons/reactnative/reactnative-original.svg";
import tailwindIcon from "devicon/icons/tailwindcss/tailwindcss-original.svg";
import typescriptIcon from "devicon/icons/typescript/typescript-original.svg";
import vercelIcon from "devicon/icons/vercel/vercel-original.svg";
import viteIcon from "devicon/icons/vitejs/vitejs-original.svg";

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
  iconSrc?: string;
  mark?: string;
  note: string;
  brandColor: string;
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
  headline: "Frontend developer focused on React, TypeScript and mobile UI.",
  education: "Công nghệ thông tin - Đại học FPT HCM",
  birthYear: "2003",
  location: "Ho Chi Minh City, Vietnam",
  avatar: "/assets/avatar.jpg",
  intro:
    "Tốt nghiệp ngành Công nghệ thông tin tại Đại học FPT HCM. Định hướng chuyên môn gồm React, TypeScript, responsive UI, client state và trải nghiệm mobile với React Native/Expo.",
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
      "Xây dựng UI React có cấu trúc rõ, component hóa hợp lý, đầy đủ trạng thái loading/error/empty và responsive ổn định.",
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
      "Thiết kế giao diện có hierarchy rõ, hover/press state, active state, motion vừa đủ và pattern mở rộng thông tin theo panel.",
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
      "Sử dụng toolchain phục vụ build nhanh, cấu trúc code rõ, dễ kiểm tra và dễ mở rộng khi quy mô dự án tăng.",
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
    text: "Tìm hiểu AI tools cho học tập, phản hồi sản phẩm và tối ưu quy trình phát triển phần mềm.",
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
    text: "Nền tảng ngành CNTT, tập trung vào frontend và sản phẩm web/mobile trong giai đoạn cuối.",
    icon: GraduationCap,
  },
  {
    title: "Frontend focus",
    meta: "React / TypeScript",
    text: "Ưu tiên giao diện rõ, có cấu trúc component và xử lý tốt các trạng thái thực tế.",
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
    text: "Quan tâm cách AI hỗ trợ feedback, học tập, workflow và công cụ dành cho developer.",
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
  { name: "TypeScript", category: "Languages", iconSrc: typescriptIcon, note: "Typed UI/data models", brandColor: "#3178C6", tone: "blue" },
  { name: "JavaScript", category: "Languages", iconSrc: javascriptIcon, note: "Runtime language", brandColor: "#F7DF1E", tone: "yellow" },
  { name: "HTML5", category: "Languages", iconSrc: htmlIcon, note: "Semantic structure", brandColor: "#E34F26", tone: "orange" },
  { name: "CSS", category: "Languages", iconSrc: cssIcon, note: "Responsive + motion", brandColor: "#663399", tone: "violet" },
  { name: "React", category: "Frontend", iconSrc: reactIcon, note: "Component UI", brandColor: "#61DAFB", tone: "cyan" },
  { name: "Vite", category: "Frontend", iconSrc: viteIcon, note: "Fast web builds", brandColor: "#646CFF", tone: "violet" },
  { name: "TanStack Router", category: "Frontend", mark: "TSR", note: "Typed routes", brandColor: "#111827", tone: "black" },
  { name: "Tailwind CSS", category: "Frontend", iconSrc: tailwindIcon, note: "Utility styling", brandColor: "#06B6D4", tone: "cyan" },
  { name: "React Native", category: "Mobile", iconSrc: reactNativeIcon, note: "Mobile screens", brandColor: "#61DAFB", tone: "cyan" },
  { name: "Expo", category: "Mobile", iconSrc: expoIcon, note: "Mobile runtime", brandColor: "#000020", tone: "black" },
  { name: "Android", category: "Mobile", iconSrc: androidIcon, note: "Native target", brandColor: "#3DDC84", tone: "green" },
  { name: "iOS", category: "Mobile", iconSrc: appleIcon, note: "Native target", brandColor: "#000000", tone: "black" },
  { name: "Google Sign-In", category: "Mobile", iconSrc: googleIcon, note: "Auth integration", brandColor: "#4285F4", tone: "blue" },
  { name: "Ant Design", category: "UI", iconSrc: antDesignIcon, note: "Admin UI", brandColor: "#0170FE", tone: "blue" },
  { name: "Lucide", category: "UI", mark: "Lu", note: "Interface icons", brandColor: "#F56565", tone: "rose" },
  { name: "SVG", category: "UI", mark: "SVG", note: "Vector visuals", brandColor: "#FFB13B", tone: "orange" },
  { name: "TanStack Form", category: "State & Data", mark: "TSF", note: "Form state", brandColor: "#111827", tone: "black" },
  { name: "TanStack Query", category: "State & Data", mark: "TSQ", note: "Server state", brandColor: "#FF4154", tone: "rose" },
  { name: "TanStack Table", category: "State & Data", mark: "TST", note: "Data grids", brandColor: "#FF4154", tone: "rose" },
  { name: "npm", category: "Tooling", iconSrc: npmIcon, note: "Package scripts", brandColor: "#CB3837", tone: "rose" },
  { name: "Bun", category: "Tooling", iconSrc: bunIcon, note: "Project tooling", brandColor: "#000000", tone: "black" },
  { name: "Docker", category: "Tooling", iconSrc: dockerIcon, note: "Deployment context", brandColor: "#2496ED", tone: "blue" },
  { name: "GitHub Actions", category: "Tooling", iconSrc: githubActionsIcon, note: "CI/CD context", brandColor: "#2088FF", tone: "blue" },
  { name: "Vercel", category: "Tooling", iconSrc: vercelIcon, note: "Frontend deploy", brandColor: "#000000", tone: "black" },
];
