import React, { useEffect, useRef, useState } from 'react';

const ParticleArrowSystem = () => {
  const containerRef = useRef(null);
  const [particles, setParticles] = useState([]);
  
  const getColorValue = (color) => {
    const colorMap = {
      blue: '#3b82f6', purple: '#8b5cf6', cyan: '#06b6d4',
      indigo: '#6366f1', violet: '#7c3aed', slate: '#64748b'
    };
    return colorMap[color] || '#3b82f6';
  };

  const colors = ['blue', 'purple', 'cyan', 'indigo', 'violet', 'slate'];
  const sizes = ['w-0.5 h-0.5', 'w-1 h-1', 'w-1.5 h-1.5'];
  const animations = ['float', 'orbit', 'drift', 'pulse', 'spiral', 'breathe'];
  const positions = [
    'top-8 left-12', 'top-16 right-20', 'top-24 left-1/4', 'top-32 right-1/3',
    'top-40 left-1/5', 'top-1/4 left-16', 'top-1/3 right-12', 'top-1/2 left-24',
    'top-3/5 right-16', 'top-2/3 left-20', 'bottom-1/4 right-1/5', 'bottom-1/3 left-1/4',
    'bottom-1/2 left-1/6', 'bottom-3/5 right-1/6', 'top-12 left-2/3'
  ];

  const getArrowPositions = (centerX, centerY, participantCount) => {
    const positions = [];
    const tailLength = 80;
    const headWidth = 50;
    const headHeight = 40;
    
    const tailParticles = Math.floor(participantCount * 0.6);
    for (let i = 0; i < tailParticles; i++) {
      positions.push({
        x: centerX + (Math.random() - 0.5) * 8,
        y: centerY + (i / tailParticles) * tailLength
      });
    }
    
    const headParticles = participantCount - tailParticles;
    for (let i = 0; i < headParticles; i++) {
      const progress = i / headParticles;
      const yOffset = -progress * headHeight;
      const xOffset = (0.5 - progress) * headWidth * (1 - progress);
      
      positions.push({
        x: centerX + xOffset + (Math.random() - 0.5) * 6,
        y: centerY + yOffset + (Math.random() - 0.5) * 4
      });
    }
    
    return positions;
  };

  const generateParticles = (count = 150) => {
    const newParticles = [];
    
    for (let i = 0; i < count; i++) {
      const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomPosition = positions[Math.floor(Math.random() * positions.length)];
      const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
      
      newParticles.push({
        id: i,
        currentAnimation: randomAnimation,
        originalPosition: randomPosition,
        className: `particle absolute ${randomPosition} ${randomSize} rounded-full`,
        style: {
          backgroundColor: getColorValue(randomColor),
          animation: `${randomAnimation} ${Math.random() * 3 + 2}s infinite, fadeIn 0.8s ease-out ${i * 0.1}s forwards`,
          filter: 'blur(0.5px)',
          boxShadow: '0 0 8px rgba(59, 130, 246, 0.3)',
          zIndex: 15,
          opacity: 0,
          transition: 'transform 1s ease-out, opacity 0.3s ease',
          willChange: 'transform, opacity'
        }
      });
    }
    return newParticles;
  };

  const createArrowAnimation = () => {
    if (!containerRef?.current) return;
    console.log('creare')
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const participantCount = Math.floor(particles.length * (0.3 + Math.random() * 0.4));
    const participantIndices = Array.from({length: particles.length}, (_, i) => i)
      .sort(() => Math.random() - 0.5)
      .slice(0, participantCount);
    
    const arrowPositions = getArrowPositions(centerX, centerY, participantCount);
    
    participantIndices.forEach((particleIndex, index) => {
      const element = container.querySelector(`[data-particle-id="${particleIndex}"]`);
      if (!element) return;
      
      const targetPos = arrowPositions[index] || arrowPositions[arrowPositions.length - 1];
      
      element.style.animation = 'none';
      element.style.transform = `translate(${targetPos.x - centerX}px, ${targetPos.y - centerY}px)`;
      element.style.transition = `transform ${1 + Math.random() * 2}s ease-out`;
    });
    
    setTimeout(() => {
      participantIndices.forEach(particleIndex => {
        const element = container.querySelector(`[data-particle-id="${particleIndex}"]`);
        if (!element) return;
        
        const newAnimation = animations[Math.floor(Math.random() * animations.length)];
        
        element.style.transform = 'translate(0, 0)';
        element.style.animation = `${newAnimation} ${Math.random() * 3 + 2}s infinite`;
        element.style.transition = 'transform 1s ease-out';
      });
    }, 5000);
  };

  const startRandomArrowCycles = () => {
    const runCycle = () => {
      const delay = 5000 + Math.random() * 3000;
      
      setTimeout(() => {
        createArrowAnimation();
        runCycle();
      }, delay);
    };
    
    setTimeout(runCycle, 3000);
  };

  useEffect(() => {
    const newParticles = generateParticles(150);
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    if (particles.length > 0) {
      startRandomArrowCycles();
    }
  }, [particles]);

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        @keyframes orbit {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(25px, -15px) rotate(90deg) scale(1.2); }
          50% { transform: translate(0, -30px) rotate(180deg) scale(0.8); }
          75% { transform: translate(-25px, -15px) rotate(270deg) scale(1.1); }
          100% { transform: translate(0, 0) rotate(360deg) scale(1); }
        }
        @keyframes drift {
          0%, 100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
          25% { transform: translateX(-20px) translateY(-10px) rotate(45deg); }
          50% { transform: translateX(15px) translateY(-8px) rotate(90deg); }
          75% { transform: translateX(12px) translateY(5px) rotate(135deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.6; }
          50% { transform: scale(1.5) rotate(180deg); opacity: 0.3; }
        }
        @keyframes spiral {
          0% { transform: rotate(0deg) translateX(20px) rotate(0deg) scale(1); }
          100% { transform: rotate(360deg) translateX(20px) rotate(-360deg) scale(1.3); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.7; filter: blur(0px); }
          50% { transform: scale(1.8) rotate(180deg); opacity: 0.2; filter: blur(1px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 0.7; }
        }
        .particle {
          will-change: transform, opacity;
        }
      `}</style>
      
      <div 
        ref={containerRef}
        className="relative w-full h-screen bg-gray-900 overflow-hidden"
      >
        {particles.map((particle) => (
          <div
            key={particle.id}
            data-particle-id={particle.id}
            className={particle.className}
            style={particle.style}
          />
        ))}
        
        <div className="absolute top-4 left-4 text-white text-sm opacity-50">
          Particle Arrow Animation System
        </div>
      </div>
    </>
  );
};

export default ParticleArrowSystem;