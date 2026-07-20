import { ExternalLink, Globe, Users, Wrench, Tv } from 'lucide-react';
import { links, linkCategories, type LinkItem } from '@/data/links';

const categoryIcons: Record<LinkItem['category'], typeof Globe> = {
  official: Globe,
  community: Users,
  tools: Wrench,
  media: Tv,
};

const categoryColors: Record<LinkItem['category'], string> = {
  official: 'bg-emerald-50 text-emerald-600',
  community: 'bg-sky-50 text-sky-600',
  tools: 'bg-amber-50 text-amber-600',
  media: 'bg-purple-50 text-purple-600',
};

export default function Links() {
  const categoryKeys = Object.keys(linkCategories) as LinkItem['category'][];

  return (
    <div className="min-h-screen bg-zinc-50 pt-14 dark:bg-black">
      {/* Header */}
      <section className="bg-gradient-to-b from-white to-zinc-50 pb-12 pt-16 dark:from-zinc-950 dark:to-black">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            鏇村閾炬帴
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400">
            绮鹃€?Minecraft 绀惧尯璧勬簮銆佸伐鍏峰拰璧勮娓犻亾
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl space-y-16 px-6">
          {categoryKeys.map((catKey) => {
            const catInfo = linkCategories[catKey];
            const catLinks = links.filter((l) => l.category === catKey);
            const Icon = categoryIcons[catKey];
            return (
              <div key={catKey}>
                <div className="mb-8 flex items-center gap-3">
                  <div className={`inline-flex rounded-xl p-2.5 ${categoryColors[catKey]}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{catInfo.label}</h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{catInfo.description}</p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {catLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between gap-4 rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-black/30"
                    >
                      <div className="flex-1">
                        <h3 className="mb-1 font-semibold text-zinc-900 transition-colors group-hover:text-emerald-600 dark:text-zinc-100 dark:group-hover:text-emerald-400">
                          {link.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                          {link.description}
                        </p>
                      </div>
                      <ExternalLink className="mt-1 h-4 w-4 flex-shrink-0 text-zinc-300 transition-colors group-hover:text-emerald-500 dark:text-zinc-600 dark:group-hover:text-emerald-400" />
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
