"use client";
import { useEffect, useState } from 'react';

type Comment = { name: string; message: string; at: string };

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('memeher-comments');
    if (saved) setComments(JSON.parse(saved));
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const next = [{ name, message, at: new Date().toLocaleString() }, ...comments].slice(0, 30);
    setComments(next);
    localStorage.setItem('memeher-comments', JSON.stringify(next));
    setName(''); setMessage('');
  }

  return <div className="comments"><form onSubmit={submit} className="comment-form"><input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name"/><textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Ask a respectful Orthodox question or share a reflection"/><button className="btn primary">Post comment</button></form><div className="comment-list">{comments.length === 0 ? <p className="muted">No comments yet. Begin the discussion with reverence and respect.</p> : comments.map((c,i)=><div className="comment" key={i}><strong>{c.name}</strong><span>{c.at}</span><p>{c.message}</p></div>)}</div></div>;
}
