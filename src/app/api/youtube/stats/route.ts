import { NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/auth';

const CHANNEL_HANDLE = '@memeherdrzebenelemma';
const CHANNEL_URL = 'https://youtube.com/@memeherdrzebenelemma';

async function fetchJson(url: string) {
  const response = await fetch(url, { next: { revalidate: 900 } });
  if (!response.ok) return null;
  return response.json();
}

async function fetchYoutubeStats() {
  const key = process.env.YOUTUBE_API_KEY || process.env.GOOGLE_API_KEY || process.env.GOOGLE_TRANSLATE_API_KEY || process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return null;

  const searchParams = new URLSearchParams({ part: 'snippet', type: 'channel', q: CHANNEL_HANDLE, key });
  const searchJson = await fetchJson('https://www.googleapis.com/youtube/v3/search?' + searchParams.toString());
  const channelId = searchJson?.items?.[0]?.snippet?.channelId;
  if (!channelId) return null;

  const statsParams = new URLSearchParams({ part: 'statistics,snippet,brandingSettings', id: channelId, key });
  const statsJson = await fetchJson('https://www.googleapis.com/youtube/v3/channels?' + statsParams.toString());
  const item = statsJson?.items?.[0];
  if (!item) return null;

  return {
    title: item.snippet?.title,
    subscribers: Number(item.statistics?.subscriberCount || 0),
    views: Number(item.statistics?.viewCount || 0),
    videos: Number(item.statistics?.videoCount || 0),
    channelId,
    url: CHANNEL_URL,
  };
}

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }
  const live = await fetchYoutubeStats();
  const stats = live || {
    title: 'Memeher Dr. Zebene Lemma',
    subscribers: 0,
    views: 0,
    videos: 0,
    channelId: null,
    url: CHANNEL_URL,
    note: 'Connect YOUTUBE_API_KEY or GOOGLE_API_KEY in Vercel for live data.',
  };
  const recommendations = [
    'Pin a weekly sermon playlist on the home page and mirror the same topic in Facebook posts.',
    'Add bilingual titles: English for discovery, Amharic for faithful local reach.',
    'Create short clips from each teaching focused on Scripture, Fathers, and practical Orthodox life.',
    'Invite respectful questions and direct doctrinal answers to verified Ethiopian Orthodox sources.',
  ];
  return NextResponse.json({ ok: true, stats, recommendations });
}
