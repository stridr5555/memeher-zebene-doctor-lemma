"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BarChart3, Lightbulb, LogOut, PlaySquare } from 'lucide-react';

type DashboardData = { ok: boolean; stats?: { title: string; subscribers: number; views: number; videos: number; url: string; note?: string }; recommendations?: string[]; error?: string };

function fmt(n: number) { return new Intl.NumberFormat().format(n || 0); }

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  useEffect(() => { fetch('/api/youtube/stats').then(r=>r.json()).then(setData).catch(()=>setData({ok:false,error:'Dashboard unavailable'})); }, []);
  async function logout() { await fetch('/api/admin/logout', { method: 'POST' }); window.location.href='/'; }
  if (!data) return <main className="dashboard"><p>Loading dashboard...</p></main>;
  if (!data.ok) return <main className="dashboard"><div className="login-card"><h1>Admin required</h1><p>{data.error}</p><Link className="btn primary" href="/admin">Login</Link></div></main>;
  const s = data.stats!;
  return <main className="dashboard"><nav className="dash-nav"><Link href="/">← Public site</Link><button onClick={logout}><LogOut size={16}/> Logout</button></nav><section className="dash-hero"><div><div className="section-label"><BarChart3 size={18}/> Ministry Command Center</div><h1>YouTube Vital Stats</h1><p>Live channel monitoring and practical recommendations for sermon reach, Orthodox education, and audience care.</p></div><PlaySquare size={76}/></section><section className="metric-grid"><div className="metric"><span>Subscribers</span><strong>{fmt(s.subscribers)}</strong></div><div className="metric"><span>Total views</span><strong>{fmt(s.views)}</strong></div><div className="metric"><span>Videos</span><strong>{fmt(s.videos)}</strong></div></section>{s.note && <p className="notice">{s.note}</p>}<section className="recommendations"><h2><Lightbulb/> Recommendations</h2>{data.recommendations?.map((r,i)=><article key={i}><strong>Recommendation {i+1}</strong><p>{r}</p></article>)}</section></main>;
}
