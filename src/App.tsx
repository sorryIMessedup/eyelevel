import { useCallback, useEffect, useRef, useState } from 'react'
import '@/App.less'
import logoUrl from '@/assets/logo.svg'
import { Welcome } from '@/pages/Welcome'
import { Portfolio } from '@/pages/Portfolio'
import { Introduction } from '@/pages/Introduction'

const PAGE_LABELS = ['欢迎', '作品集', '介绍'] as const

function App() {
  const scrollRef = useRef<HTMLElement>(null)
  const [activePage, setActivePage] = useState(0)

  const scrollToPage = useCallback((index: number) => {
    const root = scrollRef.current
    if (!root) return
    const section = root.querySelector<HTMLElement>(
      `[data-snap-page="${index}"]`,
    )
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  useEffect(() => {
    const root = scrollRef.current
    if (!root) return

    const sections = root.querySelectorAll<HTMLElement>('[data-snap-page]')
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        const el = best?.target as HTMLElement | undefined
        const raw = el?.dataset.snapPage
        if (raw !== undefined) {
          const idx = Number.parseInt(raw, 10)
          if (!Number.isNaN(idx)) setActivePage(idx)
        }
      },
      { root, threshold: [0.35, 0.55, 0.75, 1] },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <a className="site-brand" href="#welcome" aria-label="返回欢迎页">
        <img src={logoUrl} alt="" decoding="async" />
        <span className="site-brand__name">S+P Line Studio</span>
      </a>

      <nav className="page-indicator" aria-label="页面位置">
        {PAGE_LABELS.map((label, index) => (
          <button
            key={label}
            type="button"
            className={`dot${activePage === index ? ' active' : ''}`}
            aria-label={`${label}（第 ${index + 1} 屏）`}
            aria-current={activePage === index ? 'true' : undefined}
            onClick={() => scrollToPage(index)}
          />
        ))}
      </nav>

      <main
        ref={scrollRef}
        className="snap-scroll"
        aria-label="全屏分屏滚动内容"
      >
        <Welcome />
        <Portfolio />
        <Introduction />
      </main>
    </div>
  )
}

export default App
