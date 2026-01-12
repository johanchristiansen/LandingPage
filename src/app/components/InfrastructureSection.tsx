import { Shield, Link, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Section from '../../design-system/Section';

export function InfrastructureSection() {
  const { t } = useTranslation();

  const advantages = [
    {
      icon: Shield,
      title: t('infrastructure.items.privacy.title'),
      description: t('infrastructure.items.privacy.description'),
    },
    {
      icon: Link,
      title: t('infrastructure.items.integration.title'),
      description: t('infrastructure.items.integration.description'),
    },
    {
      icon: TrendingUp,
      title: t('infrastructure.items.scalable.title'),
      description: t('infrastructure.items.scalable.description'),
    },
  ];

  return (
    <section
      id="why-us"
      className="relative overflow-hidden border-b border-[#06b6d4]/10 py-10 lg:py-12"
    >
      {/* Background elements */}
      <div className="absolute left-1/3 top-1/3 -z-10 h-[350px] w-[350px] rounded-full bg-[#06b6d4]/5 blur-[100px]"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <Section stagger className="mb-6 max-w-2xl lg:mb-8">
          <h2 className="mb-2 text-2xl text-[#e2e8f0] lg:text-3xl">
            {t('infrastructure.title')}{' '}
            <span className="relative inline-block text-[#06b6d4]">
              {t('infrastructure.titleHighlight')}
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-[#06b6d4]/50 to-transparent"></div>
            </span>
          </h2>
          <p className="text-sm text-slate-400">{t('infrastructure.subtitle')}</p>
        </Section>

        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          {/* Left - Server Visualization */}
          <Section animation="fade-right" className="relative">
            <div className="aspect-video overflow-hidden rounded-xl border border-slate-800/50 bg-slate-900/50 shadow-2xl backdrop-blur-sm">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1080"
                alt="Server hardware infrastructure"
                loading="lazy"
                width="1080"
                height="720"
                className="h-full w-full object-cover opacity-80"
              />

              {/* Schematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/5 to-transparent"></div>

              {/* Tech labels */}
              <div className="absolute inset-0 p-4 font-mono text-[10px]">
                <div className="inline-block space-y-1 rounded-lg border border-[#06b6d4]/20 bg-slate-950/60 px-2 py-1 backdrop-blur-md">
                  <div className="text-[#06b6d4]">{t('infrastructure.privateCloud')}</div>
                  <div className="text-slate-500">{t('infrastructure.securityLabel')}</div>
                  <div className="text-slate-500">{t('infrastructure.accessLabel')}</div>
                </div>
              </div>
            </div>
          </Section>

          {/* Right - Advantages List */}
          <Section animation="fade-left">
            <ul className="flex flex-col justify-center space-y-4">
              {advantages.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex gap-3">
                    <div className="flex-shrink-0" aria-hidden="true">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#06b6d4]/30 bg-[#06b6d4]/10 text-[#06b6d4]">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-0.5 text-base font-medium text-slate-200">{item.title}</h3>
                      <p className="text-xs leading-relaxed text-slate-400">{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Section>
        </div>
      </div>
    </section>
  );
}
