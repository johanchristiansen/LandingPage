import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { LanguageSwitcher } from '../../app/components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  title?: string;
  children?: React.ReactNode;
}

export const Header = ({ title, children }: HeaderProps) => {
  const { user } = useAuth();
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-10 flex h-20 shrink-0 items-center justify-between border-b border-[#06b6d4]/10 bg-[#020617]/80 px-8 backdrop-blur-md">
      <div className="flex items-center gap-4">
        {children || <h1 className="text-xl font-bold tracking-tight text-white">{title}</h1>}
      </div>

      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="group relative hidden lg:block">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search
              size={16}
              className="text-slate-500 transition-colors group-focus-within:text-[#06b6d4]"
            />
          </div>
          <input
            type="text"
            placeholder={t('dashboard.common.searchPlaceholder')}
            className="w-64 rounded-full border border-slate-800 bg-[#020617] py-2 pl-10 pr-4 text-sm text-slate-300 placeholder:text-slate-600 focus:border-[#06b6d4]/50 focus:outline-none focus:ring-1 focus:ring-[#06b6d4]/50"
          />
        </div>

        <LanguageSwitcher />

        {/* Notifications */}
        <button className="relative rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-[#06b6d4]">
          <Bell size={20} />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full border-2 border-[#020617] bg-emerald-500" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 border-l border-slate-800 pl-6">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-medium text-slate-200">{user?.name || 'User'}</p>
            <p className="text-xs capitalize text-slate-500">{user?.role || 'Guest'}</p>
          </div>
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-slate-700 bg-slate-800 ring-2 ring-transparent transition-all hover:ring-[#06b6d4]/50">
            <User size={20} className="text-slate-400" />
          </div>
        </div>
      </div>
    </header>
  );
};
