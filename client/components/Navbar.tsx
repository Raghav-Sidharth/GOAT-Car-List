import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <div className="navViewCars">
        <Link to="/">View Cars</Link>
      </div>
      <div className="navAddCars">
        <Link to="/add">Add a Car</Link>
      </div>
    </nav>
  )
}
