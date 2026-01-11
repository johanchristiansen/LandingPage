import { Play, Bot, Thermometer, Gauge, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import AnimateOnScroll from '../../design-system/components/AnimateOnScroll';
import MotionAnimateOnScroll from '../../design-system/components/MotionAnimateOnScroll';
import Staggered from '../../design-system/components/Staggered';

export function HeroSection() {
  return (
    <section className="relative flex items-center overflow-hidden border-b border-[#06b6d4]/10 pb-12 pt-20 lg:min-h-[75vh] lg:pb-20 lg:pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/5 via-transparent to-[#f59e0b]/5"></div>
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#06b6d4]/10 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#f59e0b]/10 blur-[100px]"></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* --- LEFT SIDE: TYPOGRAPHY --- */}
          <div className="space-y-5">
            <AnimateOnScroll animation="fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#06b6d4]/30 bg-[#06b6d4]/5 px-3 py-1 backdrop-blur-sm">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#06b6d4] shadow-lg shadow-[#06b6d4]/50"></div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#06b6d4]">
                  Full-Stack Tech Solution
                </span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={80}>
              <h1 className="text-3xl leading-tight tracking-tight text-[#e2e8f0] lg:text-5xl">
                Masa Depan Bisnis Anda:{' '}
                <span className="relative inline-block text-[#06b6d4]">
                  Cerdas, Terintegrasi, & Aman
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-[#06b6d4]/50 to-transparent"></div>
                </span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={160}>
              <p className="max-w-xl text-sm leading-relaxed text-slate-400 lg:text-base">
                Optimalkan operasional dengan sinergi IoT, AI, dan Software Enterprise dalam satu
                ekosistem Private Cloud yang andal.
              </p>
            </AnimateOnScroll>

            <Staggered className="flex flex-wrap gap-3" delay={120}>
              <a
                href="#contact"
                className="transform rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#0891b2] px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#06b6d4]/25"
              >
                Mulai Transformasi
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2 text-sm text-[#e2e8f0] backdrop-blur-sm transition-all duration-300 hover:border-[#06b6d4]/50 hover:bg-[#06b6d4]/5"
              >
                <Play className="h-3.5 w-3.5" />
                Pelajari Layanan
              </a>
            </Staggered>

            {/* Stats */}
            <Staggered
              className="grid grid-cols-3 gap-4 border-t border-slate-800/50 pt-5"
              delay={140}
            >
              <div>
                <div className="font-mono text-lg text-[#06b6d4]">99.9%</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500">Uptime</div>
              </div>
              <div>
                <div className="font-mono text-lg text-[#06b6d4]">&lt;50ms</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500">Latency</div>
              </div>
              <div>
                <div className="font-mono text-lg text-[#06b6d4]">100%</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500">On-Prem</div>
              </div>
            </Staggered>
          </div>

          {/* --- RIGHT SIDE: VISUALIZATION (Opsi 3: Smart Industry) --- */}
          <div className="relative">
            <MotionAnimateOnScroll animation="fade-left" className="relative" delay={120}>
              <div className="relative aspect-video overflow-hidden rounded-xl border border-slate-800/50 bg-slate-900/50 shadow-2xl backdrop-blur-sm">
                {/* Gambar Background: Smart Factory / Robotik */}
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1080"
                  alt="Smart Industrial Automation"
                  className="h-full w-full object-cover opacity-60 transition-transform duration-700 hover:scale-105"
                />

                {/* Overlay Interface */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent">
                  {/* Target Box pada Mesin (Lengan Robot) */}
                  <div className="absolute left-[35%] top-[15%] h-56 w-56 animate-pulse rounded-lg border-2 border-dashed border-[#f59e0b]/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                    <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded bg-[#f59e0b] px-2 py-0.5 text-[10px] font-bold text-slate-950 shadow-lg">
                      <Bot className="h-3 w-3" /> ROBOTIC ARM 04
                    </div>

                    {/* Corner Accents for Tech Look */}
                    <div className="absolute -left-1 -top-1 h-3 w-3 border-l-2 border-t-2 border-[#f59e0b]"></div>
                    <div className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-[#f59e0b]"></div>
                    <div className="absolute -right-1 -top-1 h-3 w-3 border-r-2 border-t-2 border-[#f59e0b]"></div>
                    <div className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-[#f59e0b]"></div>
                  </div>

                  {/* Status Panel (Bottom Left) */}
                  <div className="absolute bottom-6 left-6 w-56 space-y-3 rounded-xl border border-slate-700/50 bg-slate-950/90 p-4 shadow-xl backdrop-blur-md">
                    {/* Metric 1: Efficiency */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[10px] text-slate-400">
                        <span className="flex items-center gap-1.5 font-medium text-slate-300">
                          <Gauge className="h-3.5 w-3.5 text-[#06b6d4]" /> Efficiency
                        </span>
                        <span className="font-mono font-bold text-green-400">98.5%</span>
                      </div>
                      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                        <div className="absolute inset-0 w-[98%] rounded-full bg-gradient-to-r from-[#06b6d4] to-green-400"></div>
                      </div>
                    </div>

                    {/* Metric 2: Power & Temp */}
                    <div className="grid grid-cols-2 gap-2 border-t border-slate-800 pt-3">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1 text-[10px] text-slate-400">
                          <Thermometer className="h-3 w-3 text-[#f59e0b]" /> Temp
                        </div>
                        <div className="font-mono text-xs font-medium text-slate-200">42°C</div>
                      </div>
                      <div className="space-y-0.5 border-l border-slate-800 pl-3">
                        <div className="flex items-center gap-1 text-[10px] text-slate-400">
                          <Zap className="h-3 w-3 text-[#f59e0b]" /> Load
                        </div>
                        <div className="font-mono text-xs font-medium text-slate-200">12.4A</div>
                      </div>
                    </div>
                  </div>

                  {/* System Indicator (Top Right) */}
                  <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-[#06b6d4]/30 bg-slate-950/60 px-3 py-1.5 text-[10px] font-medium text-[#06b6d4] backdrop-blur-md transition-colors hover:bg-slate-950/80">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#06b6d4] opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#06b6d4]"></span>
                    </span>
                    AI AUTO-PILOT: ACTIVE
                  </div>

                  {/* Camera ID (Top Left) */}
                  <div className="absolute left-6 top-6 rounded bg-slate-950/40 px-2 py-1 font-mono text-[10px] text-slate-300 backdrop-blur-sm">
                    CAM-FACTORY-02
                  </div>
                </div>
              </div>
            </MotionAnimateOnScroll>

            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 -z-10 h-48 w-48 rounded-full bg-[#06b6d4]/5 blur-3xl"></div>
            <div className="absolute -left-8 -top-8 -z-10 h-48 w-48 rounded-full bg-[#f59e0b]/5 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
