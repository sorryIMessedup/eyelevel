import './index.less'

export function Welcome() {
  return (
    <section
      className="panel welcome"
      id="welcome"
      aria-labelledby="welcome-title"
    >
      <h1 id="welcome-title">欢迎</h1>
      <p>向下滚动进入作品集板块。</p>
    </section>
  )
}
