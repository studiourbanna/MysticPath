// ============================================================================
// HEADER COMPONENT
// File: src/views/components/Header.tsx
// ============================================================================

import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { ThemeModel, MenuItemModel } from '../../models';

interface HeaderProps {
  theme: ThemeModel;
  menuItems: MenuItemModel[];
  mobileMenuOpen: boolean;
  onThemeToggle: () => void;
  onMenuToggle: () => void;
  onMenuClose: () => void;
  onNavigationClick: (itemId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  menuItems,
  mobileMenuOpen,
  onThemeToggle,
  onMenuToggle,
  onMenuClose,
  onNavigationClick
}) => {
  const isDark = theme.isDark;

  const handleMenuItemClick = (item: MenuItemModel) => {
    onNavigationClick(item.id);
    onMenuClose();
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 backdrop-blur-md ${
        isDark 
          ? 'bg-gray-900/80 border-b border-gray-800' 
          : 'bg-[#EEEEFF]/80 border-b border-[#7F7CAF]/20'
      }`}
    >
      <nav 
        className="container mx-auto px-4 py-4 flex items-center justify-between" 
        role="navigation" 
        aria-label="Menu principal"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Moon 
            className={`w-8 h-8 ${isDark ? 'text-purple-400' : 'text-[#7F7CAF]'}`} 
            aria-hidden="true" 
          />
          <span className="text-xl font-bold">MysticPath</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="hover:opacity-70 transition-opacity"
              onClick={() => onNavigationClick(item.id)}
              aria-label={item.ariaLabel}
            >
              {item.label}
            </a>
          ))}
          
          {/* Theme Toggle Button */}
          <button
            onClick={onThemeToggle}
            className={`p-2 rounded-full ${
              isDark ? 'bg-gray-800' : 'bg-white'
            } shadow-lg transition-all hover:scale-110`}
            aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
          >
            {isDark ? (
              <Sun className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Moon className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={onMenuToggle}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          className={`md:hidden ${
            isDark ? 'bg-gray-800' : 'bg-white'
          } border-t ${
            isDark ? 'border-gray-700' : 'border-gray-200'
          }`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="py-2"
                onClick={() => handleMenuItemClick(item)}
                aria-label={item.ariaLabel}
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile Theme Toggle */}
            <button
              onClick={onThemeToggle}
              className={`p-2 rounded-full ${
                isDark ? 'bg-gray-700' : 'bg-gray-100'
              } flex items-center gap-2`}
              aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {isDark ? (
                <>
                  <Sun className="w-5 h-5" aria-hidden="true" />
                  <span>Modo Claro</span>
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5" aria-hidden="true" />
                  <span>Modo Escuro</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;