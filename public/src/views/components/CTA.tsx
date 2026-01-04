// ============================================================================
// CTA (Call To Action) COMPONENT
// File: src/views/components/CTA.tsx
// ============================================================================

import React from 'react';
import { ThemeModel } from '../../models';
import { MessageCircle, Calendar, Mail } from 'lucide-react';

interface CTAProps {
  theme: ThemeModel;
  onCTAClick: (action: string) => void;
}

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export const CTA: React.FC<CTAProps> = ({ theme, onCTAClick }) => {
  const isDark = theme.isDark;

  const ActionButton: React.FC<ActionButtonProps> = ({ 
    icon, 
    label, 
    onClick, 
    variant = 'secondary' 
  }) => {
    const isPrimary = variant === 'primary';
    
    return (
      <button
        onClick={onClick}
        className={`
          px-6 py-3 rounded-full font-semibold 
          flex items-center gap-2 
          transition-all transform hover:scale-105
          ${isPrimary 
            ? 'bg-white text-purple-900 hover:bg-gray-100 shadow-lg' 
            : 'bg-white/10 text-white border-2 border-white/30 hover:bg-white/20'
          }
        `}
        aria-label={label}
      >
        {icon}
        <span>{label}</span>
      </button>
    );
  };

  return (
    <section 
      className={`py-20 px-4 ${
        isDark 
          ? 'bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900' 
          : 'bg-gradient-to-r from-[#7F7CAF] via-[#28587B] to-[#7F7CAF]'
      } text-white relative overflow-hidden`}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-8xl">✨</div>
        <div className="absolute bottom-10 right-10 text-8xl">🌙</div>
        <div className="absolute top-1/2 left-1/4 text-6xl">⭐</div>
        <div className="absolute top-1/3 right-1/4 text-6xl">🔮</div>
      </div>

      <div className="container mx-auto text-center max-w-4xl relative z-10">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Pronto para Começar sua Jornada?
        </h2>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Reserve sua consulta e descubra o que as estrelas têm a revelar sobre seu futuro
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <ActionButton
            icon={<MessageCircle className="w-5 h-5" />}
            label="WhatsApp"
            onClick={() => onCTAClick('cta-whatsapp')}
            variant="primary"
          />
          <ActionButton
            icon={<Calendar className="w-5 h-5" />}
            label="Agendar Online"
            onClick={() => onCTAClick('cta-schedule')}
            variant="secondary"
          />
          <ActionButton
            icon={<Mail className="w-5 h-5" />}
            label="Email"
            onClick={() => onCTAClick('cta-email')}
            variant="secondary"
          />
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
          <div className="flex items-center gap-2">
            <span className="text-xl">✓</span>
            <span>Atendimento Personalizado</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">✓</span>
            <span>100% Confidencial</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">✓</span>
            <span>Horários Flexíveis</span>
          </div>
        </div>

        {/* Special Offer Badge */}
        <div className="mt-12">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
            <p className="text-sm font-semibold">
              🎁 Primeira consulta com 20% de desconto para novos clientes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;