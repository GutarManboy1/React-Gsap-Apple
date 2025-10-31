import { performanceImages } from "../constants"

const Performance = () => {
  return (
    <section id='performance'>
      <h2>Next Generation Performance. <br /> Next Generation Power.</h2>

      <div className='wrapper'>
        {performanceImages.map(({id, src}) => (
          <img key={id} src={src} alt={id} />
        ))}
      </div>

      <div className="content">
        <p>The M2 chip is a 10-core GPU, 6-core CPU, and a 16-core Neural Engine. <span className="text-white">It is the most powerful chip in a Mac.</span> It is 50% faster than the M1 chip. It is also 50% more energy efficient. </p>
      </div>
    </section>
  )
}

export default Performance