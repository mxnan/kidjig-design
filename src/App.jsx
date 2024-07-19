import Navbar from "./components/navbar"

function App() {


  return (
    <main className=" relative bg-[url('/bg-lines.png')] font-outfit text-white h-[100vh] overflow-hidden  w-full z-10">


      <img src="/bg-lines.png" alt="bg-img" className=" absolute top-0 -z-30 hidden  " />
      <Navbar />
      <section className="max-w-5xl mx-auto w-full h-full
       flex flex-col justify-center gap-16 -translate-y-24
       px-4
       ">
        <div className="flex flex-col justify-center  gap-6">
          <p className="text-[56px] leading-[70px]">Empowering Lives Through
            <br /> Innovative
            <span className="font-bold relative mx-3">
              <span className="absolute -bottom-0 w-full h-2  bg-blueborder" />
              AI</span>
            Technologies. </p>
          <p className="text-[22px] text-greytext">Finding new horizons for visionaries to accelerate their innovation and progress.</p>
          <div className="space-x-4">
            <button className="capitalize font-medium text-lg px-8 py-3 bg-[#6A35FF] rounded-xl">Explore our services</button>
            <button className="capitalize font-medium text-lg px-8 py-3 border border-blueborder rounded-xl">Learn more</button>
          </div>
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            <p className="text-xl opacity-50">From Ideas to Software Solutions 💡✨ </p>
            <p className="text-xl opacity-80">From Ideas to Software Solutions 💡✨ </p>
            <p className="text-xl opacity-100">From Ideas to Software Solutions 💡✨ </p>
            <p className="text-xl opacity-80">From Ideas to Software Solutions 💡✨ </p>
            <p className="text-xl opacity-50">From Ideas to Software Solutions 💡✨ </p>
          </div>
        </div>

      </section>
    </main>
  )
}

export default App
