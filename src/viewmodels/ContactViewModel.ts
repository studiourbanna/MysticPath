import { ReactNode } from 'react';
import { ContactModel } from '../models';

export class ContactViewModel {

  email = 'contato@mysticpath.com';
  phone = '(11) 99999-9999';
  whatsappNumber = '5511999999999';

  socialLinks = {
    instagram: 'https://instagram.com/mysticpath',
    facebook: 'https://facebook.com/mysticpath',
    whatsapp: `https://wa.me/${this.whatsappNumber}`
  };

  sendEmail(): void {
      const subject = encodeURIComponent("Dúvida sobre MysticPath");
      window.location.href = `mailto:${this.email}?subject=${subject}`;
  }

  openWhatsApp(): void {
      const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da MysticPath.");
      const url = `https://wa.me/${this.whatsappNumber}?text=${message}`;
      window.open(url, '_blank', 'noopener,noreferrer');
  }

  getContactInfo(): ContactModel {
    return {
      email: 'contato@mysticpath.com',
      phone: '(11) 99999-9999',
      whatsapp: '5511999999999',
      schedule: {
        weekdays: 'Segunda a Sexta: 9h - 18h',
        saturday: 'Sábado: 10h - 14h'
      },
      socialLinks: this.socialLinks
    };
  }
}