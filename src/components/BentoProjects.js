import { useState, useEffect, useRef } from "react";

const ALL_PROJECTS = [
  {
    id: 0,
    title: "Islamic Roots",
    description: "A platform that unites families through their ancestral lineage — connecting generations, preserving heritage, and bringing the great lineage together in one living tree.",
    imgUrl: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&auto=format&fit=crop",
    link: "#",
    badge: "Featured",
    tags: ["React", "Node.js", "MongoDB", "Community"],
    category: "web",
    size: "featured",       // spans 2×2
    accent: "#f0db3c",
  },
  {
    id: 1,
    title: "Agent Security Harness",
    description: "A multi-stage evaluation framework that stress-tests LLM-based agents against prompt injection attacks — benchmarking defence strategies at scale.",
    imgUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop",
    link: "#",
    badge: "Research",
    tags: ["Python", "LLMs", "Security", "Evaluation"],
    category: "ai",
    size: "tall",           // spans 1×2
    accent: "#a8ff78",
  },
  {
    id: 2,
    title: "KITTI Visual Localization",
    description: "Real-time visual localization and trajectory estimation on the KITTI autonomous driving benchmark using deep learning.",
    imgUrl: "https://cdn.prod.website-files.com/60b5ddc843f85816ad55997c/67f4e271a7ce20d56bd11732_AD_4nXewSC16KrTlvQbu5ySU3skVzjXa-WfykoehqiztrAO_R00ZhjNJJ9n5AWXCNJKzRNOXbfLQZXTKYyPLAR271vfRFHUJfoErrP7OZa1yCGu5s4GAvr8lkMemYH4FGHy5FvaDvqnY.png",
    link: "https://github.com/Namrakhan007/KITTI_Visual_Localization-Trajectory_Estimation/tree/main/project_root",
    tags: ["PyTorch", "OpenCV", "Deep Learning"],
    category: "ai",
    size: "normal",
    accent: "#78c8ff",
  },
  {
    id: 3,
    title: "ML Classifier App",
    description: "AI vs Human text detection — a full-stack Streamlit app with fine-tuned transformer classifiers deployed for real-time inference.",
    imgUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop",
    link: "https://github.com/Namrakhan007/AI_vs_Human_Text_Detection",
    tags: ["Streamlit", "BERT", "Python", "ML"],
    category: "ai",
    size: "wide",           // spans 2×1
    accent: "#f0db3c",
  },
  {
    id: 4,
    title: "Profanity Detection",
    description: "NLP pipeline using BERT & Transformers for real-time profanity detection, served through a Next.js interface.",
    imgUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
    link: "https://github.com/profanity-filter-2024/dl-model",
    tags: ["BERT", "Transformers", "Next.js", "NLP"],
    category: "ai",
    size: "normal",
    accent: "#ff9f43",
  },
  {
    id: 5,
    title: "RAG Model",
    description: "Retrieval-Augmented Generation pipeline — ground LLM responses in your own document corpus using vector search.",
    imgUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop",
    link: "https://github.com/Namrakhan007/RAG_MODEL",
    tags: ["LangChain", "Vector DB", "LLM", "Python"],
    category: "ai",
    size: "normal",
    accent: "#a8ff78",
  },
  {
    id: 6,
    title: "Weather Forecast App",
    description: "Real-time weather forecasting with dynamic UI built in React, integrating live weather APIs with location detection.",
    imgUrl: "https://images.unsplash.com/photo-1504608524841-42584120d693?w=800&auto=format&fit=crop",
    link: "https://github.com/Namrakhan007/weather_forcasting",
    tags: ["React", "REST API", "JavaScript"],
    category: "web",
    size: "normal",
    accent: "#78c8ff",
  },
  {
    id: 7,
    title: "My Daily Journal",
    description: "A full-stack journaling web app with authentication, rich text entries, and a clean Node/Express backend.",
    imgUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop",
    link: "https://github.com/Namrakhan007/Daily_journal",
    tags: ["Node.js", "Express", "EJS"],
    category: "web",
    size: "normal",
    accent: "#f0db3c",
  },
];

