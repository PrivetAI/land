import { useEffect, useRef, useState } from "react";

const CFG = {
  COUNT: [80, 150],
  COLORS: ['#2563eb', '#7c3aed', '#06b6d4', '#10b981', '#f59e0b'],
  SIZES: [2, 3, 4],
  SPEED: 0.3,
  TIMING: { TEXT: 2000, COOLDOWN: 5000 },
  GRAVITY: 0.02,
  SCROLL_SENSITIVITY: 0.1
};

export default function ParticleText() {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef();
  const timeoutsRef = useRef([]);
  const observerRef = useRef(null);
  const textPointsRef = useRef([]);
  const scrollYRef = useRef(0);
  const lastFormTimeRef = useRef(0);
  
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(0); // -1 up, 0 none, 1 down

  const addTimeout = (fn, delay) => {
    const id = setTimeout(fn, delay);
    timeoutsRef.current.push(id);
    return id;
  };

  const createParticles = (container, isMobile) => {
    const count = CFG.COUNT[isMobile ? 0 : 1];
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: CFG.SIZES[Math.floor(Math.random() * CFG.SIZES.length)],
      color: CFG.COLORS[Math.floor(Math.random() * CFG.COLORS.length)],
      vx: (Math.random() - 0.5) * CFG.SPEED,
      vy: (Math.random() - 0.5) * CFG.SPEED,
      targetX: null,
      targetY: null,
      isInText: false,
      opacity: Math.random() * 0.4 + 0.4,
      element: null,
      baseY: Math.random() * 100
    }));

    particlesRef.current.forEach(p => {
      const div = document.createElement('div');
      Object.assign(div.style, {
        position: 'absolute',
        left: `${p.x}%`,
        top: `${p.y}%`,
        width: `${p.size}px`,
        height: `${p.size}px`,
        backgroundColor: p.color,
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: p.opacity,
        zIndex: '25',
        pointerEvents: 'none',
        boxShadow: `0 0 ${p.size * 2}px ${p.color}60`,
        transition: 'all 0.3s ease'
      });
      container.appendChild(div);
      p.element = div;
    });
  };

  const generateTextPoints = (isMobile) => {
    const [w, h] = isMobile ? [280, 80] : [360, 100];
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = 'black';
    ctx.font = `bold ${isMobile ? 50 : 70}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('AUTO', w / 2, h / 2);

    const data = ctx.getImageData(0, 0, w, h).data;
    const points = [];
    const step = isMobile ? 6 : 5;
    
    for (let y = 0; y < h; y += step) {
      for (let x = 0; x < w; x += step) {
        if (data[(y * w + x) * 4 + 3] > 128) {
          points.push({ xNorm: x / w, yNorm: y / h });
        }
      }
    }
    textPointsRef.current = points;
  };

  const handleScroll = () => {
    const currentY = window.scrollY;
    const delta = currentY - scrollYRef.current;
    
    if (Math.abs(delta) > 5) {
      setScrollDirection(delta > 0 ? 1 : -1);
      scrollYRef.current = currentY;
    }
  };

  const animate = () => {
    particlesRef.current.forEach(p => {
      if (p.isInText && p.targetX !== null) {
        p.x += (p.targetX - p.x) * 0.08;
        p.y += (p.targetY - p.y) * 0.08;
      } else {
        // Scroll-based movement
        if (scrollDirection !== 0 && isVisible) {
          p.vy += scrollDirection * CFG.GRAVITY;
          p.vy = Math.max(-2, Math.min(3, p.vy));
        } else {
          // Natural floating
          p.vx += (Math.random() - 0.5) * 0.01;
          p.vy += (Math.random() - 0.5) * 0.01;
          p.vx *= 0.98;
          p.vy *= 0.98;
        }
        
        p.x += p.vx;
        p.y += p.vy;
        
        // Boundaries
        if (p.x < -2 || p.x > 102) p.vx *= -0.8;
        if (p.y < -2 || p.y > 102) p.vy *= -0.8;
        
        p.x = Math.max(-2, Math.min(102, p.x));
        p.y = Math.max(-2, Math.min(102, p.y));
      }
      
      if (p.element) {
        p.element.style.left = `${p.x}%`;
        p.element.style.top = `${p.y}%`;
      }
    });
    
    animationRef.current = requestAnimationFrame(animate);
  };

  const formText = (isMobile) => {
    const now = Date.now();
    if (now - lastFormTimeRef.current < CFG.TIMING.COOLDOWN) return;
    
    lastFormTimeRef.current = now;
    const points = textPointsRef.current;
    if (!points.length) return;

    const shuffled = [...particlesRef.current].sort(() => Math.random() - 0.5);
    const use = Math.min(shuffled.length, points.length);
    const [tw, th] = isMobile ? [50, 12] : [45, 15];
    const [ox, oy] = [(100 - tw) / 2, (100 - th) / 2];
    
    shuffled.forEach((p, i) => {
      if (i < use) {
        const pt = points[i];
        p.targetX = pt.xNorm * tw + ox;
        p.targetY = pt.yNorm * th + oy;
        p.isInText = true;
        if (p.element) {
          p.element.style.boxShadow = `0 0 ${p.size * 6}px ${p.color}`;
          p.element.style.transform = 'translate(-50%, -50%) scale(1.3)';
          p.element.style.zIndex = '50';
        }
      }
    });

    addTimeout(() => {
      particlesRef.current.forEach(p => {
        p.isInText = false;
        p.targetX = null;
        p.targetY = null;
        if (p.element) {
          p.element.style.boxShadow = `0 0 ${p.size * 2}px ${p.color}60`;
          p.element.style.transform = 'translate(-50%, -50%) scale(1)';
          p.element.style.zIndex = '25';
        }
      });
    }, CFG.TIMING.TEXT);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;
    createParticles(container, isMobile);
    generateTextPoints(isMobile);
    animate();

    observerRef.current = new IntersectionObserver(([entry]) => {
      const visible = entry.intersectionRatio >= 0.3;
      setIsVisible(visible);
      
      if (visible) {
        formText(isMobile);
      }
    }, { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] });

    observerRef.current.observe(container);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      timeoutsRef.current.forEach(clearTimeout);
      if (observerRef.current) observerRef.current.disconnect();
      window.removeEventListener('scroll', handleScroll);
      particlesRef.current.forEach(p => {
        if (p.element && container.contains(p.element)) {
          container.removeChild(p.element);
        }
      });
    };
  }, []);

  // Reset scroll direction after movement stops
  useEffect(() => {
    const timer = setTimeout(() => setScrollDirection(0), 150);
    return () => clearTimeout(timer);
  }, [scrollDirection]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 30 }}
    />
  );
}