import React, { useState } from 'react';
import { Sidebar, SidebarItem } from './Sidebar';
import { Header } from './Header';
import { DashboardFooter } from './DashboardFooter';

interface DashboardLayoutProps {
  children: React.ReactNode;
  sidebarItems: SidebarItem[];
  activeTab: string;
  setActiveTab: (id: string) => void;
  headerTitle?: string;
  sidebarTitle?: string;
  headerContent?: React.ReactNode;
}

export const DashboardLayout = ({
  children,
  sidebarItems,
  activeTab,
  setActiveTab,
  headerTitle,
  sidebarTitle,
  headerContent,
}: DashboardLayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#020617] font-sans text-slate-200">
      {/* Sidebar with mobile toggle state */}
      <Sidebar
        items={sidebarItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        title={sidebarTitle}
        isMobileOpen={isMobileMenuOpen}
        onMobileClose={() => setIsMobileMenuOpen(false)}
      />

      <div className="relative flex h-full flex-1 flex-col overflow-hidden">
        {/* Background Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 h-96 w-full -translate-y-1/2 rounded-full bg-[#06b6d4]/5 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-full translate-y-1/2 rounded-full bg-emerald-500/5 blur-[100px]" />

        <Header 
          title={headerTitle} 
          onMenuClick={() => setIsMobileMenuOpen(true)}
        >
          {headerContent}
        </Header>

        <main className="custom-scrollbar z-0 flex flex-1 flex-col overflow-y-auto">
          <div className="flex-1">{children}</div>
          <div className="mt-auto border-t border-[#06b6d4]/10 bg-[#020617]/50">
            <DashboardFooter />
          </div>
        </main>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          />
        )}
      </div>
    </div>
  );
};