const FILTERS = [
  { label: "All", value: "all" },
  { label: "AI & ML", value: "ai" },
  { label: "Web Dev", value: "web" },
  { label: "Research", value: "research" },
];

const TypingText = ({ text, active }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (active && !started) {
      setStarted(true);
      let i = 0;
      timerRef.current = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(timerRef.current);
      }, 18);
    }
    if (!active) {
      setDisplayed("");
      setStarted(false);
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [active, text]);

  return (
    <span>
      {displayed}
      {active && displayed.length < text.length && (
        <span className="bento-cursor">|</span>
      )}
    </span>
  );
};

const BentoCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const categoryLabel = { ai: "AI / ML", web: "Web Dev", research: "Research" };

  return (
    <a
      ref={cardRef}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`bento-card bento-card--${project.size} ${hovered ? "bento-card--hovered" : ""}`}
      style={{ "--accent": project.accent, animationDelay: `${index * 80}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight glow that follows cursor */}
      <div
        className="bento-spotlight"
        style={{ background: `radial-gradient(240px circle at ${mousePos.x}% ${mousePos.y}%, ${project.accent}22, transparent 70%)` }}
      />

      {/* Image layer */}
      <div className="bento-img-layer">
        <img src={project.imgUrl} alt={project.title} />
        <div className="bento-img-fade" />
      </div>

      {/* Badge */}
      {project.badge && (
        <div className="bento-badge" style={{ background: project.accent, color: "#1a1a0a" }}>
          {project.badge}
        </div>
      )}

      {/* Category chip */}
      <div className="bento-category">{categoryLabel[project.category] || project.category}</div>

      {/* Always-visible bottom info */}
      <div className="bento-info">
        <h4 className="bento-title">{project.title}</h4>
        <div className="bento-tags-row">
          {project.tags.slice(0, 3).map((t, i) => (
            <span key={i} className="bento-tag" style={{ borderColor: `${project.accent}55`, color: project.accent }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Hover overlay */}
      <div className={`bento-hover-panel ${hovered ? "visible" : ""}`}>
        <p className="bento-hover-desc">
          <TypingText text={project.description} active={hovered} />
        </p>
        <div className="bento-hover-cta" style={{ background: project.accent, color: "#1a1a0a" }}>
          View Project ↗
        </div>
      </div>

      {/* Animated border */}
      <div className="bento-border" style={{ "--accent": project.accent }} />
    </a>
  );
};

export const BentoProjects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleIds, setVisibleIds] = useState(ALL_PROJECTS.map((p) => p.id));

  const handleFilter = (val) => {
    setActiveFilter(val);
    if (val === "all") {
      setVisibleIds(ALL_PROJECTS.map((p) => p.id));
    } else if (val === "research") {
      setVisibleIds(ALL_PROJECTS.filter((p) => p.badge === "Research").map((p) => p.id));
    } else {
      setVisibleIds(ALL_PROJECTS.filter((p) => p.category === val).map((p) => p.id));
    }
  };

  const visible = ALL_PROJECTS.filter((p) => visibleIds.includes(p.id));

  return (
    <div className="bento-root">
      {/* Filter bar */}
      <div className="bento-filters">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            className={`bento-filter-btn ${activeFilter === f.value ? "active" : ""}`}
            onClick={() => handleFilter(f.value)}
          >
            {f.label}
            <span className="bento-filter-count">
              {f.value === "all"
                ? ALL_PROJECTS.length
                : f.value === "research"
                ? ALL_PROJECTS.filter((p) => p.badge === "Research").length
                : ALL_PROJECTS.filter((p) => p.category === f.value).length}
            </span>
          </button>
        ))}
      </div>

      {/* Bento grid */}
      <div className={`bento-grid ${visible.length <= 2 ? "bento-grid--few" : ""}`}>
        {visible.map((project, i) => (
          <BentoCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  );
};
