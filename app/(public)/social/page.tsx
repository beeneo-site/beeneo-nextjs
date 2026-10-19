'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n-context'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/beeneo', color: 'bg-blue-600' },
  { label: 'X (Twitter)', href: 'https://twitter.com/beeNEO_biz', color: 'bg-zinc-800' },
  { label: 'Instagram', href: 'https://www.instagram.com/beeneo_biz/', color: 'bg-pink-600' },
  { label: 'Facebook', href: 'https://www.facebook.com/1182270611632506', color: 'bg-blue-700' },
]

const carouselImages = [
  { src: '/social/Chf0Lo4OOZa.webp', caption: 'Excellence 360 X — Process Day' },
  { src: '/social/lIbNytL6DiM.webp', caption: 'Pilot Projects and Learning Loops' },
  { src: '/social/Ab6ibYscSLk.webp', caption: 'Excellence 360 — Blog 53' },
  { src: '/social/ar3NlWj-znx.webp', caption: 'Self-Reliance Is Measurable' },
  { src: '/social/LDxUerJpOyK.webp', caption: 'From Prototype to Series' },
  { src: '/social/tYjQHe-e4NI.webp', caption: 'Component Data Is Market Access' },
  { src: '/social/yLn7F9qCHgW.webp', caption: 'Passport-Ready by Design' },
  { src: '/social/R_qQ8KvEqAf.webp', caption: 'Hardware Day — Traceability' },
  { src: '/social/F1VU2ux0b5W.webp', caption: 'Battery Passport & Market Access' },
  { src: '/social/v-aG1vw5jEe.webp', caption: 'Excellence 360 X — Hardware Day' },
  { src: '/social/ZL7-JCMIkh0.webp', caption: 'Excellence 360 X — 12 Oct' },
  { src: '/social/53SwH1-vxq_.webp', caption: 'Excellence 360 — Process Day' },
]

const recentPosts = [
  {
    date: '12 Oct 2026',
    title: 'Pilot Projects and Learning Loops: De-risking Process Rollouts',
    text: 'Scaling a new process across a regulated engineering organization should not begin with a big-bang rollout. A controlled pilot creates evidence before the change reaches the full organization.',
    image: '/social/lIbNytL6DiM.webp',
    channels: ['LinkedIn', 'Facebook', 'Instagram'],
  },
  {
    date: '12 Oct 2026',
    title: 'Self-Reliance Is Measurable',
    text: 'An engagement that ends with a document handover is not finished. Self-reliance shows where decisions are made: name the decisions that still wait for external confirmation.',
    image: '/social/ar3NlWj-znx.webp',
    channels: ['Facebook', 'Instagram'],
  },
  {
    date: '11 Oct 2026',
    title: 'From Prototype to Series: Industrialisation, Traceability and Field Evidence',
    text: 'The highest lifecycle risk in an electrified drive system is often created during the transition from validated prototype to series production.',
    image: '/social/LDxUerJpOyK.webp',
    channels: ['LinkedIn', 'Facebook', 'Instagram'],
  },
  {
    date: '11 Oct 2026',
    title: 'Passport-Ready by Design',
    text: 'A passport requirement does not create new data needs; it exposes existing gaps. Organisations that already link supplier batch, production step and verification record can assemble the passport from running processes.',
    image: '/social/yLn7F9qCHgW.webp',
    channels: ['Facebook', 'Instagram'],
  },
  {
    date: '11 Oct 2026',
    title: 'Component Data Is Market Access',
    text: 'Passport-type legislation makes component data a market-entry condition, not a documentation preference. Material origin, condition and performance must be collected where the component is made.',
    image: '/social/tYjQHe-e4NI.webp',
    channels: ['Facebook', 'Instagram'],
  },
  {
    date: '11 Oct 2026',
    title: 'Battery Passport & Market Access',
    text: 'The battery passport turns component data into market access. Collect material, origin and performance data along the production line, not at the end.',
    image: '/social/F1VU2ux0b5W.webp',
    channels: ['Twitter'],
  },
]

export default function SocialPage() {
  const { t } = useI18n()
  const [idx, setIdx] = useState(0)
  const next = useCallback(() => setIdx((i) => (i + 1) % carouselImages.length), [])
  const prev = useCallback(() => setIdx((i) => (i - 1 + carouselImages.length) % carouselImages.length), [])

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <img src="/logo-beeneo.svg" alt="beeNEO" className="h-8 dark:hidden" />
            <img src="/logo-beeneo-white.svg" alt="beeNEO" className="h-8 hidden dark:block" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">/ Social Media</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight mb-4">Follow beeNEO</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">Engineering excellence, process coaching insights, and compliance thought leadership — across all major platforms.</p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 ${s.color} text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity`}>
                {s.label} <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-display text-2xl font-bold mb-6">Latest Visual Content</h2>
          <div className="relative rounded-2xl overflow-hidden bg-muted border border-border/50">
            <div className="relative aspect-[16/7] w-full">
              {carouselImages.map((img, i) => (
                <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <Image src={img.src} alt={img.caption} fill className="object-cover" sizes="100vw" priority={i === 0} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-display font-semibold text-lg drop-shadow-lg">{img.caption}</p>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"><ChevronLeft className="h-5 w-5" /></button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"><ChevronRight className="h-5 w-5" /></button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {carouselImages.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} className={`h-2 rounded-full transition-all ${i === idx ? 'w-6 bg-white' : 'w-2 bg-white/40'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Feed */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-display text-2xl font-bold mb-6">Recent Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post, i) => (
              <div key={i} className="rounded-xl border border-border/50 bg-card overflow-hidden">
                <div className="relative aspect-[4/5] bg-muted">
                  <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <span className="text-xs text-muted-foreground">·</span>
                    {post.channels.map((ch) => (
                      <span key={ch} className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-medium">{ch}</span>
                    ))}
                  </div>
                  {post.title && <h3 className="font-semibold text-sm mb-2 line-clamp-2">{post.title}</h3>}
                  <p className="text-sm text-muted-foreground line-clamp-3">{post.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thumbnail Grid */}
      <section className="pb-20 bg-card/50 pt-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-display text-2xl font-bold mb-6">Content Gallery</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {carouselImages.map((img, i) => (
              <button key={i} onClick={() => setIdx(i)} className="relative aspect-square rounded-lg overflow-hidden bg-muted group">
                <Image src={img.src} alt={img.caption} fill className="object-cover group-hover:scale-110 transition-transform duration-300" sizes="(max-width: 768px) 33vw, 16vw" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
