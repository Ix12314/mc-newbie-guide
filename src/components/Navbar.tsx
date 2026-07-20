import { Link, useLocation } from 'react-router-dom';
import { Newspaper, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const navItems = [
  { path: '/news', label: '新闻' },
  { path: '/more', label: '更多' },
];

export default function Navbar() {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const isActive = (path: string) =>
    location.pathname === path ||
    (path === '/news' && (location.pathname === '/' || location.pathname === ''));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur-xl dark:border-zinc-800/60 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link to="/news" className="flex items-center gap-2 transition-opacity hover:opacity-70">
          <Newspaper className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          <span className="font-serif text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            实时讯
          </span>
        </Link>
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                isActive(item.path)
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                  : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="切换主题"
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-all hover:bg-zinc-200 hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
