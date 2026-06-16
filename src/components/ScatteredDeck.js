import { useState, useRef } from "react";
import islamicRootsImg from "../assets/img/islamicroots.png";
import agentHarnessImg from "../assets/img/agentharness.png";
import projImg1 from "../assets/img/profanity_filter.png";
import projImg2 from "../assets/img/RAG.png";
import projImg3 from "../assets/img/weather.png";
import projImg5 from "../assets/img/Daily Journal.png";
import projImg7 from "../assets/img/AIvsHuman.png";

const PROJECTS = [
  {
    id: 0,
    title: "Islamic Roots",
    description: "A platform that unites families through ancestral lineage — connecting generations and preserving heritage in one living tree.",
    imgUrl: islamicRootsImg,
    link: "https://islamicroots.org/",
    badge: "Featured",
    tags: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma ORM", "NextAuth.js", "Claude API", "Vercel"],
    accent: "#f0db3c",
  },
  {
    id: 1,
    title: "Agent Security Harness",
    description: "Multi-stage evaluation framework stress-testing LLM agents against prompt injection attacks.",
    imgUrl: agentHarnessImg,
    link: "#",
    badge: "Research",
    tags: ["Python", "LLMs", "Security"],
    accent: "#a8ff78",
  },
  {
    id: 2,
    title: "KITTI Visual Localization",
    description: "Real-time visual localization and trajectory estimation on the KITTI autonomous driving benchmark.",
    imgUrl: "https://cdn.prod.website-files.com/60b5ddc843f85816ad55997c/67f4e271a7ce20d56bd11732_AD_4nXewSC16KrTlvQbu5ySU3skVzjXa-WfykoehqiztrAO_R00ZhjNJJ9n5AWXCNJKzRNOXbfLQZXTKYyPLAR271vfRFHUJfoErrP7OZa1yCGu5s4GAvr8lkMemYH4FGHy5FvaDvqnY.png",
    link: "https://github.com/Namrakhan007/KITTI_Visual_Localization-Trajectory_Estimation/tree/main/project_root",
    tags: ["PyTorch", "OpenCV", "Deep Learning"],
    accent: "#78c8ff",
  },
  {
    id: 3,
    title: "ML Classifier App",
    description: "AI vs Human text detection with fine-tuned transformers deployed via a full-stack Streamlit app.",
    imgUrl: projImg7,
    link: "https://github.com/Namrakhan007/AI_vs_Human_Text_Detection",
    tags: ["Streamlit", "BERT", "ML"],
    accent: "#f0db3c",
  },
  {
    id: 4,
    title: "Profanity Detection",
    description: "NLP pipeline using BERT & Transformers for real-time content moderation via a Next.js interface.",
    imgUrl: projImg1,
    link: "https://github.com/profanity-filter-2024/dl-model",
    tags: ["BERT", "Next.js", "NLP"],
    accent: "#ff9f43",
  },
  {
    id: 5,
    title: "RAG Model",
    description: "Retrieval-Augmented Generation pipeline grounding LLM responses in your own document corpus.",
    imgUrl: projImg2,
    link: "https://github.com/Namrakhan007/RAG_MODEL",
    tags: ["LangChain", "Vector DB", "LLM"],
    accent: "#a8ff78",
  },
  {
    id: 6,
    title: "Weather Forecast App",
    description: "Real-time weather forecasting with live APIs, location detection, and animated React UI.",
    imgUrl: projImg3,
    link: "https://github.com/Namrakhan007/weather_forcasting",
    tags: ["React", "REST API", "JavaScript"],
    accent: "#78c8ff",
  },
  {
    id: 7,
    title: "My Daily Journal",
    description: "Full-stack journaling app with auth, rich text entries, and a clean Node/Express backend.",
    imgUrl: projImg5,
    link: "https://github.com/Namrakhan007/Daily_journal",
    tags: ["Node.js", "Express", "EJS"],
    accent: "#f0db3c",
  },
];

// Stacked pile rotations — spread enough to see each card edge
const STACK_ROTS = [-16, -11, -7, -3, 2, 6, 10, 15];

// Fan positions — wide spacing so cards are clearly separate
const FAN = [
  { x: -560, rot: -10 },
  { x: -400, rot: -7  },
  { x: -240, rot: -4  },
  { x:  -80, rot: -1  },
  { x:   80, rot:  1  },
  { x:  240, rot:  4  },
  { x:  400, rot:  7  },
  { x:  560, rot:  10 },
];

