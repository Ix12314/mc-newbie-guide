import type { ReactNode } from 'react';

interface Props {
  label: string;
  value: ReactNode;
  accent?: 'amber' | 'emerald' | 'zinc';
  icon?: ReactNode;
}

const accentMap = {
  amber: 'text-amber-600 dark:text-amber-400',
  emerald: 'text-emerald-600 dark:text-emerald-400',
  zinc: 'text-zinc-900 dark:text-zinc-100',
};

export default function StatCard({ label, value, accent = 'zinc', icon }: Props) {
  return (
    <div className="rounded-2xl border border-zinc-100 bg-white p-5 transition-colors dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
      <div className="flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          {label}
        </span>
        {icon && <span className="text-zinc-300 dark:text-zinc-700">{icon}</span>}
      </div>
      <div className={`mt-3 font-serif text-3xl font-light sm:text-4xl ${accentMap[accent]}`}>
        {value}
      </div>
    </div>
  );
}
