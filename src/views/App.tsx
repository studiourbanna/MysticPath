import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Sparkles, Star, Eye, Zap, Heart, MessageCircle, Calendar, Mail, Instagram, Facebook, Phone, MapPin, Award, Users } from 'lucide-react';

import { ThemeModel } from '../models';
import { ThemeViewModel } from '../viewmodels/ThemeViewModel';
import { AnalyticsViewModel } from '../viewmodels/AnalyticsViewModel';
import { ServicesViewModel } from '../viewmodels/ServicesViewModel';
import { NavigationViewModel } from '../viewmodels/NavigationViewModel';
import { ContactViewModel } from '../viewmodels/ContactViewModel';
import { Header, Hero, Services, About, CTA, Footer } from './components';

// ============================================================================
// MAIN APP - CORRIGIDO
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
        const initialTheme = themeVM.getTheme();
        setTheme(initialTheme);
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
                themeVM={themeVM}
                navVM={navigationVM}
            />
            <Hero 
                navVM={navigationVM}
                contactVM={contactVM} 
            />
            <Services 
                servicesVM={servicesVM} 
            />
            <About />
            <CTA contactVM={contactVM} />
            <Footer contactVM={contactVM} />
        </div>
    );
};

export default TarotLandingPage;