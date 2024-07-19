

const Navbar = () => {
  return (
    <nav className="w-full bg-black relative z-10 ">
      <img src="/gradient.svg" alt="" className="absolute w-full h-[500px] top-[0px] pointer-events-none -right-72  -z-10" />
      <img src="/gradient.svg" alt=""
       className="absolute w-full h-[400px] -top-[50px] pointer-events-none right-40  -z-10" />
      <div className="flex items-center justify-between gap-8 max-lg:px-6 px-4 py-4 max-w-5xl mx-auto relative z-20">
        <img src="/kidjig-logo.svg" alt="logo" className="lg:-translate-x-12" />
        <div className="flex gap-6 font-light max-md:hidden">
          <p>About</p>
          <p>Services</p>
          <p>Process</p>
          <p>Work</p>
          <p>Pricing</p>
          <p>FAQs</p>
        </div>
        <button className="px-5 py-3 border border-blueborder rounded-xl">
          Book a call
        </button>
      </div>
    </nav>
  )
}

export default Navbar