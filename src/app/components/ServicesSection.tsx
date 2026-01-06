import { useState } from 'react';
import { Radio, Camera, Code, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);
  
  const services = [
    {
      id: 'poultry',
      name: 'Smart Poultry Monitoring',
      icon: Radio,
      tagline: 'IoT-Driven Farm Intelligence',
      description: 'Real-time environmental monitoring and automated alerts for optimal poultry health.',
      features: [
        'Temperature & Humidity Sensors',
        'Ammonia Level Detection',
        'Automated Feed & Water Monitoring',
        'Mortality Rate Analytics',
        'Remote Dashboard Access'
      ],
      image: 'https://images.unsplash.com/photo-1708254837326-8cd56e4fad41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3VsdHJ5JTIwZmFybSUyMG1vZGVybnxlbnwxfHx8fDE3Njc2MDIyMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['ESP32', 'LoRaWAN', 'MQTT', 'Time-Series DB']
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
        'Crowd Density Analysis'
      ],
      image: 'https://images.unsplash.com/photo-1638845604906-6c87bd9ddd01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBvdmVybGF5JTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2NzYwMjk5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['YOLOv8', 'PyTorch', 'OpenCV', 'RTSP Streams']
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
        'Webhook Integration'
      ],
      image: 'https://images.unsplash.com/photo-1640552421163-5a8e34827550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NzUzMzIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['FastAPI', 'Docker', 'Redis', 'Nginx']
    }
  ];
  
  const active = services[activeTab];
  const Icon = active.icon;
  
  return (
    <section className="py-32 border-b border-[#06b6d4]/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#f59e0b]/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-[#e2e8f0]">
            What we <span className="text-[#06b6d4] relative inline-block">
              build
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#06b6d4]/50 to-transparent rounded-full"></div>
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Three core solutions. Endless possibilities.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl border transition-all duration-300 backdrop-blur-sm ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-[#06b6d4]/10 to-[#06b6d4]/5 border-[#06b6d4] text-[#06b6d4] shadow-lg shadow-[#06b6d4]/10'
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:bg-slate-900/70'
                }`}
              >
                <ServiceIcon className="w-5 h-5" />
                <span className="font-medium">{service.name}</span>
              </button>
            );
          })}
        </div>
        
        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#06b6d4]/10 to-[#06b6d4]/5 border border-[#06b6d4]/30 rounded-xl flex items-center justify-center shadow-lg shadow-[#06b6d4]/10">
                  <Icon className="w-7 h-7 text-[#06b6d4]" />
                </div>
                <div>
                  <h3 className="text-3xl text-[#e2e8f0]">{active.name}</h3>
                  <p className="text-sm text-[#06b6d4] font-mono">{active.tagline}</p>
                </div>
              </div>
              
              <p className="text-lg text-slate-400 leading-relaxed">
                {active.description}
              </p>
            </div>
            
            {/* Features */}
            <div className="space-y-3">
              {active.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-300 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] shadow-lg shadow-[#06b6d4]/50 group-hover:scale-125 transition-transform"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            {/* Tech Stack */}
            <div>
              <div className="text-sm text-slate-500 mb-3 font-mono">Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {active.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-slate-900/70 border border-slate-800 rounded-lg text-sm text-slate-400 font-mono hover:border-[#06b6d4]/30 hover:bg-slate-900 transition-all duration-300 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <button className="flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#0891b2] hover:shadow-lg hover:shadow-[#06b6d4]/25 text-slate-950 transition-all duration-300 font-medium group">
              Learn More
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Right - Visual */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl bg-slate-900/50 border border-slate-800/50 overflow-hidden backdrop-blur-sm shadow-2xl group">
              <ImageWithFallback 
                src={active.image}
                alt={active.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              
              {/* Tech label */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between bg-slate-950/90 backdrop-blur-md border border-[#06b6d4]/30 px-4 py-3 rounded-xl shadow-lg">
                  <span className="text-sm text-[#06b6d4] font-mono">{active.id.toUpperCase()}-SYSTEM</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse shadow-lg shadow-[#06b6d4]/50"></div>
                    <span className="text-xs text-slate-400 font-mono">ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative glow */}
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-[#06b6d4]/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}