import { CloudOff, EyeOff, Bot, ArrowRight } from 'lucide-react';
import Section from '../../design-system/Section';

export function BentoGrid() {
  const problems = [
    {
      icon: CloudOff,
      problem: 'High Cloud Costs',
      solution: 'Hybrid Infrastructure',
      description: 'Cut operational costs by 70% with on-premise processing. Scale without bleeding money.',
      accent: 'cyan',
      stat: '70% Cost Reduction'
    },
    {
      icon: EyeOff,
      problem: 'Operational Blind Spots',
      solution: 'IoT Sensor Networks',
      description: 'Real-time monitoring across every critical point. No gaps, no delays, no excuses.',
      accent: 'orange',
      stat: '24/7 Coverage'
    },
    {
      icon: Bot,
      problem: 'Human Error',
      solution: 'AI-Powered Automation',
      description: 'Consistent, accurate detection. Let machines handle what humans miss.',
      accent: 'cyan',
      stat: '99.2% Accuracy'
    }
  ];
  
  return (
    <section className="py-32 border-b border-[#06b6d4]/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#06b6d4]/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-6 lg:px-12">
        <Section stagger className="max-w-2xl mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-[#e2e8f0]">
            Problems we <span className="text-[#06b6d4] relative inline-block">
              eliminate
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#06b6d4]/50 to-transparent rounded-full"></div>
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Traditional systems fail. We don't.
          </p>
        </Section>

        <Section animation="fade-up">
          <div className="grid lg:grid-cols-3 gap-6">
          {problems.map((item, index) => {
            const Icon = item.icon;
            const isOrange = item.accent === 'orange';
            
            return (
              <div 
                key={index}
                className={`group relative bg-gradient-to-br from-slate-900/50 to-slate-900/30 border rounded-2xl ${
                  isOrange ? 'border-[#f59e0b]/20 hover:border-[#f59e0b]/40' : 'border-[#06b6d4]/20 hover:border-[#06b6d4]/40'
                } p-8 transition-all duration-500 hover:shadow-xl backdrop-blur-sm ${
                  isOrange ? 'hover:shadow-[#f59e0b]/10' : 'hover:shadow-[#06b6d4]/10'
                } hover:-translate-y-1`}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isOrange ? 'bg-gradient-to-br from-[#f59e0b]/5 to-transparent' : 'bg-gradient-to-br from-[#06b6d4]/5 to-transparent'
                }`}></div>
                
                {/* Icon */}
                <div className={`relative w-14 h-14 ${
                  isOrange ? 'bg-gradient-to-br from-[#f59e0b]/10 to-[#f59e0b]/5 border-[#f59e0b]/30' : 'bg-gradient-to-br from-[#06b6d4]/10 to-[#06b6d4]/5 border-[#06b6d4]/30'
                } border rounded-xl flex items-center justify-center mb-6 shadow-lg ${
                  isOrange ? 'shadow-[#f59e0b]/10' : 'shadow-[#06b6d4]/10'
                }`}>
                  <Icon className={`w-6 h-6 ${isOrange ? 'text-[#f59e0b]' : 'text-[#06b6d4]'}`} />
                </div>
                
                {/* Content */}
                <div className="space-y-4 relative">
                  <div>
                    <div className="text-sm text-slate-500 mb-1 font-mono">Problem</div>
                    <h3 className="text-xl text-slate-300">{item.problem}</h3>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className={`h-px flex-1 ${isOrange ? 'bg-gradient-to-r from-[#f59e0b]/30 to-transparent' : 'bg-gradient-to-r from-[#06b6d4]/30 to-transparent'}`}></div>
                    <ArrowRight className={`w-4 h-4 ${isOrange ? 'text-[#f59e0b]' : 'text-[#06b6d4]'}`} />
                  </div>
                  
                  <div>
                    <div className="text-sm text-slate-500 mb-1 font-mono">Solution</div>
                    <h3 className={`text-xl ${isOrange ? 'text-[#f59e0b]' : 'text-[#06b6d4]'}`}>
                      {item.solution}
                    </h3>
                  </div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Stat */}
                  <div className={`pt-4 mt-4 border-t rounded-lg ${
                    isOrange ? 'border-[#f59e0b]/10' : 'border-[#06b6d4]/10'
                  }`}>
                    <div className={`text-2xl font-mono ${isOrange ? 'text-[#f59e0b]' : 'text-[#06b6d4]'}`}>
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