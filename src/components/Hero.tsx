import { useRef, useEffect } from "react";
const Hero = () => {

    const videoRef = useRef(); 
    // if i want to have greater control over the video and playback

    useEffect(() => {
        if (videoRef.current) 
            videoRef.current.playbackRate = 2;
    }, []);

  return <section id="hero">
    <div>
        <h1>Macbook Pro</h1>
        <img src="/title.png" alt="Macbook Pro" />
        <p>Supercharged for pros.</p>
    </div>
    <video src="videos/hero.mp4" autoPlay muted playsInline></video>

    <button>
        Learn More
    </button>
    <p>Available 10.31</p>
  </section>;
};

export default Hero;
