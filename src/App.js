import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Home from './components/Home'
import Menue from './components/Menue'
import NavBar from './components/NavBar'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Menue />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App