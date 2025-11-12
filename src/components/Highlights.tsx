import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


import { useMediaQuery } from 'react-responsive'

const Highlights = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  useGSAP(() => {
    gsap.to('.left-column, .right-column', {
      scrollTrigger: {
        trigger: '#highlights',
        start: isMobile ? 'bottom bottom' : 'top top'
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power1.inOut',
      stagger: 0.5,
    })
  })
 

  return (
    <section id='highlights'>
     <h2>Upgrade and unlock the full potential of your Mac.</h2>
     <h3>Here's what you get with the new 51 Pro and M5 Max chips. </h3>

     <div className='masonry'>

      <div className='left-column'>
        <div>
          <img src="/laptop.png" alt="laptop" />
          <p>Speed up your work and play.</p>
        </div>
        <div>
          <img src="/sun.png" alt="sun" />
          <p>Stunning <br/>Liquid Retina display.</p>
        </div> 
      </div>

      <div className='right-column'>
        <div className='apple-gradient'>
          <img src="/ai.png" alt="ai" />
          <p>Built for <br/> <span>Apple Intelligence</span>.</p>
        </div>
        <div>
          <img src="/battery.png" alt="battery" />
          <p>Longer battery life. <span className='green-gradient'>Up to 20 hours.</span></p>
        </div> 
      </div>

     </div>
    </section>
  )
}

export default Highlights