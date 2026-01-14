import React from 'react';
import { SubscriptionCard } from './SubscriptionCard';
import { FeatureToggle } from './FeatureToggle';
import { StatsChart } from './StatsChart';
import { Activity, Camera, Leaf, Database } from 'lucide-react';
import { motion } from 'motion/react';
import { useAuth } from '../../../../../context/AuthContext';
import { useTranslation } from 'react-i18next';

export const Dashboard = () => {
  const { user } = useAuth();
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-7xl space-y-8 p-4 pb-12 md:p-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col justify-between gap-4 md:flex-row md:items-center"
      >
        <div>
          <h1 className="mb-2 text-2xl font-bold text-white md:text-3xl">
            {t('dashboard.user.welcome', { name: user?.name || 'User' })}
          </h1>
          <p className="text-sm text-slate-400 md:text-base">
            {t('dashboard.user.overviewSubtitle')}
          </p>
        </div>
        <div className="flex items-center gap-3 self-start rounded-full border border-slate-700/50 bg-slate-800/50 px-4 py-2 backdrop-blur-sm">
          <div className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
          </div>
          <span className="text-sm font-medium text-slate-200">
            {t('dashboard.common.status', { status: t('dashboard.common.online') })}
          </span>
        </div>
      </motion.div>

      {/* Active Subscriptions */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-100">
            {t('dashboard.user.activeSubscriptions')}
          </h2>
          <button className="text-sm text-cyan-400 transition-colors hover:text-cyan-300">
            {t('dashboard.common.viewAll')}
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <SubscriptionCard
            title={t('products.poultry.title')}
            type="IoT"
            status="active"
            icon={Leaf}
          />
          <SubscriptionCard
            title={t('dashboard.user.views.subscriptions.items.cctv')}
            type="AI"
            status="active"
            icon={Camera}
          />
          <SubscriptionCard
            title={t('dashboard.user.views.subscriptions.items.maintenance')}
            type="AI"
            status="inactive"
            icon={Activity}
          />
        </div>
      </section>

      {/* Stats & Toggles Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Usage Stats - Takes up 2 columns */}
        <section className="flex h-full flex-col lg:col-span-2">
          <h2 className="mb-6 text-xl font-semibold text-slate-100">
            {t('dashboard.user.apiUsage')}
          </h2>
          <div className="flex-1">
            <StatsChart title={t('dashboard.user.totalRequests')} />
          </div>
        </section>

        {/* Feature Toggles - Takes up 1 column */}
        <section className="flex h-full flex-col space-y-6">
          <h2 className="text-xl font-semibold text-slate-100">
            {t('dashboard.user.quickActions')}
          </h2>
          <div className="flex-1 space-y-4">
            <FeatureToggle
              label={t('dashboard.user.toggles.whatsapp.label')}
              description={t('dashboard.user.toggles.whatsapp.desc')}
              defaultEnabled={true}
            />
            <FeatureToggle
              label={t('dashboard.user.toggles.aiWeight.label')}
              description={t('dashboard.user.toggles.aiWeight.desc')}
              defaultEnabled={true}
            />
            <FeatureToggle
              label={t('dashboard.user.toggles.autoScale.label')}
              description={t('dashboard.user.toggles.autoScale.desc')}
              defaultEnabled={false}
            />
            <FeatureToggle
              label={t('dashboard.user.toggles.debug.label')}
              description={t('dashboard.user.toggles.debug.desc')}
              defaultEnabled={false}
            />
          </div>

          {/* Mini Stat Card */}
          <div className="mt-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-900/20 to-slate-900 p-4">
            <div className="mb-2 flex items-center gap-3">
              <Database size={18} className="text-cyan-400" />
              <span className="text-sm text-slate-400">{t('dashboard.user.storageUsed')}</span>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-slate-100">84.5 GB</span>
              <span className="mb-1 text-xs text-slate-500">of 1 TB</span>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-[8.45%] bg-cyan-500" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
