import { TrendingDown, Lock, Unplug, ArrowRight } from 'lucide-react';
import Section from '../../design-system/Section';

export function BentoGrid() {
  const problems = [
    {
      icon: TrendingDown,
      problem: 'Bisnis Tidak Efisien',
      solution: 'Otomatisasi Cerdas',
      description:
        'Proses manual yang lambat menghambat pertumbuhan. Kami hadirkan otomatisasi AI untuk percepatan bisnis.',
      accent: 'cyan',
      stat: '50% Lebih Cepat',
    },
    {
      icon: Lock,
      problem: 'Data Tidak Aman',
      solution: 'Private Cloud',
      description:
        'Kebocoran data adalah ancaman nyata. Infrastruktur server mandiri kami menjamin kedaulatan data Anda.',
      accent: 'orange',
      stat: '100% Aman',
    },
    {
      icon: Unplug,
      problem: 'Teknologi Terpisah',
      solution: 'Integrated Ecosystem',
      description:
        'Sistem yang tidak saling bicara bikin pusing. Solusi kami menyatukan Hardware, Software, dan AI.',
      accent: 'cyan',
      stat: 'All-in-One',
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
            Solusi untuk{' '}
            <span className="relative inline-block text-[#06b6d4]">
              Masalah Anda
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-[#06b6d4]/50 to-transparent"></div>
            </span>
          </h2>
          <p className="text-sm text-slate-400">
            Jangan biarkan kendala teknis menghambat potensi bisnis Anda.
          </p>
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
                        Problem
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
                        Solution
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
