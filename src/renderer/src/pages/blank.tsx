import { Link } from 'react-router-dom'

export const Blank = () => {
  return (
    <main className="flex-1 flex items-center justify-center text-rotion-400">
      Select or create a document
      <Link to="/document">Access document</Link>
    </main>
  )
}
