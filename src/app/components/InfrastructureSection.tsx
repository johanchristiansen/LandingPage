import { Server, Cpu, HardDrive, Shield, Zap, Lock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Section from '../../design-system/Section';

export function InfrastructureSection() {
  const specs = [
    {
      icon: Server,
      label: 'Dell PowerEdge R720',
      value: 'Dual Xeon E5-2670 v2'
    },
    {
      icon: Cpu,
      label: 'NVIDIA RTX 3060',
      value: '12GB GDDR6 VRAM'
    },
    {
      icon: HardDrive,
      label: 'Storage Array',
      value: '8TB RAID 10 SSD'
    }
  ];
  
  const advantages = [
    {
      icon: Shield,
      title: 'Data Privacy',
      description: 'Your data never leaves your premises. Zero cloud dependency.'
    },
    {
      icon: Zap,
      title: 'Low Latency',
      description: 'Sub-50ms inference time. Real-time processing guaranteed.'
    },
    {
      icon: Lock,
      title: 'Air-Gapped Option',
      description: 'Deploy in completely isolated networks. Military-grade security.'
    }
  ];
  
  return (
    <section className="py-32 border-b border-[#06b6d4]/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-[#06b6d4]/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-6 lg:px-12">
        <Section stagger className="max-w-2xl mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-[#e2e8f0]">
            Built on <span className="text-[#06b6d4] relative inline-block">
              bare metal
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#06b6d4]/50 to-transparent rounded-full"></div>
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Enterprise-grade hardware. On-premise processing. Your data, your control.
          </p>
        </Section>
        
        <Section animation="fade-up">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Server Visualization */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-slate-900/50 border border-slate-800/50 overflow-hidden backdrop-blur-sm shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758348844311-e18ac3aea30f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHUFUlMjBjbG9zZSUyMHVwJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc2MDI5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="GPU and server hardware"
                className="w-full h-full object-cover opacity-40"
              />
              
              {/* Schematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/5 to-transparent"></div>
              
              {/* Tech labels */}
              <div className="absolute inset-0 p-6 font-mono text-xs">
                {/* Top left - Server info */}
                <div className="space-y-1 bg-slate-950/60 backdrop-blur-md px-3 py-2 rounded-lg inline-block border border-[#06b6d4]/20">
                  <div className="text-[#06b6d4]">[ SERVER RACK-01 ]</div>
                  <div className="text-slate-500">Location: On-Premise</div>
                  <div className="text-slate-500">Status: OPERATIONAL</div>
                </div>
                
                {/* Connection lines - vertical */}
                <div className="absolute left-12 top-32 bottom-24 w-px bg-gradient-to-b from-[#06b6d4]/50 to-transparent"></div>
                
                {/* Middle indicators */}
                <div className="absolute left-12 top-1/3 flex items-center">
                  <div className="w-3 h-3 rounded-full border-2 border-[#06b6d4] bg-[#06b6d4]/20 shadow-lg shadow-[#06b6d4]/30"></div>
                  <div className="ml-4 text-[#06b6d4] bg-slate-950/60 backdrop-blur-md px-2 py-1 rounded">GPU NODE</div>
                </div>
                
                <div className="absolute left-12 top-1/2 flex items-center">
                  <div className="w-3 h-3 rounded-full border-2 border-[#f59e0b] bg-[#f59e0b]/20 shadow-lg shadow-[#f59e0b]/30"></div>
                  <div className="ml-4 text-[#f59e0b] bg-slate-950/60 backdrop-blur-md px-2 py-1 rounded">INFERENCE ENGINE</div>
                </div>
                
                <div className="absolute left-12 top-2/3 flex items-center">
                  <div className="w-3 h-3 rounded-full border-2 border-[#06b6d4] bg-[#06b6d4]/20 shadow-lg shadow-[#06b6d4]/30"></div>
                  <div className="ml-4 text-[#06b6d4] bg-slate-950/60 backdrop-blur-md px-2 py-1 rounded">STORAGE</div>
                </div>
                
                {/* Bottom right - metrics */}
                <div className="absolute bottom-6 right-6 space-y-1 text-right bg-slate-950/60 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-800/50">
                  <div className="text-slate-500">Power Draw: 450W</div>
                  <div className="text-slate-500">Temp: 42°C</div>
                  <div className="text-[#06b6d4]">Load: 68%</div>
                </div>
              </div>
            </div>
            
            {/* Decorative glow */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#06b6d4]/10 rounded-full blur-3xl -z-10"></div>
          </div>
          
          {/* Right - Specs */}
          <div className="space-y-8">
            <div className="space-y-6">
              {specs.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-slate-800/50 rounded-2xl hover:border-[#06b6d4]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#06b6d4]/5 backdrop-blur-sm group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#06b6d4]/10 to-[#06b6d4]/5 border border-[#06b6d4]/30 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#06b6d4]/10">
                      <Icon className="w-6 h-6 text-[#06b6d4]" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 mb-1 font-mono">{spec.label}</div>
                      <div className="text-lg text-slate-200">{spec.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Performance metrics */}
            <div className="grid grid-cols-2 gap-4 p-6 bg-gradient-to-br from-[#06b6d4]/5 to-transparent border border-[#06b6d4]/20 rounded-2xl backdrop-blur-sm">
              <div>
                <div className="text-2xl text-[#06b6d4] font-mono">4.2 TFLOPS</div>
                <div className="text-sm text-slate-500">Compute Power</div>
              </div>
              <div>
                <div className="text-2xl text-[#06b6d4] font-mono">128GB</div>
                <div className="text-sm text-slate-500">System RAM</div>
              </div>
              <div>
                <div className="text-2xl text-[#06b6d4] font-mono">10Gbps</div>
                <div className="text-sm text-slate-500">Network I/O</div>
              </div>
              <div>
                <div className="text-2xl text-[#06b6d4] font-mono">99.9%</div>
                <div className="text-sm text-slate-500">Uptime SLA</div>
              </div>
            </div>
          </div>
          </div>
        </Section>
        
        {/* Advantages Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-slate-800/50 rounded-2xl hover:border-[#06b6d4]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#06b6d4]/5 backdrop-blur-sm group hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg border border-[#06b6d4]/30 flex items-center justify-center group-hover:bg-[#06b6d4]/10 transition-all duration-300 shadow-lg shadow-[#06b6d4]/5">
                    <Icon className="w-5 h-5 text-[#06b6d4]" />
                  </div>
                  <h3 className="text-lg text-[#e2e8f0]">{item.title}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}