import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in real app, validate with backend
    // For demo purposes, if email contains 'admin', log in as admin
    const role = email.includes('admin') ? 'admin' : 'user';
    login(email, role);

    if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#020617] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <Link to="/" className="flex items-center text-sm text-slate-400 hover:text-[#06b6d4]">
            <ArrowLeft className="mr-2 h-4 w-4" /> {t('auth.signin.backToHome')}
          </Link>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
            {t('auth.signin.title')}
          </h2>
          <p className="mt-2 text-center text-sm text-slate-400">
            {t('auth.signin.subtitlePrefix')}{' '}
            <Link to="/signup" className="font-medium text-[#06b6d4] hover:text-[#0891b2]">
              {t('auth.signin.subtitleLink')}
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                {t('auth.signin.emailLabel')}
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full rounded-t-md border border-slate-700 bg-slate-800 px-3 py-2 text-white placeholder-slate-400 focus:z-10 focus:border-[#06b6d4] focus:outline-none focus:ring-[#06b6d4] sm:text-sm"
                placeholder={t('auth.signin.emailLabel')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                {t('auth.signin.passwordLabel')}
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full rounded-b-md border border-slate-700 bg-slate-800 px-3 py-2 text-white placeholder-slate-400 focus:z-10 focus:border-[#06b6d4] focus:outline-none focus:ring-[#06b6d4] sm:text-sm"
                placeholder={t('auth.signin.passwordLabel')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-700 bg-slate-800 text-[#06b6d4] focus:ring-[#06b6d4]"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-400">
                {t('auth.signin.rememberMe')}
              </label>
            </div>

            <div className="text-sm">
              <button
                type="button"
                className="cursor-pointer border-none bg-none p-0 font-medium text-[#06b6d4] hover:text-[#0891b2]"
              >
                {t('auth.signin.forgotPassword')}
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#06b6d4] px-4 py-2 text-sm font-medium text-white hover:bg-[#0891b2] focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              {t('auth.signin.signInButton')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
