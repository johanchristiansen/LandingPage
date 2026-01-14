import React, { useState } from 'react';
import { Save, RefreshCw, Settings as SettingsIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ConfigPanel() {
  const [limit, setLimit] = useState(10000);
  const [maintenance, setMaintenance] = useState(false);
  const [autoScale, setAutoScale] = useState(true);
  const { t } = useTranslation();

  return (
    <div className="h-full rounded-xl border border-slate-700 bg-slate-800 p-4 shadow-lg md:p-6">
      <h2 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-200">
        <SettingsIcon />
        {t('dashboard.admin.config.title')}
      </h2>

      <div className="space-y-8">
        {/* Subscription Limit */}
        <div className="space-y-2">
          <label
            htmlFor="subscription-limit"
            className="block font-mono text-xs uppercase tracking-wider text-cyan-400"
          >
            {t('dashboard.admin.config.globalLimit')}
          </label>
          <div className="flex items-center gap-4">
            <input
              id="subscription-limit"
              type="number"
              value={limit}
              onChange={(e) => setLimit(parseInt(e.target.value))}
              className="w-full rounded border border-slate-700 bg-slate-900 px-4 py-2 font-mono text-white transition-colors focus:border-cyan-500 focus:outline-none"
            />
            <span className="whitespace-nowrap font-mono text-xs text-slate-500">
              {t('dashboard.admin.config.maxConn')}
            </span>
          </div>
          <p className="text-xs text-slate-500">{t('dashboard.admin.config.limitDesc')}</p>
        </div>

        <div className="h-px bg-slate-700/50" />

        {/* Toggles */}
        <div className="grid grid-cols-1 gap-6">
          <div className="flex items-center justify-between rounded border border-slate-700/50 bg-slate-900/50 p-3">
            <div>
              <p className="text-sm font-medium text-slate-200">
                {t('dashboard.admin.config.maintenance.label')}
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                {t('dashboard.admin.config.maintenance.desc')}
              </p>
            </div>
            <button
              onClick={() => setMaintenance(!maintenance)}
              className={`relative h-6 w-12 rounded-full transition-colors ${
                maintenance ? 'bg-red-500' : 'bg-slate-700'
              }`}
            >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${
                  maintenance ? 'left-7' : 'left-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between rounded border border-slate-700/50 bg-slate-900/50 p-3">
            <div>
              <p className="text-sm font-medium text-slate-200">
                {t('dashboard.admin.config.autoScale.label')}
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                {t('dashboard.admin.config.autoScale.desc')}
              </p>
            </div>
            <button
              onClick={() => setAutoScale(!autoScale)}
              className={`relative h-6 w-12 rounded-full transition-colors ${
                autoScale ? 'bg-emerald-500' : 'bg-slate-700'
              }`}
            >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${
                  autoScale ? 'left-7' : 'left-1'
                }`}
              />
            </button>
          </div>
        </div>

        <div className="h-px bg-slate-700/50" />

        {/* RabbitMQ Status */}
        <div className="space-y-3">
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-purple-400">
            {t('dashboard.admin.config.rabbitmq')}
            <span className="flex items-center gap-1 normal-case text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
              {t('dashboard.common.connected')}
            </span>
          </div>

          <div className="space-y-2 rounded border border-slate-800 bg-slate-950 p-3 font-mono text-xs">
            <div className="flex justify-between">
              <span className="text-slate-500">vhost:</span>
              <span className="text-slate-300">/prod</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Consumers:</span>
              <span className="text-slate-300">128</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Messages (Ready):</span>
              <span className="text-emerald-400">42</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Messages (Unacked):</span>
              <span className="text-amber-400">12</span>
            </div>
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-[35%] bg-purple-500"></div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <button className="flex flex-1 items-center justify-center gap-2 rounded bg-cyan-600 py-2 text-sm font-medium text-white transition-colors hover:bg-cyan-500">
            <Save size={16} />
            Save Changes
          </button>
          <button className="rounded border border-slate-600 px-4 py-2 text-slate-300 transition-colors hover:bg-slate-700">
            <RefreshCw size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
