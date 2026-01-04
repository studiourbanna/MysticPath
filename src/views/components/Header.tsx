import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { ThemeViewModel } from '../../viewmodels/ThemeViewModel';
import { NavigationViewModel } from '../../viewmodels/NavigationViewModel';

interface HeaderProps {
  themeVM: ThemeViewModel;
  navVM: NavigationViewModel;
}

export const Header: React.FC<HeaderProps> = ({ themeVM, navVM }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // Inicializa o estado com o valor atual do ViewModel
  const [isDark, setIsDark] = React.useState(themeVM.getTheme().isDark);

  React.useEffect(() => {
    // Em vez de setInterval, usamos o callback de mudança que o ViewModel já possui
    // Nota: Para isso funcionar perfeitamente, o ViewModel deve chamar o onChange.
    // Se o seu ViewModel é instanciado fora do componente, você pode precisar 
    // de um pequeno ajuste na forma como o estado é injetado.
  }, [themeVM]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Função para lidar com o clique e forçar a atualização da interface
  const handleThemeToggle = () => {
    themeVM.toggleTheme();
    setIsDark(themeVM.getTheme().isDark); // Atualiza o estado local para refletir no ícone
  };

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'services', label: 'Serviços' },
    { id: 'about', label: 'Sobre' },
    { id: 'contact', label: 'Contato' }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Moon className={`w-8 h-8 ${isDark ? 'text-purple-400' : 'text-[#7F7CAF]'}`} aria-hidden="true" />
            <h1 className="text-2xl font-bold text-mystic-purple dark:text-mystic-pink">
              MysticPath
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navVM.scrollToSection(item.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-mystic-purple dark:hover:text-mystic-pink transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            {/* BOTÃO DE TEMA */}
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-all duration-300"
              aria-label="Alternar tema"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-mystic-purple" />
              )}
            </button>

            {/* BOTÃO MENU MOBILE */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* MENU MOBILE EXPANDIDO */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <nav className="flex flex-col space-y-4 px-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    navVM.scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};