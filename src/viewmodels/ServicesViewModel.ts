import { ServiceModel } from '../models';
import { Star, Moon, Heart, Eye } from 'lucide-react';
import React from 'react';

export class ServicesViewModel {
  private services: ServiceModel[] = [
    {
      id: 'tarot',
      icon: React.createElement(Star, { className: 'w-8 h-8' }),
      title: 'Leitura de Tarot',
      description: 'Descubra insights profundos sobre seu caminho através das cartas do tarot.'
    },
    {
      id: 'astrologia',
      icon: React.createElement(Moon, { className: 'w-8 h-8' }),
      title: 'Mapa Astral',
      description: 'Análise completa do seu mapa astral para entender sua essência cósmica.'
    },
    {
      id: 'consultoria',
      icon: React.createElement(Heart, { className: 'w-8 h-8' }),
      title: 'Consultoria Espiritual',
      description: 'Orientação personalizada para seu crescimento espiritual e emocional.'
    },
    {
      id: 'clarividencia',
      icon: React.createElement(Eye, { className: 'w-8 h-8' }),
      title: 'Clarividência',
      description: 'Conexão com o plano espiritual para respostas claras e diretas.'
    }
  ];

  getServices(): ServiceModel[] {
    return this.services;
  }
}