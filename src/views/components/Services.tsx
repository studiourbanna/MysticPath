import React from 'react';
import { ServicesViewModel } from '../../viewmodels/ServicesViewModel';
import { ServiceModel } from '../../models';

interface ServicesProps {
  servicesVM: ServicesViewModel;
}

export const Services: React.FC<ServicesProps> = ({ servicesVM }) => {
  const services = servicesVM.getServices();

  return (
    <section id="services" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Descubra ferramentas espirituais poderosas para guiar sua jornada de autoconhecimento e crescimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service: ServiceModel) => (
            <div
              key={service.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-mystic-purple/10 dark:bg-mystic-pink/10 rounded-full group-hover:scale-110 transition-transform">
                  <div className="text-mystic-purple dark:text-mystic-pink">
                    {service.icon}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Cada sessão é personalizada para suas necessidades específicas
          </p>
          <div className="inline-flex items-center gap-2 text-mystic-purple dark:text-mystic-pink font-semibold">
            <span>⭐</span>
            <span>Consultas online e presenciais disponíveis</span>
            <span>⭐</span>
          </div>
        </div>
      </div>
    </section>
  );
};