import React, { useState } from 'react';
import { Activity, Users, Server, FileText, Settings } from 'lucide-react';
import { DashboardLayout } from '../../../../components/layout/DashboardLayout';
import { ServerMonitor } from './components/ServerMonitor';
import { UserTable } from './components/UserTable';
import { ConfigPanel } from './components/ConfigPanel';
import { useTranslation } from 'react-i18next';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { t } = useTranslation();

  const menuItems = [
    { id: 'dashboard', icon: Activity, label: t('dashboard.menu.monitor') },
    { id: 'users', icon: Users, label: t('dashboard.menu.users') },
    { id: 'services', icon: Server, label: t('dashboard.menu.services') },
    { id: 'logs', icon: FileText, label: t('dashboard.menu.logs') },
    { id: 'config', icon: Settings, label: t('dashboard.menu.config') },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="mx-auto max-w-[1600px] space-y-6 p-6 pb-20">
            <div className="mb-2 flex items-end justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-white">
                  {t('dashboard.admin.systemOverview')}
                </h1>
                <p className="mt-1 text-sm text-slate-400">
                  {t('dashboard.admin.systemOverviewSubtitle')}
                </p>
              </div>
            </div>
            <ServerMonitor />
            <div className="grid min-h-[600px] grid-cols-1 gap-6 xl:grid-cols-3">
              <div className="flex h-full flex-col xl:col-span-2">
                <UserTable />
              </div>
              <div className="h-full xl:col-span-1">
                <ConfigPanel />
              </div>
            </div>
          </div>
        );
      case 'users':
        return (
          <div className="p-6">
            <UserTable />
          </div>
        );
      case 'config':
        return (
          <div className="h-full p-6">
            <ConfigPanel />
          </div>
        );
      default:
        return (
          <div className="flex h-96 items-center justify-center text-slate-500">
            <div className="text-center">
              <p className="mb-2 text-xl font-medium">
                {t('dashboard.common.moduleUnderConstruction')}
              </p>
              <p>{t('dashboard.common.moduleDeveloping', { module: activeTab })}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <DashboardLayout
      sidebarItems={menuItems}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      sidebarTitle={t('dashboard.admin.portalLabel')}
      headerTitle={t('dashboard.admin.headerTitle')}
    >
      {renderContent()}
    </DashboardLayout>
  );
}

export default App;
