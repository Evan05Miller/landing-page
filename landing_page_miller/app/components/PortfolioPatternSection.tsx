'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  phase: number;
};

const NODE_COUNT = 42;
const LINK_DISTANCE = 140;
const CURSOR_RADIUS = 220;

function createNodes(width: number, height: number): Node[] {
  const nodes: Node[] = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      phase: Math.random() * Math.PI * 2,
    });
  }
  return nodes;
}

export default function PortfolioPatternSection({ children, className = '' }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const nodesRef = useRef<Node[]>([]);
  const animRef = useRef(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const { width, height } = section.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodesRef.current = createNodes(width, height);
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

    const draw = () => {
      const { width, height } = section.getBoundingClientRect();
      timeRef.current += 0.016;
      const time = timeRef.current;
      const { x: mx, y: my, active } = mouseRef.current;
      const nodes = nodesRef.current;

      ctx.clearRect(0, 0, width, height);

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));

        if (active) {
          const dx = mx - node.x;
          const dy = my - node.y;
          const dist = Math.hypot(dx, dy);
          if (dist < CURSOR_RADIUS && dist > 0) {
            const force = (1 - dist / CURSOR_RADIUS) * 0.6;
            node.x -= (dx / dist) * force;
            node.y -= (dy / dist) * force;
          }
        }
      }

      const drawLink = (x1: number, y1: number, x2: number, y2: number, baseAlpha: number) => {
        const dist = Math.hypot(x1 - x2, y1 - y2);
        if (dist > LINK_DISTANCE) return;

        let alpha = (1 - dist / LINK_DISTANCE) * baseAlpha;
        if (active) {
          const midX = (x1 + x2) / 2;
          const midY = (y1 + y2) / 2;
          const md = Math.hypot(midX - mx, midY - my);
          if (md < CURSOR_RADIUS) {
            alpha += (1 - md / CURSOR_RADIUS) * 0.25;
          }
        }

        ctx.strokeStyle = `rgba(110, 231, 183, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      };

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          drawLink(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y, 0.14);
        }
        if (active) {
          drawLink(nodes[i].x, nodes[i].y, mx, my, 0.2);
        }
      }

      for (const node of nodes) {
        const pulse = Math.sin(time * 2 + node.phase) * 0.5 + 0.5;
        let radius = 2 + pulse * 1.5;
        let alpha = 0.25 + pulse * 0.15;

        if (active) {
          const d = Math.hypot(node.x - mx, node.y - my);
          if (d < CURSOR_RADIUS) {
            const boost = 1 - d / CURSOR_RADIUS;
            radius += boost * 3;
            alpha += boost * 0.5;
          }
        }

        ctx.fillStyle = `rgba(167, 243, 208, ${alpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (active) {
        ctx.strokeStyle = 'rgba(209, 250, 229, 0.5)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(mx, my, 10 + Math.sin(time * 4) * 3, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = 'rgba(209, 250, 229, 0.95)';
        ctx.beginPath();
        ctx.arc(mx, my, 5, 0, Math.PI * 2);
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    resize();
    animRef.current = requestAnimationFrame(draw);

    const resizeObserver = new ResizeObserver(resize);
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
