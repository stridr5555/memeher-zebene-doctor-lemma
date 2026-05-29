"use client";
import { useState } from 'react';

export default function TranslatePanel() {
  const [text, setText] = useState('Faithful Ethiopian Orthodox teaching for the whole world.');
  const [translated, setTranslated] = useState('');
  const [status, setStatus] = useState('');
  async function translate() {
    setStatus('Translating...');
    const resp = await fetch('/api/translate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text, target: 'am' }) });
    const data = await resp.json();
    if (data.ok) { setTranslated(data.translatedText); setStatus('Done'); } else { setStatus(data.error || 'Translation unavailable'); }
  }
  return <div className="translate-box"><textarea value={text} onChange={e=>setText(e.target.value)} /><button className="btn secondary" onClick={translate}>Translate to Amharic</button><p className="status">{status}</p>{translated && <div className="translation-result">{translated}</div>}</div>;
}
