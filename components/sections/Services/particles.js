export const generateParticles = (count = 30) => {
  const particles = [];
  const colors = ['blue', 'purple', 'cyan', 'indigo', 'pink', 'emerald', 'orange', 'teal', 'violet', 'rose', 'sky', 'amber', 'lime', 'fuchsia', 'slate'];
  const sizes = ['w-0.5 h-0.5', 'w-1 h-1', 'w-1.5 h-1.5', 'w-2 h-2'];
  const animations = [
    'float 3s ease-in-out infinite',
    'orbit 6s linear infinite', 
    'drift 4s ease-in-out infinite',
    'pulse 3s ease-in-out infinite',
    'zigzag 5s ease-in-out infinite',
    'spiral 4s linear infinite',
    'wave 3.5s ease-in-out infinite',
    'breathe 4s ease-in-out infinite',
    'pendulum 4.5s ease-in-out infinite',
    'rotate 5s linear infinite',
    'bounce 2.5s ease-in-out infinite',
    'shake 3s ease-in-out infinite',
    'flicker 2s ease-in-out infinite',
    'magneticFloat 4s ease-in-out infinite',
    'technoPulse 3s ease-in-out infinite'
  ];

  const positions = [
    'top-8 left-12', 'top-16 right-20', 'top-24 left-1/4', 'top-32 right-1/3',
    'top-40 left-1/5', 'top-48 right-1/4', 'top-1/4 left-16', 'top-1/3 right-12',
    'top-1/2 left-24', 'top-3/5 right-16', 'top-2/3 left-20', 'top-3/4 right-24',
    'top-4/5 left-1/3', 'bottom-1/4 right-1/5', 'bottom-1/3 left-1/4', 'bottom-2/5 right-1/3',
    'bottom-1/2 left-1/6', 'bottom-3/5 right-1/6', 'bottom-2/3 left-1/5', 'bottom-3/4 right-1/4',
    'top-12 left-2/3', 'top-20 right-2/5', 'top-28 left-3/4', 'top-36 right-3/5',
    'top-44 left-4/5', 'top-52 right-4/5', 'top-1/5 left-2/5', 'top-2/5 right-3/4',
    'top-3/5 left-3/5', 'top-4/5 right-1/2'
  ];

  for (let i = 0; i < count; i++) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    const animation = animations[Math.floor(Math.random() * animations.length)];
    const position = positions[i % positions.length];
    const delay = (i * 0.3) + Math.random() * 2;
    const animationDelay = Math.random() * 3;
    
    particles.push({
      id: i,
      className: `absolute ${position} ${size} bg-${color}-400 rounded-full opacity-0`,
      style: {
        animation: `${animation} ${animationDelay}s, fadeIn 0.8s ease-out ${delay}s forwards`,
        filter: 'blur(0.5px)',
        boxShadow: `0 0 8px rgba(59, 130, 246, 0.3)`
      }
    });
  }
  
  return particles;
};

export const particleAnimations = `
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
  
  @keyframes zigzag {
    0% { transform: translateX(0px) translateY(0px) rotate(0deg); }
    20% { transform: translateX(20px) translateY(-12px) rotate(72deg); }
    40% { transform: translateX(-15px) translateY(-25px) rotate(144deg); }
    60% { transform: translateX(18px) translateY(-20px) rotate(216deg); }
    80% { transform: translateX(-10px) translateY(-8px) rotate(288deg); }
    100% { transform: translateX(0px) translateY(0px) rotate(360deg); }
  }
  
  @keyframes spiral {
    0% { transform: rotate(0deg) translateX(20px) rotate(0deg) scale(1); }
    100% { transform: rotate(360deg) translateX(20px) rotate(-360deg) scale(1.3); }
  }
  
  @keyframes wave {
    0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
    25% { transform: translateY(-12px) translateX(8px) rotate(45deg); }
    50% { transform: translateY(0px) translateX(15px) rotate(90deg); }
    75% { transform: translateY(12px) translateX(8px) rotate(135deg); }
  }
  
  @keyframes breathe {
    0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.7; filter: blur(0px); }
    50% { transform: scale(1.8) rotate(180deg); opacity: 0.2; filter: blur(1px); }
  }
  
  @keyframes pendulum {
    0%, 100% { transform: rotate(0deg) translateY(0px) scale(1); }
    25% { transform: rotate(20deg) translateY(-8px) scale(1.1); }
    50% { transform: rotate(0deg) translateY(-12px) scale(0.9); }
    75% { transform: rotate(-20deg) translateY(-8px) scale(1.1); }
  }
  
  @keyframes rotate {
    0% { transform: rotate(0deg) translateX(18px) scale(1); }
    100% { transform: rotate(360deg) translateX(18px) scale(1.2); }
  }
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
    25% { transform: translateY(-18px) rotate(90deg) scale(1.3); }
    50% { transform: translateY(-25px) rotate(180deg) scale(0.8); }
    75% { transform: translateY(-12px) rotate(270deg) scale(1.1); }
  }
  
  @keyframes shake {
    0%, 100% { transform: translateX(0px) rotate(0deg); }
    10% { transform: translateX(-8px) rotate(18deg); }
    20% { transform: translateX(8px) rotate(-18deg); }
    30% { transform: translateX(-6px) rotate(12deg); }
    40% { transform: translateX(6px) rotate(-12deg); }
    50% { transform: translateX(-4px) rotate(8deg); }
    60% { transform: translateX(4px) rotate(-8deg); }
    70% { transform: translateX(-2px) rotate(4deg); }
    80% { transform: translateX(2px) rotate(-4deg); }
    90% { transform: translateX(-1px) rotate(2deg); }
  }
  
  @keyframes flicker {
    0%, 100% { opacity: 0.8; transform: scale(1); }
    20% { opacity: 0.3; transform: scale(1.2); }
    40% { opacity: 0.9; transform: scale(0.8); }
    60% { opacity: 0.2; transform: scale(1.4); }
    80% { opacity: 0.7; transform: scale(0.9); }
  }
  
  @keyframes magneticFloat {
    0%, 100% { 
      transform: translateX(0px) translateY(0px) rotate(0deg); 
      filter: blur(0px);
    }
    25% { 
      transform: translateX(-15px) translateY(-20px) rotate(90deg); 
      filter: blur(0.5px);
    }
    50% { 
      transform: translateX(10px) translateY(-35px) rotate(180deg); 
      filter: blur(1px);
    }
    75% { 
      transform: translateX(20px) translateY(-15px) rotate(270deg); 
      filter: blur(0.5px);
    }
  }
  
  @keyframes technoPulse {
    0%, 100% { 
      transform: scale(1) rotate(0deg); 
      opacity: 0.6; 
      box-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
    }
    33% { 
      transform: scale(1.4) rotate(120deg); 
      opacity: 0.9; 
      box-shadow: 0 0 15px rgba(168, 85, 247, 0.6);
    }
    66% { 
      transform: scale(0.8) rotate(240deg); 
      opacity: 0.4; 
      box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
    }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;