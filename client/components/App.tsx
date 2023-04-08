import AddCar from './AddCar'
import Cars from './Cars'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Navbar />
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">{/* add your code here */}</section>
      <Routes>
        <Route path="/" element={<Cars />} />
        <Route path="/add" element={<AddCar />} />
      </Routes>
    </>
  )
}

export default App
