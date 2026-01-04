import React from 'react';
import { Instagram, Facebook, MessageCircle, Mail, Phone } from 'lucide-react';
import { ContactViewModel } from '../../viewmodels/ContactViewModel';

interface FooterProps {
  contactVM: ContactViewModel;
}

export const Footer: React.FC<FooterProps> = ({ contactVM }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-mystic-pink mb-4">
              MysticPath
            </h3>
            <p className="text-gray-300 mb-4">
              Iluminando caminhos através do tarot, astrologia e orientação espiritual.
            </p>
            <div className="flex space-x-4">
              {contactVM.socialLinks.instagram && (
                <a
                  href={contactVM.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-mystic-pink transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              )}
              {contactVM.socialLinks.facebook && (
                <a
                  href={contactVM.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-mystic-pink transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-mystic-pink" />
                <button
                  onClick={() => contactVM.openWhatsApp()}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  WhatsApp
                </button>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-mystic-pink" />
                <button
                  onClick={() => contactVM.sendEmail()}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {contactVM.email}
                </button>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-mystic-pink" />
                <span className="text-gray-300">{contactVM.phone}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Horário de Atendimento</h4>
            <div className="text-gray-300 space-y-1">
              <p>Segunda - Sexta: 9h às 18h</p>
              <p>Sábado: 9h às 12h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} MysticPath. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Feito com ❤️ para iluminar caminhos espirituais
          </p>
        </div>
      </div>
    </footer>
  );
};