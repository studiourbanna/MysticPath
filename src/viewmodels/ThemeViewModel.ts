// ============================================================================
// THEME VIEW MODEL - CORRIGIDO
// File: src/viewmodels/ThemeViewModel.ts
// ============================================================================

import { ThemeModel } from '../models';

export class ThemeViewModel {
    private theme: ThemeModel;
    private onChange: (theme: ThemeModel) => void;

    constructor(onChange: (theme: ThemeModel) => void) {
        this.onChange = onChange;
        
        // 1. Inicia com o padrão: Mystic-Pink (isDark: false)
        this.theme = { isDark: false };

        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('mysticpath-theme');
            
            // 2. Se estiver salvo como dark, atualiza o estado
            if (saved === 'dark') {
                this.theme = { isDark: true };
            }
            
            // 3. CRUCIAL: Aplica a classe no HTML logo na inicialização
            this.applyThemeToDocument();
        }
    }

    private applyThemeToDocument(): void {
        if (typeof window !== 'undefined') {
            if (this.theme.isDark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }

    toggle(): void {
        this.theme.isDark = !this.theme.isDark;

        if (typeof window !== 'undefined') {
            localStorage.setItem('mysticpath-theme', this.theme.isDark ? 'dark' : 'light');
            this.applyThemeToDocument(); // Reutiliza a lógica de aplicação
        }

        this.onChange(this.theme);
    }

    getTheme(): ThemeModel {
        return { ...this.theme };
    }

    get isDark(): boolean {
        return this.theme.isDark;
    }
}