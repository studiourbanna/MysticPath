export interface ThemeModel {
  isDark: boolean;
}

export interface AnalyticsModel {
  trackingId: string;
  enabled: boolean;
}

export interface ServiceModel {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface NavigationModel {
  currentSection: string;
}

export interface ContactModel {
  email: string;
  phone: string;
  whatsapp: string;
  schedule: {
    weekdays: string;
    saturday: string;
  };
  socialLinks: {
    instagram: string;
    facebook: string;
    whatsapp: string;
  };
}

export interface MenuItemModel {
  id: string;
  label: string;
  href: string;
  ariaLabel?: string;
}