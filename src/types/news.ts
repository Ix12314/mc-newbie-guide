export type NewsCategory = 'top' | 'new' | 'best';
export type MoreTab = 'top' | 'show' | 'job';

export interface HNStory {
  id: number;
  title: string;
  url?: string;
  text?: string;
  by: string;
  score: number;
  descendants?: number;
  time: number;
  type: 'story' | 'job' | 'comment' | 'poll' | 'pollopt';
  kids?: number[];
}

export interface NewsItem {
  id: number;
  title: string;
  url: string;
  domain: string;
  by: string;
  score: number;
  commentsCount: number;
  time: number;
  timeLabel: string;
  type: 'story' | 'job';
}
