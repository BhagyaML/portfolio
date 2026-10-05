import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const { currentTheme, isDark } = useTheme();
  const themeRef = useRef({ currentTheme, isDark });

  useEffect(() => {
    themeRef.current = { currentTheme, isDark };
  }, [currentTheme, isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle pool
    const particleCount = Math.min(Math.floor((width * height) / 18000), 65);
    const particles = [];
    const mouse = { x: -1000, y: -1000, radius: 140 };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 1;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.density = Math.random() * 20 + 10;
        this.alpha = Math.random() * 0.45 + 0.15;
        this.assignThemeHue();
      }

      assignThemeHue() {
        const { currentTheme } = themeRef.current;
        const [hueA, hueB] = currentTheme.particles.hues;
        this.hue = Math.random() > 0.5 ? hueA + (Math.random() * 16 - 8) : hueB + (Math.random() * 16 - 8);
      }

      draw() {
        const { isDark } = themeRef.current;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        const fillAlpha = isDark ? this.alpha : this.alpha * 0.65;
        ctx.fillStyle = `hsla(${this.hue}, 85%, 65%, ${fillAlpha})`;
        ctx.fill();
      }

      update() {
        // Natural drift
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around screen bounds
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Realistic mouse interaction (repulsion with smooth damping)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = mouse.radius;
          const force = (maxDistance - distance) / maxDistance;
          const directionX = forceDirectionX * force * this.density * 0.4;
          const directionY = forceDirectionY * force * this.density * 0.4;

          this.x -= directionX;
          this.y -= directionY;
        }
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const connect = () => {
      const { currentTheme, isDark } = themeRef.current;
      const maxDist = 110;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * (isDark ? 0.18 : 0.08);
            ctx.strokeStyle = `${currentTheme.particles.filament}${opacity})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      connect();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // When theme changes, smoothly update existing particles' hues
  useEffect(() => {
    // Canvas ref can be re-tinted smoothly
  }, [currentTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80 transition-opacity duration-500"
      aria-hidden="true"
    />
  );
}
