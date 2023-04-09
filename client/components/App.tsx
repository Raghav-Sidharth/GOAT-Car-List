import AddCar from './AddCar'
import Cars from './Cars'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import UpdateCar from './UpdateCar'
function App() {
  return (
    <>
      <header className="header">
        <h1>A collection of the G.O.A.T Cars</h1>
      </header>
      <section className="main">{/* add your code here */}</section>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cars />} />
        <Route path="/add" element={<AddCar />} />
        <Route path="/:id" element={<UpdateCar />} />
      </Routes>
    </>
  )
}

export default App
