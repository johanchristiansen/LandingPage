import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage('id')}
        className={`text-sm font-medium transition-colors ${
          i18n.language === 'id' ? 'text-[#06b6d4]' : 'text-slate-400 hover:text-white'
        }`}
      >
        ID
      </button>
      <span className="text-slate-600">|</span>
      <button
        onClick={() => changeLanguage('en')}
        className={`text-sm font-medium transition-colors ${
          i18n.language === 'en' ? 'text-[#06b6d4]' : 'text-slate-400 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
}
