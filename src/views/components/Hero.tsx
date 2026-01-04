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
    <section 
      id="home" 
      // Mudança: bg-white como padrão e bg-slate-950 no dark
      className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          
          <div className="flex justify-center mb-8">
            <Sparkles className="w-16 h-16 text-mystic-pink dark:text-mystic-purple animate-pulse transition-colors" />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Desvende os
            <span className="block text-mystic-pink dark:text-mystic-purple transition-colors">
              Segredos do Universo
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Tarot, astrologia e orientação espiritual para iluminar seu caminho e trazer clareza para sua jornada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => contactVM.openWhatsApp()}
              className="bg-mystic-pink hover:bg-mystic-pink/90 dark:bg-mystic-purple dark:hover:bg-mystic-purple/90 text-white flex items-center gap-2 text-lg px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Agendar Consulta
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => navVM.scrollToSection('services')}
              className="border-2 border-mystic-pink text-mystic-pink hover:bg-mystic-pink/5 dark:border-mystic-purple dark:text-mystic-purple dark:hover:bg-mystic-purple/5 text-lg px-8 py-4 rounded-full transition-all"
            >
              Conheça os Serviços
            </button>
          </div>

          {/* Estatísticas com cores sólidas */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-4 rounded-2xl bg-gray-50 dark:bg-slate-900 transition-colors">
              <div className="text-3xl font-bold text-mystic-pink dark:text-mystic-purple mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-400">Consultas Realizadas</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-gray-50 dark:bg-slate-900 transition-colors">
              <div className="text-3xl font-bold text-mystic-pink dark:text-mystic-purple mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-400">Satisfação</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-gray-50 dark:bg-slate-900 transition-colors">
              <div className="text-3xl font-bold text-mystic-pink dark:text-mystic-purple mb-2">5★</div>
              <div className="text-gray-600 dark:text-gray-400">Avaliação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};