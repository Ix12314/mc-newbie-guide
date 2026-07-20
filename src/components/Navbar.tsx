import { Link, useLocation } from 'react-router-dom';
import { Pickaxe, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const navItems = [
  { path: '/', label: '棣栭〉' },
  { path: '/tutorials', label: '鏁欑▼' },
  { path: '/links', label: '鏇村閾炬帴' },
];

export default function Navbar() {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/60 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/70">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-70">
          <Pickaxe className="h-6 w-6 text-emerald-500" />
          <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            MC 鏂版墜鎸囧崡
          </span>
        </Link>
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                    : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <button
            onClick={toggleTheme}
            aria-label="鍒囨崲涓婚"
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-all hover:bg-zinc-200 hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
