// ============================================================================
// ABOUT COMPONENT
// File: src/views/components/About.tsx
// ============================================================================

import React from 'react';
import { ThemeModel } from '../../models';
import { Award, Users, Calendar, Heart } from 'lucide-react';

interface AboutProps {
  theme: ThemeModel;
}

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  isDark: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, isDark }) => (
  <div className="text-center">
    <div 
      className={`inline-flex p-3 rounded-full mb-3 ${
        isDark ? 'bg-purple-900/30' : 'bg-[#7F7CAF]/10'
      }`}
    >
      <div className={isDark ? 'text-purple-400' : 'text-[#7F7CAF]'}>
        {icon}
      </div>
    </div>
    <div className="text-3xl font-bold mb-1">{value}</div>
    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
      {label}
    </div>
  </div>
);

export const About: React.FC<AboutProps> = ({ theme }) => {
  const isDark = theme.isDark;

  const stats = [
    {
      icon: <Calendar className="w-6 h-6" />,
      value: '15+',
      label: 'Anos de Experiência'
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: '2000+',
      label: 'Consultas Realizadas'
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: '98%',
      label: 'Satisfação'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      value: '100%',
      label: 'Dedicação'
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Sobre MysticPath
        </h2>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Uma Jornada de Luz e Sabedoria
            </h3>
            <p 
              className={`text-lg leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-[#28587B]'
              }`}
            >
              Com mais de 15 anos de experiência em artes divinatórias, o MysticPath 
              oferece orientação espiritual autêntica e transformadora.
            </p>
            <p 
              className={`text-lg leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-[#28587B]'
              }`}
            >
              Nossa missão é ajudar você a conectar-se com sua sabedoria interior e 
              descobrir o propósito único da sua jornada através das antigas práticas 
              do tarot e da astrologia.
            </p>
            <p 
              className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-[#28587B]'
              }`}
            >
              Cada consulta é realizada com dedicação, respeito e o compromisso de 
              oferecer insights genuínos que possam iluminar seu caminho.
            </p>
          </div>

          {/* Image Placeholder */}
          <div 
            className={`rounded-2xl overflow-hidden aspect-square ${
              isDark 
                ? 'bg-gradient-to-br from-purple-900 to-pink-900' 
                : 'bg-gradient-to-br from-[#7F7CAF] to-[#9FB4C7]'
            } flex items-center justify-center`}
          >
            <div className="text-center p-8">
              <div className="text-6xl mb-4">🌙</div>
              <p className="text-white text-lg font-semibold">
                Imagem do profissional ou espaço
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div 
          className={`rounded-2xl p-8 ${
            isDark ? 'bg-gray-800' : 'bg-white shadow-xl'
          }`}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Nossa Trajetória em Números
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;