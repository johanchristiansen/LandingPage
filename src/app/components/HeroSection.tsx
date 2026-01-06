import { Camera, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center border-b border-[#06b6d4]/10 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/5 via-transparent to-[#f59e0b]/5"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#06b6d4]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f59e0b]/10 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side - Typography */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#06b6d4]/30 bg-[#06b6d4]/5 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse shadow-lg shadow-[#06b6d4]/50"></div>
              <span className="text-sm text-[#06b6d4] font-mono">S.T.S Labs</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl tracking-tight text-[#e2e8f0] leading-tight">
              Turn Cameras into{' '}
              <span className="text-[#06b6d4] relative inline-block">
                Intelligent Assets
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#06b6d4]/50 to-transparent rounded-full"></div>
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Enterprise-grade AIoT and Computer Vision solutions. Local processing, 
              real-time analytics, zero cloud dependency.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#0891b2] hover:shadow-lg hover:shadow-[#06b6d4]/25 text-slate-950 transition-all duration-300 font-medium transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-3 rounded-lg border border-slate-700 hover:border-[#06b6d4]/50 hover:bg-[#06b6d4]/5 transition-all duration-300 flex items-center gap-2 text-[#e2e8f0] backdrop-blur-sm">
                <Play className="w-4 h-4" />
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-800/50">
              <div>
                <div className="text-2xl text-[#06b6d4] font-mono">99.9%</div>
                <div className="text-sm text-slate-500">Uptime</div>
              </div>
              <div>
                <div className="text-2xl text-[#06b6d4] font-mono">&lt;50ms</div>
                <div className="text-sm text-slate-500">Latency</div>
              </div>
              <div>
                <div className="text-2xl text-[#06b6d4] font-mono">100%</div>
                <div className="text-sm text-slate-500">On-Prem</div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Video Feed Placeholder */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl bg-slate-900/50 border border-slate-800/50 overflow-hidden backdrop-blur-sm shadow-2xl">
              {/* Video feed background */}
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwZGF0YSUyMHZpc3VhbGl6YXRpb24lMjBkYXJrfGVufDF8fHx8MTc2NzYwMjk5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Neural network data visualization"
                className="w-full h-full object-cover opacity-60"
              />
              
              {/* Bounding boxes overlay */}
              <div className="absolute inset-0">
                {/* Box 1 */}
                <div className="absolute top-[20%] left-[15%] w-32 h-32 border-2 border-[#06b6d4] rounded-lg animate-pulse shadow-lg shadow-[#06b6d4]/20">
                  <div className="absolute -top-6 left-0 bg-[#06b6d4] text-slate-950 px-3 py-1 text-xs font-mono rounded-md shadow-lg">
                    Person · 98%
                  </div>
                </div>
                
                {/* Box 2 */}
                <div className="absolute top-[45%] right-[20%] w-28 h-28 border-2 border-[#f59e0b] rounded-lg shadow-lg shadow-[#f59e0b]/20">
                  <div className="absolute -top-6 right-0 bg-[#f59e0b] text-slate-950 px-3 py-1 text-xs font-mono rounded-md shadow-lg">
                    Object · 94%
                  </div>
                </div>
                
                {/* Box 3 */}
                <div className="absolute bottom-[15%] left-[30%] w-24 h-24 border-2 border-[#06b6d4] rounded-lg shadow-lg shadow-[#06b6d4]/20">
                  <div className="absolute -bottom-6 left-0 bg-[#06b6d4] text-slate-950 px-3 py-1 text-xs font-mono rounded-md shadow-lg">
                    Motion · 91%
                  </div>
                </div>
              </div>
              
              {/* HUD overlay */}
              <div className="absolute top-4 left-4 space-y-2 font-mono text-xs bg-slate-950/60 backdrop-blur-md px-3 py-2 rounded-lg border border-[#06b6d4]/20">
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-[#06b6d4]" />
                  <span className="text-[#06b6d4]">CAM-01</span>
                </div>
                <div className="text-slate-400">FPS: 30 | RES: 1920x1080</div>
              </div>
              
              <div className="absolute top-4 right-4 font-mono text-xs bg-slate-950/60 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-800/50">
                <div className="text-slate-400">2026-01-05 14:32:17 UTC</div>
              </div>
              
              {/* Processing indicator */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-lg border border-[#06b6d4]/30 shadow-lg shadow-[#06b6d4]/10">
                <div className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse shadow-lg shadow-[#06b6d4]/50"></div>
                <span className="text-xs text-[#06b6d4] font-mono">PROCESSING</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#06b6d4]/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-[#f59e0b]/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}