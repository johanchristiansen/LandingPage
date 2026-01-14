import React from 'react';
import { useTranslation } from 'react-i18next';

export const DashboardFooter = () => {
  const { t } = useTranslation();
  return (
    <footer className="px-4 py-6 text-xs md:px-8 md:text-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-slate-500 md:flex-row">
        <p className="text-center md:text-left">
          {t('dashboard.footer.rights', { year: new Date().getFullYear() })}
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <button className="transition-colors hover:text-[#06b6d4]">
            {t('dashboard.footer.privacy')}
          </button>
          <button className="transition-colors hover:text-[#06b6d4]">
            {t('dashboard.footer.terms')}
          </button>
          <button className="transition-colors hover:text-[#06b6d4]">
            {t('dashboard.footer.support')}
          </button>
        </div>
      </div>
    </footer>
  );
};
