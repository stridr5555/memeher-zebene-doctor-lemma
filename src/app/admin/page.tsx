"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  const [username, setUsername] = useState('memeher');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  async function login(e: React.FormEvent) {
    e.preventDefault();
    setStatus('Signing in...');
    const resp = await fetch('/api/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username, password }) });
    if (resp.ok) { window.location.href = '/dashboard'; return; }
    const data = await resp.json().catch(()=>({}));
    setStatus(data.error || 'Login failed');
  }
  return <main className="admin-shell"><section className="login-card"><div className="big-cross">✥</div><h1>Admin Login</h1><p>Monitor the ministry website, YouTube health, recommendations, and discussion activity.</p><form onSubmit={login}><label>Username<input value={username} onChange={e=>setUsername(e.target.value)} /></label><label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} /></label><button className="btn primary">Sign in</button></form><p className="status">{status}</p><Link href="/">Return home</Link></section></main>;
}
