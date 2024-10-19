import './App.css'
import Header from './assets/Header'
import Navbar from './assets/Navbar'
//import AboutUs from '../../Online-Educational-Website/src/components/About-us/AboutUs'
import About from "./assets/About"
import Coriculum from './Coriculum'
import VideoGallery from './assets/VideoGallery'

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Coriculum/>
      <VideoGallery/>
   </div>
  )
}

export default App
