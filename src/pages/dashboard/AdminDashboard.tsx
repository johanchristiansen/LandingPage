import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LogOut, Users, Activity, ShieldAlert, User as UserIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <nav className="border-b border-red-500/20 bg-red-950/10 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-red-500">
            <ShieldAlert className="h-6 w-6" />
            <span>{t('dashboard.admin.portalLabel')}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <UserIcon className="h-4 w-4" />
              <span>{user?.name}</span>
            </div>
            <button
              onClick={handleLogout}
              className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-red-500 hover:text-white"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <h1 className="mb-8 text-3xl font-bold text-white">
          {t('dashboard.admin.systemOverview')}
        </h1>

        <div className="mb-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-slate-400">{t('dashboard.admin.cards.activeUsers')}</h3>
              <Users className="h-5 w-5 text-[#06b6d4]" />
            </div>
            <div className="font-mono text-3xl font-bold text-white">1,248</div>
            <div className="mt-2 text-xs text-green-500">+12% from last month</div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-slate-400">{t('dashboard.admin.cards.systemHealth')}</h3>
              <Activity className="h-5 w-5 text-green-500" />
            </div>
            <div className="font-mono text-3xl font-bold text-white">99.9%</div>
            <div className="mt-2 text-xs text-slate-500">
              {t('dashboard.admin.cards.allSystemsOperational')}
            </div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-slate-400">{t('dashboard.admin.cards.securityAlerts')}</h3>
              <ShieldAlert className="h-5 w-5 text-red-500" />
            </div>
            <div className="font-mono text-3xl font-bold text-white">0</div>
            <div className="mt-2 text-xs text-slate-500">
              {t('dashboard.admin.cards.noActiveThreats')}
            </div>
          </div>
        </div>

        <h2 className="mb-4 text-xl font-bold">{t('dashboard.admin.userManagement')}</h2>
        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-slate-800/50 text-xs font-medium uppercase text-slate-300">
              <tr>
                <th className="px-6 py-4">{t('dashboard.admin.table.user')}</th>
                <th className="px-6 py-4">{t('dashboard.admin.table.role')}</th>
                <th className="px-6 py-4">{t('dashboard.admin.table.status')}</th>
                <th className="px-6 py-4">{t('dashboard.admin.table.action')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr>
                <td className="px-6 py-4 text-white">Demo Admin (You)</td>
                <td className="px-6 py-4">
                  <span className="rounded bg-red-500/10 px-2 py-1 text-xs text-red-400">
                    {t('dashboard.admin.table.admin')}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="rounded bg-green-500/10 px-2 py-1 text-xs text-green-400">
                    {t('dashboard.admin.table.active')}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-[#06b6d4] hover:underline">
                    {t('dashboard.admin.table.edit')}
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-white">user@example.com</td>
                <td className="px-6 py-4">{t('dashboard.admin.table.userLabel')}</td>
                <td className="px-6 py-4">
                  <span className="rounded bg-green-500/10 px-2 py-1 text-xs text-green-400">
                    {t('dashboard.admin.table.active')}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-[#06b6d4] hover:underline">
                    {t('dashboard.admin.table.edit')}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
