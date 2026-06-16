import { useState, useEffect } from 'react';

export const PageIntro = () => {
  const [phase, setPhase] = useState('init'); // init → opening → fading → done

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('opening'), 400);  // gate opens
    const t2 = setTimeout(() => setPhase('fading'),  1500); // blur clears
    const t3 = setTimeout(() => setPhase('done'),    2200); // overlay gone
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  // After overlay is gone: render ONLY the two settled brackets (no background)
  if (phase === 'done') {
    return (
      <>
        <div className="pi-bracket pi-bracket--tr pi-settled-tr">
          <span className="pi-arm pi-arm--h" />
          <span className="pi-arm pi-arm--v" />
        </div>
        <div className="pi-bracket pi-bracket--bl pi-settled-bl">
          <span className="pi-arm pi-arm--h" />
          <span className="pi-arm pi-arm--v" />
        </div>
      </>
    );
  }

  return (
    <div className={`page-intro page-intro--${phase}`}>
      <div className="pi-bracket pi-bracket--tr">
        <span className="pi-arm pi-arm--h" />
        <span className="pi-arm pi-arm--v" />
      </div>
      <div className="pi-bracket pi-bracket--bl">
        <span className="pi-arm pi-arm--h" />
        <span className="pi-arm pi-arm--v" />
      </div>
    </div>
  );
};
