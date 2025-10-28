import React from 'react'

const Showcase = () => {
  return (
    <section id="showcase">
        <div className='media'>
            <video src="/videos/game.mp4"  autoPlay muted playsInline /> 
            <div className='mask'>
                {/* when using a mask image it has to be svg format easy to show on other content */}
                <img src="/mask-logo.svg" alt="m4logo" />
            </div>
        </div>

        <div className='content'>
            <div className='wrapper'>
                <div className='lg:max-w-md'>
                    <h2>Rocket Chip</h2>
                    <div className='space-y-5 mt-7 pe-10'>
                        <p>Introducing {""}
                             <span className='text-white'>M5 the next generation of the 
                            Apple Silicon
                        </span>
                        </p>
                        <p>
                            With the powerful M5 chip, experience unparalleled performance and efficiency for all your computing needs.
                        </p>
                       <p>
                            Whether you're a creative professional, a gamer, or a casual user, the M5 chip delivers exceptional speed and responsiveness.
                       </p>
                       <p className='text-primary'>
                            Upgrade to a device powered by the M5 chip and unlock a new level of performance today.
                       </p>
                    </div>
                </div>
                <div className='max-w-3xs space-y-14'>
                    <div className='space-y-2'>
                        <p>Up to</p>
                        <h3>5x faster</h3>
                        <p>than the M1 chip</p>
                    </div>
                     <div className='space-y-2'>
                        <p>Up to</p>
                        <h3>2x faster</h3>
                        <p>CPU performance than M4</p>
                    </div>
                </div>
            </div> 
        </div>
    </section>
  )
}

export default Showcase