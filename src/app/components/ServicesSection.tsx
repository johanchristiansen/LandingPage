import { useState } from 'react';
import { Radio, Camera, Code, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Section from '../../design-system/Section';

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'poultry',
      name: 'Smart Poultry Monitoring',
      icon: Radio,
      tagline: 'IoT-Driven Farm Intelligence',
      description:
        'Real-time environmental monitoring and automated alerts for optimal poultry health.',
      features: [
        'Temperature & Humidity Sensors',
        'Ammonia Level Detection',
        'Automated Feed & Water Monitoring',
        'Mortality Rate Analytics',
        'Remote Dashboard Access',
      ],
      image:
        'https://images.unsplash.com/photo-1708254837326-8cd56e4fad41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3VsdHJ5JTIwZmFybSUyMG1vZGVybnxlbnwxfHx8fDE3Njc2MDIyMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['ESP32', 'LoRaWAN', 'MQTT', 'Time-Series DB'],
    },
    {
      id: 'cctv',
      name: 'Video Analytics',
      icon: Camera,
      tagline: 'CCTV AI Vision',
      description: 'Transform existing CCTV infrastructure into intelligent monitoring systems.',
      features: [
        'Object Detection & Tracking',
        'Facial Recognition',
        'Anomaly Detection',
        'License Plate Recognition (ALPR)',
        'Crowd Density Analysis',
      ],
      image:
        'https://images.unsplash.com/photo-1638845604906-6c87bd9ddd01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBvdmVybGF5JTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2NzYwMjk5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['YOLOv8', 'PyTorch', 'OpenCV', 'RTSP Streams'],
    },
    {
      id: 'api',
      name: 'Micro-APIs',
      icon: Code,
      tagline: 'Lightweight ML Services',
      description: 'Modular, scalable APIs for custom AI tasks. Deploy anywhere, scale on demand.',
      features: [
        'Custom Model Endpoints',
        'Image Classification APIs',
        'NLP & Text Analysis',
        'OCR & Document Processing',
        'Webhook Integration',
      ],
      image:
        'https://images.unsplash.com/photo-1640552421163-5a8e34827550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NzUzMzIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['FastAPI', 'Docker', 'Redis', 'Nginx'],
    },
  ];

  const active = services[activeTab];
  const Icon = active.icon;

  return (
    <section className="relative min-h-screen snap-start overflow-hidden border-b border-[#06b6d4]/10 py-32">
      {/* Background elements */}
      <div className="absolute right-1/4 top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-[#f59e0b]/5 blur-[120px]"></div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section wrapper provides consistent animation per section */}
        {/* Using Section with stagger to reveal internal elements */}

        <Section stagger className="mb-16 max-w-2xl">
          <h2 className="mb-4 text-4xl text-[#e2e8f0] lg:text-5xl">
            What we{' '}
            <span className="relative inline-block text-[#06b6d4]">
              build
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-[#06b6d4]/50 to-transparent"></div>
            </span>
          </h2>
          <p className="text-lg text-slate-400">Three core solutions. Endless possibilities.</p>
        </Section>

        {/* Tabs */}
        <Section animation="fade-up" className="mb-12 flex flex-wrap gap-4">
          <div className="mb-12 flex flex-wrap gap-4">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-3 rounded-xl border px-6 py-3 backdrop-blur-sm transition-all duration-300 ${
                    activeTab === index
                      ? 'border-[#06b6d4] bg-gradient-to-r from-[#06b6d4]/10 to-[#06b6d4]/5 text-[#06b6d4] shadow-lg shadow-[#06b6d4]/10'
                      : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700 hover:bg-slate-900/70'
                  }`}
                >
                  <ServiceIcon className="h-5 w-5" />
                  <span className="font-medium">{service.name}</span>
                </button>
              );
            })}
          </div>
        </Section>

        {/* Content */}
        <Section animation="fade-up">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left - Details */}
            <div className="space-y-8">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#06b6d4]/30 bg-gradient-to-br from-[#06b6d4]/10 to-[#06b6d4]/5 shadow-lg shadow-[#06b6d4]/10">
                    <Icon className="h-7 w-7 text-[#06b6d4]" />
                  </div>
                  <div>
                    <h3 className="text-3xl text-[#e2e8f0]">{active.name}</h3>
                    <p className="font-mono text-sm text-[#06b6d4]">{active.tagline}</p>
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-slate-400">{active.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {active.features.map((feature, index) => (
                  <div key={index} className="group flex items-center gap-3 text-slate-300">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#06b6d4] shadow-lg shadow-[#06b6d4]/50 transition-transform group-hover:scale-125"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div>
                <div className="mb-3 font-mono text-sm text-slate-500">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {active.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-lg border border-slate-800 bg-slate-900/70 px-4 py-2 font-mono text-sm text-slate-400 backdrop-blur-sm transition-all duration-300 hover:border-[#06b6d4]/30 hover:bg-slate-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#0891b2] px-8 py-3 font-medium text-slate-950 transition-all duration-300 hover:shadow-lg hover:shadow-[#06b6d4]/25">
                Learn More
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right - Visual */}
            <div className="relative">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-800/50 bg-slate-900/50 shadow-2xl backdrop-blur-sm">
                <ImageWithFallback
                  src={active.image}
                  alt={active.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                {/* Tech label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between rounded-xl border border-[#06b6d4]/30 bg-slate-950/90 px-4 py-3 shadow-lg backdrop-blur-md">
                    <span className="font-mono text-sm text-[#06b6d4]">
                      {active.id.toUpperCase()}-SYSTEM
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-[#06b6d4] shadow-lg shadow-[#06b6d4]/50"></div>
                      <span className="font-mono text-xs text-slate-400">ACTIVE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -right-8 -top-8 -z-10 h-48 w-48 rounded-full bg-[#06b6d4]/10 blur-3xl"></div>
            </div>
          </div>
        </Section>
      </div>
    </section>
  );
}
