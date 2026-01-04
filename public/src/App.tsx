import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Sparkles, Star, Eye, Zap, Heart, MessageCircle, Calendar, Mail, Instagram, Facebook, Phone, MapPin, Award, Users } from 'lucide-react';

// ============================================================================
// MODELS
// ============================================================================

interface ThemeModel {
  isDark: boolean;
}

interface AnalyticsModel {
  trackingId: string;
  enabled: boolean;
}

interface ServiceModel {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface MenuItemModel {
  id: string;
  label: string;
  href: string;
  ariaLabel?: string;
}

interface ContactModel {
  email: string;
  phone: string;
  whatsapp: string;
  schedule: {
    weekdays: string;
    saturday: string;
  };
}

// ============================================================================
// VIEW MODELS
// ============================================================================

class ThemeViewModel {
  private theme: ThemeModel;
  private onChange: (theme: ThemeModel) => void;

  constructor(onChange: (theme: ThemeModel) => void) {
    const saved = typeof window !== 'undefined' 
      ? localStorage.getItem('mysticpath-theme')
      : null;
    this.theme = { isDark: saved === 'dark' };
    this.onChange = onChange;
  }

  toggle(): void {
    this.theme.isDark = !this.theme.isDark;
    if (typeof window !== 'undefined') {
      localStorage.setItem('mysticpath-theme', this.theme.isDark ? 'dark' : 'light');
    }
    this.onChange(this.theme);
  }

  getTheme(): ThemeModel {
    return this.theme;
  }
}

class AnalyticsViewModel {
  private analytics: AnalyticsModel;

  constructor(trackingId: string = 'G-XXXXXXXXXX') {
    this.analytics = { trackingId, enabled: true };
    this.init();
  }

  private init(): void {
    if (this.analytics.enabled && typeof window !== 'undefined') {
      if ((window as any).gtag) return;
      
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.analytics.trackingId}`;
      script.async = true;
      document.head.appendChild(script);

      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]): void {
        (window as any).dataLayer.push(arguments);
      }
      (window as any).gtag = gtag;
      gtag('js', new Date());
      gtag('config', this.analytics.trackingId);
    }
  }

  trackEvent(category: string, action: string, label?: string): void {
    if (this.analytics.enabled && typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label
      });
    }
  }
}

class ServicesViewModel {
  getServices(): ServiceModel[] {
    return [
      {
        id: 'tarot',
        icon: <Sparkles className="w-8 h-8" />,
        title: 'Leitura de Tarot',
        description: 'Consultas personalizadas que iluminam seu caminho e revelam insights profundos sobre sua jornada.'
      },
      {
        id: 'astrology',
        icon: <Star className="w-8 h-8" />,
        title: 'Mapa Astral',
        description: 'Descubra os segredos escritos nas estrelas no momento do seu nascimento e compreenda seu propósito.'
      },
      {
        id: 'intuitive',
        icon: <Eye className="w-8 h-8" />,
        title: 'Consulta Intuitiva',
        description: 'Sessões guiadas pela intuição para responder suas questões mais profundas com clareza e sabedoria.'
      },
      {
        id: 'energy',
        icon: <Zap className="w-8 h-8" />,
        title: 'Leitura Energética',
        description: 'Análise do seu campo energético para identificar bloqueios e potencializar seu bem-estar.'
      },
      {
        id: 'love',
        icon: <Heart className="w-8 h-8" />,
        title: 'Tarot do Amor',
        description: 'Orientação especializada sobre relacionamentos, conexões e o caminho do coração.'
      }
    ];
  }
}

class NavigationViewModel {
  getMenuItems(): MenuItemModel[] {
    return [
      { id: 'services', label: 'Serviços', href: '#services', ariaLabel: 'Ir para seção de serviços' },
      { id: 'about', label: 'Sobre', href: '#about', ariaLabel: 'Ir para seção sobre nós' },
      { id: 'contact', label: 'Contato', href: '#contact', ariaLabel: 'Ir para seção de contato' }
    ];
  }
}

class ContactViewModel {
  getContactInfo(): ContactModel {
    return {
      email: 'contato@mysticpath.com',
      phone: '(11) 99999-9999',
      whatsapp: '5511999999999',
      schedule: {
        weekdays: 'Segunda a Sexta: 9h - 18h',
        saturday: 'Sábado: 10h - 14h'
      }
    };
  }
}

// ============================================================================
// COMPONENTS
// ============================================================================

const Header: React.FC<{
  theme: ThemeModel;
  menuItems: MenuItemModel[];
  mobileMenuOpen: boolean;
  onThemeToggle: () => void;
  onMenuToggle: () => void;
  onMenuClose: () => void;
  onNavigationClick: (id: string) => void;
}> = ({ theme, menuItems, mobileMenuOpen, onThemeToggle, onMenuToggle, onMenuClose, onNavigationClick }) => {
  const isDark = theme.isDark;

  return (
    <header className={`fixed w-full top-0 z-50 backdrop-blur-md ${isDark ? 'bg-gray-900/80 border-b border-gray-800' : 'bg-[#EEEEFF]/80 border-b border-[#7F7CAF]/20'}`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between" role="navigation" aria-label="Menu principal">
        <div className="flex items-center gap-2">
          <Moon className={`w-8 h-8 ${isDark ? 'text-purple-400' : 'text-[#7F7CAF]'}`} aria-hidden="true" />
          <span className="text-xl font-bold">MysticPath</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <a key={item.id} href={item.href} className="hover:opacity-70 transition-opacity" onClick={() => onNavigationClick(item.id)}>
              {item.label}
            </a>
          ))}
          <button onClick={onThemeToggle} className={`p-2 rounded-full ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`} aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}>
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        <button className="md:hidden p-2" onClick={onMenuToggle} aria-label="Menu" aria-expanded={mobileMenuOpen}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className={`md:hidden ${isDark ? 'bg-gray-800' : 'bg-white'} border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <a key={item.id} href={item.href} className="py-2" onClick={() => { onNavigationClick(item.id); onMenuClose(); }}>
                {item.label}
              </a>
            ))}
            <button onClick={onThemeToggle} className={`p-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-100'} flex items-center gap-2`}>
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              <span>{isDark ? 'Modo Claro' : 'Modo Escuro'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero: React.FC<{ theme: ThemeModel; onCTAClick: (action: string) => void }> = ({ theme, onCTAClick }) => {
  const isDark = theme.isDark;
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Descubra Seu Caminho Cósmico
        </h1>
        <p className={`text-xl md:text-2xl mb-8 ${isDark ? 'text-gray-300' : 'text-[#28587B]'}`}>
          Orientação espiritual através do tarot e astrologia para iluminar sua jornada
        </p>
        <button onClick={() => onCTAClick('hero-consultation')} className={`px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 ${isDark ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500' : 'bg-gradient-to-r from-[#7F7CAF] to-[#28587B] text-white hover:shadow-xl'}`}>
          Agendar Consulta
        </button>
      </div>
    </section>
  );
};

