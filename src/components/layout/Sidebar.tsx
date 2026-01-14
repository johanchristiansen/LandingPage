import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export interface SidebarItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

interface SidebarProps {
  items: SidebarItem[];
  activeTab: string;
  setActiveTab: (id: string) => void;
  title?: string;
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

export const Sidebar = ({ 
  items, 
  activeTab, 
  setActiveTab, 
  title = 'IoT Nexus',
  isMobileOpen,
  onMobileClose
}: SidebarProps) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { t } = useTranslation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    if (onMobileClose) onMobileClose();
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 flex h-full flex-col border-r border-[#06b6d4]/10 bg-[#020617]/95 text-slate-300 backdrop-blur-xl transition-all duration-300 lg:relative ${
        isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      } ${isCollapsed ? 'lg:w-20' : 'lg:w-64'} w-64`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-4 top-1/2 z-50 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-400 shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-all hover:bg-slate-700 hover:text-white hover:ring-2 hover:ring-[#06b6d4]/20 lg:flex"
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      <div className={`flex items-center gap-3 p-6 ${isCollapsed ? 'lg:justify-center lg:px-2' : ''}`}>
        <Link to="/" className="flex items-center gap-2 overflow-hidden">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#06b6d4] to-[#0891b2] font-mono text-sm text-white">
            NT
          </div>
          <span className={`whitespace-nowrap bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-xl font-bold text-transparent ${isCollapsed ? 'lg:hidden' : 'block'}`}>
            {title}
          </span>
        </Link>
      </div>

      <nav className="flex-1 space-y-2 px-3 py-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleTabClick(item.id)}
            title={isCollapsed ? item.label : ''}
            className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200 ${
              activeTab === item.id
                ? 'border border-[#06b6d4]/20 bg-[#06b6d4]/5 text-[#06b6d4] shadow-[0_0_20px_rgba(6,182,212,0.1)]'
                : 'hover:bg-slate-800/50 hover:text-slate-100'
            } ${isCollapsed ? 'lg:justify-center' : ''}`}
          >
            <item.icon
              size={20}
              className={`shrink-0 transition-colors ${
                activeTab === item.id
                  ? 'text-[#06b6d4]'
                  : 'text-slate-400 group-hover:text-slate-100'
              }`}
            />
            <span className={`font-medium ${isCollapsed ? 'lg:hidden' : 'block'}`}>
              {item.label}
            </span>
            {!isCollapsed && activeTab === item.id && (
              <div className="ml-auto hidden h-1.5 w-1.5 rounded-full bg-[#06b6d4] shadow-[0_0_10px_rgba(34,211,238,1)] lg:block" />
            )}
          </button>
        ))}
      </nav>

      <div className="border-t border-[#06b6d4]/10 p-4">
        <button
          onClick={handleLogout}
          title={isCollapsed ? t('dashboard.common.signOut') : ''}
          className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-slate-400 transition-colors hover:bg-slate-800/50 hover:text-rose-400 ${
            isCollapsed ? 'lg:justify-center' : ''
          }`}
        >
          <LogOut size={20} />
          <span className={`font-medium ${isCollapsed ? 'lg:hidden' : 'block'}`}>
            {t('dashboard.common.signOut')}
          </span>
        </button>
      </div>
    </div>
  );
};
