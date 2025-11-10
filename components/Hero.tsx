import React from 'react'
import TextType from './TextType'

const Hero = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div className=' z-10 text-center w-1/2 text-white opacity-90'>
        <h1 className="text-8xl font-semibold tracking-tight mb-3">
        FloatChat
      </h1>
      <TextType
        text={["Where Ocean Data Meets Intelligence.", "Where Ocean Data Meets Intelligence."]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
        className= "mb-6 text-[#51d0f0]"
      />
      <p className="text-lg text-[#6cb4f0]  mt-4 italic">
        FloatChat is your AI companion for ocean discovery. It combines cutting-edge data processing, intelligent retrieval, and intuitive 
        visualization — so you can chat with data, explore patterns, and make discoveries faster than ever.
      </p>
      <button >Get Started</button>
      </div>
    </div>
  )
}

export default Hero
