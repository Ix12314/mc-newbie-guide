import { ArrowUpRight, MessageSquare, User, Clock } from 'lucide-react';
import type { NewsItem } from '@/types/news';

interface Props {
  item: NewsItem;
  index: number;
}

export default function NewsCard({ item, index }: Props) {
  const hnUrl = `https://news.ycombinator.com/item?id=${item.id}`;

  return (
    <article className="group grid grid-cols-[auto_1fr] gap-4 border-b border-zinc-100 py-6 transition-colors hover:bg-zinc-50/60 dark:border-zinc-800 dark:hover:bg-zinc-900/40 sm:grid-cols-[4rem_1fr] sm:gap-7">
      <div className="font-serif text-3xl font-light text-zinc-300 dark:text-zinc-700 sm:text-4xl">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="min-w-0">
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
          <h3 className="text-base font-semibold leading-snug text-zinc-900 transition-colors group-hover:text-amber-600 dark:text-zinc-100 dark:group-hover:text-amber-400 sm:text-lg">
            {item.title}
            <ArrowUpRight className="ml-1.5 inline-block h-4 w-4 opacity-0 transition-opacity group-hover:opacity-60" />
          </h3>
        </a>
        {item.domain && (
          <div className="mt-1 text-[11px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            {item.domain}
          </div>
        )}
        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-zinc-500 dark:text-zinc-400">
          <span className="inline-flex items-center gap-1">
            <span className="font-medium text-amber-600 dark:text-amber-400">{item.score}</span>
            <span>points</span>
          </span>
          <span className="inline-flex items-center gap-1">
            <User className="h-3 w-3" />
            {item.by}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {item.timeLabel}
          </span>
          <a
            href={hnUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-zinc-500 transition-colors hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400"
          >
            <MessageSquare className="h-3 w-3" />
            {item.commentsCount} 评论
          </a>
        </div>
      </div>
    </article>
  );
}
