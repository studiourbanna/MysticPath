// ============================================================================
// VIEW MODELS - Business logic and state management
// File: src/viewmodels/index.ts
// ============================================================================

import React from 'react';
import { Sparkles, Star, Eye, Zap, Heart } from 'lucide-react';
import { 
  ThemeModel, 
  AnalyticsModel, 
  ServiceModel, 
  MenuItemModel,
  ContactModel 
} from '../models';

/**
 * ThemeViewModel
 * Manages theme state and persistence
 */
export class ThemeViewModel {
  private theme: ThemeModel;
  private onChange: (theme: ThemeModel) => void;

  constructor(onChange: (theme: ThemeModel) => void) {
    // Load saved theme from localStorage or default to light mode
    const saved = typeof window !== 'undefined' 
      ? localStorage.getItem('mysticpath-theme')
      : null;
    
    this.theme = { isDark: saved === 'dark' };
    this.onChange = onChange;
  }

  /**
   * Toggle between light and dark theme
   */
  toggle(): void {
    this.theme.isDark = !this.theme.isDark;
    
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        'mysticpath-theme', 
        this.theme.isDark ? 'dark' : 'light'
      );
    }
    
    this.onChange(this.theme);
  }

  /**
   * Get current theme
   */
  getTheme(): ThemeModel {
    return this.theme;
  }

  /**
   * Set specific theme
   */
  setTheme(isDark: boolean): void {
    this.theme.isDark = isDark;
    
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        'mysticpath-theme', 
        this.theme.isDark ? 'dark' : 'light'
      );
    }
    
    this.onChange(this.theme);
  }
}

/**
 * AnalyticsViewModel
 * Manages Google Analytics integration and event tracking
 */
export class AnalyticsViewModel {
  private analytics: AnalyticsModel;

  constructor(trackingId: string = 'G-XXXXXXXXXX') {
    this.analytics = {
      trackingId,
      enabled: true
    };
    this.init();
  }

  /**
   * Initialize Google Analytics
   */
  private init(): void {
    if (this.analytics.enabled && typeof window !== 'undefined') {
      // Check if gtag is already loaded
      if ((window as any).gtag) {
        return;
      }

      // Load Google Analytics script
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.analytics.trackingId}`;
      script.async = true;
      document.head.appendChild(script);

      // Initialize dataLayer
      (window as any).dataLayer = (window as any).dataLayer || [];
      
      function gtag(...args: any[]): void {
        (window as any).dataLayer.push(arguments);
      }
      
      (window as any).gtag = gtag;
      gtag('js', new Date());
      gtag('config', this.analytics.trackingId);
    }
  }

  /**
   * Track custom event
   */
  trackEvent(category: string, action: string, label?: string, value?: number): void {
    if (this.analytics.enabled && typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  }

  /**
   * Track page view
   */
  trackPageView(page: string): void {
    if (this.analytics.enabled && typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'page_view', {
        page_path: page
      });
    }
  }

  /**
   * Enable/disable analytics
   */
  setEnabled(enabled: boolean): void {
    this.analytics.enabled = enabled;
  }

  /**
   * Get analytics status
   */
  isEnabled(): boolean {
    return this.analytics.enabled;
  }
}

/**
 * ServicesViewModel
 * Provides service data for the services section
 */
export class ServicesViewModel {
  
  /**
   * Get all available services
   */
  getServices(): ServiceModel[] {
    return [
      {
        id: 'tarot',
        icon: React.createElement(Sparkles, { className: 'w-8 h-8' }),
        title: 'Leitura de Tarot',
        description: 'Consultas personalizadas que iluminam seu caminho e revelam insights profundos sobre sua jornada.'
      },
      {
        id: 'astrology',
        icon: React.createElement(Star, { className: 'w-8 h-8' }),
        title: 'Mapa Astral',
        description: 'Descubra os segredos escritos nas estrelas no momento do seu nascimento e compreenda seu propósito.'
      },
      {
        id: 'intuitive',
        icon: React.createElement(Eye, { className: 'w-8 h-8' }),
        title: 'Consulta Intuitiva',
        description: 'Sessões guiadas pela intuição para responder suas questões mais profundas com clareza e sabedoria.'
      },
      {
        id: 'energy',
        icon: React.createElement(Zap, { className: 'w-8 h-8' }),
        title: 'Leitura Energética',
        description: 'Análise do seu campo energético para identificar bloqueios e potencializar seu bem-estar.'
      },
      {
        id: 'love',
        icon: React.createElement(Heart, { className: 'w-8 h-8' }),
        title: 'Tarot do Amor',
        description: 'Orientação especializada sobre relacionamentos, conexões e o caminho do coração.'
      }
    ];
  }

  /**
   * Get service by ID
   */
  getServiceById(id: string): ServiceModel | undefined {
    return this.getServices().find(service => service.id === id);
  }

  /**
   * Get featured services (first 3)
   */
  getFeaturedServices(): ServiceModel[] {
    return this.getServices().slice(0, 3);
  }
}

/**
 * NavigationViewModel
 * Manages navigation menu items
 */
export class NavigationViewModel {
  
  /**
   * Get main navigation items
   */
  getMenuItems(): MenuItemModel[] {
    return [
      {
        id: 'services',
        label: 'Serviços',
        href: '#services',
        ariaLabel: 'Ir para seção de serviços'
      },
      {
        id: 'about',
        label: 'Sobre',
        href: '#about',
        ariaLabel: 'Ir para seção sobre nós'
      },
      {
        id: 'contact',
        label: 'Contato',
        href: '#contact',
        ariaLabel: 'Ir para seção de contato'
      }
    ];
  }
}

/**
 * ContactViewModel
 * Manages contact information
 */
export class ContactViewModel {
  
  /**
   * Get contact information
   */
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

  /**
   * Get WhatsApp link with optional message
   */
  getWhatsAppLink(message?: string): string {
    const contact = this.getContactInfo();
    const encodedMessage = message 
      ? encodeURIComponent(message)
      : encodeURIComponent('Olá! Gostaria de agendar uma consulta.');
    
    return `https://wa.me/${contact.whatsapp}?text=${encodedMessage}`;
  }

  /**
   * Get email mailto link
   */
  getEmailLink(subject?: string): string {
    const contact = this.getContactInfo();
    const encodedSubject = subject 
      ? `?subject=${encodeURIComponent(subject)}`
      : '?subject=Contato%20via%20Site';
    
    return `mailto:${contact.email}${encodedSubject}`;
  }
}

export default {
  ThemeViewModel,
  AnalyticsViewModel,
  ServicesViewModel,
  NavigationViewModel,
  ContactViewModel
};