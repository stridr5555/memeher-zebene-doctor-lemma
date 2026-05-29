import { BookOpen, Church, Cross, Flame, HeartHandshake, MessageCircle, PlaySquare, ScrollText, ShieldCheck, Sparkles, Sun, Users } from 'lucide-react';
import Link from 'next/link';
import Comments from '@/components/Comments';
import TranslatePanel from '@/components/TranslatePanel';

const teachingPillars = [
  {
    icon: BookOpen,
    title: 'The Word that gives life',
    body: 'Scripture is opened with reverence: not as argument, entertainment, or novelty, but as the living word that calls the soul to repentance, hope, worship, and love of God.',
  },
  {
    icon: ScrollText,
    title: 'The memory of the saints',
    body: 'The Synaxarium, the martyrs, the monastic fathers, and the righteous elders teach the Church how to endure suffering, guard humility, and finish the race with spiritual fruit.',
  },
  {
    icon: Church,
    title: 'The beauty of worship',
    body: 'Liturgy, fasting, feasts, prostration, prayer, hymnody, and holy icons are presented as a single path of healing in the Ethiopian Orthodox Tewahedo tradition.',
  },
  {
    icon: HeartHandshake,
    title: 'Pastoral care for families',
    body: 'The ministry speaks to parents, youth, students, servants, and seekers with teaching that is gentle, firm, practical, and anchored in the fear of God.',
  },
];

const holyBooks = [
  'Holy Scripture and the apostolic proclamation received by the Church',
  'The Synaxarium and the witness of saints who lived repentance until the end',
  'The Qerlos and patristic teaching on the mystery of the Incarnation',
  'The Didascalia and the discipline of ordered Christian life',
  'The Fetha Nagast and the Church’s historic memory of justice, order, and responsibility',
  'Ethiopian hymnody, homiletic tradition, fasting seasons, and liturgical readings',
];

const journeys = [
  ['For the seeker', 'A doorway into the ancient Christian faith of Ethiopia: clear explanations, reverent language, and a warm invitation to prayer.'],
  ['For the faithful', 'Regular teaching that strengthens confession, repentance, fasting, family prayer, sacramental life, and love for the Church.'],
  ['For the young', 'Orthodox answers for a distracted age: identity, discipline, purity, service, education, and courage without bitterness.'],
  ['For the diaspora', 'A bridge between generations so that language, worship, memory, and faith remain alive in homes far from Ethiopia.'],
];

const calendar = [
  ['Sunday', 'Divine Liturgy, sermon reflection, and a call to live the Gospel throughout the week.'],
  ['Fasting seasons', 'Guides for repentance, prayer, mercy, and reconciliation in the spirit of Nineveh.'],
  ['Feast days', 'Teaching on the Lord’s saving work, the Theotokos, angels, apostles, martyrs, and righteous fathers.'],
  ['Daily life', 'Short exhortations for households: Scripture, patience, forgiveness, humility, and works of mercy.'],
];

const iconGallery = [
  {
    src: '/gallery/christ-meditation.png',
    title: 'Jesus Christ, Savior of the World',
    source: 'Hara Monastery',
    note: 'A contemplative portrait of Christ used as the visual center of prayer and repentance.',
  },
  {
    src: '/gallery/christ-sinai.jpg',
    title: 'Christ Pantocrator of Sinai',
    source: 'Orthodox Monastery Icons',
    note: 'The ancient Sinai image presents Christ blessing with one hand and holding the Gospel with the other.',
  },
  {
    src: '/gallery/christ-byzantine-sinai.jpg',
    title: 'Pantocrator, St. Catherine tradition',
    source: 'The Byzantine Legacy',
    note: 'A solemn iconographic witness to Christ as ruler, teacher, judge, and merciful Savior.',
  },
  {
    src: '/gallery/ethiopian-jesus.jpg',
    title: 'Ethiopian icon of Our Lord',
    source: 'EOTC icon page',
    note: 'Ethiopian Orthodox visual language: bright color, frontal holiness, and sacred teaching through image.',
  },
  {
    src: '/gallery/ethiopian-holy-trinity.jpg',
    title: 'Holy Trinity icon',
    source: 'EOTC icon page',
    note: 'A traditional Ethiopian Orthodox sacred image for contemplation of divine communion and worship.',
  },
  {
    src: '/gallery/ethiopian-last-supper.jpg',
    title: 'The Mystical Supper',
    source: 'EOTC icon page',
    note: 'An image of Eucharistic memory: Christ gathers, feeds, teaches, and prepares His disciples.',
  },
];

