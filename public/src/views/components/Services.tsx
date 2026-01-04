// ============================================================================
// SERVICES COMPONENT
// File: src/views/components/Services.tsx
// ============================================================================

import React from 'react';
import { ThemeModel, ServiceModel } from '../../models';

interface ServicesProps {
  theme: ThemeModel;
  services: ServiceModel[];
  onServiceClick?: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ 
  theme, 
  services,
  onServiceClick 
}) => {
  const isDark = theme.isDark;

  const handleServiceClick = (serviceId: string) => {
    if (onServiceClick) {
      onServiceClick(serviceId);
    }
  };

  return (
    <section 
      id="services" 
      className={`py-20 px-4 ${
        isDark ? 'bg-gray-800' : 'bg-[#9FB4C7]/20'
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Nossos Serviços
        </h2>
        
        {/* Section Description */}
        <p 
          className={`text-center mb-12 max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Escolha o caminho que mais ressoa com seu momento atual
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className={`p-6 rounded-2xl transition-all hover:scale-105 cursor-pointer ${
                isDark 
                  ? 'bg-gray-900 hover:bg-gray-750 hover:shadow-purple-500/20 hover:shadow-xl' 
                  : 'bg-white hover:shadow-xl hover:shadow-[#7F7CAF]/10'
              }`}
              onClick={() => handleServiceClick(service.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleServiceClick(service.id);
                }
              }}
              aria-label={`Saiba mais sobre ${service.title}`}
            >
              {/* Service Icon */}
              <div 
                className={`mb-4 ${
                  isDark ? 'text-purple-400' : 'text-[#7F7CAF]'
                }`}
              >
                {service.icon}
              </div>
              
              {/* Service Title */}
              <h3 className="text-xl font-bold mb-2">
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                {service.description}
              </p>

              {/* Read More Indicator */}
              <div 
                className={`mt-4 text-sm font-semibold ${
                  isDark ? 'text-purple-400' : 'text-[#7F7CAF]'
                }`}
              >
                Saiba mais →
              </div>
            </article>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p 
            className={`text-sm ${
              isDark ? 'text-gray-500' : 'text-gray-500'
            }`}
          >
            Dúvidas sobre qual serviço escolher? Entre em contato conosco!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;