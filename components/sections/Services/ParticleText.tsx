import { useEffect, useRef, useState, useCallback, useMemo } from "react";

const CFG = {
  COUNT: [80, 150],
  COLORS: ['#2563eb', '#7c3aed', '#06b6d4', '#10b981', '#f59e0b'],
  SIZES: [2, 3, 4],
  SPEED: 0.3,
  TIMING: { TEXT: 2000, COOLDOWN: 5000 },
  AVOIDANCE_FORCE: 0.015,
  CENTER_ZONE: { left: 20, right: 80, top: 20, bottom: 80 }
};

export default function ParticleText() {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef();
  const timeoutsRef = useRef([]);
  const observerRef = useRef(null);
  const textPointsRef = useRef([]);
  const lastFormTimeRef = useRef(0);
  const isMobileRef = useRef(false);
  
  const [isVisible, setIsVisible] = useState(false);
  const [hasFormed, setHasFormed] = useState(false);

  const containerStyle = useMemo(() => ({ zIndex: 30 }), []);

  const addTimeout = useCallback((fn, delay) => {
    const id = setTimeout(fn, delay);
    timeoutsRef.current.push(id);
    return id;
  }, []);

  const getAvoidanceForce = useCallback((x, y) => {
    const { left, right, top, bottom } = CFG.CENTER_ZONE;
    let fx = 0, fy = 0;
    
    // Увеличиваем зону проверки для более сильного избегания
    if (x > left - 10 && x < right + 10 && y > top - 10 && y < bottom + 10) {
      const centerX = (left + right) / 2;
      const centerY = (top + bottom) / 2;
      
      // Вектор от центра к частице
      const dx = x - centerX;
      const dy = y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 30) { // Радиус избегания
        const force = CFG.AVOIDANCE_FORCE * (30 - distance) / 30;
        fx = (dx / distance) * force;
        fy = (dy / distance) * force;
      }
    }
    
    return { fx, fy };
  }, []);

  const createParticles = useCallback((container) => {
    const count = CFG.COUNT[isMobileRef.current ? 0 : 1];
    particlesRef.current = Array.from({ length: count }, () => {
      let x, y;
      let attempts = 0;
      do {
        x = Math.random() * 100;
        y = Math.random() * 100;
        attempts++;
      } while (
        attempts < 50 && // Ограничиваем попытки
        x > CFG.CENTER_ZONE.left - 5 && 
        x < CFG.CENTER_ZONE.right + 5 && 
        y > CFG.CENTER_ZONE.top - 5 && 
        y < CFG.CENTER_ZONE.bottom + 5
      );

      return {
        x,
        y,
        size: CFG.SIZES[Math.floor(Math.random() * CFG.SIZES.length)],
        color: CFG.COLORS[Math.floor(Math.random() * CFG.COLORS.length)],
        vx: (Math.random() - 0.5) * CFG.SPEED,
        vy: (Math.random() - 0.5) * CFG.SPEED,
        targetX: null,
        targetY: null,
        isInText: false,
        opacity: Math.random() * 0.4 + 0.4,
        element: null
      };
    });

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
        transition: 'all 0.3s ease',
        willChange: 'transform'
      });
      container.appendChild(div);
      p.element = div;
    });
  }, []);

  const generateTextPoints = useCallback(() => {
    const [w, h] = isMobileRef.current ? [280, 80] : [360, 100];
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = 'black';
    ctx.font = `bold ${isMobileRef.current ? 50 : 70}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('AUTO', w / 2, h / 2);

    const data = ctx.getImageData(0, 0, w, h).data;
    const points = [];
    const step = isMobileRef.current ? 6 : 5;
    
    for (let y = 0; y < h; y += step) {
      for (let x = 0; x < w; x += step) {
        if (data[(y * w + x) * 4 + 3] > 128) {
          points.push({ xNorm: x / w, yNorm: y / h });
        }
      }
    }
    textPointsRef.current = points;
  }, []);

  const animate = useCallback(() => {
    const particles = particlesRef.current;
    const len = particles.length;
    
    for (let i = 0; i < len; i++) {
      const p = particles[i];
      
      if (p.isInText && p.targetX !== null) {
        p.x += (p.targetX - p.x) * 0.08;
        p.y += (p.targetY - p.y) * 0.08;
      } else {
        p.vx += (Math.random() - 0.5) * 0.01;
        p.vy += (Math.random() - 0.5) * 0.01;
        p.vx *= 0.98;
        p.vy *= 0.98;
        
        const { fx, fy } = getAvoidanceForce(p.x, p.y);
        p.vx += fx;
        p.vy += fy;
        
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < -2 || p.x > 102) p.vx *= -0.8;
        if (p.y < -2 || p.y > 102) p.vy *= -0.8;
        
        p.x = Math.max(-2, Math.min(102, p.x));
        p.y = Math.max(-2, Math.min(102, p.y));
      }
      
      if (p.element) {
        p.element.style.left = `${p.x}%`;
        p.element.style.top = `${p.y}%`;
      }
    }
    
    animationRef.current = requestAnimationFrame(animate);
  }, [getAvoidanceForce]);

  const formText = useCallback(() => {
    const now = Date.now();
    if (now - lastFormTimeRef.current < CFG.TIMING.COOLDOWN) return;
    
    lastFormTimeRef.current = now;
    const points = textPointsRef.current;
    if (!points.length) return;

    const shuffled = [...particlesRef.current].sort(() => Math.random() - 0.5);
    const use = Math.min(shuffled.length, points.length);
    const [tw, th] = isMobileRef.current ? [50, 12] : [45, 15];
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
  }, [addTimeout]);

  const handleIntersection = useCallback(([entry]) => {
    const visible = entry.intersectionRatio >= 0.3;
    setIsVisible(visible);
    
    if (visible && !hasFormed) {
      // Задержка перед первым формированием текста
      const timeout = setTimeout(() => {
        formText();
        setHasFormed(true);
      }, 1000);
      
      return () => clearTimeout(timeout);
    }
  }, [formText, hasFormed]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    isMobileRef.current = window.innerWidth < 768;
    createParticles(container);
    generateTextPoints();
    
    animationRef.current = requestAnimationFrame(animate);

    observerRef.current = new IntersectionObserver(handleIntersection, { 
      threshold: [0.3],
      rootMargin: '-10%'
    });

    observerRef.current.observe(container);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      timeoutsRef.current.forEach(clearTimeout);
      if (observerRef.current) observerRef.current.disconnect();
      particlesRef.current.forEach(p => {
        if (p.element && container.contains(p.element)) {
          container.removeChild(p.element);
        }
      });
    };
  }, [createParticles, generateTextPoints, animate, handleIntersection]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={containerStyle}
    />
  );
}