# 🌙 MysticPath - Landing Page Tarot & Astrologia

[![GitHub license](https://img.shields.io/github/license/studiourbanna/MysticPath?style=for-the-badge)](https://github.com/studiourbanna/MysticPath)
[![GitHub stars](https://img.shields.io/github/stars/studiourbanna/MysticPath?style=for-the-badge)](https://github.com/studiourbanna/MysticPath/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/studiourbanna/MysticPath?style=for-the-badge)](https://github.com/studiourbanna/MysticPath/network)
[![GitHub issues](https://img.shields.io/github/issues/studiourbanna/MysticPath?style=for-the-badge)](https://github.com/studiourbanna/MysticPath/issues)
[![GitHub donate](https://img.shields.io/github/sponsors/clcmo?color=pink&style=for-the-badge)](https://github.com/sponsors/clcmo)

Landing page moderna e acessível para serviços de tarot e astrologia, construída com React, TypeScript e arquitetura MVVM.

## 📋 Índice

- [Características](#características)
- [Arquitetura](#arquitetura)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Acessibilidade](#acessibilidade)
- [SEO](#seo)
- [Analytics](#analytics)
- [Paleta de Cores](#paleta-de-cores)
- [Personalização](#personalização)

## ✨ Características

### Funcionalidades Principais

- ✅ **Modo Claro/Escuro**: Alternância suave entre temas com persistência
- ✅ **Design Responsivo**: Otimizado para desktop, tablet e mobile
- ✅ **Acessibilidade (WCAG 2.1)**: Navegação por teclado, ARIA labels, contraste adequado
- ✅ **SEO Otimizado**: Meta tags, headings semânticos, estrutura HTML5
- ✅ **Google Analytics**: Integração completa com rastreamento de eventos
- ✅ **Arquitetura MVVM**: Código modular, escalável e testável
- ✅ **TypeScript**: Type-safe com interfaces bem definidas
- ✅ **Animações Suaves**: Transições e hover effects elegantes

### Tecnologias

- React 18+
- TypeScript
- Tailwind CSS
- Lucide React (ícones)
- localStorage (persistência)
- Google Analytics 4

## 🏗️ Arquitetura

### Padrão MVVM (Model-View-ViewModel)

```
┌─────────────────────────────────────────┐
│              VIEW                       │
│  (TarotLandingPage Component)          │
│  - UI Components                        │
│  - User Interactions                    │
└─────────────┬───────────────────────────┘
              │ binding
┌─────────────▼───────────────────────────┐
│          VIEW MODELS                    │
│  - ThemeViewModel                       │
│  - AnalyticsViewModel                   │
│  - ServicesViewModel                    │
│  (Business Logic & State)               │
└─────────────┬───────────────────────────┘
              │ data
┌─────────────▼───────────────────────────┐
│            MODELS                       │
│  - ThemeModel                           │
│  - AnalyticsModel                       │
│  - ServiceModel                         │
│  (Data Structures)                      │
└─────────────────────────────────────────┘
```

### Módulos

#### 1. **Models** (Camada de Dados)

```typescript
interface ThemeModel {
  isDark: boolean;
}

interface AnalyticsModel {
  trackingId: string;
  enabled: boolean;
}

interface ServiceModel {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}
```

#### 2. **ViewModels** (Lógica de Negócio)

- **ThemeViewModel**: Gerencia estado do tema e persistência
- **AnalyticsViewModel**: Controla integração com Google Analytics
- **ServicesViewModel**: Fornece dados dos serviços

#### 3. **Views** (Interface do Usuário)

- **Header**: Navegação e toggle de tema
- **Hero**: Seção principal com CTA
- **Services**: Grid de serviços oferecidos
- **About**: Informações sobre o negócio
- **CTA**: Call-to-action secundário
- **Footer**: Informações de contato

## 📁 Estrutura do Projeto

```
MysticPath/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   ├── robots.txt
│   └── assets/
│       ├── images/
│       └── fonts/
│
├── src/
│   ├── models/
│   │   └── index.ts                    # Todas as interfaces e tipos
│   │
│   ├── viewmodels/
│   │   ├── ThemeViewModel.ts
│   │   ├── AnalyticsViewModel.ts
│   │   ├── ServicesViewModel.ts
│   │   ├── NavigationViewModel.ts
│   │   ├── ContactViewModel.ts
│   │   └── index.ts                    # Exportações centralizadas
│   │
│   ├── views/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   ├── CTA.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts                # Exportações de componentes
│   │   │
│   │   └── App.tsx                     # Componente principal
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── tailwind.css
│   │   └── animations.css
│   │
│   ├── utils/
│   │   ├── analytics.ts
│   │   ├── storage.ts
│   │   └── helpers.ts
│   │
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useAnalytics.ts
│   │
│   ├── config/
│   │   ├── constants.ts
│   │   └── seo.ts
│   │
│   └── index.tsx                       # Entry point
│
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Instalação

### Pré-requisitos

- Node.js 16+ 
- npm ou yarn

### Passos

1. **Clone o repositório**

```bash
git clone https://github.com/studiourbanna/MysticPath.git
cd MysticPath
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor de desenvolvimento**

```bash
npm start
# ou
yarn start
```

4. **Acesse no navegador**

```
http://localhost:3000
```

## ⚙️ Configuração

### Google Analytics

1. Obtenha seu ID de rastreamento no [Google Analytics](https://analytics.google.com)
2. Substitua `'G-XXXXXXXXXX'` no código:

```typescript
const [analyticsVM] = useState(() => 
  new AnalyticsViewModel('G-SEU-ID-AQUI')
);
```

### Customização de Conteúdo

#### Alterar informações de contato

Edite a seção Footer:
```typescript
<p>
  Email: seuemail@exemplo.com<br />
  Tel: (XX) XXXXX-XXXX
</p>
```

#### Adicionar/Remover serviços

Modifique o array em `ServicesViewModel.getServices()`:

```typescript
{
  id: 'novo-servico',
  icon: <SeuIcone className="w-8 h-8" />,
  title: 'Título do Serviço',
  description: 'Descrição detalhada...'
}
```

## ♿ Acessibilidade

### Recursos Implementados

✅ **Navegação por Teclado**

- Tab navigation entre elementos interativos
- Focus visible em todos os elementos clicáveis

✅ **ARIA Labels**

```typescript
<button aria-label="Ativar modo escuro">
<nav role="navigation" aria-label="Menu principal">
<button aria-expanded={mobileMenuOpen}>
```

✅ **Contraste de Cores**

- Modo claro: Ratio mínimo de 4.5:1
- Modo escuro: Ratio mínimo de 4.5:1

✅ **Semântica HTML5**

- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Headings hierárquicos (h1, h2, h3)

✅ **Texto Alternativo**

- `aria-hidden="true"` para ícones decorativos
- Labels descritivos para ícones funcionais

### Testando Acessibilidade

```bash
# Lighthouse
npm run lighthouse

# axe DevTools
# Instale a extensão do navegador
```

## 🔍 SEO

### Meta Tags Essenciais

```html
<title>Tarot e Astrologia | Descubra Seu Caminho Cósmico</title>
<meta name="description" content="Orientação espiritual através do tarot e astrologia...">
<meta name="keywords" content="tarot, astrologia, mapa astral, consulta espiritual">
<meta property="og:title" content="MysticPath - Tarot & Astrologia">
<meta property="og:description" content="...">
<meta property="og:image" content="/og-image.jpg">
<meta name="twitter:card" content="summary_large_image">
```

### Estrutura de URLs

```
/                    # Home
/#services          # Serviços
/#about             # Sobre
/#contact           # Contato
```

### Robots.txt

```
User-agent: *
Allow: /
Sitemap: https://seusite.com/sitemap.xml
```

## 📊 Analytics

### Eventos Rastreados

1. **Navegação**

```typescript
analyticsVM.trackEvent('Navigation', 'click', 'services');
```

2. **CTAs**

```typescript
analyticsVM.trackEvent('CTA', 'click', 'hero-consultation');
analyticsVM.trackEvent('CTA', 'click', 'cta-whatsapp');
```

### Ver Relatórios

1. Acesse [Google Analytics](https://analytics.google.com)
2. Selecione sua propriedade
3. Vá para Relatórios > Eventos

## 🎨 Paleta de Cores

### Modo Claro

Baseado em: https://coolors.co/eeeeff-7f7caf-9fb4c7-28587b-9fb798

| Cor | Hex | Uso |
|-----|-----|-----|
| Lilás Claro | `#EEEEFF` | Background principal |
| Roxo Suave | `#7F7CAF` | Primária, acentos |
| Azul Acinzentado | `#9FB4C7` | Secundária, cards |
| Azul Profundo | `#28587B` | Texto, CTAs |
| Verde Sábio | `#9FB798` | Acentos, footer |

### Modo Escuro

Baseado em: https://coolors.co/111827-1f2937-a78bfa-f472b6

| Cor | Hex | Uso |
|-----|-----|-----|
| Cinza Escuro | `#111827` | Background principal |
| Cinza Médio | `#1F2937` | Cards, elementos |
| Roxo Vibrante | `#A78BFA` | Primária |
| Rosa Vibrante | `#F472B6` | Gradientes |

## 🎯 Personalização

### Adicionar Nova Seção

```typescript
<section id="testimonials" className="py-20 px-4">
  <div className="container mx-auto max-w-6xl">
    <h2 className="text-4xl font-bold text-center mb-12">
      Depoimentos
    </h2>
    {/* Conteúdo */}
  </div>
</section>
```

### Modificar Animações

```typescript
className="transition-all duration-300 transform hover:scale-105"
```

### Alterar Fontes

No CSS global:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');

body {
  font-family: 'Playfair Display', serif;
}
```

## 🏃 Scripts Disponíveis

```bash
# Desenvolvimento
npm start

# Build para produção
npm run build

# Testes
npm test

# Linting
npm run lint

# Formatação
npm run format
```

## 📦 Deploy

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Arraste a pasta 'build' para Netlify
```

### GitHub Pages

```bash
npm run build
npm run deploy
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/MinhaFeature`
3. Commit: `git commit -m 'Adiciona MinhaFeature'`
4. Push: `git push origin feature/MinhaFeature`
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja `LICENSE` para mais detalhes.

## 📞 Suporte

- 📧 Email: suporte@std.ourbanna.com
- 💬 Issues: [GitHub Issues](https://github.com/studiourbanna/MysticPath/issues)
- 📚 Docs: [Wiki do Projeto](https://github.com/studiourbanna/MysticPath/wiki)

## 🙏 Agradecimentos

- Design inspirado em práticas modernas de UX/UI
- Paleta de cores: [Coolors](https://coolors.co)
- Ícones: [Lucide Icons](https://lucide.dev)
- Referência MVVM: [clcmo.github.io](https://github.com/clcmo/clcmo.github.io)

---

**Desenvolvido com 💜 para a comunidade espiritual**