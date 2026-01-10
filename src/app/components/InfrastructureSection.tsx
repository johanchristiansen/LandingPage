import { Server, Cpu, HardDrive, Shield, Zap, Lock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Section from '../../design-system/Section';

export function InfrastructureSection() {
  const specs = [
    {
      icon: Server,
      label: 'Dell PowerEdge R720',
      value: 'Dual Xeon E5-2670 v2',
    },
    {
      icon: Cpu,
      label: 'NVIDIA RTX 3060',
      value: '12GB GDDR6 VRAM',
    },
    {
      icon: HardDrive,
      label: 'Storage Array',
      value: '8TB RAID 10 SSD',
    },
  ];

  const advantages = [
    {
      icon: Shield,
      title: 'Data Privacy',
      description: 'Your data never leaves your premises. Zero cloud dependency.',
    },
    {
      icon: Zap,
      title: 'Low Latency',
      description: 'Sub-50ms inference time. Real-time processing guaranteed.',
    },
    {
      icon: Lock,
      title: 'Air-Gapped Option',
      description: 'Deploy in completely isolated networks. Military-grade security.',
    },
  ];

  return (
    <section className="relative min-h-screen snap-start overflow-hidden border-b border-[#06b6d4]/10 py-32">
      {/* Background elements */}
      <div className="absolute left-1/3 top-1/3 -z-10 h-[350px] w-[350px] rounded-full bg-[#06b6d4]/5 blur-[100px]"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <Section stagger className="mb-16 max-w-2xl">
          <h2 className="mb-4 text-4xl text-[#e2e8f0] lg:text-5xl">
            Built on{' '}
            <span className="relative inline-block text-[#06b6d4]">
              bare metal
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-[#06b6d4]/50 to-transparent"></div>
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Enterprise-grade hardware. On-premise processing. Your data, your control.
          </p>
        </Section>

        <Section animation="fade-up">
          <div className="mb-16 grid gap-12 lg:grid-cols-2">
            {/* Left - Server Visualization */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-slate-800/50 bg-slate-900/50 shadow-2xl backdrop-blur-sm">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758348844311-e18ac3aea30f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHUFUlMjBjbG9zZSUyMHVwJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc2MDI5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="GPU and server hardware"
                  className="h-full w-full object-cover opacity-40"
                />

                {/* Schematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/5 to-transparent"></div>

                {/* Tech labels */}
                <div className="absolute inset-0 p-6 font-mono text-xs">
                  {/* Top left - Server info */}
                  <div className="inline-block space-y-1 rounded-lg border border-[#06b6d4]/20 bg-slate-950/60 px-3 py-2 backdrop-blur-md">
                    <div className="text-[#06b6d4]">[ SERVER RACK-01 ]</div>
                    <div className="text-slate-500">Location: On-Premise</div>
                    <div className="text-slate-500">Status: OPERATIONAL</div>
                  </div>

                  {/* Connection lines - vertical */}
                  <div className="absolute bottom-24 left-12 top-32 w-px bg-gradient-to-b from-[#06b6d4]/50 to-transparent"></div>

                  {/* Middle indicators */}
                  <div className="absolute left-12 top-1/3 flex items-center">
                    <div className="h-3 w-3 rounded-full border-2 border-[#06b6d4] bg-[#06b6d4]/20 shadow-lg shadow-[#06b6d4]/30"></div>
                    <div className="ml-4 rounded bg-slate-950/60 px-2 py-1 text-[#06b6d4] backdrop-blur-md">
                      GPU NODE
                    </div>
                  </div>

                  <div className="absolute left-12 top-1/2 flex items-center">
                    <div className="h-3 w-3 rounded-full border-2 border-[#f59e0b] bg-[#f59e0b]/20 shadow-lg shadow-[#f59e0b]/30"></div>
                    <div className="ml-4 rounded bg-slate-950/60 px-2 py-1 text-[#f59e0b] backdrop-blur-md">
                      INFERENCE ENGINE
                    </div>
                  </div>

                  <div className="absolute left-12 top-2/3 flex items-center">
                    <div className="h-3 w-3 rounded-full border-2 border-[#06b6d4] bg-[#06b6d4]/20 shadow-lg shadow-[#06b6d4]/30"></div>
                    <div className="ml-4 rounded bg-slate-950/60 px-2 py-1 text-[#06b6d4] backdrop-blur-md">
                      STORAGE
                    </div>
                  </div>

                  {/* Bottom right - metrics */}
                  <div className="absolute bottom-6 right-6 space-y-1 rounded-lg border border-slate-800/50 bg-slate-950/60 px-3 py-2 text-right backdrop-blur-md">
                    <div className="text-slate-500">Power Draw: 450W</div>
                    <div className="text-slate-500">Temp: 42°C</div>
                    <div className="text-[#06b6d4]">Load: 68%</div>
                  </div>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -bottom-8 -left-8 -z-10 h-48 w-48 rounded-full bg-[#06b6d4]/10 blur-3xl"></div>
            </div>

            {/* Right - Specs */}
            <div className="space-y-8">
              <div className="space-y-6">
                {specs.map((spec, index) => {
                  const Icon = spec.icon;
                  return (
                    <div
                      key={index}
                      className="group flex items-start gap-4 rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/50 to-slate-900/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#06b6d4]/30 hover:shadow-lg hover:shadow-[#06b6d4]/5"
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#06b6d4]/30 bg-gradient-to-br from-[#06b6d4]/10 to-[#06b6d4]/5 shadow-lg shadow-[#06b6d4]/10">
                        <Icon className="h-6 w-6 text-[#06b6d4]" />
                      </div>
                      <div>
                        <div className="mb-1 font-mono text-sm text-slate-500">{spec.label}</div>
                        <div className="text-lg text-slate-200">{spec.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Performance metrics */}
              <div className="grid grid-cols-2 gap-4 rounded-2xl border border-[#06b6d4]/20 bg-gradient-to-br from-[#06b6d4]/5 to-transparent p-6 backdrop-blur-sm">
                <div>
                  <div className="font-mono text-2xl text-[#06b6d4]">4.2 TFLOPS</div>
                  <div className="text-sm text-slate-500">Compute Power</div>
                </div>
                <div>
                  <div className="font-mono text-2xl text-[#06b6d4]">128GB</div>
                  <div className="text-sm text-slate-500">System RAM</div>
                </div>
                <div>
                  <div className="font-mono text-2xl text-[#06b6d4]">10Gbps</div>
                  <div className="text-sm text-slate-500">Network I/O</div>
                </div>
                <div>
                  <div className="font-mono text-2xl text-[#06b6d4]">99.9%</div>
                  <div className="text-sm text-slate-500">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Advantages Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/50 to-slate-900/30 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#06b6d4]/30 hover:shadow-lg hover:shadow-[#06b6d4]/5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#06b6d4]/30 shadow-lg shadow-[#06b6d4]/5 transition-all duration-300 group-hover:bg-[#06b6d4]/10">
                    <Icon className="h-5 w-5 text-[#06b6d4]" />
                  </div>
                  <h3 className="text-lg text-[#e2e8f0]">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
