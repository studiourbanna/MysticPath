// ============================================================================
// FOOTER COMPONENT
// File: src/views/components/Footer.tsx
// ============================================================================

import React from 'react';
import { ThemeModel, ContactModel } from '../../models';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  theme: ThemeModel;
  contactInfo: ContactModel;
  onSocialClick?: (platform: string) => void;
}

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
  onClick: () => void;
  isDark: boolean;
}

const SocialLink: React.FC<SocialLinkProps> = ({ 
  icon, 
  href, 
  label, 
  onClick,
  isDark 
}) => (
  <a
    href={href}
    onClick={onClick}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-3 rounded-full transition-all hover:scale-110 ${
      isDark 
        ? 'bg-gray-800 hover:bg-purple-900 text-gray-400 hover:text-purple-400' 
        : 'bg-white hover:bg-[#7F7CAF] text-gray-600 hover:text-white'
    }`}
    aria-label={label}
  >
    {icon}
  </a>
);

export const Footer: React.FC<FooterProps> = ({ 
  theme, 
  contactInfo,
  onSocialClick 
}) => {
  const isDark = theme.isDark;

  const handleSocialClick = (platform: string) => {
    if (onSocialClick) {
      onSocialClick(platform);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="contact" 
      className={`py-12 px-4 ${
        isDark 
          ? 'bg-gray-900 border-t border-gray-800' 
          : 'bg-[#9FB798]/20 border-t border-[#7F7CAF]/20'
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4">MysticPath</h3>
            <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Iluminando caminhos através da sabedoria ancestral do tarot e astrologia.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <SocialLink
                icon={<Instagram className="w-5 h-5" />}
                href="https://instagram.com/mysticpath"
                label="Instagram"
                onClick={() => handleSocialClick('instagram')}
                isDark={isDark}
              />
              <SocialLink
                icon={<Facebook className="w-5 h-5" />}
                href="https://facebook.com/mysticpath"
                label="Facebook"
                onClick={() => handleSocialClick('facebook')}
                isDark={isDark}
              />
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <li>
                <a href="#services" className="hover:opacity-70 transition-opacity">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#about" className="hover:opacity-70 transition-opacity">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-70 transition-opacity">
                  Contato
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:opacity-70 transition-opacity">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className={`space-y-3 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="hover:opacity-70 transition-opacity"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <a 
                  href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                  className="hover:opacity-70 transition-opacity"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>

          {/* Schedule Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Horário</h3>
            <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <li>{contactInfo.schedule.weekdays}</li>
              <li>{contactInfo.schedule.saturday}</li>
              <li className="pt-2 text-xs opacity-75">
                Domingo: Fechado
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className={`pt-8 border-t ${
            isDark ? 'border-gray-800' : 'border-gray-300'
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
              © {currentYear} MysticPath. Todos os direitos reservados.
            </p>

            {/* Legal Links */}
            <div className={`flex gap-6 text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
              <a href="/privacy" className="hover:opacity-70 transition-opacity">
                Privacidade
              </a>
              <a href="/terms" className="hover:opacity-70 transition-opacity">
                Termos de Uso
              </a>
              <a href="/cookies" className="hover:opacity-70 transition-opacity">
                Cookies
              </a>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="text-center mt-6">
            <p className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-500'}`}>
              Desenvolvido com 💜 para a comunidade espiritual
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;