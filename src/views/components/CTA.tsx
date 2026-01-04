import React from 'react';
import { MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { ContactViewModel } from '../../viewmodels/ContactViewModel';

interface CTAProps {
  contactVM: ContactViewModel;
}

export const CTA: React.FC<CTAProps> = ({ contactVM }) => {
  return (
    <section className="section-padding bg-gradient-to-r from-mystic-purple to-mystic-pink">
      <div className="max-w-4xl mx-auto text-center text-white">
        <div className="flex justify-center mb-6">
          <Sparkles className="w-12 h-12 animate-pulse" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Pronto para Desvendar Seu Destino?
        </h2>

        <p className="text-xl mb-8 opacity-90">
          Agende sua consulta hoje e descubra as respostas que o universo tem para você.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={() => contactVM.openWhatsApp()}
            className="bg-white text-mystic-purple hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors flex items-center gap-2 text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Falar pelo WhatsApp
          </button>

          <button
            onClick={() => contactVM.sendEmail()}
            className="border-2 border-white text-white hover:bg-white hover:text-mystic-purple font-semibold py-4 px-8 rounded-lg transition-colors flex items-center gap-2 text-lg"
          >
            <Calendar className="w-5 h-5" />
            Agendar por Email
          </button>
        </div>

        <div className="text-sm opacity-75">
          <p>⭐ Sessões confidenciais • ⭐ Sem julgamentos • ⭐ Resultados comprovados</p>
        </div>
      </div>
    </section>
  );
};