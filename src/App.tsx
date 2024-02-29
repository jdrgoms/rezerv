import { Route, Routes } from 'react-router-dom'
import { BookingManagement, Home } from '@/pages'

export default function App() {
  return (
    <main className="flex-1">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/booking-management" Component={BookingManagement} />
      </Routes>
    </main>
  )
}
