import { TrendingDown, Lock, Unplug, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Section from '../../design-system/Section';

export function BentoGrid() {
  const { t } = useTranslation();

  const problems = [
    {
      icon: TrendingDown,
      problem: t('bentoGrid.items.efficiency.problem'),
      solution: t('bentoGrid.items.efficiency.solution'),
      description: t('bentoGrid.items.efficiency.description'),
      accent: 'cyan',
      stat: t('bentoGrid.items.efficiency.stat'),
    },
    {
      icon: Lock,
      problem: t('bentoGrid.items.security.problem'),
      solution: t('bentoGrid.items.security.solution'),
      description: t('bentoGrid.items.security.description'),
      accent: 'orange',
      stat: t('bentoGrid.items.security.stat'),
    },
    {
      icon: Unplug,
      problem: t('bentoGrid.items.integration.problem'),
      solution: t('bentoGrid.items.integration.solution'),
      description: t('bentoGrid.items.integration.description'),
      accent: 'cyan',
      stat: t('bentoGrid.items.integration.stat'),
    },
  ];

  return (
    <section
      id="solution"
      className="relative overflow-hidden border-b border-[#06b6d4]/10 py-10 lg:py-12"
    >
      {/* Background elements */}
      <div className="absolute left-1/4 top-1/2 -z-10 h-[300px] w-[300px] rounded-full bg-[#06b6d4]/5 blur-[100px]"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <Section stagger className="mb-6 max-w-2xl lg:mb-8">
          <h2 className="mb-2 text-2xl text-[#e2e8f0] lg:text-3xl">
            {t('bentoGrid.title')}{' '}
            <span className="relative inline-block text-[#06b6d4]">
              {t('bentoGrid.titleHighlight')}
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-[#06b6d4]/50 to-transparent"></div>
            </span>
          </h2>
          <p className="text-sm text-slate-400">{t('bentoGrid.subtitle')}</p>
        </Section>

        <Section animation="fade-up">
          <div className="grid gap-4 lg:grid-cols-3">
            {problems.map((item, index) => {
              const Icon = item.icon;
              const isOrange = item.accent === 'orange';

              return (
                <article
                  key={index}
                  className={`group relative rounded-xl border bg-gradient-to-br from-slate-900/50 to-slate-900/30 ${
                    isOrange
                      ? 'border-[#f59e0b]/20 hover:border-[#f59e0b]/40'
                      : 'border-[#06b6d4]/20 hover:border-[#06b6d4]/40'
                  } p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                    isOrange ? 'hover:shadow-[#f59e0b]/10' : 'hover:shadow-[#06b6d4]/10'
                  }`}
                >
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                      isOrange
                        ? 'bg-gradient-to-br from-[#f59e0b]/5 to-transparent'
                        : 'bg-gradient-to-br from-[#06b6d4]/5 to-transparent'
                    }`}
                    aria-hidden="true"
                  ></div>

                  {/* Icon */}
                  <div
                    className={`relative mb-4 flex h-10 w-10 items-center justify-center rounded-lg border shadow-lg ${
                      isOrange
                        ? 'border-[#f59e0b]/30 bg-gradient-to-br from-[#f59e0b]/10 to-[#f59e0b]/5 shadow-[#f59e0b]/10'
                        : 'border-[#06b6d4]/30 bg-gradient-to-br from-[#06b6d4]/10 to-[#06b6d4]/5 shadow-[#06b6d4]/10'
                    }`}
                    aria-hidden="true"
                  >
                    <Icon className={`h-5 w-5 ${isOrange ? 'text-[#f59e0b]' : 'text-[#06b6d4]'}`} />
                  </div>

                  {/* Content */}
                  <div className="relative space-y-2">
                    <div>
                      <div className="mb-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                        {t('bentoGrid.problemLabel')}
                      </div>
                      <h3 className="text-base text-slate-300">{item.problem}</h3>
                    </div>

                    <div className="flex items-center gap-2" aria-hidden="true">
                      <div
                        className={`h-px flex-1 ${
                          isOrange
                            ? 'bg-gradient-to-r from-[#f59e0b]/30 to-transparent'
                            : 'bg-gradient-to-r from-[#06b6d4]/30 to-transparent'
                        }`}
                      ></div>
                      <ArrowRight
                        className={`h-3 w-3 ${isOrange ? 'text-[#f59e0b]' : 'text-[#06b6d4]'}`}
                      />
                    </div>

                    <div>
                      <div className="mb-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                        {t('bentoGrid.solutionLabel')}
                      </div>
                      <h3 className={`text-base ${isOrange ? 'text-[#f59e0b]' : 'text-[#06b6d4]'}`}>
                        {item.solution}
                      </h3>
                    </div>

                    <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>

                    {/* Stat */}
                    <div
                      className={`mt-3 border-t pt-3 ${
                        isOrange ? 'border-[#f59e0b]/10' : 'border-[#06b6d4]/10'
                      }`}
                    >
                      <div
                        className={`font-mono text-xl ${
                          isOrange ? 'text-[#f59e0b]' : 'text-[#06b6d4]'
                        }`}
                      >
                        {item.stat}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Section>
      </div>
    </section>
  );
}
