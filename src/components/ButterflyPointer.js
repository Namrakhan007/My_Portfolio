import { useEffect, useRef } from 'react';

// ─── Realistic butterfly drawing ─────────────────────────────────────────────
// All wing functions draw the RIGHT side. The left is mirrored with ctx.scale(-1,1).
// Origin (0,0) = thorax centre.  –Y = head/antenna direction.

function paintForewing(ctx) {
  // ── Wing fill ──
  ctx.beginPath();
  ctx.moveTo(4, -10);
  ctx.bezierCurveTo(13, -27,  32, -50, 50, -63);  // leading edge → apex
  ctx.bezierCurveTo(56, -50,  57, -30, 54, -10);  // outer margin upper
  ctx.bezierCurveTo(50,   2,  39,  13, 23,  17);  // outer margin lower
  ctx.bezierCurveTo(14,  19,   6,   8,  4, -10);  // inner margin
  ctx.closePath();

  const g = ctx.createRadialGradient(16, -20, 2, 16, -20, 58);
  g.addColorStop(0.00, '#fce050');
  g.addColorStop(0.25, '#e8aa18');
  g.addColorStop(0.58, '#c08400');
  g.addColorStop(1.00, '#6a3800');
  ctx.fillStyle = g;
  ctx.fill();

  // ── Dark outer border ──
  ctx.strokeStyle = '#0c0700';
  ctx.lineWidth = 5.5;
  ctx.stroke();

  // ── Wing veins (radial from base) ──
  ctx.strokeStyle = 'rgba(8, 4, 0, 0.50)';
  ctx.lineWidth = 0.75;
  [
    [4,-10, 14,-27, 32,-50, 50,-63],  // Sc/R1 costa
    [4,-10, 18,-22, 38,-32, 56,-26],  // R2
    [4,-10, 20,-12, 42, -8, 57,  0],  // R3/M1
    [4,-10, 18,  0, 36,  8, 46, 14],  // M2/Cu1
    [4,-10, 15,  6, 24, 14, 24, 17],  // Cu2
  ].forEach(([x0,y0,x1,y1,x2,y2,x3,y3]) => {
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.bezierCurveTo(x1,y1, x2,y2, x3,y3);
    ctx.stroke();
  });

  // ── Cross-veins (wing cells) ──
  ctx.strokeStyle = 'rgba(8, 4, 0, 0.36)';
  ctx.lineWidth = 0.6;
  [
    [22,-38, 26,-24], [36,-50, 40,-36],
    [26,-24, 32,-12], [40,-36, 44,-22],
    [32,-12, 37,  0], [44,-22, 48, -8],
    [37,  0, 40, 10], [48, -8, 52,  4],
  ].forEach(([x0,y0,x1,y1]) => {
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
  });

  // ── White marginal spots along the black border ──
  [
    [51,-63,3.2],[55,-47,3],[56,-28,3],
    [54,-10,2.5],[49, 4,2.5],[38,15,2.5],[24,17,2],
  ].forEach(([sx,sy,sr]) => {
    ctx.beginPath();
    ctx.arc(sx, sy, sr, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 252, 215, 0.92)';
    ctx.fill();
  });

  // ── Inner discal eye-spot ──
  ctx.beginPath();
  ctx.ellipse(16, -35, 6, 8.5, 0.15, 0, Math.PI * 2);
  ctx.fillStyle = '#0a0500';
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(16, -35, 3.2, 5, 0.15, 0, Math.PI * 2);
  ctx.fillStyle = '#f8c82a';
  ctx.fill();
  // Highlight inside spot
  ctx.beginPath();
  ctx.arc(14.5, -36.5, 1.2, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255, 252, 200, 0.65)';
  ctx.fill();
}

