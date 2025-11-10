import Hero from "./Hero"
import LiquidEther from "./LiquidEther"


const Page1 = () => {
  return (
    <div className="w-full h-full relative bg-[#040416]">
      <Hero/>
        <LiquidEther
          colors={[ '#0077c0', '#178fd7', '#37aff7' ]}
          mouseForce={20}
          cursorSize={90}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={1.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
  </div>
  )
}

export default Page1