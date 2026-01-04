import React from 'react';
import { Award, Users, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Sobre a MysticPath
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Há mais de 10 anos ajudando pessoas a encontrarem clareza, propósito e paz interior através das ferramentas espirituais ancestrais.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Combinamos conhecimento tradicional com abordagem moderna, oferecendo leituras precisas e orientações práticas para o dia a dia. Cada consulta é uma jornada de descoberta, onde você encontra as respostas que já estavam dentro de si.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <Award className="w-8 h-8 text-mystic-purple dark:text-mystic-pink mx-auto mb-2" />
                <div className="font-semibold text-gray-900 dark:text-white">Certificada</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Formação completa em tarot e astrologia</div>
              </div>

              <div className="text-center">
                <Users className="w-8 h-8 text-mystic-purple dark:text-mystic-pink mx-auto mb-2" />
                <div className="font-semibold text-gray-900 dark:text-white">500+ Clientes</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Histórias de transformação</div>
              </div>

              <div className="text-center">
                <Heart className="w-8 h-8 text-mystic-purple dark:text-mystic-pink mx-auto mb-2" />
                <div className="font-semibold text-gray-900 dark:text-white">Abordagem Amorosa</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Sempre com compaixão e respeito</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-mystic-purple/20 to-mystic-pink/20 dark:from-mystic-purple/10 dark:to-mystic-pink/10 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">✨</div>
                <div className="text-2xl font-bold text-mystic-purple dark:text-mystic-pink mb-2">
                  Sua Jornada Espiritual
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Começa com um passo de coragem
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};