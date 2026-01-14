import React from 'react';
import { Edit2, Trash2, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const users = [
  {
    id: 'USR-8921',
    name: 'Alice Freeman',
    plan: 'Enterprise',
    status: 'Active',
    lastLogin: '2024-03-10 14:22',
    email: 'alice@corp.inc',
  },
  {
    id: 'USR-8922',
    name: 'Bob Smith',
    plan: 'Pro',
    status: 'Suspended',
    lastLogin: '2024-03-09 09:15',
    email: 'bob@agency.dev',
  },
  {
    id: 'USR-8923',
    name: 'Charlie Davis',
    plan: 'Starter',
    status: 'Active',
    lastLogin: '2024-03-10 11:05',
    email: 'charlie@indie.io',
  },
  {
    id: 'USR-8924',
    name: 'Diana Prince',
    plan: 'Enterprise',
    status: 'Active',
    lastLogin: '2024-03-10 16:45',
    email: 'diana@amazon.com',
  },
  {
    id: 'USR-8925',
    name: 'Evan Wright',
    plan: 'Pro',
    status: 'Active',
    lastLogin: '2024-03-08 10:30',
    email: 'evan@writer.net',
  },
  {
    id: 'USR-8926',
    name: 'Fiona Gallagher',
    plan: 'Starter',
    status: 'Suspended',
    lastLogin: '2024-02-28 19:20',
    email: 'fiona@chi.gov',
  },
  {
    id: 'USR-8927',
    name: 'George Martin',
    plan: 'Enterprise',
    status: 'Active',
    lastLogin: '2024-03-10 08:00',
    email: 'george@thrones.org',
  },
];

export function UserTable() {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800 shadow-lg">
      <div className="flex items-center justify-between border-b border-slate-700 p-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
          {t('dashboard.admin.userManagement')}
        </h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder={t('dashboard.common.searchPlaceholder')}
            className="w-64 rounded border border-slate-700 bg-slate-900 px-3 py-1.5 font-mono text-sm text-slate-300 transition-colors focus:border-cyan-500 focus:outline-none"
          />
          <button className="rounded bg-cyan-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-cyan-500">
            {t('dashboard.admin.addUser')}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-slate-900/50 font-mono text-xs uppercase tracking-wider text-slate-400">
              <th className="border-b border-slate-700 p-4 font-medium">
                {t('dashboard.admin.table.columns.user')}
              </th>
              <th className="border-b border-slate-700 p-4 font-medium">
                {t('dashboard.admin.table.columns.plan')}
              </th>
              <th className="border-b border-slate-700 p-4 font-medium">
                {t('dashboard.admin.table.columns.status')}
              </th>
              <th className="border-b border-slate-700 p-4 font-medium">
                {t('dashboard.admin.table.columns.lastLogin')}
              </th>
              <th className="border-b border-slate-700 p-4 text-right font-medium">
                {t('dashboard.admin.table.columns.actions')}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {users.map((user) => (
              <tr key={user.id} className="group transition-colors hover:bg-slate-700/30">
                <td className="p-4">
                  <div className="flex flex-col">
                    <span className="font-medium text-slate-200">{user.name}</span>
                    <span className="font-mono text-xs text-slate-500">
                      {user.id} • {user.email}
                    </span>
                  </div>
                </td>
                <td className="p-4">
                  <span
                    className={`rounded border px-2 py-1 text-xs font-medium ${
                      user.plan === 'Enterprise'
                        ? 'border-purple-800 bg-purple-900/30 text-purple-300'
                        : user.plan === 'Pro'
                        ? 'border-blue-800 bg-blue-900/30 text-blue-300'
                        : 'border-slate-600 bg-slate-700 text-slate-300'
                    }`}
                  >
                    {user.plan === 'Enterprise' && t('dashboard.admin.table.plans.enterprise')}
                    {user.plan === 'Pro' && t('dashboard.admin.table.plans.pro')}
                    {user.plan === 'Starter' && t('dashboard.admin.table.plans.starter')}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    {user.status === 'Active' ? (
                      <CheckCircle size={14} className="text-emerald-500" />
                    ) : (
                      <AlertCircle size={14} className="text-red-500" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        user.status === 'Active' ? 'text-emerald-400' : 'text-red-400'
                      }`}
                    >
                      {user.status === 'Active'
                        ? t('dashboard.admin.table.active')
                        : t('dashboard.admin.table.suspended')}
                    </span>
                  </div>
                </td>
                <td className="p-4 font-mono text-sm text-slate-400">{user.lastLogin}</td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-60 transition-opacity group-hover:opacity-100">
                    <button
                      className="rounded p-1.5 text-slate-400 transition-colors hover:bg-slate-700 hover:text-cyan-400"
                      title={t('dashboard.admin.table.edit')}
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      className="rounded p-1.5 text-slate-400 transition-colors hover:bg-slate-700 hover:text-red-400"
                      title={t('dashboard.admin.table.action')}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between border-t border-slate-700 bg-slate-900/30 p-3 font-mono text-xs text-slate-500">
        <span>Showing 7 of 142 users</span>
        <div className="flex gap-2">
          <span className="cursor-pointer hover:text-cyan-400">Previous</span>
          <span className="text-slate-300">1</span>
          <span className="cursor-pointer hover:text-cyan-400">2</span>
          <span className="cursor-pointer hover:text-cyan-400">3</span>
          <span className="cursor-pointer hover:text-cyan-400">Next</span>
        </div>
      </div>
    </div>
  );
}
