import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ExternalLink,
  Gamepad2,
  GraduationCap,
  Mail,
  MapPin,
  MousePointerClick,
  Sparkles,
} from "lucide-react";
import {
  interests,
  profileInfo,
  quickFacts,
  skillAreas,
  techCategories,
  techStack,
  timeline,
  type SkillArea,
  type TechItem,
} from "./data/profileData";
import { projects, vstepgoProject, type ProjectScreenshot } from "./data/projectsData";

const homeSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    const resetScroll = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    resetScroll();
    const frame = window.requestAnimationFrame(resetScroll);
    const timers = [90, 520].map((delay) => window.setTimeout(resetScroll, delay));

    return () => {
      window.cancelAnimationFrame(frame);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/vstepgo" element={<VstepgoPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

function HomePage() {
  const [activeSection, setActiveSection] = useState(homeSections[0].id);
  const [activeSkillId, setActiveSkillId] = useState(skillAreas[0].id);
  const [activeTechCategory, setActiveTechCategory] = useState<TechItem["category"]>("Languages");
  const [expandedProject, setExpandedProject] = useState(projects[0].slug);
  const [pendingSection, setPendingSection] = useState<string | null>(null);
  const pendingSectionTimer = useRef<number | null>(null);

  useRevealOnScroll();
  useActiveSection(homeSections.map((section) => section.id), setActiveSection);

  useEffect(() => {
    return () => {
      if (pendingSectionTimer.current) window.clearTimeout(pendingSectionTimer.current);
    };
  }, []);

  const activeSkill = skillAreas.find((skill) => skill.id === activeSkillId) ?? skillAreas[0];
  const filteredTech = techStack.filter((item) => item.category === activeTechCategory);

  const handleNavSelect = (id: string) => {
    setActiveSection(id);
    setPendingSection(id);

    if (pendingSectionTimer.current) window.clearTimeout(pendingSectionTimer.current);
    pendingSectionTimer.current = window.setTimeout(() => setPendingSection(null), 950);
  };

  return (
    <>
      <HomeNav activeSection={pendingSection ?? activeSection} onSelectSection={handleNavSelect} />
      <main>
        <section className="hero-page panel-section" id="home">
          <div className="hero-grid page-container">
            <div className="hero-copy reveal">
              <span className="section-kicker">Nguyễn Minh Khôi / 2003</span>
              <h1>{profileInfo.role}</h1>
              <p className="hero-headline">{profileInfo.headline}</p>
              <p className="hero-intro">{profileInfo.intro}</p>
              <div className="hero-actions">
                <ScrollButton targetId="skills" variant="primary">
                  <MousePointerClick size={18} />
                  Năng lực chính
                </ScrollButton>
                <ScrollButton targetId="projects" variant="secondary">
                  <ExternalLink size={18} />
                  Dự án
                </ScrollButton>
              </div>
            </div>

            <div className="hero-card reveal">
              <div className="portrait-wrap">
                <img src={profileInfo.avatar} alt="Nguyễn Minh Khôi" />
                <span>Frontend</span>
              </div>
              <div className="hero-card__body">
                <h2>{profileInfo.name}</h2>
                <p>{profileInfo.education}</p>
                <div className="mini-meta">
                  <span>
                    <MapPin size={14} />
                    {profileInfo.location}
                  </span>
                  <span>
                    <Gamepad2 size={14} />
                    AI tools, mobile UX, gaming systems
                  </span>
                </div>
              </div>
            </div>

            <div className="quick-facts reveal">
              {quickFacts.map((fact) => (
                <article key={fact.label}>
                  <small>{fact.label}</small>
                  <strong>{fact.value}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="panel-section" id="about">
          <div className="page-container split-section">
            <SectionIntro
              kicker="Profile"
              title="Profile."
              text="Fresher ngành Công nghệ thông tin tại Đại học FPT HCM, tập trung vào React, TypeScript, UI engineering và trải nghiệm mobile."
            />
            <div className="about-panels reveal">
              {timeline.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="about-card" key={item.title}>
                    <Icon size={24} />
                    <span>{item.meta}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                );
              })}
            </div>
            <div className="interest-row reveal">
              {interests.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="interest-card" key={item.title}>
                    <Icon size={22} />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="panel-section section-soft" id="skills">
          <div className="page-container">
            <SectionIntro
              kicker="Core strengths"
              title="Năng lực chính."
              text="Các nhóm năng lực phục vụ phát triển sản phẩm số: web frontend, mobile UI, UI/UX, state management và tooling."
            />
            <SkillExplorer activeSkill={activeSkill} activeSkillId={activeSkillId} onChange={setActiveSkillId} />
          </div>
        </section>

        <section className="panel-section" id="stack">
          <div className="page-container">
            <SectionIntro
              kicker="Tech stack"
              title="Tech stack."
              text="Công cụ đang sử dụng cho phát triển giao diện, quản lý dữ liệu phía client, mobile app và quy trình build/deploy."
            />
            <TechStackPanel
              activeCategory={activeTechCategory}
              items={filteredTech}
              onCategoryChange={setActiveTechCategory}
            />
          </div>
        </section>

        <section className="panel-section section-soft" id="projects">
          <div className="page-container">
            <SectionIntro
              kicker="Projects"
              title="Dự án tiêu biểu."
              text="VSTEPGO được giữ như case study chính, dùng để chứng minh năng lực frontend/mobile qua giao diện, luồng dữ liệu và trải nghiệm sản phẩm."
            />
            <div className="project-grid reveal">
              {projects.map((project) => {
                const Icon = project.icon;
                const ProofIcon = project.proofIcon;
                const MediaIcon = project.mediaIcon;
                const isExpanded = expandedProject === project.slug;
                return (
                  <article className={`project-card ${isExpanded ? "is-expanded" : ""}`} key={project.slug}>
                    <button
                      className="project-card__main"
                      onClick={() => setExpandedProject(isExpanded ? "" : project.slug)}
                      type="button"
                    >
                      <span className="project-icon">
                        <Icon size={24} />
                      </span>
                      <div>
                        <small>{project.type}</small>
                        <h3>{project.title}</h3>
                        <p>{project.summary}</p>
                      </div>
                      <ChevronDown size={20} className="project-chevron" />
                    </button>
                    {isExpanded ? (
                      <div className="project-card__details">
                        <img src={project.image} alt={`${project.title} dashboard preview`} />
                        <div className="project-detail-copy">
                          <div className="project-proof-row">
                            <span>
                              <ProofIcon size={16} />
                              Case study evidence
                            </span>
                            <span>
                              <MediaIcon size={16} />
                              Mobile + Web + Admin
                            </span>
                          </div>
                          <TagRow items={project.tags} />
                          <Link className="btn btn-primary" to={`/projects/${project.slug}`}>
                            Xem case study
                            <ArrowRight size={18} />
                          </Link>
                        </div>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="panel-section contact-section" id="contact">
          <div className="page-container contact-grid">
            <div className="reveal">
              <span className="section-kicker">Contact</span>
              <h2>Liên hệ.</h2>
              <p>Thông tin liên hệ và hồ sơ trực tuyến được trình bày gọn, ưu tiên kênh GitHub và CV trong bản công khai.</p>
            </div>
            <div className="contact-card reveal">
              <Mail size={26} />
              <h3>Profile channels</h3>
              <p>GitHub / LinkedIn / CV / Email</p>
              <ScrollButton targetId="home" variant="secondary">
                <ArrowLeft size={18} />
                Back to top
              </ScrollButton>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function HomeNav({
  activeSection,
  onSelectSection,
}: {
  activeSection: string;
  onSelectSection: (id: string) => void;
}) {
  return (
    <header className="site-nav">
      <Link className="brand-mark" to="/">
        <span>NMK</span>
        <strong>Nguyễn Minh Khôi</strong>
      </Link>
      <nav aria-label="Main sections">
        {homeSections.map((section) => (
          <button
            className={activeSection === section.id ? "is-active" : ""}
            key={section.id}
            onClick={() => {
              onSelectSection(section.id);
              scrollToSection(section.id);
            }}
            type="button"
          >
            {section.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

function SkillExplorer({
  activeSkill,
  activeSkillId,
  onChange,
}: {
  activeSkill: SkillArea;
  activeSkillId: string;
  onChange: (id: string) => void;
}) {
  const Icon = activeSkill.icon;

  return (
    <div className="skill-explorer reveal">
      <div className="skill-button-grid" role="tablist" aria-label="Skill areas">
        {skillAreas.map((skill) => {
          const SkillIcon = skill.icon;
          const isActive = activeSkillId === skill.id;
          return (
            <button
              aria-selected={isActive}
              className={`skill-switch ${isActive ? "is-active" : ""}`}
              key={skill.id}
              onClick={() => onChange(skill.id)}
              role="tab"
              type="button"
            >
              <SkillIcon size={20} />
              <span>{skill.label}</span>
            </button>
          );
        })}
      </div>
      <article className="skill-detail-panel">
        <div className="panel-title-row">
          <span className="panel-icon">
            <Icon size={28} />
          </span>
          <div>
            <small>{activeSkill.label}</small>
            <h3>{activeSkill.title}</h3>
          </div>
        </div>
        <p>{activeSkill.summary}</p>
        <div className="detail-columns">
          <div>
            <h4>Strengths</h4>
            <ul>
              {activeSkill.strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Tools</h4>
            <TagRow items={activeSkill.tools} />
          </div>
        </div>
      </article>
    </div>
  );
}

function TechStackPanel({
  activeCategory,
  items,
  onCategoryChange,
}: {
  activeCategory: TechItem["category"];
  items: TechItem[];
  onCategoryChange: (category: TechItem["category"]) => void;
}) {
  return (
    <div className="tech-panel reveal">
      <div className="tech-filter" role="tablist" aria-label="Technology categories">
        {techCategories.map((category) => (
          <button
            aria-selected={activeCategory === category}
            className={activeCategory === category ? "is-active" : ""}
            key={category}
            onClick={() => onCategoryChange(category)}
            role="tab"
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="tech-icon-grid">
        {items.map((item) => {
          return (
            <article className={`tech-card tone-${item.tone}`} key={item.name}>
              <span className="tech-card__icon" style={{ "--brand-color": item.brandColor } as CSSProperties}>
                {item.iconSrc ? <img src={item.iconSrc} alt="" aria-hidden="true" /> : <b>{item.mark}</b>}
              </span>
              <strong>{item.name}</strong>
              <small>{item.note}</small>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function VstepgoPage() {
  const navigate = useNavigate();
  const [activeShot, setActiveShot] = useState<ProjectScreenshot>(vstepgoProject.screenshots[0]);

  useRevealOnScroll();

  return (
    <main className="project-page">
      <header className="project-topbar">
        <button className="btn btn-secondary" onClick={() => navigate("/")} type="button">
          <ArrowLeft size={18} />
          Home
        </button>
        <span>{vstepgoProject.type}</span>
      </header>

      <section className="project-hero page-container">
        <div className="reveal">
          <span className="section-kicker">{vstepgoProject.period}</span>
          <h1>{vstepgoProject.title}</h1>
          <p>{vstepgoProject.summary}</p>
          <div className="project-role-card">
            <GraduationCap size={22} />
            <span>{vstepgoProject.role}</span>
          </div>
          <TagRow items={vstepgoProject.stack} />
        </div>
        <ProjectMockup screenshot={activeShot} />
      </section>

      <section className="project-section page-container">
        <SectionIntro
          kicker="Major flows"
          title="Product flows."
          text="Các luồng chính của VSTEPGO thể hiện phạm vi triển khai mobile app, learner experience, admin UI và media workflow."
        />
        <div className="feature-grid reveal">
          {vstepgoProject.features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article className="feature-card" key={feature.title}>
                <Icon size={24} />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="project-section page-container">
        <SectionIntro
          kicker="Screenshots"
          title="Screenshots."
          text="Gallery giao diện thể hiện các màn learner, exam, feedback, booking và admin dashboard."
        />
        <div className="screenshot-layout reveal">
          <ProjectMockup screenshot={activeShot} />
          <div className="shot-list">
            {vstepgoProject.screenshots.map((shot) => (
              <button
                className={activeShot.src === shot.src ? "is-active" : ""}
                key={shot.src}
                onClick={() => setActiveShot(shot)}
                type="button"
              >
                <img src={shot.src} alt={shot.alt} />
                <span>{shot.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="project-section page-container">
        <SectionIntro
          kicker="Honest boundaries"
          title="Scope."
          text="VSTEPGO được trình bày đúng phạm vi đồ án tốt nghiệp, tập trung vào năng lực triển khai frontend/mobile và product UI."
        />
        <div className="boundary-list reveal">
          {vstepgoProject.boundaries.map((boundary) => (
            <article key={boundary}>
              <Sparkles size={18} />
              <p>{boundary}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function ProjectMockup({ screenshot }: { screenshot: ProjectScreenshot }) {
  return (
    <figure className={`project-mockup mockup-${screenshot.kind} reveal`}>
      <div className="mockup-bar">
        <span />
        <span />
        <span />
        <strong>{screenshot.label}</strong>
      </div>
      <div className="mockup-screen">
        <img src={screenshot.src} alt={screenshot.alt} />
      </div>
    </figure>
  );
}

function SectionIntro({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return (
    <div className="section-intro reveal">
      <span className="section-kicker">{kicker}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function TagRow({ items }: { items: string[] }) {
  return (
    <div className="tag-row">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function ScrollButton({
  targetId,
  variant,
  children,
}: {
  targetId: string;
  variant: "primary" | "secondary";
  children: ReactNode;
}) {
  return (
    <button className={`btn btn-${variant}`} onClick={() => scrollToSection(targetId)} type="button">
      {children}
    </button>
  );
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function useActiveSection(ids: string[], setActiveSection: (id: string) => void) {
  const idsKey = useMemo(() => ids.join("|"), [ids]);

  useEffect(() => {
    const idList = idsKey.split("|");
    let frame = 0;

    const updateActiveSection = () => {
      const marker = window.scrollY + Math.min(window.innerHeight * 0.36, 260);
      let current = idList[0];

      for (const id of idList) {
        const node = document.getElementById(id);
        if (!node) continue;
        if (node.offsetTop <= marker) current = id;
      }

      setActiveSection(current);
    };

    const scheduleUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [idsKey, setActiveSection]);
}

function useRevealOnScroll() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        }
      },
      { threshold: 0.12 },
    );

    for (const node of nodes) observer.observe(node);
    return () => observer.disconnect();
  }, []);
}

export default App;
