import { Home, Egg } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Section from '../../design-system/Section';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProductHighlightSection() {
  const { t } = useTranslation();

  return (
    <section
      id="products"
      className="relative overflow-hidden border-b border-[#06b6d4]/10 bg-[#020617] py-10 lg:py-12"
    >
      {/* Background */}
      <div className="absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#f59e0b]/5 blur-[120px]"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <Section stagger className="mb-6 max-w-2xl lg:mb-8">
          <h2 className="mb-2 text-2xl text-[#e2e8f0] lg:text-3xl">
            {t('products.title')}{' '}
            <span className="relative inline-block text-[#06b6d4]">
              {t('products.titleHighlight')}
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-[#06b6d4]/50 to-transparent"></div>
            </span>
          </h2>
          <p className="text-sm text-slate-400">{t('products.subtitle')}</p>
        </Section>

        <div className="grid gap-5 lg:grid-cols-2">
          {/* Poultry System */}
          <Section
            animation="fade-right"
            className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition-all duration-300 hover:border-[#f59e0b]/30"
          >
            <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-[#f59e0b]/5 blur-3xl transition-colors group-hover:bg-[#f59e0b]/10"></div>

            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#f59e0b]/20 to-[#f59e0b]/5 text-[#f59e0b] shadow-lg shadow-[#f59e0b]/10">
              <Egg className="h-4 w-4" />
            </div>

            <h3 className="mb-2 text-lg font-semibold text-slate-200">
              {t('products.poultry.title')}
            </h3>
            <p className="mb-3 text-xs leading-relaxed text-slate-400">
              {t('products.poultry.description')}
            </p>

            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-slate-700/50">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=1080"
                alt="Smart Poultry System Dashboard"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent">
                <div className="absolute bottom-3 left-3 font-mono text-[10px] text-[#f59e0b]">
                  {t('products.poultry.status')}
                </div>
              </div>
            </div>
          </Section>

          {/* Smart Home */}
          <Section
            animation="fade-left"
            className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition-all duration-300 hover:border-[#06b6d4]/30"
          >
            <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-[#06b6d4]/5 blur-3xl transition-colors group-hover:bg-[#06b6d4]/10"></div>

            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#06b6d4]/20 to-[#06b6d4]/5 text-[#06b6d4] shadow-lg shadow-[#06b6d4]/10">
              <Home className="h-4 w-4" />
            </div>

            <h3 className="mb-2 text-lg font-semibold text-slate-200">
              {t('products.smartHome.title')}
            </h3>
            <p className="mb-3 text-xs leading-relaxed text-slate-400">
              {t('products.smartHome.description')}
            </p>

            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-slate-700/50">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1080"
                alt="Unified Smart Home Interface"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent">
                <div className="absolute bottom-3 left-3 font-mono text-[10px] text-[#06b6d4]">
                  {t('products.smartHome.status')}
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </section>
  );
}
