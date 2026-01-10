import { Shield, Link, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Section from '../../design-system/Section';

export function InfrastructureSection() {
  const advantages = [
    {
      icon: Shield,
      title: 'Data Privacy (Server Lokal)',
      description:
        'Data Anda adalah aset berharga. Kami menyimpannya di infrastruktur privat yang aman, bukan di cloud publik.',
    },
    {
      icon: Link,
      title: 'End-to-End Integration',
      description:
        'Sinergi sempurna antara Hardware (IoT), Software (ERP), dan AI dalam satu ekosistem terpadu.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Tech',
      description:
        'Teknologi yang siap tumbuh bersama bisnis Anda. Dari skala kecil hingga enterprise, tanpa hambatan.',
    },
  ];

  return (
    <section
      id="why-us"
      className="relative overflow-hidden border-b border-[#06b6d4]/10 py-12 lg:py-16"
    >
      {/* Background elements */}
      <div className="absolute left-1/3 top-1/3 -z-10 h-[350px] w-[350px] rounded-full bg-[#06b6d4]/5 blur-[100px]"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <Section stagger className="mb-8 max-w-2xl lg:mb-10">
          <h2 className="mb-2 text-3xl text-[#e2e8f0] lg:text-4xl">
            Kenapa Memilih{' '}
            <span className="relative inline-block text-[#06b6d4]">
              Kami?
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-[#06b6d4]/50 to-transparent"></div>
            </span>
          </h2>
          <p className="text-base text-slate-400">
            Kombinasi keamanan, integrasi, dan skalabilitas untuk bisnis masa depan.
          </p>
        </Section>

        <Section animation="fade-up">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left - Server Visualization */}
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-xl border border-slate-800/50 bg-slate-900/50 shadow-2xl backdrop-blur-sm">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1558494949-ef526b00fb65?auto=format&fit=crop&q=80&w=1080"
                  alt="Server hardware"
                  className="h-full w-full object-cover opacity-80"
                />

                {/* Schematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/5 to-transparent"></div>

                {/* Tech labels */}
                <div className="absolute inset-0 p-4 font-mono text-[10px] lg:text-xs">
                  <div className="inline-block space-y-1 rounded-lg border border-[#06b6d4]/20 bg-slate-950/60 px-2 py-1 backdrop-blur-md">
                    <div className="text-[#06b6d4]">[ PRIVATE CLOUD ]</div>
                    <div className="text-slate-500">Security: MAX HOLDOUT</div>
                    <div className="text-slate-500">Access: RESTRICTED</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Advantages List */}
            <div className="flex flex-col justify-center space-y-6">
              {advantages.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#06b6d4]/30 bg-[#06b6d4]/10 text-[#06b6d4]">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-medium text-slate-200">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>
      </div>
    </section>
  );
}
