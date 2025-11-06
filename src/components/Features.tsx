
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

import Macbook from './models/Macbook'
import { features } from '../constants/index'
import StudioLights from './three/StudioLights'

import clsx from 'clsx'
import { Suspense, useRef } from 'react'
import { Html } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ModelScroll = () => {

  const groupRef = useRef<THREE.Group>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
  <group ref={groupRef}>
    <Suspense fallback={<Html><h1 className='text-white text-3xl uppercase'>Loading...</h1></Html>}>
      <Macbook scale={isMobile ? 0.025 : 0.04} position={[0, 0, 0]}/>
    </Suspense>
  </group>
  )
}
const Features = () => {
  const sectionRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=400%',
        scrub: 1,
        pin: true,
      },
    })

    // Animate feature boxes sequentially
    features.forEach((_, index) => {
      const boxClass = `.box-${index + 1}`

      tl.fromTo(
        boxClass,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        index * 0.5
      ).to(
        boxClass,
        { opacity: 0, y: -20, duration: 0.5 },
        (index + 1) * 0.5
      )
    })
  }, { scope: sectionRef })

  return (
    <section id='features' ref={sectionRef} className='h-screen'>
      <h2>See How It Works.</h2>
      <div className='relative w-full h-full'>
        <Canvas id='f-canvas' camera={{ position: [0, 0, 5], fov: 25 }}>
          <ambientLight intensity={0.5} />
          <StudioLights/>
          <ModelScroll />
        </Canvas>

        <div className='absolute inset-0 pointer-events-none'>
          {features.map((feature, index) => (
            <div key={feature.id} className={clsx ('box', `box-${index + 1}`, feature.styles, 'pointer-events-auto')}>
              {feature.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features