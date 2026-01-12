import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LogOut, Wifi, Brain, Database, FileText, Settings, User as UserIcon } from 'lucide-react';
import Section from '../../design-system/Section';
import { useTranslation } from 'react-i18next';

export default function UserDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const features = [
    {
      id: 'iot',
      name: 'Smart IoT Monitor',
      icon: Wifi,
      description: 'Real-time sensor tracking and automation rules.',
      cta: t('dashboard.user.cta.launchDashboard'),
      path: '/app/iot',
    },
    {
      id: 'ai',
      name: 'AI Analytics',
      icon: Brain,
      description: 'Predictive insights and data modeling console.',
      cta: t('dashboard.user.cta.openAnalytics'),
      path: '/app/ai',
    },
    {
      id: 'erp',
      name: 'Enterprise ERP',
      icon: Database,
      description: 'Full business resource planning suite.',
      cta: t('dashboard.user.cta.accessERP'),
      path: '/app/erp',
    },
  ];

  // Filter features based on user subscription (mock)
  const userFeatures = features.filter((f) => user?.features.includes(f.id));

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Top Bar */}
      <nav className="border-b border-[#06b6d4]/10 bg-[#020617]/80 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-[#06b6d4]">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-[#06b6d4]/10">
              NT
            </div>
            <span>{t('dashboard.user.consoleLabel')}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <UserIcon className="h-4 w-4" />
              <span>{user?.name}</span>
              {user?.role === 'admin' && (
                <span className="rounded bg-red-500/10 px-2 py-0.5 text-xs font-bold uppercase text-red-500">
                  Admin
                </span>
              )}
            </div>
            <button
              onClick={handleLogout}
              className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-[#06b6d4] hover:text-white"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="mb-2 text-3xl font-bold text-white">
            {t('dashboard.user.welcome', { name: user?.name })}
          </h1>
          <p className="text-slate-400">{t('dashboard.user.manageDesc')}</p>
        </div>

        {/* Features Grid */}
        <h2 className="mb-6 text-sm text-xl font-semibold uppercase tracking-wider text-[#06b6d4]">
          {t('dashboard.user.activeSubscriptions')}
        </h2>
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {userFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <Section
                key={feature.id}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-[#06b6d4]/50 hover:bg-[#06b6d4]/5"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#06b6d4]/10 text-[#06b6d4]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{feature.name}</h3>
                <p className="mb-6 text-sm text-slate-400">{feature.description}</p>
                <button
                  // In a real app, this would use `Link to={feature.path}`
                  // For this demo, since those pages don't exist, we alert
                  onClick={() => alert(`Redirecting to ${feature.name} application...`)}
                  className="w-full rounded-lg bg-[#06b6d4] py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0891b2]"
                >
                  {feature.cta}
                </button>
              </Section>
            );
          })}
        </div>

        {/* Global Settings / Other Links */}
        <h2 className="mb-6 text-sm text-xl font-semibold uppercase tracking-wider text-slate-500">
          {t('dashboard.user.accountSupport')}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="cursor-pointer rounded-lg border border-slate-800 p-4 hover:bg-slate-800/50">
            <div className="flex items-center gap-3">
              <Settings className="h-5 w-5 text-slate-400" />
              <div>
                <div className="font-medium text-slate-200">
                  {t('dashboard.user.accountSettings')}
                </div>
                <div className="text-xs text-slate-500">
                  {t('dashboard.user.manageProfileBilling')}
                </div>
              </div>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg border border-slate-800 p-4 hover:bg-slate-800/50">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-slate-400" />
              <div>
                <div className="font-medium text-slate-200">
                  {t('dashboard.user.documentation')}
                </div>
                <div className="text-xs text-slate-500">
                  {t('dashboard.user.guidesApiReferences')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
