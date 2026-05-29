import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { text, target = 'am' } = await request.json().catch(() => ({}));
  if (!text || typeof text !== 'string') return NextResponse.json({ ok: false, error: 'Missing text.' }, { status: 400 });
  const key = process.env.GOOGLE_TRANSLATE_API_KEY || process.env.GOOGLE_API_KEY || process.env.GOOGLE_PLACES_API_KEY;
  if (!key) {
    return NextResponse.json({ ok: false, error: 'Google Translate API key is not configured.' }, { status: 501 });
  }
  const params = new URLSearchParams();
  params.set('key', key);
  const resp = await fetch('https://translation.googleapis.com/language/translate/v2?' + params.toString(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ q: text, target, format: 'text' }),
  });
  if (!resp.ok) return NextResponse.json({ ok: false, error: 'Translation request failed.' }, { status: resp.status });
  const data = await resp.json();
  return NextResponse.json({ ok: true, translatedText: data.data?.translations?.[0]?.translatedText || text });
}
