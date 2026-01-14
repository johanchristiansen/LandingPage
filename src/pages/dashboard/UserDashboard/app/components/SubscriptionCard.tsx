import React from 'react';
import { ArrowRight, Activity, Server, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

interface SubscriptionCardProps {
  title: string;
  type: 'AI' | 'IoT';
  status: 'active' | 'inactive';
  icon?: React.ElementType;
}

export const SubscriptionCard = ({
  title,
  type,
  status,
  icon: Icon = Activity,
}: SubscriptionCardProps) => {
  const isActive = status === 'active';
  const { t } = useTranslation();

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-4 flex items-start justify-between">
          <div
            className={`rounded-xl p-3 ${
              isActive ? 'bg-cyan-500/10 text-cyan-400' : 'bg-slate-700/50 text-slate-500'
            }`}
          >
            <Icon size={24} />
          </div>
          <span
            className={`rounded-full border px-2.5 py-1 text-xs font-medium ${
              isActive
                ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.15)]'
                : 'border-slate-600 bg-slate-700/50 text-slate-400'
            }`}
          >
            {status === 'active' ? t('dashboard.admin.table.active') : 'Inactive'}
          </span>
        </div>

        <h3 className="mb-1 text-lg font-semibold text-slate-100">{title}</h3>
        <p className="mb-6 flex items-center gap-2 text-sm text-slate-400">
          {type === 'AI' ? <Cpu size={14} /> : <Server size={14} />}
          {type} {t('dashboard.menu.services')}
        </p>

        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-700/50 py-2.5 text-sm font-medium text-slate-300 transition-all hover:bg-slate-700 hover:text-white group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-cyan-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-cyan-500/20">
          {t('dashboard.user.views.subscriptions.manage')}
          <ArrowRight
            size={16}
            className="-translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
          />
        </button>
      </div>
    </motion.div>
  );
};
