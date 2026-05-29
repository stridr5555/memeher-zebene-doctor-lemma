import { BookOpen, Cross, MessageCircle, PlaySquare, ShieldCheck, Sparkles, Users } from 'lucide-react';
import Link from 'next/link';
import Comments from '@/components/Comments';
import TranslatePanel from '@/components/TranslatePanel';

const references = [
  'Holy Scripture as received and proclaimed in the Ethiopian Orthodox Tewahedo Church',
  'The Synaxarium: the lives and witness of the saints',
  'The Qerlos and the teaching of Saint Cyril on the unity of Christ',
  'The Didascalia and the pastoral discipline of apostolic life',
  'The Fetha Nagast as a historic guide to ecclesial order and faithful conduct',
];

const teachings = [
  ['Scripture & Tradition', 'Clear teaching grounded in the Bible, the Fathers, and the living tradition of the Ethiopian Orthodox Tewahedo Church.'],
  ['Liturgical Life', 'Guidance on prayer, fasting, repentance, feast days, and the spiritual rhythm of the Church year.'],
  ['Youth Formation', 'A faithful digital home for young people seeking Orthodox answers in modern life.'],
  ['Family & Community', 'Pastoral reflections for households, service, humility, reconciliation, and works of mercy.'],
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="brand"><span className="cross">✥</span> Memeher Zebene Doctor Lemma</div>
        <div className="navlinks">
          <a href="#teachings">Teachings</a>
          <a href="#media">Media</a>
          <a href="#discussion">Discussion</a>
          <Link href="/admin">Admin</Link>
        </div>
      </nav>

      <section className="hero sacred-panel">
        <div className="halo" />
        <div className="kicker">In the Name of the Father, and of the Son, and of the Holy Spirit — One God. Amen.</div>
        <h1>Faithful Ethiopian Orthodox teaching for the whole world.</h1>
        <p className="lead">An official digital ministry home for Memeher Zebene Doctor Lemma: sermons, Orthodox formation, live media, respectful discussion, and pastoral resources shaped by Ethiopian Orthodox Tewahedo faith.</p>
        <div className="actions">
          <a className="btn primary" href="https://youtube.com/@memeherdrzebenelemma?si=Fu_RIFgTz6fgaxky" target="_blank"><PlaySquare size={18}/> Watch YouTube</a>
          <a className="btn secondary" href="https://www.facebook.com/share/1Jf76yF136/" target="_blank"><Users size={18}/> Visit Facebook</a>
        </div>
        <div className="stats-strip">
          <span>✥ Ethiopian Orthodox Tewahedo</span><span>✥ Scripture</span><span>✥ Holy Fathers</span><span>✥ Prayer</span>
        </div>
      </section>

      <section className="section grid-two">
        <div>
          <div className="section-label"><Sparkles size={18}/> Ministry Vision</div>
          <h2>Ancient faith, reverent media, modern reach.</h2>
          <p>The site is designed as a high-trust platform for Orthodox preaching: dignified, light-filled, blue-accented, and inspired by Ethiopian Orthodox manuscript art, processional crosses, prayer, and iconographic geometry without borrowing from other denominations.</p>
        </div>
        <div className="icon-card"><div className="big-cross">✥</div><p>“Teach them to observe all that I have commanded you.” Matthew 28:20</p></div>
      </section>

      <section className="section" id="teachings">
        <div className="section-label"><BookOpen size={18}/> Teaching Pillars</div>
        <h2>Orthodox formation rooted in holy books and living tradition.</h2>
        <div className="cards">{teachings.map(([title, body]) => <article className="card" key={title}><Cross className="card-icon"/><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="section reference-panel">
        <div className="section-label"><ShieldCheck size={18}/> Reference Foundation</div>
        <h2>Copy and teaching references</h2>
        <p>Public copy is written with reverence toward Ethiopian Orthodox sources and avoids non-Ethiopian denominational imagery.</p>
        <ul>{references.map((r) => <li key={r}>{r}</li>)}</ul>
      </section>

      <section className="section media" id="media">
        <div className="section-label">Media Channels</div>
        <h2>YouTube and Facebook ministry hub</h2>
        <div className="media-grid">
          <a className="media-card youtube" href="https://youtube.com/@memeherdrzebenelemma?si=Fu_RIFgTz6fgaxky" target="_blank"><PlaySquare size={44}/><h3>YouTube Sermons</h3><p>Watch preaching, playlists, clips, and spiritual teaching.</p></a>
          <a className="media-card facebook" href="https://www.facebook.com/share/1Jf76yF136/" target="_blank"><Users size={44}/><h3>Facebook Community</h3><p>Follow updates, livestream announcements, and ministry posts.</p></a>
        </div>
      </section>

      <section className="section translate-section">
        <div className="section-label">Amharic Translation</div>
        <h2>Translate ministry copy to Amharic</h2>
        <TranslatePanel />
      </section>

      <section className="section" id="discussion">
        <div className="section-label"><MessageCircle size={18}/> Discussion</div>
        <h2>Respectful comments and questions</h2>
        <Comments />
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Memeher Zebene Doctor Lemma Ministry. Ethiopian Orthodox Tewahedo digital ministry.</p>
        <Link href="/dashboard">Admin Dashboard</Link>
      </footer>
    </main>
  );
}
