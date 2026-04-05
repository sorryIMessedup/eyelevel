import './App.less'
import { Welcome } from './pages/Welcome'
import { Portfolio } from './pages/Portfolio'
import { Introduction } from './pages/Introduction'

function App() {
  return (
    <div className="app">
      <main className="snap-scroll" aria-label="全屏分屏滚动内容">
        <Welcome />
        <Portfolio />
        <Introduction />
      </main>
    </div>
  )
}

export default App
