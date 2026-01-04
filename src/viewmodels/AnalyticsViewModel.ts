import { AnalyticsModel } from '../models';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export class AnalyticsViewModel {
  private analytics: AnalyticsModel;

  constructor(trackingId: string = 'G-XXXXXXXXXX') {
    this.analytics = { trackingId, enabled: true };
    this.init();
  }

  private init(): void {
    if (this.analytics.enabled && typeof window !== 'undefined' && !(window as any).gtag) {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.analytics.trackingId}`;
      script.async = true;
      document.head.appendChild(script);

      (window as any).dataLayer = (window as any).dataLayer || [];
      const gtag = function(...args: any[]): void {
        (window as any).dataLayer.push(arguments);
      };
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