const Services: React.FC<{ theme: ThemeModel; services: ServiceModel[] }> = ({ theme, services }) => {
  const isDark = theme.isDark;
  return (
    <section id="services" className={`py-20 px-4 ${isDark ? 'bg-gray-800' : 'bg-[#9FB4C7]/20'}`}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article key={service.id} className={`p-6 rounded-2xl transition-all hover:scale-105 ${isDark ? 'bg-gray-900 hover:bg-gray-750' : 'bg-white hover:shadow-xl'}`}>
              <div className={`mb-4 ${isDark ? 'text-purple-400' : 'text-[#7F7CAF]'}`}>{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const About: React.FC<{ theme: ThemeModel }> = ({ theme }) => {
  const isDark = theme.isDark;
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-8">Sobre MysticPath</h2>
        <p className={`text-lg text-center leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#28587B]'}`}>
          Com mais de 15 anos de experiência em artes divinatórias, o MysticPath oferece orientação espiritual autêntica e transformadora. Nossa missão é ajudar você a conectar-se com sua sabedoria interior e descobrir o propósito único da sua jornada através das antigas práticas do tarot e da astrologia.
        </p>
      </div>
    </section>
  );
};

const CTASection: React.FC<{ theme: ThemeModel; onCTAClick: (action: string) => void }> = ({ theme, onCTAClick }) => {
  const isDark = theme.isDark;
  return (
    <section className={`py-20 px-4 ${isDark ? 'bg-gradient-to-r from-purple-900 to-pink-900' : 'bg-gradient-to-r from-[#7F7CAF] to-[#28587B]'} text-white`}>
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-6">Pronto para Começar sua Jornada?</h2>
        <p className="text-xl mb-8 opacity-90">Reserve sua consulta e descubra o que as estrelas têm a revelar sobre seu futuro</p>
        <button onClick={() => onCTAClick('cta-whatsapp')} className="px-8 py-4 bg-white text-purple-900 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
          Falar no WhatsApp
        </button>
      </div>
    </section>
  );
};

const Footer: React.FC<{ theme: ThemeModel; contactInfo: ContactModel }> = ({ theme, contactInfo }) => {
  const isDark = theme.isDark;
  return (
    <footer id="contact" className={`py-12 px-4 ${isDark ? 'bg-gray-900 border-t border-gray-800' : 'bg-[#9FB798]/20 border-t border-[#7F7CAF]/20'}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">MysticPath</h3>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Iluminando caminhos através da sabedoria ancestral</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              Email: {contactInfo.email}<br />
              Tel: {contactInfo.phone}
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Horário</h3>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              {contactInfo.schedule.weekdays}<br />
              {contactInfo.schedule.saturday}
            </p>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-700">
          <p className={isDark ? 'text-gray-500' : 'text-gray-600'}>© 2026 MysticPath. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

// ============================================================================
// MAIN APP
// ============================================================================

const TarotLandingPage: React.FC = () => {
  const [theme, setTheme] = useState<ThemeModel>({ isDark: false });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeVM] = useState(() => new ThemeViewModel(setTheme));
  const [analyticsVM] = useState(() => new AnalyticsViewModel('G-XXXXXXXXXX'));
  const [servicesVM] = useState(() => new ServicesViewModel());
  const [navigationVM] = useState(() => new NavigationViewModel());
  const [contactVM] = useState(() => new ContactViewModel());

  useEffect(() => {
    setTheme(themeVM.getTheme());
  }, [themeVM]);

  const handleCTAClick = (action: string): void => {
    analyticsVM.trackEvent('CTA', 'click', action);
  };

  const handleNavigationClick = (itemId: string): void => {
    analyticsVM.trackEvent('Navigation', 'click', itemId);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme.isDark ? 'bg-gray-900 text-gray-100' : 'bg-[#EEEEFF] text-gray-900'}`}>
      <Header
        theme={theme}
        menuItems={navigationVM.getMenuItems()}
        mobileMenuOpen={mobileMenuOpen}
        onThemeToggle={() => themeVM.toggle()}
        onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        onMenuClose={() => setMobileMenuOpen(false)}
        onNavigationClick={handleNavigationClick}
      />
      <Hero theme={theme} onCTAClick={handleCTAClick} />
      <Services theme={theme} services={servicesVM.getServices()} />
      <About theme={theme} />
      <CTASection theme={theme} onCTAClick={handleCTAClick} />
      <Footer theme={theme} contactInfo={contactVM.getContactInfo()} />
    </div>
  );
};

export default TarotLandingPage;