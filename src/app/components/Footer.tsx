import { Activity, Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import Section from '../../design-system/Section';

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-[#06b6d4]/10 bg-[#020617] py-8 lg:py-10"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -z-10 h-[150px] w-[400px] -translate-x-1/2 rounded-full bg-[#06b6d4]/5 blur-[80px]"></div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Final CTA */}
        <Section
          animation="fade-up"
          className="mb-8 rounded-xl border border-[#06b6d4]/20 bg-gradient-to-r from-[#06b6d4]/10 to-transparent p-5 text-center backdrop-blur-sm lg:mb-10 lg:p-6"
        >
          <h2 className="mb-2 text-xl font-bold text-white lg:text-2xl">
            Siap Mengubah Bisnis Anda?
          </h2>
          <p className="mx-auto mb-4 max-w-xl text-sm text-slate-400">
            Jangan biarkan kompetitor mendahului Anda. Mari diskusikan solusi teknologi terbaik
            untuk efisiensi dan pertumbuhan bisnis Anda hari ini.
          </p>
          <button className="inline-flex items-center gap-2 rounded-lg bg-[#06b6d4] px-5 py-2 text-xs font-semibold text-white transition-all hover:bg-[#0891b2] hover:shadow-lg hover:shadow-[#06b6d4]/25">
            Konsultasi Gratis Sekarang <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </Section>

        <Section animation="fade-up" stagger>
          <div className="mb-8 grid gap-8 text-sm md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="space-y-3">
              <div className="text-xl tracking-tight">
                <span className="text-[#06b6d4]">Full-Stack</span>{' '}
                <span className="text-[#e2e8f0]">Solutions</span>
              </div>
              <p className="leading-relaxed text-slate-400">
                Mitra teknologi terpercaya untuk IoT, AI, dan Software Enterprise.
              </p>
              <div className="flex inline-flex items-center gap-2 rounded-lg border border-[#06b6d4]/20 bg-[#06b6d4]/5 px-2 py-1.5">
                <Activity className="h-3.5 w-3.5 text-[#06b6d4]" />
                <span className="font-mono text-xs text-[#06b6d4]">System Operational</span>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="mb-3 font-mono text-xs text-slate-500">LAYANAN</h4>
              <ul className="space-y-1.5">
                <li>
                  <a
                    href="#services"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-[#06b6d4]"
                  >
                    <div className="h-1 w-1 rounded-full bg-slate-700 transition-colors group-hover:bg-[#06b6d4]"></div>
                    Smart Ecosystems
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-[#06b6d4]"
                  >
                    <div className="h-1 w-1 rounded-full bg-slate-700 transition-colors group-hover:bg-[#06b6d4]"></div>
                    AI Intelligence
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-[#06b6d4]"
                  >
                    <div className="h-1 w-1 rounded-full bg-slate-700 transition-colors group-hover:bg-[#06b6d4]"></div>
                    Micro-APIs
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-[#06b6d4]"
                  >
                    <div className="h-1 w-1 rounded-full bg-slate-700 transition-colors group-hover:bg-[#06b6d4]"></div>
                    Custom Solutions
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4 font-mono text-sm text-slate-500">COMPANY</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#about"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-[#06b6d4]"
                  >
                    <div className="h-1 w-1 rounded-full bg-slate-700 transition-colors group-hover:bg-[#06b6d4]"></div>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-[#06b6d4]"
                  >
                    <div className="h-1 w-1 rounded-full bg-slate-700 transition-colors group-hover:bg-[#06b6d4]"></div>
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-[#06b6d4]"
                  >
                    <div className="h-1 w-1 rounded-full bg-slate-700 transition-colors group-hover:bg-[#06b6d4]"></div>
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-[#06b6d4]"
                  >
                    <div className="h-1 w-1 rounded-full bg-slate-700 transition-colors group-hover:bg-[#06b6d4]"></div>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 font-mono text-sm text-slate-500">CONNECT</h4>
              <div className="space-y-3">
                <a
                  href="mailto:hello@stslabs.com"
                  className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-[#06b6d4]"
                >
                  <Mail className="h-4 w-4" />
                  <span className="transition-transform group-hover:translate-x-0.5">
                    hello@stslabs.com
                  </span>
                </a>

                <div className="flex gap-3 pt-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 backdrop-blur-sm transition-all duration-300 hover:border-[#06b6d4] hover:shadow-lg hover:shadow-[#06b6d4]/10"
                  >
                    <Github className="h-4 w-4 text-slate-400 transition-colors group-hover:text-[#06b6d4]" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 backdrop-blur-sm transition-all duration-300 hover:border-[#06b6d4] hover:shadow-lg hover:shadow-[#06b6d4]/10"
                  >
                    <Linkedin className="h-4 w-4 text-slate-400 transition-colors group-hover:text-[#06b6d4]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800/50 pt-8 sm:flex-row">
          <div className="text-sm text-slate-500">© 2026 S.T.S Labs. All systems operational.</div>

          {/* Status indicator */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 rounded-lg border border-[#06b6d4]/30 bg-slate-900/50 px-4 py-2 backdrop-blur-sm">
              <div className="relative flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-[#06b6d4] shadow-lg shadow-[#06b6d4]/50"></div>
                <div className="absolute h-2 w-2 animate-ping rounded-full bg-[#06b6d4]"></div>
              </div>
              <span className="font-mono text-xs text-[#06b6d4]">STATUS: ONLINE</span>
            </div>

            <div className="rounded-lg bg-slate-900/30 px-3 py-2 font-mono text-xs text-slate-500">
              UPTIME: 99.94%
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
