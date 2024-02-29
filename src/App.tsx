import { Route, Routes } from 'react-router-dom'
import { Main } from '@/pages'

export default function App() {
  return (
    <main className="flex-1">
      <Routes>
        <Route path="/" Component={Main} />
      </Routes>
    </main>
  )
}
