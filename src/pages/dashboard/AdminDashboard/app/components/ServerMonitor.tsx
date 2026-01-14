import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { Cpu, Database, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const generateData = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    time: i,
    cpu: 20 + Math.random() * 30,
    ram: 40 + Math.random() * 20,
    gpu: 50 + Math.random() * 15,
  }));
};

export function ServerMonitor() {
  const [data, setData] = useState(generateData(30));
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const nextTime = prev[prev.length - 1].time + 1;
        const newPoint = {
          time: nextTime,
          cpu: 20 + Math.random() * 40 + Math.sin(nextTime / 5) * 10,
          ram: 40 + Math.random() * 20 + Math.cos(nextTime / 8) * 5,
          gpu: 55 + Math.random() * 25,
        };
        return [...prev.slice(1), newPoint];
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="z-50 rounded border border-slate-700 bg-slate-900 p-2 font-mono text-xs shadow-xl">
          <p className="mb-1 text-slate-400">T+{label}s</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.stroke || entry.fill }}>
              {entry.name === 'cpu' && `${t('dashboard.admin.monitor.cpu')}: `}
              {entry.name === 'ram' && `${t('dashboard.admin.monitor.ram')}: `}
              {entry.name === 'gpu' && `${t('dashboard.admin.monitor.gpu')}: `}
              {entry.value.toFixed(1)}
              {entry.name === 'gpu' ? '°C' : '%'}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
      {/* CPU Monitor */}
      <div className="group relative overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/50 p-4 shadow-lg backdrop-blur transition-colors hover:border-cyan-500/30">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="flex items-center gap-2 text-sm font-medium text-slate-400">
              <Cpu size={16} className="text-cyan-400" />
              CPU LOAD
            </h3>
            <p className="mt-1 font-mono text-2xl text-white">
              {data[data.length - 1].cpu.toFixed(1)}
              <span className="text-sm text-slate-500">%</span>
            </p>
          </div>
          <div className="rounded bg-slate-900 px-2 py-1 font-mono text-xs text-slate-500">
            24 CORES
          </div>
        </div>
        <div className="h-[120px] w-full" style={{ minHeight: '120px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="cpu"
                stroke="#22d3ee"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorCpu)"
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* RAM Monitor */}
      <div className="overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/50 p-4 shadow-lg backdrop-blur transition-colors hover:border-purple-500/30">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="flex items-center gap-2 text-sm font-medium text-slate-400">
              <Database size={16} className="text-purple-400" />
              RAM USAGE (R720)
            </h3>
            <p className="mt-1 font-mono text-2xl text-white">
              {data[data.length - 1].ram.toFixed(1)}
              <span className="text-sm text-slate-500">%</span>
            </p>
          </div>
          <div className="rounded bg-slate-900 px-2 py-1 font-mono text-xs text-slate-500">
            64GB DDR4
          </div>
        </div>
        <div className="h-[120px] w-full" style={{ minHeight: '120px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorRam" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="ram"
                stroke="#a855f7"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorRam)"
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* GPU Monitor */}
      <div className="overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/50 p-4 shadow-lg backdrop-blur transition-colors hover:border-emerald-500/30">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="flex items-center gap-2 text-sm font-medium text-slate-400">
              <Zap size={16} className="text-emerald-400" />
              GPU TEMP (RTX 3060)
            </h3>
            <p className="mt-1 font-mono text-2xl text-white">
              {data[data.length - 1].gpu.toFixed(1)}
              <span className="text-sm text-slate-500">°C</span>
            </p>
          </div>
          <div className="rounded bg-slate-900 px-2 py-1 font-mono text-xs text-slate-500">
            12GB VRAM
          </div>
        </div>
        <div className="h-[120px] w-full" style={{ minHeight: '120px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorGpu" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="gpu"
                stroke="#10b981"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorGpu)"
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
