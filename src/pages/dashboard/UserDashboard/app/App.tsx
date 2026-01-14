import React, { useState } from 'react';
import { LayoutDashboard, Package, Key, CreditCard, Settings } from 'lucide-react';
import { DashboardLayout } from '../../../../components/layout/DashboardLayout';
import { Dashboard } from './components/Dashboard';
import { useTranslation } from 'react-i18next';
import {
  SubscriptionsView,
  ApiAccessView,
  BillingView,
  SettingsView,
} from './components/UserViews';

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { t } = useTranslation();

  const menuItems = [
    { icon: LayoutDashboard, label: t('dashboard.menu.overview'), id: 'overview' },
    { icon: Package, label: t('dashboard.menu.subscriptions'), id: 'subscriptions' },
    { icon: Key, label: t('dashboard.menu.api'), id: 'api' },
    { icon: CreditCard, label: t('dashboard.menu.billing'), id: 'billing' },
    { icon: Settings, label: t('dashboard.menu.settings'), id: 'settings' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Dashboard />;
      case 'subscriptions':
        return <SubscriptionsView />;
      case 'api':
        return <ApiAccessView />;
      case 'billing':
        return <BillingView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <DashboardLayout
      sidebarItems={menuItems}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      headerTitle={t(`dashboard.menu.${activeTab}`)}
      sidebarTitle={t('dashboard.user.consoleLabel')}
    >
      {renderContent()}
    </DashboardLayout>
  );
};

export default App;
