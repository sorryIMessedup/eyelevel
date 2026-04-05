import './index.less'

const LOGO_VIDEO_SRC = '/logo-video.mp4'

export function Welcome() {
  return (
    <section
      className="welcome intro"
      id="welcome"
      data-snap-page={0}
      aria-labelledby="welcome-title"
    >
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src={LOGO_VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="overlay" aria-hidden />
      <div className="intro-content">
        <h1 id="welcome-title">S+P Line Studio</h1>
        <p>
          专注于AI在艺术及试听领域的探索。
          <br />
          致力于超精品的漫剧+，AI真人剧，实验AI动画，广告宣传片，影视后期等项目。
        </p>
      </div>
      <p className="intro-hint">向下滚动或点击右侧小圆点了解更多</p>
    </section>
  )
}
