'use client';
import React from 'react';
import { generateParticles, particleAnimations } from './particles';

export default function ParticleBackground({ count = 30, className = '' }) {
  const particles = generateParticles(count);
  return (
    <>
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {particles.map((particle) => (
          <div key={particle.id} className={particle.className} style={particle.style} />
        ))}
      </div>
      <style dangerouslySetInnerHTML={{ __html: particleAnimations }} />
    </>
  );
}