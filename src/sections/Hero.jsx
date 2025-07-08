import React from 'react'

const Hero = () => {
  return (
    <section id="hero" className="relative w-full border flex flex-col min-h-[calc(100vh-4rem)] justify-center items-center">
      <div className="flex flex-col gap-7">
        <div className="flex flex-row justify-center items-center gap-2">
          <h1 className="text-8xl">Bringing the best</h1>
          <div>SPINNER PLACEHOLDER</div>
        </div>
        <h1 className="text-8xl">to reality.</h1>
      </div>
    </section>
  )
}

export default Hero