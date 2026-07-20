import { useMemo, useState } from 'react';
import {
  Flame,
  Sparkles,
  Briefcase,
  RefreshCw,
  AlertCircle,
  Loader2,
  TrendingUp,
  Database,
  Shield,
  Users,
  MessageSquare,
} from 'lucide-react';
import { useStories } from '@/hooks/useStories';
import type { MoreTab } from '@/types/news';
import NewsCard from '@/components/NewsCard';
import NewsCardSkeleton from '@/components/NewsCardSkeleton';
import StatCard from '@/components/StatCard';
import BackToTop from '@/components/BackToTop';

const tabs: { key: MoreTab; label: string; icon: typeof Flame; desc: string }[] = [
  { key: 'top', label: '热门', icon: Flame, desc: '当下最受关注的故事' },
  { key: 'show', label: 'Show HN', icon: Sparkles, desc: '社区作品与项目展示' },
  { key: 'job', label: '招聘', icon: Briefcase, desc: 'YC 招聘信息' },
];

function formatTime(d: Date): string {
  const h = String(d.getHours()).padStart(2, '0');
  const m = String(d.getMinutes()).padStart(2, '0');
  return `${h}:${m}`;
}

export default function More() {
  const [tab, setTab] = useState<MoreTab>('top');
  const { items, loading, loadingMore, error, hasMore, lastUpdated, refresh, loadMore } =
    useStories(tab);

  const stats = useMemo(() => {
    if (items.length === 0) return { max: 0, avg: 0, comments: 0, authors: 0 };
    const scores = items.map((i) => i.score);
    const comments = items.reduce((s, i) => s + i.commentsCount, 0);
    const authors = new Set(items.map((i) => i.by)).size;
    return {
      max: Math.max(...scores),
      avg: Math.round(scores.reduce((s, v) => s + v, 0) / scores.length),
      comments,
      authors,
    };
  }, [items]);

  const activeTab = tabs.find((t) => t.key === tab)!;

  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-28">
      <BackToTop />

      {/* Header */}
      <header className="mb-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:text-emerald-400">
          <Database className="h-3 w-3" />
          多源数据视图
        </div>
        <h1 className="font-serif text-5xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl">
          更多
        </h1>
        <p className="mt-3 max-w-2xl text-base text-zinc-500 dark:text-zinc-400">
          探索更多 Hacker News 实时数据：热门作品、社区分享、招聘机会，附统计仪表盘。
        </p>
      </header>

      {/* Stats dashboard */}
      <section className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard
          label="最高得分"
          value={stats.max}
          accent="amber"
          icon={<TrendingUp className="h-4 w-4" />}
        />
        <StatCard
          label="平均得分"
          value={stats.avg}
          accent="emerald"
          icon={<Sparkles className="h-4 w-4" />}
        />
        <StatCard
          label="评论总数"
          value={stats.comments}
          icon={<MessageSquare className="h-4 w-4" />}
        />
        <StatCard label="独立作者" value={stats.authors} icon={<Users className="h-4 w-4" />} />
      </section>

      {/* Tabs */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-3 dark:border-zinc-800">
        <div className="flex flex-wrap items-center gap-2">
          {tabs.map((t) => {
            const Icon = t.icon;
            const isActive = t.key === tab;
            return (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                    : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {t.label}
              </button>
            );
          })}
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

      <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
        {activeTab.desc} ·{' '}
        {lastUpdated ? `最后刷新 ${formatTime(lastUpdated)}` : '加载中…'}
      </p>

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
      ) : items.length === 0 ? (
        <div className="py-20 text-center">
          <div className="font-serif text-2xl text-zinc-400 dark:text-zinc-600">暂无数据</div>
        </div>
      ) : (
        <div>
          {items.map((item, i) => (
            <NewsCard key={item.id} item={item} index={i} />
          ))}
        </div>
      )}

      {/* Load more */}
      {!loading && items.length > 0 && hasMore && (
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

      {/* Data source info */}
      <section className="mt-20 rounded-2xl border border-zinc-100 bg-zinc-50/50 p-6 dark:border-zinc-800 dark:bg-zinc-900/30 sm:p-8">
        <div className="mb-4 flex items-center gap-2">
          <Shield className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          <h2 className="font-serif text-2xl font-medium text-zinc-900 dark:text-zinc-100">
            数据来源与隐私
          </h2>
        </div>
        <div className="grid gap-6 text-sm text-zinc-600 dark:text-zinc-400 sm:grid-cols-3">
          <div>
            <div className="mb-1 font-medium text-zinc-900 dark:text-zinc-100">API</div>
            <code className="break-all text-xs">hacker-news.firebaseio.com/v0</code>
            <p className="mt-2 text-xs">公开、免 Key、CORS 启用</p>
          </div>
          <div>
            <div className="mb-1 font-medium text-zinc-900 dark:text-zinc-100">更新机制</div>
            <p className="text-xs">手动点击刷新按钮触发重新拉取，每次取 20 条增量加载。</p>
          </div>
          <div>
            <div className="mb-1 font-medium text-zinc-900 dark:text-zinc-100">隐私</div>
            <p className="text-xs">无后端、无追踪、无 Cookie，纯前端直连公开数据。</p>
          </div>
        </div>
      </section>
    </div>
  );
}
