import type { HNStory, NewsItem, NewsCategory, MoreTab } from '@/types/news';

const BASE = 'https://hacker-news.firebaseio.com/v0';

const categoryEndpoint: Record<NewsCategory, string> = {
  top: `${BASE}/topstories.json`,
  new: `${BASE}/newstories.json`,
  best: `${BASE}/beststories.json`,
};

const moreEndpoint: Record<MoreTab, string> = {
  top: `${BASE}/topstories.json`,
  show: `${BASE}/showstories.json`,
  job: `${BASE}/jobstories.json`,
};

export async function fetchStoryIds(category: NewsCategory): Promise<number[]> {
  const res = await fetch(categoryEndpoint[category]);
  if (!res.ok) throw new Error(`Failed to fetch ${category} stories: ${res.status}`);
  return res.json();
}

export async function fetchMoreStoryIds(tab: MoreTab): Promise<number[]> {
  const res = await fetch(moreEndpoint[tab]);
  if (!res.ok) throw new Error(`Failed to fetch ${tab} stories: ${res.status}`);
  return res.json();
}

export async function fetchStory(id: number): Promise<HNStory | null> {
  const res = await fetch(`${BASE}/item/${id}.json`);
  if (!res.ok) return null;
  return res.json();
}

export async function fetchStories(ids: number[]): Promise<NewsItem[]> {
  const stories = await Promise.all(ids.map(fetchStory));
  return stories
    .filter((s): s is HNStory => s !== null)
    .map(transformStory)
    .filter((s): s is NewsItem => s !== null);
}

function transformStory(s: HNStory): NewsItem | null {
  const url = s.url || `https://news.ycombinator.com/item?id=${s.id}`;
  const domain = s.url ? extractDomain(s.url) : 'news.ycombinator.com';
  return {
    id: s.id,
    title: s.title,
    url,
    domain,
    by: s.by,
    score: s.score,
    commentsCount: s.descendants ?? 0,
    time: s.time,
    timeLabel: formatRelativeTime(s.time),
    type: s.type === 'job' ? 'job' : 'story',
  };
}

function extractDomain(url: string): string {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

export function formatRelativeTime(unixSeconds: number): string {
  const now = Date.now() / 1000;
  const diff = Math.max(0, now - unixSeconds);
  if (diff < 60) return '刚刚';
  if (diff < 3600) return `${Math.floor(diff / 60)} 分钟前`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} 小时前`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} 天前`;
  const d = new Date(unixSeconds * 1000);
  return `${d.getMonth() + 1}月${d.getDate()}日`;
}
