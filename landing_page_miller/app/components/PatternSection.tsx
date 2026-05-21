'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type Dot = {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
};

type Props = {
  children: ReactNode;
  className?: string;
};

const SPACING = 40;
const INFLUENCE_RADIUS = 160;
const REPEL_STRENGTH = 32;

export default function PatternSection({ children, className = '' }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const dotsRef = useRef<Dot[]>([]);
  const gridRef = useRef<{ cols: number; rows: number }>({ cols: 0, rows: 0 });
  const animRef = useRef(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const buildGrid = () => {
      const { width, height } = section.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;
      gridRef.current = { cols, rows };

      const dots: Dot[] = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * SPACING + SPACING / 2;
          const y = row * SPACING + SPACING / 2;
          dots.push({ baseX: x, baseY: y, x, y });
        }
      }
      dotsRef.current = dots;
    };

    const setPointer = (clientX: number, clientY: number) => {
      const rect = section.getBoundingClientRect();
      mouseRef.current = {
        x: clientX - rect.left,
        y: clientY - rect.top,
        active: true,
      };
    };

    const onMouseMove = (e: MouseEvent) => setPointer(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) setPointer(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onPointerLeave = () => {
      mouseRef.current.active = false;
    };

    const getDot = (row: number, col: number) => {
      const { cols } = gridRef.current;
      return dotsRef.current[row * cols + col];
    };

    const draw = () => {
      const { width, height } = section.getBoundingClientRect();
      timeRef.current += 0.012;
      const time = timeRef.current;
      const { x: mx, y: my, active } = mouseRef.current;

      ctx.clearRect(0, 0, width, height);

      const { cols, rows } = gridRef.current;

      for (const dot of dotsRef.current) {
        const driftX = Math.sin(time + dot.baseY * 0.015) * 4;
        const driftY = Math.cos(time + dot.baseX * 0.015) * 4;

        let targetX = dot.baseX + driftX;
        let targetY = dot.baseY + driftY;

        if (active) {
          const dx = targetX - mx;
          const dy = targetY - my;
          const dist = Math.hypot(dx, dy);
          if (dist < INFLUENCE_RADIUS && dist > 0) {
            const force = (INFLUENCE_RADIUS - dist) / INFLUENCE_RADIUS;
            targetX += (dx / dist) * force * REPEL_STRENGTH;
            targetY += (dy / dist) * force * REPEL_STRENGTH;
          }
        }

        dot.x += (targetX - dot.x) * 0.1;
        dot.y += (targetY - dot.y) * 0.1;
      }

      const drawLine = (a: Dot, b: Dot) => {
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        const maxDist = SPACING * 1.5;
        if (dist > maxDist) return;

        let alpha = (1 - dist / maxDist) * 0.1;
        if (active) {
          const midX = (a.x + b.x) / 2;
          const midY = (a.y + b.y) / 2;
          const md = Math.hypot(midX - mx, midY - my);
          if (md < INFLUENCE_RADIUS * 1.3) {
            alpha += (1 - md / (INFLUENCE_RADIUS * 1.3)) * 0.22;
          }
        }

        ctx.strokeStyle = `rgba(167, 243, 208, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      };

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const dot = getDot(row, col);
          if (col + 1 < cols) drawLine(dot, getDot(row, col + 1));
          if (row + 1 < rows) drawLine(dot, getDot(row + 1, col));
        }
      }

      for (const dot of dotsRef.current) {
        let radius = 1.5;
        let alpha = 0.18;

        if (active) {
          const d = Math.hypot(dot.x - mx, dot.y - my);
          if (d < INFLUENCE_RADIUS) {
            const boost = 1 - d / INFLUENCE_RADIUS;
            radius += boost * 2.5;
            alpha += boost * 0.4;
          }
        }

        ctx.fillStyle = `rgba(209, 250, 229, ${alpha})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    buildGrid();
    animRef.current = requestAnimationFrame(draw);

    const resizeObserver = new ResizeObserver(buildGrid);
    resizeObserver.observe(section);

    section.addEventListener('mousemove', onMouseMove);
    section.addEventListener('mouseleave', onPointerLeave);
    section.addEventListener('touchmove', onTouchMove, { passive: true });
    section.addEventListener('touchend', onPointerLeave);

    return () => {
      cancelAnimationFrame(animRef.current);
      resizeObserver.disconnect();
      section.removeEventListener('mousemove', onMouseMove);
      section.removeEventListener('mouseleave', onPointerLeave);
      section.removeEventListener('touchmove', onTouchMove);
      section.removeEventListener('touchend', onPointerLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden bg-emerald-950 ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
