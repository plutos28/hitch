import {Link} from 'react-router-dom'

export default function History() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-blue-400">History</h1>
      <p> <Link to={'app'}>-{'>'}App</Link></p>
    </div>
  )
}