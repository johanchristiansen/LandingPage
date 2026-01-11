import { useState } from 'react';
import { Wifi, Brain, Monitor, ChevronRight, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Section from '../../design-system/Section';
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogClose } from './ui/dialog';

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'iot',
      name: 'Smart Ecosystems',
      icon: Wifi,
      tagline: 'Konektivitas Tanpa Batas',
      description:
        'Solusi IoT yang menghubungkan perangkat fisik dengan digital untuk efisiensi maksimal.',
      features: [
        'Smart Home & Building Automation',
        'Industrial IoT Sensors',
        'Energy Management Systems',
      ],
      image:
        'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1080',
      tech: ['ESP32', 'Zigbee', 'MQTT', 'Node-RED'],
      details: {
        architecture: 'Mesh / Star Topology',
        latency: '< 50ms Edge Comp.',
        security: 'TLS 1.2 + AES-128',
      },
      useCases: ['Factory Automation', 'Precision Agriculture', 'Smart City Grid'],
    },
    {
      id: 'ai',
      name: 'AI & Data Intelligence',
      icon: Brain,
      tagline: 'Kecerdasan Buatan Terdepan',
      description:
        'Analisis data mendalam dan otomatisasi berbasis AI untuk keputusan bisnis yang lebih baik.',
      features: [
        'Computer Vision & Surveillance',
        'Predictive Analytics',
        'Natural Language Processing',
      ],
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1080',
      tech: ['TensorFlow', 'PyTorch', 'YOLO', 'Scikit-learn'],
      details: {
        architecture: 'Cloud / Edge AI',
        latency: 'Real-time Inference',
        security: 'Anonymized Data Proc',
      },
      useCases: ['Quality Control', 'Customer Behavior', 'Fraud Detection'],
    },
    {
      id: 'software',
      name: 'Enterprise Software',
      icon: Monitor,
      tagline: 'Sistem Terintegrasi',
      description: 'Pengembangan software custom yang menyatukan seluruh operasional bisnis Anda.',
      features: [
        'Custom ERP Development (Odoo)',
        'Business Intelligence Dashboards',
        'Workflow Automation Solutions',
      ],
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080',
      tech: ['Odoo', 'PostgreSQL', 'React', 'Docker'],
      details: {
        architecture: 'Microservices',
        latency: 'High Availability',
        security: 'Role-Based Access',
      },
      useCases: ['Supply Chain Mgmt', 'HR Information Sys', 'Financial Reporting'],
    },
    // {
    //   id: 'infra',
    //   name: 'Infrastructure & Cloud',
    //   icon: Server,
    //   tagline: 'Fondasi Digital Kokoh',
    //   description: 'Infrastruktur server dan jaringan yang aman, cepat, dan dapat diandalkan.',
    //   features: [
    //     'Private Cloud Setup',
    //     'High-Performance Server Maintenance',
    //     'Network Security & Firewall',
    //   ],
    //   image:
    //     'https://images.unsplash.com/photo-1558494949-ef526b00fb65?auto=format&fit=crop&q=80&w=1080',
    //   tech: ['Linux', 'Kubernetes', 'Proxmox', 'Cisco'],
    // },
  ];

  const active = services[activeTab];
  const Icon = active.icon;

  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-[#06b6d4]/10 py-12 lg:py-16"
    >
      {/* Background elements */}
      <div className="absolute right-1/4 top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-[#f59e0b]/5 blur-[120px]"></div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section wrapper provides consistent animation per section */}
        {/* Using Section with stagger to reveal internal elements */}

        <Section stagger className="mb-8 max-w-2xl">
          <h2 className="mb-2 text-3xl text-[#e2e8f0] lg:text-4xl">
            Layanan{' '}
            <span className="relative inline-block text-[#06b6d4]">
              Kami
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-[#06b6d4]/50 to-transparent"></div>
            </span>
          </h2>
          <p className="text-base text-slate-400">
            Inovasi teknologi yang disesuaikan dengan kebutuhan industri Anda.
          </p>
        </Section>

        {/* Tabs */}
        <Section animation="fade-up" className="mb-6">
          <div role="tablist" className="flex flex-wrap gap-2">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={service.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${service.id}`}
                  id={`tab-${service.id}`}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:ring-offset-2 focus:ring-offset-slate-900 ${
                    isActive
                      ? 'border-[#06b6d4] bg-gradient-to-r from-[#06b6d4]/10 to-[#06b6d4]/5 text-[#06b6d4] shadow-lg shadow-[#06b6d4]/10'
                      : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700 hover:bg-slate-900/70'
                  }`}
                >
                  <ServiceIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="text-xs font-medium lg:text-sm">{service.name}</span>
                </button>
              );
            })}
          </div>
        </Section>

        {/* Content */}
        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className="grid items-center gap-6 lg:grid-cols-2 lg:gap-8"
        >
          {/* Left - Details */}
          <Section animation="fade-right" className="space-y-4">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#06b6d4]/30 bg-gradient-to-br from-[#06b6d4]/10 to-[#06b6d4]/5 shadow-lg shadow-[#06b6d4]/10">
                  <Icon className="h-4 w-4 text-[#06b6d4]" />
                </div>
                <div>
                  <h3 className="text-xl text-[#e2e8f0]">{active.name}</h3>
                  <p className="font-mono text-[10px] text-[#06b6d4]">{active.tagline}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-400">{active.description}</p>
            </div>

            {/* Features */}
            <div className="space-y-1.5">
              {active.features.map((feature, index) => (
                <div key={index} className="group flex items-center gap-2 text-slate-300">
                  <div className="h-1 w-1 rounded-full bg-[#06b6d4] shadow-lg shadow-[#06b6d4]/50 transition-transform group-hover:scale-125"></div>
                  <span className="text-xs lg:text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div>
              <div className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-1.5">
                {active.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded border border-slate-800 bg-slate-900/70 px-2 py-1 font-mono text-[10px] text-slate-400 backdrop-blur-sm transition-all duration-300 hover:border-[#06b6d4]/30 hover:bg-slate-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <button className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#0891b2] px-5 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#06b6d4]/25 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:ring-offset-2 focus:ring-offset-slate-900 active:scale-95">
                  <span className="text-xs font-semibold">View Details</span>
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-lg overflow-hidden border border-slate-800 bg-[#020617]/95 p-0 backdrop-blur-xl sm:rounded-2xl">
                {/* Hero Image in Header */}
                <div className="relative h-32 w-full shrink-0 overflow-hidden">
                  <ImageWithFallback
                    src={active.image}
                    alt={active.name}
                    className="h-full w-full object-cover opacity-80 transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent"></div>
                  <div className="absolute bottom-3 left-5">
                    <div className="mb-1 flex items-center gap-2">
                      <div className="rounded bg-[#06b6d4]/20 px-1.5 py-0.5 text-[9px] font-bold text-[#06b6d4] backdrop-blur-md">
                        {active.id.toUpperCase()}
                      </div>
                    </div>
                    <DialogTitle className="text-lg font-bold text-white">
                      {active.name}
                    </DialogTitle>
                  </div>

                  {/* Close Button Override */}
                  <DialogClose className="absolute right-3 top-3 rounded-full bg-black/20 p-1.5 text-white/70 backdrop-blur-sm transition-all hover:bg-black/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#06b6d4]">
                    <X className="h-3.5 w-3.5" />
                    <span className="sr-only">Close</span>
                  </DialogClose>
                </div>

                <div className="scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-slate-700 max-h-[60vh] overflow-y-auto p-5">
                  <div className="space-y-6">
                    {/* Section 1: Core Tech */}
                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-semibold text-[#06b6d4]">
                        <Brain className="h-3.5 w-3.5" /> Core Technology
                      </h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                        {active.description} Designed for high-throughput environments with minimal
                        latency. We leverage industry-standard protocols to ensure interoperability
                        with your existing infrastructure.
                      </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      {/* Modules */}
                      <div className="space-y-2">
                        <h4 className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                          Core Modules
                        </h4>
                        <ul className="space-y-1.5">
                          {active.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-1.5 text-[11px] text-slate-300"
                            >
                              <div className="h-1 w-1 rounded-full bg-[#06b6d4] shadow-[0_0_5px_#06b6d4]"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Top Use Cases (New Data) */}
                      <div className="space-y-2">
                        <h4 className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                          Use Cases
                        </h4>
                        <ul className="space-y-1.5">
                          {active.useCases.map((useCase, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-1.5 text-[11px] text-slate-300"
                            >
                              <div className="h-1 w-1 rounded-full bg-slate-500"></div>
                              {useCase}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Specs Table (Dynamic) */}
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                        Technical Specifications
                      </h4>
                      <div className="rounded-lg border border-slate-800 bg-slate-900/30 p-3">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[10px]">
                          <div className="flex flex-col">
                            <span className="text-slate-500">Architecture</span>
                            <span className="font-medium text-slate-300">
                              {active.details.architecture}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-slate-500">Avg. Latency</span>
                            <span className="font-medium text-slate-300">
                              {active.details.latency}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-slate-500">Security Standard</span>
                            <span className="font-medium text-slate-300">
                              {active.details.security}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-slate-500">Deployment</span>
                            <span className="font-medium text-slate-300">
                              On-Prem / Cloud / Hybrid
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer to prevent overlap with sticky footer */}
                  <div className="h-20"></div>

                  <div className="sticky bottom-0 -mx-5 -mb-5 border-t border-slate-800/50 bg-[#020617]/95 p-5 backdrop-blur-md">
                    <DialogClose asChild>
                      <button
                        onClick={() => {
                          // Delay scroll to allow Dialog to close and body scroll to unlock
                          setTimeout(() => {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                              contactSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }, 150);
                        }}
                        className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#06b6d4] py-2.5 text-xs font-bold text-white transition-all hover:bg-[#0891b2] hover:shadow-lg hover:shadow-[#06b6d4]/20 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:ring-offset-2 focus:ring-offset-slate-900 active:scale-95"
                      >
                        Schedule Demo
                        <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </DialogClose>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </Section>

          {/* Right - Visual */}
          <Section animation="fade-left" className="relative">
            <div className="group relative aspect-video overflow-hidden rounded-xl border border-slate-800/50 bg-slate-900/50 shadow-2xl backdrop-blur-sm">
              <ImageWithFallback
                src={active.image}
                alt={active.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

              {/* Tech label */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="flex items-center justify-between rounded-lg border border-[#06b6d4]/30 bg-slate-950/90 px-3 py-2 shadow-lg backdrop-blur-md">
                  <span className="font-mono text-[10px] text-[#06b6d4]">
                    {active.id.toUpperCase()}-SYSTEM
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#06b6d4] shadow-lg shadow-[#06b6d4]/50"></div>
                    <span className="font-mono text-[10px] text-slate-400">ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -right-8 -top-8 -z-10 h-32 w-32 rounded-full bg-[#06b6d4]/10 blur-3xl"></div>
          </Section>
        </div>
      </div>
    </section>
  );
}
