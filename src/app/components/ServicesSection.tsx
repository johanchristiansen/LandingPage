import { useState } from 'react';
import { Wifi, Brain, Monitor, Server, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Section from '../../design-system/Section';

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
    },
    {
      id: 'infra',
      name: 'Infrastructure & Cloud',
      icon: Server,
      tagline: 'Fondasi Digital Kokoh',
      description: 'Infrastruktur server dan jaringan yang aman, cepat, dan dapat diandalkan.',
      features: [
        'Private Cloud Setup',
        'High-Performance Server Maintenance',
        'Network Security & Firewall',
      ],
      image:
        'https://images.unsplash.com/photo-1558494949-ef526b00fb65?auto=format&fit=crop&q=80&w=1080',
      tech: ['Linux', 'Kubernetes', 'Proxmox', 'Cisco'],
    },
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
        <Section animation="fade-up" className="mb-8 flex flex-wrap gap-3">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 rounded-lg border px-4 py-2 backdrop-blur-sm transition-all duration-300 ${
                  activeTab === index
                    ? 'border-[#06b6d4] bg-gradient-to-r from-[#06b6d4]/10 to-[#06b6d4]/5 text-[#06b6d4] shadow-lg shadow-[#06b6d4]/10'
                    : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700 hover:bg-slate-900/70'
                }`}
              >
                <ServiceIcon className="h-4 w-4" />
                <span className="text-sm font-medium">{service.name}</span>
              </button>
            );
          })}
        </Section>

        {/* Content */}
        <Section animation="fade-up">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Left - Details */}
            <div className="space-y-6">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#06b6d4]/30 bg-gradient-to-br from-[#06b6d4]/10 to-[#06b6d4]/5 shadow-lg shadow-[#06b6d4]/10">
                    <Icon className="h-5 w-5 text-[#06b6d4]" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-[#e2e8f0]">{active.name}</h3>
                    <p className="font-mono text-xs text-[#06b6d4]">{active.tagline}</p>
                  </div>
                </div>

                <p className="text-base leading-relaxed text-slate-400">{active.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-2">
                {active.features.map((feature, index) => (
                  <div key={index} className="group flex items-center gap-2 text-slate-300">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#06b6d4] shadow-lg shadow-[#06b6d4]/50 transition-transform group-hover:scale-125"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div>
                <div className="mb-2 font-mono text-xs text-slate-500">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {active.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-md border border-slate-800 bg-slate-900/70 px-3 py-1 font-mono text-xs text-slate-400 backdrop-blur-sm transition-all duration-300 hover:border-[#06b6d4]/30 hover:bg-slate-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#0891b2] px-6 py-2.5 font-medium text-slate-950 transition-all duration-300 hover:shadow-lg hover:shadow-[#06b6d4]/25">
                <span className="text-sm">Learn More</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right - Visual */}
            <div className="relative">
              <div className="group relative aspect-video overflow-hidden rounded-xl border border-slate-800/50 bg-slate-900/50 shadow-2xl backdrop-blur-sm">
                <ImageWithFallback
                  src={active.image}
                  alt={active.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                {/* Tech label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between rounded-lg border border-[#06b6d4]/30 bg-slate-950/90 px-3 py-2 shadow-lg backdrop-blur-md">
                    <span className="font-mono text-xs text-[#06b6d4]">
                      {active.id.toUpperCase()}-SYSTEM
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#06b6d4] shadow-lg shadow-[#06b6d4]/50"></div>
                      <span className="font-mono text-[10px] text-slate-400">ACTIVE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -right-8 -top-8 -z-10 h-32 w-32 rounded-full bg-[#06b6d4]/10 blur-3xl"></div>
            </div>
          </div>
        </Section>
      </div>
    </section>
  );
}
