import React from 'react';
import { useTranslation } from 'react-i18next';

export const DashboardFooter = () => {
  const { t } = useTranslation();
  return (
    <footer className="px-8 py-6 text-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-slate-500 md:flex-row">
        <p>{t('dashboard.footer.rights', { year: new Date().getFullYear() })}</p>
        <div className="flex gap-6">
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
