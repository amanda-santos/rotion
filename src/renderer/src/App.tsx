import { ReactElement } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './styles/global.css'

export const App = (): ReactElement => {
  return (
    <div className="h-screen w-screen bg-rotion-900 text-rotion-100 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center text-rotion-400">
          Select or create a document
        </main>
      </div>
    </div>
  )
}
