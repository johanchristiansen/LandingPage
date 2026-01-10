import { Database, Server, Search, ShieldCheck, Cpu } from 'lucide-react';
import Section from '../../design-system/Section';

export function TechStackSection() {
  const techStack = [
    { name: 'Odoo ERP', icon: Database },
    { name: 'Docker', icon: Server },
    { name: 'Python AI', icon: Search },
    { name: 'High-Perf Servers', icon: Cpu },
    { name: 'PostgreSQL', icon: Database },
    { name: 'Cyber Security', icon: ShieldCheck },
  ];

  return (
    <section id="tech" className="relative border-b border-[#06b6d4]/10 bg-[#020617] py-12">
      <div className="container mx-auto px-6 text-center lg:px-12">
        <Section animation="fade-up">
          <h2 className="mb-2 text-xl font-semibold text-slate-200">Didukung Teknologi Terkini</h2>
          <p className="mb-8 text-sm text-slate-400">
            Kami menggunakan stack teknologi modern untuk menjamin performa, keamanan, dan
            skalabilitas.
          </p>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
            {techStack.map((tech, idx) => (
              <div key={idx} className="group flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 transform items-center justify-center rounded-xl border border-slate-800 bg-slate-900 shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#06b6d4]/50 group-hover:shadow-[#06b6d4]/20">
                  <tech.icon className="h-6 w-6 text-slate-500 transition-colors group-hover:text-[#06b6d4]" />
                </div>
                <span className="font-mono text-xs text-slate-500 transition-colors group-hover:text-slate-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </section>
  );
}
