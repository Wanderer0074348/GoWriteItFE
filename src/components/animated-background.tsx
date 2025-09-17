"use client";

import React, { useRef, useEffect } from 'react';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth / 2;
    let height = canvas.height = window.innerHeight;
    let particles: Particle[] = [];

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
        particles = [];
        init();
      }
    });

    const parent = canvas.parentElement;
    if(parent) {
      resizeObserver.observe(parent);
    }


    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor(x: number, y: number, size: number, speedX: number, speedY: number, color: string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.1;
      }

      draw() {
        if (ctx && this.size > 0) {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function init() {
      for (let i = 0; i < 100; i++) {
        const size = Math.random() * 5 + 1;
        const x = Math.random() * (width - size * 2) + size;
        const y = Math.random() * (height - size * 2) + size;
        const speedX = Math.random() * 1 - 0.5;
        const speedY = Math.random() * 1 - 0.5;
        const color = getComputedStyle(document.documentElement).getPropertyValue('--primary-foreground').trim();
        
        particles.push(new Particle(x, y, size, speedX, speedY, `hsl(${color} / ${Math.random() * 0.5 + 0.2})`));
      }
    }

    function animate() {
      if (ctx) {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();

          if (particles[i].size <= 0.3) {
            particles.splice(i, 1);
            i--;
            
            const size = Math.random() * 5 + 1;
            const x = Math.random() * (width - size * 2) + size;
            const y = height + size;
            const speedX = Math.random() * 1 - 0.5;
            const speedY = Math.random() * -1 -0.5;
            const color = getComputedStyle(document.documentElement).getPropertyValue('--primary-foreground').trim();
            particles.push(new Particle(x, y, size, speedX, speedY, `hsl(${color} / ${Math.random() * 0.5 + 0.2})`));
          }
        }
      }
      requestAnimationFrame(animate);
    }
    
    init();
    animate();

    return () => {
      if (parent) {
        resizeObserver.unobserve(parent);
      }
    }
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full bg-zinc-900" />;
}
