import { Camera, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import AnimateOnScroll from '../../design-system/components/AnimateOnScroll';
import MotionAnimateOnScroll from '../../design-system/components/MotionAnimateOnScroll';
import Staggered from '../../design-system/components/Staggered';

export function HeroSection() {
  return (
    <section className="relative flex items-center overflow-hidden border-b border-[#06b6d4]/10 pb-16 pt-32 lg:min-h-[85vh] lg:pb-24 lg:pt-36">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/5 via-transparent to-[#f59e0b]/5"></div>
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#06b6d4]/10 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[#f59e0b]/10 blur-[120px]"></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Left Side - Typography */}
          <div className="space-y-6">
            <AnimateOnScroll animation="fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#06b6d4]/30 bg-[#06b6d4]/5 px-3 py-1.5 backdrop-blur-sm">
                <div className="h-2 w-2 animate-pulse rounded-full bg-[#06b6d4] shadow-lg shadow-[#06b6d4]/50"></div>
                <span className="font-mono text-xs text-[#06b6d4]">Full-Stack Tech Solution</span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={80}>
              <h1 className="text-4xl leading-tight tracking-tight text-[#e2e8f0] lg:text-6xl">
                Masa Depan Bisnis Anda:{' '}
                <span className="relative inline-block text-[#06b6d4]">
                  Cerdas, Terintegrasi, & Aman
                  <div className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-[#06b6d4]/50 to-transparent"></div>
                </span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={160}>
              <p className="max-w-xl text-base leading-relaxed text-slate-400 lg:text-lg">
                Optimalkan operasional dengan sinergi IoT, AI, dan Software Enterprise dalam satu
                ekosistem Private Cloud yang andal.
              </p>
            </AnimateOnScroll>

            <Staggered className="flex flex-wrap gap-4" delay={120}>
              <a
                href="#contact"
                className="transform rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#0891b2] px-6 py-2.5 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#06b6d4]/25"
              >
                Mulai Transformasi
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-2.5 text-[#e2e8f0] backdrop-blur-sm transition-all duration-300 hover:border-[#06b6d4]/50 hover:bg-[#06b6d4]/5"
              >
                <Play className="h-4 w-4" />
                Pelajari Layanan
              </a>
            </Staggered>

            {/* Stats */}
            <Staggered
              className="grid grid-cols-3 gap-6 border-t border-slate-800/50 pt-6"
              delay={140}
            >
              <div>
                <div className="font-mono text-xl text-[#06b6d4]">99.9%</div>
                <div className="text-xs text-slate-500">Uptime</div>
              </div>
              <div>
                <div className="font-mono text-xl text-[#06b6d4]">&lt;50ms</div>
                <div className="text-xs text-slate-500">Latency</div>
              </div>
              <div>
                <div className="font-mono text-xl text-[#06b6d4]">100%</div>
                <div className="text-xs text-slate-500">On-Prem</div>
              </div>
            </Staggered>
          </div>

          {/* Right Side - Video Feed Placeholder */}
          <div className="relative">
            <MotionAnimateOnScroll animation="fade-left" className="relative" delay={120}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-800/50 bg-slate-900/50 shadow-2xl backdrop-blur-sm">
                {/* Video feed background */}
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwZGF0YSUyMHZpc3VhbGl6YXRpb24lMjBkYXJrfGVufDF8fHx8MTc2NzYwMjk5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Neural network data visualization"
                  className="h-full w-full object-cover opacity-60"
                />

                {/* Bounding boxes overlay */}
                <div className="absolute inset-0">
                  {/* Box 1 */}
                  <div className="absolute left-[15%] top-[20%] h-32 w-32 animate-pulse rounded-lg border-2 border-[#06b6d4] shadow-lg shadow-[#06b6d4]/20">
                    <div className="absolute -top-6 left-0 rounded-md bg-[#06b6d4] px-3 py-1 font-mono text-xs text-slate-950 shadow-lg">
                      Person · 98%
                    </div>
                  </div>

                  {/* Box 2 */}
                  <div className="absolute right-[20%] top-[45%] h-28 w-28 rounded-lg border-2 border-[#f59e0b] shadow-lg shadow-[#f59e0b]/20">
                    <div className="absolute -top-6 right-0 rounded-md bg-[#f59e0b] px-3 py-1 font-mono text-xs text-slate-950 shadow-lg">
                      Object · 94%
                    </div>
                  </div>

                  {/* Box 3 */}
                  <div className="absolute bottom-[15%] left-[30%] h-24 w-24 rounded-lg border-2 border-[#06b6d4] shadow-lg shadow-[#06b6d4]/20">
                    <div className="absolute -bottom-6 left-0 rounded-md bg-[#06b6d4] px-3 py-1 font-mono text-xs text-slate-950 shadow-lg">
                      Motion · 91%
                    </div>
                  </div>
                </div>

                {/* HUD overlay */}
                <div className="absolute left-4 top-4 space-y-2 rounded-lg border border-[#06b6d4]/20 bg-slate-950/60 px-3 py-2 font-mono text-xs backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <Camera className="h-4 w-4 text-[#06b6d4]" />
                    <span className="text-[#06b6d4]">CAM-01</span>
                  </div>
                  <div className="text-slate-400">FPS: 30 | RES: 1920x1080</div>
                </div>

                <div className="absolute right-4 top-4 rounded-lg border border-slate-800/50 bg-slate-950/60 px-3 py-2 font-mono text-xs backdrop-blur-md">
                  <div className="text-slate-400">2026-01-05 14:32:17 UTC</div>
                </div>

                {/* Processing indicator */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg border border-[#06b6d4]/30 bg-slate-950/80 px-4 py-2 shadow-lg shadow-[#06b6d4]/10 backdrop-blur-md">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-[#06b6d4] shadow-lg shadow-[#06b6d4]/50"></div>
                  <span className="font-mono text-xs text-[#06b6d4]">PROCESSING</span>
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
