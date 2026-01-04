import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { NavigationViewModel } from '../../viewmodels/NavigationViewModel';
import { ContactViewModel } from '../../viewmodels/ContactViewModel';

interface HeroProps {
  navVM: NavigationViewModel;
  contactVM: ContactViewModel;
}

export const Hero: React.FC<HeroProps> = ({ navVM, contactVM }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-mystic-purple/10 via-mystic-pink/10 to-mystic-gold/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <Sparkles className="w-16 h-16 text-mystic-purple dark:text-mystic-pink animate-pulse" />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Desvende os
            <span className="block text-mystic-purple dark:text-mystic-pink">
              Segredos do Universo
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Tarot, astrologia e orientação espiritual para iluminar seu caminho e trazer clareza para sua jornada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => contactVM.openWhatsApp()}
              className="btn-primary flex items-center gap-2 text-lg px-8 py-4"
            >
              Agendar Consulta
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => navVM.scrollToSection('services')}
              className="btn-secondary text-lg px-8 py-4"
            >
              Conheça os Serviços
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-mystic-purple dark:text-mystic-pink mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-400">Consultas Realizadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-mystic-purple dark:text-mystic-pink mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-400">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-mystic-purple dark:text-mystic-pink mb-2">5★</div>
              <div className="text-gray-600 dark:text-gray-400">Avaliação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};