export default function Home() {
  return (
    <main>
      <div className="blue-orb orb-one" />
      <div className="blue-orb orb-two" />
      <nav className="nav glass">
        <Link href="/" className="brand" aria-label="Memeher Zebene Doctor Lemma home">
          <span className="brand-seal">✥</span>
          <span><strong>Memeher Zebene</strong><small>Doctor Lemma Ministry</small></span>
        </Link>
        <div className="navlinks">
          <a href="#teaching">Teaching</a>
          <a href="#life">Orthodox Life</a>
          <a href="#media">Media</a>
          <a href="#gallery">Gallery</a>
          <a href="#discussion">Discussion</a>
        </div>
      </nav>

      <section className="hero">
        <div className="manuscript-frame glass">
          <div className="ethiopian-cross hero-cross">✥</div>
          <div className="kicker"><Sun size={18}/> Psalm 104:3 — “Let the heart of those who seek the Lord rejoice.”</div>
          <h1>Ancient Ethiopian Orthodox wisdom for hearts seeking God.</h1>
          <p className="lead">A digital ministry home for the preaching and teaching of Memeher Zebene Doctor Lemma: Scripture opened with reverence, the saints remembered with gratitude, and Orthodox life presented with depth, beauty, and pastoral clarity.</p>
          <div className="actions">
            <a className="btn primary" href="https://youtube.com/@memeherdrzebenelemma?si=Fu_RIFgTz6fgaxky" target="_blank"><PlaySquare size={18}/> Watch sermons</a>
            <a className="btn secondary" href="https://www.facebook.com/share/1Jf76yF136/" target="_blank"><Users size={18}/> Join Facebook</a>
          </div>
          <div className="hero-ribbon">
            <span>✥ Tewahedo Faith</span><span>✥ Repentance</span><span>✥ Liturgy</span><span>✥ Saints</span><span>✥ Family</span>
          </div>
        </div>
        <aside className="hero-icon-panel glass">
          <div className="portrait-frame">
            <img src="/gallery/fb-zebene-2.jpg" alt="Memeher Zebene Lemma" />
            <span className="portrait-cross">✥</span>
          </div>
          <h2>Memeher Zebene Lemma</h2>
          <p>A public teacher of Ethiopian Orthodox faith, calling hearts toward Scripture, repentance, worship, and the living memory of the saints.</p>
        </aside>
      </section>

      <section className="section intro-grid">
        <article className="glass prose-card large">
          <div className="section-label"><Sparkles size={18}/> Ministry purpose</div>
          <h2>A home for teaching that nourishes, corrects, and consoles.</h2>
          <p>Many people hear fragments of faith online: a verse without the Church, zeal without humility, debate without prayer. This ministry is shaped for something deeper. It gathers preaching, instruction, and conversation into one place so that visitors can learn the faith as a way of life.</p>
          <p>Here, Orthodox teaching is not reduced to slogans. It speaks of repentance like medicine, fasting like freedom, worship like heaven touching earth, and the saints like elder brothers and sisters who already walked the difficult road before us.</p>
        </article>
        <article className="quote-card glass">
          <Cross size={36}/>
          <blockquote>“Give thanks to the Lord, for He is good.”</blockquote>
          <cite>Psalm 136:1</cite>
          <p>Gratitude is the beginning of clear sight. The thankful heart recognizes every teaching, every correction, and every breath as mercy.</p>
        </article>
      </section>

      <section className="section" id="teaching">
        <div className="section-label"><BookOpen size={18}/> Teaching pillars</div>
        <h2>Rooted in Scripture, carried by tradition, directed toward holiness.</h2>
        <div className="cards ornate-cards">
          {teachingPillars.map(({ icon: Icon, title, body }) => (
            <article className="card glass" key={title}>
              <div className="icon-medallion"><Icon size={26}/></div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section sacred-blue" id="life">
        <div className="pattern-crosses" />
        <div className="section-label light"><Flame size={18}/> Orthodox life</div>
        <h2>The Christian life is learned in the rhythm of the Church.</h2>
        <p className="section-intro">The Ethiopian Orthodox Tewahedo tradition forms the whole person. It teaches the lips to pray, the body to fast, the mind to remember God, the household to bless, and the community to serve.</p>
        <div className="journey-grid">
          {journeys.map(([title, body]) => <article className="blue-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="section split-feature">
        <div className="glass iconography-panel">
          <div className="cross-garden"><span>✥</span><span>✣</span><span>✥</span><span>✢</span><span>✥</span></div>
          <h2>Iconography, memory, and holy beauty</h2>
          <p>Holy beauty teaches before a single sentence is spoken. Crosses, illuminated borders, arches, blue light, and gold accents on this site are used to suggest reverence, clarity, and the heavenly orientation of worship.</p>
        </div>
        <div className="text-list glass">
          <div className="section-label"><ShieldCheck size={18}/> Sources of depth</div>
          <h2>Teaching shaped by the Church’s books and spiritual inheritance.</h2>
          <ul>{holyBooks.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="section calendar-section">
        <div className="section-label"><Church size={18}/> Ministry calendar</div>
        <h2>From Sunday worship to daily repentance.</h2>
        <div className="calendar-grid">
          {calendar.map(([title, body]) => <article className="calendar-card glass" key={title}><span>✥</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="section media" id="media">
        <div className="section-label"><PlaySquare size={18}/> Media ministry</div>
        <h2>Follow the teaching where the community already gathers.</h2>
        <p className="section-intro">The ministry continues beyond the church wall through sermons, clips, reflections, livestream notices, and community updates.</p>
        <div className="media-grid">
          <a className="media-card youtube glass" href="https://youtube.com/@memeherdrzebenelemma?si=Fu_RIFgTz6fgaxky" target="_blank"><PlaySquare size={50}/><h3>YouTube Sermons</h3><p>Long-form preaching, spiritual instruction, and video teaching for families and seekers.</p><span>Open channel →</span></a>
          <a className="media-card facebook glass" href="https://www.facebook.com/share/1Jf76yF136/" target="_blank"><Users size={50}/><h3>Facebook Community</h3><p>Announcements, shared reflections, livestream notices, and faithful conversation.</p><span>Visit page →</span></a>
        </div>
      </section>

      <section className="section icon-gallery-section" id="gallery">
        <div className="section-label"><Sparkles size={18}/> Sacred icon gallery</div>
        <h2>Images of Christ and holy Orthodox iconography for contemplation.</h2>
        <p className="section-intro">The gallery begins with the portrait of Jesus Christ, Savior of the world, then gathers similar Orthodox iconography from public Orthodox pages so the visual language of the site remains prayerful, traditional, and centered on the Lord.</p>
        <div className="icon-gallery">
          {iconGallery.map((item) => (
            <article className="icon-gallery-card glass" key={item.src}>
              <img src={item.src} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
                <span>{item.source}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section translate-section glass">
        <div>
          <div className="section-label">Amharic translation</div>
          <h2>Let the same message speak with warmth in Amharic.</h2>
          <p>Use the translation tool for ministry excerpts, announcements, or short teaching summaries that need to move between English and Amharic with care.</p>
        </div>
        <TranslatePanel />
      </section>

      <section className="section discussion" id="discussion">
        <div className="section-label"><MessageCircle size={18}/> Questions and reflection</div>
        <h2>Speak with reverence. Ask with humility. Learn with patience.</h2>
        <Comments />
      </section>

      <footer className="glass footer">
        <div className="ethiopian-cross">✥</div>
        <p>May God, Most High, bless all who seek Him with a sincere heart.</p>
        <div><Link href="/dashboard">Admin Dashboard</Link></div>
      </footer>
    </main>
  );
}
