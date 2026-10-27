import React, { useEffect, useRef } from 'react';

export default function Cursor() {
  const blobRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;
    const dot = dotRef.current;
    if (!blob || !dot) return;

    let target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let vel = { x: 0, y: 0 };
    let acc = { x: 0, y: 0 };
    let scale = { x: 1, y: 1 };
    let angle = 0;
    let stretch = 0;

    const onMouseMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    let animationFrameId;

    const update = () => {
      const dx = target.x - pos.x;
      const dy = target.y - pos.y;

      acc.x = 0.004 * dx;
      acc.y = 0.004 * dy;

      vel.x += acc.x;
      vel.y += acc.y;
      vel.x *= 0.9;
      vel.y *= 0.9;

      pos.x += vel.x;
      pos.y += vel.y;

      const speed = Math.sqrt(vel.x ** 2 + vel.y ** 2);
      if (speed > 0.1) {
        const targetAngle = Math.atan2(vel.y, vel.x) * (180 / Math.PI);
        const diff = ((targetAngle - angle + 180) % 360 + 360) % 360 - 180;
        angle += 0.3 * diff;
      }

      const targetStretch = Math.min(0.05 * speed, 2.5);
      stretch += (targetStretch - stretch) * 0.2;

      const targetScaleX = 1 + 1.2 * stretch;
      const targetScaleY = Math.max(1 - 0.85 * stretch, 0.15);

      scale.x += (targetScaleX - scale.x) * 0.2;
      scale.y += (targetScaleY - scale.y) * 0.2;

      const wobble = Math.sin(0.01 * Date.now()) * speed * 0.002;

      blob.style.transform = `
        translate3d(${pos.x}px, ${pos.y}px, 0)
        translate(-50%, -50%)
        rotate(${angle + 50 * wobble}deg)
        scale(${scale.x}, ${scale.y})
      `;

      dot.style.transform = `
        translate3d(${target.x}px, ${target.y}px, 0)
        translate(-50%, -50%)
      `;

      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        ref={blobRef}
        style={{
          willChange: 'transform',
          filter: 'blur(1px)',
          boxShadow: '0 0 20px rgba(255,255,255,0.3)',
        }}
        className="blob-cursor hidden md:inline-block fixed top-0 left-0 w-12 h-12 bg-white pointer-events-none mix-blend-difference z-50"
      />
      <div
        ref={dotRef}
        style={{
          willChange: 'transform',
          boxShadow: '0 0 4px rgba(255,255,255,0.8)',
        }}
        className="fixed top-0 hidden md:inline-block left-0 w-3 h-3 bg-white rounded-full pointer-events-none mix-blend-difference z-[51]"
      />
    </>
  );
}
