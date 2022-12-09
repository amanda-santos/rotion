import { ReactElement } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from './lib/react-query'
import { AppRoutes } from './Routes'

import './styles/global.css'

export const App = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  )
}
