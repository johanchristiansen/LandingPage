import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signup
    login(email, 'user');
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#020617] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <Link to="/" className="flex items-center text-sm text-slate-400 hover:text-[#06b6d4]">
            <ArrowLeft className="mr-2 h-4 w-4" /> {t('auth.signup.backToHome')}
          </Link>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
            {t('auth.signup.title')}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="name" className="sr-only">
                {t('auth.signup.nameLabel')}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="relative block w-full rounded-t-md border border-slate-700 bg-slate-800 px-3 py-2 text-white placeholder-slate-400 focus:z-10 focus:border-[#06b6d4] focus:outline-none focus:ring-[#06b6d4] sm:text-sm"
                placeholder={t('auth.signup.nameLabel')}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                {t('auth.signup.emailLabel')}
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="relative block w-full border border-t-0 border-slate-700 bg-slate-800 px-3 py-2 text-white placeholder-slate-400 focus:z-10 focus:border-[#06b6d4] focus:outline-none focus:ring-[#06b6d4] sm:text-sm"
                placeholder={t('auth.signup.emailLabel')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                {t('auth.signup.passwordLabel')}
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full rounded-b-md border border-t-0 border-slate-700 bg-slate-800 px-3 py-2 text-white placeholder-slate-400 focus:z-10 focus:border-[#06b6d4] focus:outline-none focus:ring-[#06b6d4] sm:text-sm"
                placeholder={t('auth.signup.passwordLabel')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#06b6d4] px-4 py-2 text-sm font-medium text-white hover:bg-[#0891b2] focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              {t('auth.signup.signUpButton')}
            </button>
          </div>
          <div className="text-center text-sm">
            <span className="text-slate-400">{t('auth.signup.alreadyHaveAccount')} </span>
            <Link to="/signin" className="font-medium text-[#06b6d4] hover:text-[#0891b2]">
              {t('auth.signup.signInLink')}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
