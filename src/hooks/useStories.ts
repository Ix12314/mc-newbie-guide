import { useCallback, useEffect, useRef, useState } from 'react';
import type { NewsItem, NewsCategory, MoreTab } from '@/types/news';
import { fetchStories, fetchStoryIds, fetchMoreStoryIds } from '@/lib/hn';

const PAGE_SIZE = 20;

export interface UseStoriesResult {
  items: NewsItem[];
  loading: boolean;
  loadingMore: boolean;
  error: string | null;
  hasMore: boolean;
  lastUpdated: Date | null;
  refresh: () => void;
  loadMore: () => void;
}

async function fetchIdsFor(kind: NewsCategory | MoreTab): Promise<number[]> {
  if (kind === 'top' || kind === 'new' || kind === 'best') {
    return fetchStoryIds(kind);
  }
  return fetchMoreStoryIds(kind);
}

export function useStories(kind: NewsCategory | MoreTab): UseStoriesResult {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const allIdsRef = useRef<number[]>([]);
  const cursorRef = useRef(0);
  const reqIdRef = useRef(0);

  const loadBatch = useCallback(async (start: number): Promise<NewsItem[]> => {
    const ids = allIdsRef.current.slice(start, start + PAGE_SIZE);
    if (ids.length === 0) return [];
    return fetchStories(ids);
  }, []);

  const initialFetch = useCallback(async () => {
    const myReqId = ++reqIdRef.current;
    setLoading(true);
    setError(null);
    try {
      const ids = await fetchIdsFor(kind);
      if (myReqId !== reqIdRef.current) return;
      allIdsRef.current = ids;
      cursorRef.current = 0;
      const first = await loadBatch(0);
      if (myReqId !== reqIdRef.current) return;
      setItems(first);
      cursorRef.current = first.length;
      setHasMore(cursorRef.current < allIdsRef.current.length);
      setLastUpdated(new Date());
    } catch (e) {
      if (myReqId !== reqIdRef.current) return;
      setError(e instanceof Error ? e.message : '加载失败');
    } finally {
      if (myReqId === reqIdRef.current) setLoading(false);
    }
  }, [kind, loadBatch]);

  const loadMore = useCallback(async () => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    try {
      const more = await loadBatch(cursorRef.current);
      setItems((prev) => [...prev, ...more]);
      cursorRef.current += more.length;
      setHasMore(cursorRef.current < allIdsRef.current.length);
    } catch (e) {
      setError(e instanceof Error ? e.message : '加载更多失败');
    } finally {
      setLoadingMore(false);
    }
  }, [loadBatch, loadingMore, hasMore]);

  useEffect(() => {
    initialFetch();
  }, [initialFetch]);

  return {
    items,
    loading,
    loadingMore,
    error,
    hasMore,
    lastUpdated,
    refresh: initialFetch,
    loadMore,
  };
}
