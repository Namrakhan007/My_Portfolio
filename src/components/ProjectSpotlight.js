import { useState, useEffect } from "react";

export const ProjectSpotlight = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(0);

  const handleSelect = (index) => {
    if (index === activeIndex || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setDisplayIndex(index);
      setActiveIndex(index);
      setAnimating(false);
    }, 280);
  };

  const active = projects[displayIndex];

  const techMap = {
    "Islamic Roots": ["React", "Node.js", "MongoDB", "Community"],
    "Agent Security Harness": ["Python", "LLMs", "Security", "Research"],
    "KITTI Visual Localization and Trajectory Estimation": ["PyTorch", "OpenCV", "Deep Learning"],
    "ML Classifier Web Application": ["Streamlit", "Python", "ML/DL"],
    "Profinity Detection": ["BERT", "Transformers", "Next.js", "NLP"],
    "RAG Model": ["LangChain", "Python", "Vector DB", "LLM"],
    "Whether Forcasting Application": ["React", "REST API", "JavaScript"],
    "My Daily Journal": ["Node.js", "Express", "EJS"],
  };

  const tags = techMap[active.title] || [];

  return (
    <div className="spotlight-wrapper">
      {/* Left — project list */}
      <div className="spotlight-list">
        {projects.map((proj, i) => (
          <button
            key={i}
            className={`spotlight-list-item ${i === activeIndex ? "active" : ""}`}
            onClick={() => handleSelect(i)}
          >
            <span className="spotlight-list-num">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="spotlight-list-title">{proj.title}</span>
            {proj.badge && (
              <span className="spotlight-list-badge">{proj.badge}</span>
            )}
            <span className="spotlight-list-arrow">→</span>
          </button>
        ))}
      </div>

      {/* Right — preview panel */}
      <div className={`spotlight-preview ${animating ? "fade-out" : "fade-in"}`}>
        <div className="spotlight-img-wrap">
          <img src={active.imgUrl} alt={active.title} />
          <div className="spotlight-img-overlay" />
          {active.badge && (
            <span className="spotlight-preview-badge">{active.badge}</span>
          )}
        </div>
        <div className="spotlight-info">
          <p className="spotlight-index">
            {String(displayIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </p>
          <h3 className="spotlight-title">{active.title}</h3>
          <p className="spotlight-desc">{active.description}</p>
          <div className="spotlight-tags">
            {tags.map((tag, i) => (
              <span key={i} className="spotlight-tag">{tag}</span>
            ))}
          </div>
          <a
            href={active.link}
            target="_blank"
            rel="noopener noreferrer"
            className="spotlight-cta"
          >
            View Project <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
};