export const ScatteredDeck = () => {
  const [deckHovered, setDeckHovered] = useState(false);
  const [activeId, setActiveId]       = useState(null);
  const stageRef   = useRef(null);
  const switchTimer = useRef(null);
  const activeIdRef = useRef(null);

  // Keep ref in sync so the mousemove handler always sees latest value
  activeIdRef.current = activeId;

  const handleStageMouseMove = (e) => {
    if (!stageRef.current) return;
    // If a card is already open, don't switch — let the user click it
    if (activeIdRef.current !== null) return;

    const rect   = stageRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;

    let closestIdx  = 0;
    let closestDist = Infinity;
    FAN.forEach((f, i) => {
      const dist = Math.abs(mouseX - f.x);
      if (dist < closestDist) { closestDist = dist; closestIdx = i; }
    });

    const targetId = PROJECTS[closestIdx].id;
    if (targetId === activeIdRef.current) return;

    clearTimeout(switchTimer.current);
    switchTimer.current = setTimeout(() => setActiveId(targetId), 100);
  };

  const handleStageLeave = () => {
    clearTimeout(switchTimer.current);
    setDeckHovered(false);
    setActiveId(null);
  };

  return (
    <div className="sdeck-root">
      <p className="sdeck-hint">
        {!deckHovered ? "hover the stack to reveal all projects" : activeId === null ? "now hover a card to explore" : "click to open the project ↗"}
      </p>

      <div
        ref={stageRef}
        className={`sdeck-stage ${deckHovered ? "fanned" : ""}`}
        onMouseEnter={() => setDeckHovered(true)}
        onMouseMove={handleStageMouseMove}
        onMouseLeave={handleStageLeave}
      >
        {PROJECTS.map((proj, i) => {
          const isActive = activeId === proj.id;
          const isDimmed = deckHovered && activeId !== null && !isActive;

          return (
            <a
              key={proj.id}
              href={proj.link === "#" ? undefined : proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`sdeck-card ${isActive ? "sdeck-card--active" : ""} ${isDimmed ? "sdeck-card--dimmed" : ""}`}
              style={{
                "--stack-rot": `${STACK_ROTS[i]}deg`,
                "--fan-x":     `${FAN[i].x}px`,
                "--fan-rot":   `${FAN[i].rot}deg`,
                "--accent":    proj.accent,
                // In fanned state give each card its own z layer so edges don't overlap hit areas
                zIndex:        isActive ? 100 : (deckHovered ? (i + 1) : (8 - i)),
              }}
              onMouseLeave={() => {
                // Only the active card can collapse itself on leave
                if (activeIdRef.current === proj.id) {
                  clearTimeout(switchTimer.current);
                  switchTimer.current = setTimeout(() => setActiveId(null), 150);
                }
              }}
              onClick={(e) => { if (!proj.link || proj.link === "#") e.preventDefault(); }}
            >
              {/* Background image */}
              <div className="sdeck-img">
                <img src={proj.imgUrl} alt={proj.title} />
              </div>

              {/* Scrim */}
              <div className="sdeck-scrim" />

              {/* Badge */}
              {proj.badge && (
                <span className="sdeck-badge" style={{ background: proj.accent, color: "#1a1a0a" }}>
                  {proj.badge}
                </span>
              )}

              {/* Small label (visible when NOT active) */}
              <div className="sdeck-label">
                <span className="sdeck-num">0{i + 1}</span>
                <span className="sdeck-short-title">{proj.title}</span>
              </div>

              {/* Full info (visible when active) */}
              <div className="sdeck-expand">
                <p className="sdeck-index">0{i + 1} / 08</p>
                <h4 className="sdeck-title">{proj.title}</h4>
                <p className="sdeck-desc">{proj.description}</p>
                <div className="sdeck-tags">
                  {proj.tags.map((t, ti) => (
                    <span key={ti} className="sdeck-tag" style={{ borderColor: `${proj.accent}99`, color: proj.accent }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="sdeck-cta" style={{ background: proj.accent, color: "#1a1a0a" }}>
                  View Project ↗
                </div>
              </div>

              {/* Border glow */}
              <div className="sdeck-border" />
            </a>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="sdeck-dots">
        {PROJECTS.map((p) => (
          <span
            key={p.id}
            className={`sdeck-dot ${activeId === p.id ? "active" : ""}`}
            style={{ "--accent": p.accent }}
          />
        ))}
      </div>
    </div>
  );
};
