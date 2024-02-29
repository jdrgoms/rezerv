import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './app'
import BookingProvider from '@/contexts/booking-context'

import '@/styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BookingProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BookingProvider>
  </React.StrictMode>,
)
