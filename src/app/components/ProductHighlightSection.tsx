import { Home, Egg } from 'lucide-react';
import Section from '../../design-system/Section';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProductHighlightSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden border-b border-[#06b6d4]/10 bg-[#020617] py-10 lg:py-12"
    >
      {/* Background */}
      <div className="absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#f59e0b]/5 blur-[120px]"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <Section stagger className="mb-6 max-w-2xl lg:mb-8">
          <h2 className="mb-2 text-2xl text-[#e2e8f0] lg:text-3xl">
            Produk{' '}
            <span className="relative inline-block text-[#06b6d4]">
              Unggulan
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-[#06b6d4]/50 to-transparent"></div>
            </span>
          </h2>
          <p className="text-sm text-slate-400">
            Bukti nyata inovasi kami dalam industri peternakan dan hunian pintar.
          </p>
        </Section>

        <div className="grid gap-5 lg:grid-cols-2">
          {/* Poultry System */}
          <Section
            animation="fade-right"
            className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition-all duration-300 hover:border-[#f59e0b]/30"
          >
            <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-[#f59e0b]/5 blur-3xl transition-colors group-hover:bg-[#f59e0b]/10"></div>

            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#f59e0b]/20 to-[#f59e0b]/5 text-[#f59e0b] shadow-lg shadow-[#f59e0b]/10">
              <Egg className="h-4 w-4" />
            </div>

            <h3 className="mb-2 text-lg font-semibold text-slate-200">Smart Poultry System</h3>
            <p className="mb-3 text-xs leading-relaxed text-slate-400">
              Sistem pemantauan kandang cerdas berbasis IoT yang memantau suhu, kelembaban, dan
              kadar amonia secara real-time. Dilengkapi analisis mortalitas otomatis untuk
              meningkatkan hasil panen.
            </p>

            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-slate-700/50">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=1080"
                alt="Smart Poultry"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent">
                <div className="absolute bottom-3 left-3 font-mono text-[10px] text-[#f59e0b]">
                  STATUS: CONNECTED
                </div>
              </div>
            </div>
          </Section>

          {/* Smart Home */}
          <Section
            animation="fade-left"
            className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition-all duration-300 hover:border-[#06b6d4]/30"
          >
            <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-[#06b6d4]/5 blur-3xl transition-colors group-hover:bg-[#06b6d4]/10"></div>

            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#06b6d4]/20 to-[#06b6d4]/5 text-[#06b6d4] shadow-lg shadow-[#06b6d4]/10">
              <Home className="h-4 w-4" />
            </div>

            <h3 className="mb-2 text-lg font-semibold text-slate-200">Unified Smart Home</h3>
            <p className="mb-3 text-xs leading-relaxed text-slate-400">
              Integrasi penuh sistem keamanan, pencahayaan, dan efisiensi energi dalam satu
              aplikasi. Kontrol suara intuitif dan otomatisasi berbasis kebiasaan penghuni.
            </p>

            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-slate-700/50">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1080"
                alt="Smart Home"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent">
                <div className="absolute bottom-3 left-3 font-mono text-[10px] text-[#06b6d4]">
                  AI MODE: ACTIVE
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </section>
  );
}
