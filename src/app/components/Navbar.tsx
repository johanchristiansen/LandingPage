import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solusi', href: '#solution' },
    { name: 'Layanan', href: '#services' },
    { name: 'Keunggulan', href: '#why-us' },
    { name: 'Produk', href: '#products' },
    { name: 'Teknologi', href: '#tech' },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-[#06b6d4]/10 bg-[#020617]/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
        <a href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#06b6d4] to-[#0891b2] font-mono text-sm text-white">
            NT
          </div>
          <span className="text-white">[NAMA BISNIS]</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-sm text-sm font-medium text-slate-400 transition-colors hover:text-[#06b6d4] focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg bg-[#06b6d4] px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[#0891b2] hover:shadow-lg hover:shadow-[#06b6d4]/20 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Konsultasi Gratis
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#06b6d4] lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-[#06b6d4]/10 bg-[#020617] p-6 lg:hidden">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-slate-400 transition-colors hover:text-[#06b6d4]"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full rounded-lg bg-[#06b6d4] px-5 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-[#0891b2]"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
