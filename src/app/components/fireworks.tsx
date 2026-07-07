import { useEffect, useRef } from "react";

const PALETTE = [
  "#D9C7A8", // champagne gold
  "#FFD700", // bright gold
  "#FFF8DC", // cornsilk
  "#F5E6C8", // warm cream
  "#ffffff",  // white
  "#FFE4B5", // moccasin
  "#FFDAB9", // peach
];

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  alpha: number;
  color: string;
  size: number;
}

interface Rocket {
  x: number; y: number;
  vy: number;
  targetY: number;
  exploded: boolean;
  particles: Particle[];
}

export function Fireworks({
  active,
  width = 1440,
  height = 977,
}: {
  active: boolean;
  width?: number;
  height?: number;
}) {
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const activeRef    = useRef(active);
  const rafRef       = useRef<number>();
  const rocketsRef   = useRef<Rocket[]>([]);
  const lastLaunch   = useRef(0);
  const pendingExtra = useRef<number | null>(null);

  useEffect(() => { activeRef.current = active; }, [active]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width  = width;
    canvas.height = height;

    const randomColor = () => PALETTE[Math.floor(Math.random() * PALETTE.length)];

    const burst = (r: Rocket) => {
      const color = randomColor();
      const count = 70 + Math.floor(Math.random() * 50);
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 + Math.random() * 0.2;
        const speed = 1.8 + Math.random() * 4.5;
        r.particles.push({
          x: r.x, y: r.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color,
          size: 1.8 + Math.random() * 2.2,
        });
      }
      r.exploded = true;
    };

    const launch = () => {
      rocketsRef.current.push({
        x: 120 + Math.random() * (width - 240),
        y: height,
        vy: -(height * 0.013 + Math.random() * height * 0.004),
        targetY: height * 0.08 + Math.random() * height * 0.52,
        exploded: false,
        particles: [],
      });
    };

    const tick = (t: number) => {
      ctx.clearRect(0, 0, width, height);

      // Schedule launches
      if (activeRef.current && t - lastLaunch.current > 900) {
        launch();
        lastLaunch.current = t;
        if (Math.random() > 0.35) {
          pendingExtra.current = t + 260 + Math.random() * 280;
        }
      }
      if (pendingExtra.current !== null && t >= pendingExtra.current) {
        launch();
        pendingExtra.current = null;
      }

      // Update & draw
      rocketsRef.current = rocketsRef.current.filter(r => {
        if (!r.exploded) {
          r.y += r.vy;
          // tiny trail
          ctx.beginPath();
          ctx.arc(r.x, r.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255,255,200,0.85)";
          ctx.fill();
          if (r.y <= r.targetY) burst(r);
          return true;
        }

        // particles
        r.particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.055; // gravity
          p.vx *= 0.975;
          p.vy *= 0.975;
          p.alpha -= 0.013;
          if (p.alpha > 0) {
            ctx.globalAlpha = p.alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
          }
        });
        ctx.globalAlpha = 1;
        r.particles = r.particles.filter(p => p.alpha > 0);
        return r.particles.length > 0;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
