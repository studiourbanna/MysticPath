// ============================================================================
// HERO COMPONENT
// File: src/views/components/Hero.tsx
// ============================================================================

import React from 'react';
import { ThemeModel } from '../../models';

interface HeroProps {
  theme: ThemeModel;
  onCTAClick: (action: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ theme, onCTAClick }) => {
  const isDark = theme.isDark;

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
          Descubra Seu Caminho Cósmico
        </h1>
        
        {/* Subtitle */}
        <p 
          className={`text-xl md:text-2xl mb-8 ${
            isDark ? 'text-gray-300' : 'text-[#28587B]'
          }`}
        >
          Orientação espiritual através do tarot e astrologia para iluminar sua jornada
        </p>
        
        {/* CTA Button */}
        <button
          onClick={() => onCTAClick('hero-consultation')}
          className={`px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 ${
            isDark 
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg hover:shadow-purple-500/50' 
              : 'bg-gradient-to-r from-[#7F7CAF] to-[#28587B] text-white hover:shadow-xl'
          }`}
          aria-label="Agendar consulta de tarot ou astrologia"
        >
          Agendar Consulta
        </button>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center gap-4 opacity-50">
          <div className={`w-2 h-2 rounded-full ${
            isDark ? 'bg-purple-400' : 'bg-[#7F7CAF]'
          } animate-pulse`} />
          <div className={`w-2 h-2 rounded-full ${
            isDark ? 'bg-purple-400' : 'bg-[#7F7CAF]'
          } animate-pulse`} style={{ animationDelay: '0.2s' }} />
          <div className={`w-2 h-2 rounded-full ${
            isDark ? 'bg-purple-400' : 'bg-[#7F7CAF]'
          } animate-pulse`} style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;