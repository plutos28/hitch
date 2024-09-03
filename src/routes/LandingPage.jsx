import {Link} from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-blue-400">Hitch Landing Page</h1>
      <p> <Link to={'app'}>->App</Link></p>
    </div>
  )
}