import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">View Cars</Link>
      </div>
      <div>
        <Link to="/add">Add a Car</Link>
      </div>
    </nav>
  )
}
