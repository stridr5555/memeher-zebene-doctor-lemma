import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Memeher Zebene Doctor Lemma | Ethiopian Orthodox Teaching Ministry',
  description: 'A polished official ministry website for Memeher Zebene Doctor Lemma, Ethiopian Orthodox preaching, teaching, video ministry, discussion, and pastoral formation.',
  openGraph: {
    title: 'Memeher Zebene Doctor Lemma',
    description: 'Ethiopian Orthodox teaching, preaching, Scripture, Patristic wisdom, and faithful discussion.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
