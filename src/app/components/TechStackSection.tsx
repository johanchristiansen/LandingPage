import { Database, Server, Search, ShieldCheck, Cpu } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Section from '../../design-system/Section';

export function TechStackSection() {
  const { t } = useTranslation();

  const techStack = [
    { name: 'Odoo ERP', icon: Database },
    { name: 'Docker', icon: Server },
    { name: 'Python AI', icon: Search },
    { name: 'High-Perf Servers', icon: Cpu },
    { name: 'PostgreSQL', icon: Database },
    { name: 'Cyber Security', icon: ShieldCheck },
  ];

  return (
    <section id="tech" className="relative border-b border-[#06b6d4]/10 bg-[#020617] py-10">
      <div className="container mx-auto px-6 text-center lg:px-12">
        <Section animation="fade-up">
          <h2 className="mb-2 text-xl font-semibold text-slate-200">{t('techStack.title')}</h2>
          <p className="mb-6 text-xs text-slate-400">{t('techStack.subtitle')}</p>

          <ul className="flex flex-wrap justify-center gap-5 lg:gap-8">
            {techStack.map((tech, idx) => (
              <li key={idx} className="group flex flex-col items-center gap-2">
                <div
                  className="flex h-10 w-10 transform items-center justify-center rounded-lg border border-slate-800 bg-slate-900 shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#06b6d4]/50 group-hover:shadow-[#06b6d4]/20"
                  aria-hidden="true"
                >
                  <tech.icon className="h-5 w-5 text-slate-500 transition-colors group-hover:text-[#06b6d4]" />
                </div>
                <span className="font-mono text-[10px] text-slate-500 transition-colors group-hover:text-slate-300">
                  {tech.name}
                </span>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </section>
  );
}
