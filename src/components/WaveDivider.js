export const WaveDivider = () => (
  <div className="wave-divider" aria-hidden="true">

    {/* Layer 1 — deepest, olive gold, slowest */}
    <svg className="wave-svg wave-svg--1"
      viewBox="0 0 2880 160" preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0,110 C200,60 420,145 720,95 C1020,45 1180,130 1440,95
           C1700,58 1900,140 2160,95 C2420,48 2660,138 2880,95
           L2880,160 L0,160 Z"
        fill="#aa9635"
      />
    </svg>

    {/* Layer 2 — mid tone, medium speed */}
    <svg className="wave-svg wave-svg--2"
      viewBox="0 0 2880 160" preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0,88 C280,130 520,40 780,88 C1040,136 1220,42 1440,88
           C1660,134 1880,40 2160,88 C2420,136 2660,40 2880,88
           L2880,160 L0,160 Z"
        fill="#c8b040"
      />
    </svg>

    {/* Layer 3 — front, light cream-gold, fastest */}
    <svg className="wave-svg wave-svg--3"
      viewBox="0 0 2880 160" preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0,100 C160,55 360,138 600,95 C840,50 1060,130 1440,98
           C1720,65 1940,140 2160,98 C2380,55 2640,138 2880,98
           L2880,160 L0,160 Z"
        fill="#f9edad"
      />
    </svg>

  </div>
);
