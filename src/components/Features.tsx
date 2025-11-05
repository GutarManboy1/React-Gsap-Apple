
import { Canvas } from '@react-three/fiber'

import Macbook from './models/Macbook'
import { features } from '../constants/index'
import StudioLights from './three/StudioLights'

import clsx from 'clsx'
import { Suspense, useRef } from 'react'
import { Html } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'



const ModelScroll = () => {

  const groupRef = useRef<THREE.Group>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
  <group ref={groupRef}>
    <Suspense fallback={<Html><h1 className='text-white text-3xl uppercase'>Loading...</h1></Html>}>
      <Macbook scale={isMobile ? 0.05 : 0.08} />
    </Suspense>
  </group>
  )
} 
const Features = () => {
  return (
    <section id='features'>
      <h2>See How It Works.</h2>
      <Canvas id='f-canvas' camera={{ position: [0, 0, 5], fov: 25 }}>
        <ambientLight intensity={0.5} />
        <StudioLights/>
      </Canvas>

      <div className='absolute inset-0'>
        {features.map((feature, index) => (
          <div className={clsx ('box', `box-${index + 1}`, feature.styles)}>
            {feature.text}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features