import React from 'react';
import { SubscriptionCard } from './SubscriptionCard';
import { FeatureToggle } from './FeatureToggle';
import { Leaf, Camera, Key, CreditCard, Shield, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export const SubscriptionsView = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-7xl space-y-8 p-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="mb-2 text-3xl font-bold text-white">
          {t('dashboard.user.views.subscriptions.title')}
        </h1>
        <p className="mb-8 text-slate-400">{t('dashboard.user.views.subscriptions.desc')}</p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <SubscriptionCard
            title={t('dashboard.user.views.subscriptions.items.poultry')}
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
            title={t('dashboard.user.views.subscriptions.items.erp')}
            type="IoT"
            status="inactive"
            icon={CreditCard}
          />
        </div>
      </motion.div>
    </div>
  );
};

export const ApiAccessView = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-4xl space-y-8 p-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="mb-2 text-3xl font-bold text-white">
          {t('dashboard.user.views.api.title')}
        </h1>
        <p className="mb-8 text-slate-400">{t('dashboard.user.views.api.desc')}</p>

        <div className="mb-8 rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 backdrop-blur-md">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-100">
              <Key className="text-cyan-400" size={20} />
              {t('dashboard.user.views.api.prodKey')}
            </h3>
            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
              {t('dashboard.admin.table.active')}
            </span>
          </div>
          <div className="mb-4 flex gap-4">
            <input
              type="text"
              value="sk_live_51M........................"
              readOnly
              className="flex-1 rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 font-mono text-sm text-slate-400"
            />
            <button className="rounded-lg bg-slate-700 px-6 py-2 font-medium text-white transition-colors hover:bg-slate-600">
              {t('dashboard.user.views.api.copy')}
            </button>
          </div>
          <p className="text-xs text-slate-500">
            {t('dashboard.user.views.api.lastUsed', {
              time: '2 minutes ago',
              date: 'Jan 12, 2024',
            })}
          </p>
        </div>

        <FeatureToggle
          label={t('dashboard.user.views.api.rateLimit.label')}
          description={t('dashboard.user.views.api.rateLimit.desc')}
          defaultEnabled={true}
        />
      </motion.div>
    </div>
  );
};

export const BillingView = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-4xl space-y-8 p-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="mb-2 text-3xl font-bold text-white">
          {t('dashboard.user.views.billing.title')}
        </h1>
        <p className="mb-8 text-slate-400">{t('dashboard.user.views.billing.desc')}</p>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 p-6">
            <h3 className="mb-1 text-sm font-medium text-slate-400">
              {t('dashboard.user.views.billing.balance')}
            </h3>
            <div className="mb-4 text-3xl font-bold text-white">$0.00</div>
            <button className="w-full rounded-lg bg-cyan-600 py-2 font-medium text-white transition-colors hover:bg-cyan-500">
              {t('dashboard.user.views.billing.addFunds')}
            </button>
          </div>
          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6">
            <h3 className="mb-1 text-sm font-medium text-slate-400">
              {t('dashboard.user.views.billing.currentPlan')}
            </h3>
            <div className="mb-4 text-3xl font-bold text-white">
              {t('dashboard.user.views.billing.proPlan')}
            </div>
            <button className="w-full rounded-lg border border-slate-600 py-2 text-slate-200 transition-colors hover:bg-slate-700">
              {t('dashboard.user.views.billing.upgrade')}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const SettingsView = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-3xl space-y-8 p-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="mb-2 text-3xl font-bold text-white">
          {t('dashboard.user.views.settings.title')}
        </h1>
        <p className="mb-8 text-slate-400">{t('dashboard.user.views.settings.desc')}</p>

        <div className="space-y-6">
          <div className="space-y-6 rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
              <Shield size={20} className="text-cyan-400" />
              {t('dashboard.user.views.settings.security.title')}
            </h3>
            <FeatureToggle
              label={t('dashboard.user.views.settings.security.2fa.label')}
              description={t('dashboard.user.views.settings.security.2fa.desc')}
              defaultEnabled={false}
            />
            <FeatureToggle
              label={t('dashboard.user.views.settings.security.alerts.label')}
              description={t('dashboard.user.views.settings.security.alerts.desc')}
              defaultEnabled={true}
            />
          </div>

          <div className="space-y-6 rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
              <Mail size={20} className="text-cyan-400" />
              {t('dashboard.user.views.settings.notifications.title')}
            </h3>
            <FeatureToggle
              label={t('dashboard.user.views.settings.notifications.digest.label')}
              description={t('dashboard.user.views.settings.notifications.digest.desc')}
              defaultEnabled={true}
            />
            <FeatureToggle
              label={t('dashboard.user.views.settings.notifications.marketing.label')}
              description={t('dashboard.user.views.settings.notifications.marketing.desc')}
              defaultEnabled={false}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
