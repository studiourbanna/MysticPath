// ============================================================================
// MODELS - Data structures and business logic
// File: src/models/index.ts
// ============================================================================

import { ReactNode } from 'react';

/**
 * Model for theme configuration
 * Represents the current theme state of the application
 */
export interface ThemeModel {
  isDark: boolean;
}

/**
 * Model for Google Analytics configuration
 * Contains tracking ID and enablement status
 */
export interface AnalyticsModel {
  trackingId: string;
  enabled: boolean;
}

/**
 * Model for service items displayed on the landing page
 * Each service has an ID, icon, title and description
 */
export interface ServiceModel {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
}

/**
 * Model for navigation menu items
 */
export interface MenuItemModel {
  id: string;
  label: string;
  href: string;
  ariaLabel?: string;
}

/**
 * Model for contact information
 */
export interface ContactModel {
  email: string;
  phone: string;
  whatsapp: string;
  schedule: {
    weekdays: string;
    saturday: string;
  };
}

/**
 * Model for SEO meta tags
 */
export interface SEOModel {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

/**
 * Model for social media links
 */
export interface SocialMediaModel {
  id: string;
  platform: string;
  url: string;
  icon: ReactNode;
  ariaLabel: string;
}

/**
 * Model for testimonials
 */
export interface TestimonialModel {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  comment: string;
  date: string;
}

/**
 * Model for FAQ items
 */
export interface FAQModel {
  id: string;
  question: string;
  answer: string;
}

export default {
  ThemeModel,
  AnalyticsModel,
  ServiceModel,
  MenuItemModel,
  ContactModel,
  SEOModel,
  SocialMediaModel,
  TestimonialModel,
  FAQModel
};