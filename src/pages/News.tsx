import { useMemo, useState } from 'react';
import {
  Search,
  RefreshCw,
  AlertCircle,
  Loader2,
  TrendingUp,
  Clock,
  Flame,
  Star,
} from 'lucide-react';
import { useStories } from '@/hooks/useStories';
import type { NewsCategory } from '@/types/news';
import NewsCard from '@/components/NewsCard';
import NewsCardSkeleton from '@/components/NewsCardSkeleton';

const categories: { key: NewsCategory; label: string; icon: typeof TrendingUp }[] = [
  { key: 'top', label: '热门', icon: Flame },
  { key: 'new', label: '最新', icon: Clock },
  { key: 'best', label: '最佳', icon: Star },
];

function formatTime(d: Date): string {
  const h = String(d.getHours()).padStart(2, '0');
  const m = String(d.getMinutes()).padStart(2, '0');
  return `${h}:${m}`;
}

export default function News() {
  const [category, setCategory] = useState<NewsCategory>('top');
  const [query, setQuery] = useState('');
  const { items, loading, loadingMore, error, hasMore, lastUpdated, refresh, loadMore } =
    useStories(category);

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.trim().toLowerCase();
    return items.filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        i.domain.toLowerCase().includes(q) ||
        i.by.toLowerCase().includes(q),
    );
  }, [items, query]);

  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-28">
      {/* Header */}
      <header className="mb-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-400">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-500" />
          </span>
          LIVE · 实时数据
        </div>
        <h1 className="font-serif text-5xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl">
          实时新闻
        </h1>
        <p className="mt-3 max-w-2xl text-base text-zinc-500 dark:text-zinc-400">
          来自 Hacker News 的实时技术圈资讯流，数据每隔数分钟更新。
        </p>
      </header>

      {/* Status bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-y border-zinc-100 py-3 dark:border-zinc-800">
        <div className="text-xs text-zinc-500 dark:text-zinc-400">
          数据源 · Hacker News API ·
          {lastUpdated ? (
            <span className="ml-1">最后刷新 {formatTime(lastUpdated)}</span>
          ) : (
            <span className="ml-1">加载中…</span>
          )}
        </div>
        <button
          onClick={refresh}
          disabled={loading}
          className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 transition-all hover:border-zinc-300 hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
        >
          <RefreshCw className={`h-3 w-3 ${loading ? 'animate-spin' : ''}`} />
          刷新
        </button>
      </div>

      {/* Category tabs + search */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.key === category;
            return (
              <button
                key={cat.key}
                onClick={() => setCategory(cat.key)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                    : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {cat.label}
              </button>
            );
          })}
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索标题、域名、作者…"
            className="w-full rounded-full border border-zinc-200 bg-white py-2 pl-9 pr-4 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500"
          />
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <div>
            <div className="font-medium">加载失败</div>
            <div className="text-xs opacity-80">{error}</div>
          </div>
          <button
            onClick={refresh}
            className="ml-auto rounded-full bg-red-600 px-3 py-1 text-xs font-medium text-white hover:bg-red-700"
          >
            重试
          </button>
        </div>
      )}

      {/* List */}
      {loading ? (
        <div>
          {Array.from({ length: 8 }).map((_, i) => (
            <NewsCardSkeleton key={i} />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="py-20 text-center">
          <div className="font-serif text-2xl text-zinc-400 dark:text-zinc-600">没有匹配的结果</div>
          <div className="mt-2 text-sm text-zinc-500">试试别的关键词或切换分类</div>
        </div>
      ) : (
        <div>
          {filtered.map((item, i) => (
            <NewsCard key={item.id} item={item} index={i} />
          ))}
        </div>
      )}

      {/* Load more */}
      {!loading && filtered.length > 0 && hasMore && !query && (
        <div className="mt-10 text-center">
          <button
            onClick={loadMore}
            disabled={loadingMore}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-2.5 text-sm font-medium text-zinc-800 transition-all hover:border-zinc-900 hover:bg-zinc-50 disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-800"
          >
            {loadingMore ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                加载中…
              </>
            ) : (
              <>
                <TrendingUp className="h-4 w-4" />
                加载更多
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
