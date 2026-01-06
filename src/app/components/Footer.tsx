import { Activity, Mail, Github, Linkedin } from 'lucide-react';
import Section from '../../design-system/Section';

export function Footer() {
  return (
    <footer className="py-16 border-t border-[#06b6d4]/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#06b6d4]/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-6 lg:px-12">
        <Section animation="fade-up" stagger>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl tracking-tight">
              <span className="text-[#06b6d4]">S.T.S</span> <span className="text-[#e2e8f0]">Labs</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Boutique AIoT and Computer Vision solutions. Built for reliability, engineered for scale.
            </p>
            <div className="flex items-center gap-2 bg-[#06b6d4]/5 px-3 py-2 rounded-lg inline-flex border border-[#06b6d4]/20">
              <Activity className="w-4 h-4 text-[#06b6d4]" />
              <span className="text-sm text-[#06b6d4] font-mono">Systems Online</span>
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h4 className="text-sm text-slate-500 mb-4 font-mono">SOLUTIONS</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-400 hover:text-[#06b6d4] transition-colors flex items-center gap-2 group">
                  <div className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-[#06b6d4] transition-colors"></div>
                  Smart Poultry Monitoring
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-[#06b6d4] transition-colors flex items-center gap-2 group">
                  <div className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-[#06b6d4] transition-colors"></div>
                  Video Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-[#06b6d4] transition-colors flex items-center gap-2 group">
                  <div className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-[#06b6d4] transition-colors"></div>
                  Micro-APIs
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-[#06b6d4] transition-colors flex items-center gap-2 group">
                  <div className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-[#06b6d4] transition-colors"></div>
                  Custom Solutions
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-sm text-slate-500 mb-4 font-mono">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-400 hover:text-[#06b6d4] transition-colors flex items-center gap-2 group">
                  <div className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-[#06b6d4] transition-colors"></div>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-[#06b6d4] transition-colors flex items-center gap-2 group">
                  <div className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-[#06b6d4] transition-colors"></div>
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-[#06b6d4] transition-colors flex items-center gap-2 group">
                  <div className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-[#06b6d4] transition-colors"></div>
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-[#06b6d4] transition-colors flex items-center gap-2 group">
                  <div className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-[#06b6d4] transition-colors"></div>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-sm text-slate-500 mb-4 font-mono">CONNECT</h4>
            <div className="space-y-3">
              <a 
                href="mailto:hello@stslabs.com" 
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#06b6d4] transition-colors group"
              >
                <Mail className="w-4 h-4" />
                <span className="group-hover:translate-x-0.5 transition-transform">hello@stslabs.com</span>
              </a>
              
              <div className="flex gap-3 pt-2">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-lg border border-slate-800 hover:border-[#06b6d4] flex items-center justify-center transition-all duration-300 group hover:shadow-lg hover:shadow-[#06b6d4]/10 backdrop-blur-sm"
                >
                  <Github className="w-4 h-4 text-slate-400 group-hover:text-[#06b6d4] transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-lg border border-slate-800 hover:border-[#06b6d4] flex items-center justify-center transition-all duration-300 group hover:shadow-lg hover:shadow-[#06b6d4]/10 backdrop-blur-sm"
                >
                  <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-[#06b6d4] transition-colors" />
                </a>
              </div>
            </div>
          </div>
          </div>
        </Section>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-500">
            © 2026 S.T.S Labs. All systems operational.
          </div>
          
          {/* Status indicator */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-[#06b6d4]/30 rounded-lg backdrop-blur-sm">
              <div className="relative flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#06b6d4] shadow-lg shadow-[#06b6d4]/50"></div>
                <div className="absolute w-2 h-2 rounded-full bg-[#06b6d4] animate-ping"></div>
              </div>
              <span className="text-xs text-[#06b6d4] font-mono">STATUS: ONLINE</span>
            </div>
            
            <div className="text-xs text-slate-500 font-mono bg-slate-900/30 px-3 py-2 rounded-lg">
              UPTIME: 99.94%
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}