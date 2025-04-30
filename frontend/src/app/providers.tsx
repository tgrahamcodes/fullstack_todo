'use client'

import { Provider } from 'react-redux'
import { store } from '../store'
import '../app/globals.css'

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}