import { Route, Routes } from 'react-router-dom'
import { Home } from '@/pages'

export default function App() {
  return (
    <main className="flex-1">
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </main>
  )
}
