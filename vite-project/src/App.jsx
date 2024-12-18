import './App.css' 
import Card from './components/Character'
import Carousels from './components/Carousels'
import Footer from './components/Footer'
import Mission from './components/Mission'
import Navbar from './components/Navbar'
import Technologies from './components/Technology'

function App() {
  return (
    <>
      <Navbar />
      <div className="spacing">
        <Carousels />
      </div>
      <div className="spacing">
        <Card />
      </div>
      <div className="spacing">
        <Mission />
      </div>
      <div className="spacing">
        <Technologies />
      </div>
      <Footer />
    </>
  )
}

export default App;