function paintHindwing(ctx) {
  // ── Wing fill ──
  ctx.beginPath();
  ctx.moveTo(4, -4);
  ctx.bezierCurveTo(22,-12, 48, -7, 60,  5);  // leading edge
  ctx.bezierCurveTo(66, 14, 64, 32, 58, 42);  // outer margin upper
  ctx.bezierCurveTo(52, 53, 36, 60, 20, 56);  // outer margin scallop
  ctx.bezierCurveTo( 8, 50,  2, 34,  4, -4);  // inner/anal margin
  ctx.closePath();

  const g = ctx.createRadialGradient(22, 14, 3, 22, 14, 52);
  g.addColorStop(0.00, '#f0ca38');
  g.addColorStop(0.30, '#d09818');
  g.addColorStop(0.66, '#a87200');
  g.addColorStop(1.00, '#5c3000');
  ctx.fillStyle = g;
  ctx.fill();

  ctx.strokeStyle = '#0c0700';
  ctx.lineWidth = 5;
  ctx.stroke();

  // ── Veins ──
  ctx.strokeStyle = 'rgba(8, 4, 0, 0.46)';
  ctx.lineWidth = 0.75;
  [
    [4,-4, 22,-10, 46, -2, 60,  5],  // Sc/R
    [4,-4, 24,  8, 48, 20, 62, 26],  // M1
    [4,-4, 20, 22, 40, 40, 54, 46],  // M3/Cu1
    [4,-4, 14, 30, 22, 48, 22, 56],  // Cu2/A
  ].forEach(([x0,y0,x1,y1,x2,y2,x3,y3]) => {
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.bezierCurveTo(x1,y1, x2,y2, x3,y3);
    ctx.stroke();
  });

  ctx.strokeStyle = 'rgba(8, 4, 0, 0.32)';
  ctx.lineWidth = 0.6;
  [[28, 2, 32,18],[38,16, 40,32],[28,30, 30,46]].forEach(([x0,y0,x1,y1]) => {
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
  });

  // ── Marginal spots ──
  [[62,10,2.5],[64,28,2.5],[58,44,2.5],[44,58,2.5],[28,58,2],[14,52,2]].forEach(([sx,sy,sr]) => {
    ctx.beginPath();
    ctx.arc(sx, sy, sr, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 252, 215, 0.90)';
    ctx.fill();
  });

  // ── Inner ocelli (eye-spots on hindwing) ──
  [[30,40, 5.5,7.5], [18,26, 4,5.5]].forEach(([sx,sy,rx,ry]) => {
    ctx.beginPath();
    ctx.ellipse(sx, sy, rx, ry, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(10, 5, 0, 0.84)';
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(sx, sy, rx * 0.55, ry * 0.55, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(248, 200, 40, 0.94)';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(sx - rx*0.22, sy - ry*0.22, 1.1, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 252, 200, 0.6)';
    ctx.fill();
  });
}

function paintBody(ctx) {
  // ── Abdomen (tapered from thorax downward) ──
  ctx.beginPath();
  ctx.moveTo(-4, 0);
  ctx.bezierCurveTo(-4.5, 10, -3.5, 22, -1, 30);
  ctx.bezierCurveTo(-0.5, 32, 0.5, 32, 1, 30);
  ctx.bezierCurveTo(3.5, 22, 4.5, 10, 4, 0);
  ctx.closePath();
  ctx.fillStyle = '#0e0800';
  ctx.fill();

  // Abdomen segmentation bands (amber)
  for (let i = 1; i < 7; i++) {
    const sy = i * 4.2;
    const w = 3.8 - i * 0.28;
    ctx.beginPath();
    ctx.ellipse(0, sy, w, 0.9, 0, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(180, 140, 10, ${0.40 - i * 0.04})`;
    ctx.fill();
  }

  // ── Thorax ──
  ctx.beginPath();
  ctx.ellipse(0, -7, 5, 8, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#161000';
  ctx.fill();
  // Subtle highlight
  ctx.beginPath();
  ctx.ellipse(-1, -9, 2, 4, -0.2, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(90, 65, 0, 0.38)';
  ctx.fill();

  // ── Head ──
  ctx.beginPath();
  ctx.arc(0, -18, 5.5, 0, Math.PI * 2);
  ctx.fillStyle = '#0e0800';
  ctx.fill();

  // Compound eyes
  [[-2.8, -18], [2.8, -18]].forEach(([ex, ey]) => {
    ctx.beginPath();
    ctx.arc(ex, ey, 2, 0, Math.PI * 2);
    ctx.fillStyle = '#6a4800';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(ex - 0.5, ey - 0.5, 0.8, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(200, 160, 20, 0.55)';
    ctx.fill();
  });

  // ── Antennae ──
  [
    { mx: -2, my: -22, c1x: -10, c1y: -38, c2x: -18, c2y: -54, ex: -22, ey: -62 },
    { mx:  2, my: -22, c1x:  10, c1y: -38, c2x:  18, c2y: -54, ex:  22, ey: -62 },
  ].forEach(a => {
    ctx.beginPath();
    ctx.moveTo(a.mx, a.my);
    ctx.bezierCurveTo(a.c1x, a.c1y, a.c2x, a.c2y, a.ex, a.ey);
    ctx.strokeStyle = '#0e0800';
    ctx.lineWidth = 1.3;
    ctx.stroke();
    // Club tip
    ctx.beginPath();
    ctx.arc(a.ex, a.ey, 3.2, 0, Math.PI * 2);
    ctx.fillStyle = '#0e0800';
    ctx.fill();
    // Club highlight
    ctx.beginPath();
    ctx.arc(a.ex - 0.9, a.ey - 0.9, 1.1, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(150, 110, 0, 0.5)';
    ctx.fill();
  });
}

function drawButterfly(ctx, x, y, rotAngle, frame) {
  const SCALE = 0.52;
  // Wing wave: slow sine, wings stay mostly open, never fully close — natural flutter
  const t = frame * 0.048;
  const spread = 0.42 + 0.58 * Math.pow((1 + Math.sin(t)) / 2, 0.38);

  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotAngle);
  ctx.scale(SCALE, SCALE);

  // Hindwings first (they sit behind forewings)
  for (const side of [1, -1]) {
    ctx.save();
    ctx.scale(side * spread, 1);
    paintHindwing(ctx);
    ctx.restore();
  }

  // Forewings on top
  for (const side of [1, -1]) {
    ctx.save();
    ctx.scale(side * spread, 1);
    paintForewing(ctx);
    ctx.restore();
  }

  // Body always on top, unaffected by wing spread
  paintBody(ctx);

  ctx.restore();
}

// ─── Component ───────────────────────────────────────────────────────────────
export const ButterflyPointer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let mouseX = -400, mouseY = -400;
    let bfX    = -400, bfY   = -400;
    let prevBfX = -400, prevBfY = -400;
    // Smoothed movement direction unit-vector (starts facing up)
    let dirX = 0, dirY = -1;
    let particles = [];
    let rafId;
    let frame = 0;
    let visible = false;

    const onMouseMove = (e) => {
      if (!visible) {
        bfX = e.clientX;  bfY = e.clientY;
        prevBfX = bfX;    prevBfY = bfY;
        visible = true;
      }
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    const loop = () => {
      frame++;

      // Lerp butterfly toward mouse
      bfX += (mouseX - bfX) * 0.09;
      bfY += (mouseY - bfY) * 0.09;

      // Smooth direction vector
      const rawDx = bfX - prevBfX;
      const rawDy = bfY - prevBfY;
      prevBfX = bfX;
      prevBfY = bfY;

      const moveSpeed = Math.hypot(rawDx, rawDy);
      if (moveSpeed > 0.25) {
        dirX += (rawDx / moveSpeed - dirX) * 0.12;
        dirY += (rawDy / moveSpeed - dirY) * 0.12;
      }

      // atan2(dirX, -dirY): rotates SVG "up" to face travel direction
      const angle = Math.atan2(dirX, -dirY);
      const bob   = Math.sin(frame * 0.09) * 3;

      // Pollen particle spawning
      const distToMouse = Math.hypot(mouseX - bfX, mouseY - bfY);
      const spawnCount  = distToMouse > 8 ? 4 : distToMouse > 3 ? 2 : distToMouse > 0.5 ? 1 : 0;
      for (let i = 0; i < spawnCount; i++) {
        particles.push({
          x:    bfX + (Math.random() - 0.5) * 26,
          y:    bfY + (Math.random() - 0.5) * 18,
          vx:   (Math.random() - 0.5) * 1.8,
          vy:   (Math.random() - 0.5) * 1.2 + 0.4,
          life: 0.7 + Math.random() * 0.5,
          size: Math.random() * 2.8 + 0.6,
          hue:  36 + Math.random() * 18,
        });
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw pollen particles
      particles = particles.filter(p => p.life > 0);
      for (const p of particles) {
        p.x  += p.vx;
        p.y  += p.vy;
        p.vy += 0.045;
        p.vx *= 0.98;
        p.life -= 0.016;
        const alpha = Math.max(0, p.life);
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.shadowColor = '#ffc400';
        ctx.shadowBlur  = 10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${p.hue}, 100%, 62%)`;
        ctx.fill();
        ctx.globalAlpha = alpha * 0.75;
        ctx.shadowBlur  = 4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.42, 0, Math.PI * 2);
        ctx.fillStyle = '#fff8c0';
        ctx.fill();
        ctx.restore();
      }

      // Draw butterfly at reduced opacity so it feels light and airy
      if (visible) {
        ctx.globalAlpha = 0.72;
        drawButterfly(ctx, bfX, bfY + bob, angle, frame);
        ctx.globalAlpha = 1;
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  // Single canvas handles both particles and butterfly
  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, zIndex: 99990, pointerEvents: 'none' }}
    />
  );
};
