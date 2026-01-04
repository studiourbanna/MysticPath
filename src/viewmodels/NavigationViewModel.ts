import { MenuItemModel, NavigationModel } from '../models';

export class NavigationViewModel {
  scrollToSection(arg0: string): void {
    const id = arg0.replace('#', '');
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', // Isso faz o efeito de deslizar suavemente
        block: 'start',
      });
    } else {
      console.warn(`Seção com id "${id}" não encontrada na página.`);
    }
  }
  getMenuItems(): MenuItemModel[] {
    return [
      { id: 'services', label: 'Serviços', href: '#services', ariaLabel: 'Ir para seção de serviços' },
      { id: 'about', label: 'Sobre', href: '#about', ariaLabel: 'Ir para seção sobre nós' },
      { id: 'contact', label: 'Contato', href: '#contact', ariaLabel: 'Ir para seção de contato' }
    ];
  }
}
