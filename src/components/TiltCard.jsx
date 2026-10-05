import React, { useState, useRef } from 'react';

export default function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  glare = true,
  scale = 1.02,
  ...props
}) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
  });
  const [glareStyle, setGlareStyle] = useState({
    opacity: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 80%)',
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: 'transform 0.1s ease-out',
    });

    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      setGlareStyle({
        opacity: 1,
        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`,
        transition: 'opacity 0.2s ease-out',
      });
    }
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
    });
    if (glare) {
      setGlareStyle((prev) => ({
        ...prev,
        opacity: 0,
        transition: 'opacity 0.6s ease-out',
      }));
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative will-change-transform ${className}`}
      {...props}
    >
      {children}
      {glare && (
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-10"
          style={glareStyle}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
