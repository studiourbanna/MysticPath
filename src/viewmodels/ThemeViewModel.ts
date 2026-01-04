// ============================================================================
// THEME VIEW MODEL - CORRIGIDO
// File: src/viewmodels/ThemeViewModel.ts
// ============================================================================

import { ThemeModel } from '../models';

/**
 * ThemeViewModel
 * Manages theme state and persistence
 * CORRIGIDO: Garante que inicia sempre em modo claro por padrão
 */
export class ThemeViewModel {

    private theme: ThemeModel;
    private onChange: (theme: ThemeModel) => void;

    constructor(onChange: (theme: ThemeModel) => void) {
        this.onChange = onChange;
        // Inicia como falso por padrão
        this.theme = { isDark: false };

        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('mysticpath-theme');
            if (saved === 'dark') {
                this.theme = { isDark: true };
            }
        }
    }

    toggleTheme(): void {
        this.toggle();
    }

    toggle(): void {
        this.theme.isDark = !this.theme.isDark;

        if (typeof window !== 'undefined') {
            localStorage.setItem('mysticpath-theme', this.theme.isDark ? 'dark' : 'light');

            // DICA: Adicione ou remova a classe 'dark' no HTML para o Tailwind funcionar
            if (this.theme.isDark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }

        this.onChange(this.theme);
    }

    getTheme(): ThemeModel {
        return { ...this.theme };
    }

    // Atalho para facilitar a leitura no componente
    get isDark(): boolean {
        return this.theme.isDark;
    }
}