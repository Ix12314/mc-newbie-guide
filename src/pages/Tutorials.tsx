import { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, Clock, Lightbulb, AlertTriangle } from 'lucide-react';
import { tutorials, categoryLabels, difficultyLabels, difficultyColors, type Tutorial } from '@/data/tutorials';

const categories = ['all', ...Object.keys(categoryLabels)] as const;

export default function Tutorials() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return tutorials.filter((t) => {
      const matchSearch =
        search === '' ||
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase());
      const matchCategory = activeCategory === 'all' || t.category === activeCategory;
      return matchSearch && matchCategory;
    });
  }, [search, activeCategory]);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-zinc-50 pt-14 dark:bg-black">
      {/* Header */}
      <section className="bg-gradient-to-b from-white to-zinc-50 pb-8 pt-16 dark:from-zinc-950 dark:to-black">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            鏁欑▼鎸囧崡
          </h1>
          <p className="mb-8 text-lg text-zinc-500 dark:text-zinc-400">
            绯荤粺鍖栫殑 Minecraft 鏁欑▼锛屼粠鍏ラ棬鍒拌繘闃堕€愭鎻愬崌
          </p>

          {/* Search */}
          <div className="relative mb-6 max-w-xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400 dark:text-zinc-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="鎼滅储鏁欑▼..."
              className="w-full rounded-xl border border-zinc-200 bg-white py-3 pl-12 pr-4 text-sm text-zinc-900 shadow-sm outline-none transition-all placeholder:text-zinc-400 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-emerald-500/50 dark:focus:ring-emerald-500/20"
            />
          </div>

          {/* Category Tags */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              const label = cat === 'all' ? '鍏ㄩ儴' : categoryLabels[cat as Tutorial['category']];
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-zinc-900 text-white shadow-sm dark:bg-white dark:text-zinc-900'
                      : 'bg-white text-zinc-600 shadow-sm hover:bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tutorial Cards */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-zinc-400 dark:text-zinc-500">娌℃湁鎵惧埌鍖归厤鐨勬暀绋?/p>
              <button
                onClick={() => {
                  setSearch('');
                  setActiveCategory('all');
                }}
                className="mt-4 text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                娓呴櫎绛涢€?              </button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((tutorial) => {
                const isExpanded = expandedId === tutorial.id;
                return (
                  <div
                    key={tutorial.id}
                    className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900 ${
                      isExpanded
                        ? 'col-span-1 sm:col-span-2 lg:col-span-3 shadow-lg dark:shadow-black/30'
                        : 'hover:-translate-y-1 hover:shadow-md dark:hover:shadow-black/30'
                    }`}
                  >
                    {/* Card Header */}
                    <div
                      onClick={() => toggleExpand(tutorial.id)}
                      className="cursor-pointer"
                    >
                      <div className="relative h-44 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                        <img
                          src={tutorial.image}
                          alt={tutorial.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                          <div className="flex gap-2">
                            <span className="rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-medium text-zinc-700 backdrop-blur-sm">
                              {categoryLabels[tutorial.category]}
                            </span>
                            <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${difficultyColors[tutorial.difficulty]}`}>
                              {difficultyLabels[tutorial.difficulty]}
                            </span>
                          </div>
                          <span className="flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-medium text-zinc-600 backdrop-blur-sm">
                            <Clock className="h-3 w-3" />
                            {tutorial.duration}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start justify-between p-5">
                        <div className="flex-1">
                          <h3 className="mb-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                            {tutorial.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                            {tutorial.description}
                          </p>
                        </div>
                        <button className="ml-4 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700">
                          {isExpanded ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Expanded Steps */}
                    {isExpanded && (
                      <div className="border-t border-zinc-100 px-5 pb-6 pt-4 dark:border-zinc-800">
                        <div className="space-y-5">
                          {tutorial.steps.map((step, i) => (
                            <div key={i} className="flex gap-4">
                              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-bold text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                                {i + 1}
                              </div>
                              <div className="flex-1">
                                <h4 className="mb-1 font-semibold text-zinc-900 dark:text-zinc-100">
                                  {step.title}
                                </h4>
                                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                  {step.content}
                                </p>
                                {step.tip && (
                                  <div className="mt-2 flex items-start gap-2 rounded-lg bg-amber-50 p-3 dark:bg-amber-950/30">
                                    <Lightbulb className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
                                    <span className="text-sm text-amber-800 dark:text-amber-300">{step.tip}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 flex items-center gap-2 rounded-lg bg-sky-50 p-3 dark:bg-sky-950/30">
                          <AlertTriangle className="h-4 w-4 flex-shrink-0 text-sky-500" />
                          <span className="text-sm text-sky-800 dark:text-sky-300">
                            瀹炶返鏄渶濂界殑鑰佸笀锛屽缓璁湪娓告垙涓竟鐪嬫暀绋嬭竟鎿嶄綔銆?                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
