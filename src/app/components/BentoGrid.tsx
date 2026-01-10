import { CloudOff, EyeOff, Bot, ArrowRight } from 'lucide-react';
import Section from '../../design-system/Section';

export function BentoGrid() {
  const problems = [
    {
      icon: CloudOff,
      problem: 'High Cloud Costs',
      solution: 'Hybrid Infrastructure',
      description:
        'Cut operational costs by 70% with on-premise processing. Scale without bleeding money.',
      accent: 'cyan',
      stat: '70% Cost Reduction',
    },
    {
      icon: EyeOff,
      problem: 'Operational Blind Spots',
      solution: 'IoT Sensor Networks',
      description:
        'Real-time monitoring across every critical point. No gaps, no delays, no excuses.',
      accent: 'orange',
      stat: '24/7 Coverage',
    },
    {
      icon: Bot,
      problem: 'Human Error',
      solution: 'AI-Powered Automation',
      description: 'Consistent, accurate detection. Let machines handle what humans miss.',
      accent: 'cyan',
      stat: '99.2% Accuracy',
    },
  ];

  return (
    <section className="relative min-h-screen snap-start overflow-hidden border-b border-[#06b6d4]/10 py-32">
      {/* Background elements */}
      <div className="absolute left-1/4 top-1/2 -z-10 h-[300px] w-[300px] rounded-full bg-[#06b6d4]/5 blur-[100px]"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <Section stagger className="mb-16 max-w-2xl">
          <h2 className="mb-4 text-4xl text-[#e2e8f0] lg:text-5xl">
            Problems we{' '}
            <span className="relative inline-block text-[#06b6d4]">
              eliminate
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-[#06b6d4]/50 to-transparent"></div>
            </span>
          </h2>
          <p className="text-lg text-slate-400">Traditional systems fail. We don't.</p>
        </Section>

        <Section animation="fade-up">
          <div className="grid gap-6 lg:grid-cols-3">
            {problems.map((item, index) => {
              const Icon = item.icon;
              const isOrange = item.accent === 'orange';

              return (
                <div
                  key={index}
                  className={`group relative rounded-2xl border bg-gradient-to-br from-slate-900/50 to-slate-900/30 ${
                    isOrange
                      ? 'border-[#f59e0b]/20 hover:border-[#f59e0b]/40'
                      : 'border-[#06b6d4]/20 hover:border-[#06b6d4]/40'
                  } p-8 backdrop-blur-sm transition-all duration-500 hover:shadow-xl ${
                    isOrange ? 'hover:shadow-[#f59e0b]/10' : 'hover:shadow-[#06b6d4]/10'
                  } hover:-translate-y-1`}
                >
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                      isOrange
                        ? 'bg-gradient-to-br from-[#f59e0b]/5 to-transparent'
                        : 'bg-gradient-to-br from-[#06b6d4]/5 to-transparent'
                    }`}
                  ></div>

                  {/* Icon */}
                  <div
                    className={`relative h-14 w-14 ${
                      isOrange
                        ? 'border-[#f59e0b]/30 bg-gradient-to-br from-[#f59e0b]/10 to-[#f59e0b]/5'
                        : 'border-[#06b6d4]/30 bg-gradient-to-br from-[#06b6d4]/10 to-[#06b6d4]/5'
                    } mb-6 flex items-center justify-center rounded-xl border shadow-lg ${
                      isOrange ? 'shadow-[#f59e0b]/10' : 'shadow-[#06b6d4]/10'
                    }`}
                  >
                    <Icon className={`h-6 w-6 ${isOrange ? 'text-[#f59e0b]' : 'text-[#06b6d4]'}`} />
                  </div>

                  {/* Content */}
                  <div className="relative space-y-4">
                    <div>
                      <div className="mb-1 font-mono text-sm text-slate-500">Problem</div>
                      <h3 className="text-xl text-slate-300">{item.problem}</h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <div
                        className={`h-px flex-1 ${
                          isOrange
                            ? 'bg-gradient-to-r from-[#f59e0b]/30 to-transparent'
                            : 'bg-gradient-to-r from-[#06b6d4]/30 to-transparent'
                        }`}
                      ></div>
                      <ArrowRight
                        className={`h-4 w-4 ${isOrange ? 'text-[#f59e0b]' : 'text-[#06b6d4]'}`}
                      />
                    </div>

                    <div>
                      <div className="mb-1 font-mono text-sm text-slate-500">Solution</div>
                      <h3 className={`text-xl ${isOrange ? 'text-[#f59e0b]' : 'text-[#06b6d4]'}`}>
                        {item.solution}
                      </h3>
                    </div>

                    <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>

                    {/* Stat */}
                    <div
                      className={`mt-4 rounded-lg border-t pt-4 ${
                        isOrange ? 'border-[#f59e0b]/10' : 'border-[#06b6d4]/10'
                      }`}
                    >
                      <div
                        className={`font-mono text-2xl ${
                          isOrange ? 'text-[#f59e0b]' : 'text-[#06b6d4]'
                        }`}
                      >
                        {item.stat}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>
      </div>
    </section>
  );
}
