import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import Showcase from './components/Showcase'
import Performance from './components/Performance'
import Features from './components/Features'
import Highlights from './components/Highlights'
import Footer from './components/Footer'

import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText)
// gsap core animation code can go here or inside components it has to be registered first to work

const App = () => {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <ProductViewer/>
        <Showcase/>
        <Performance/>
        <Features/>
        <Highlights/>
        <Footer/>
    </main>
   
  )
}

export default App