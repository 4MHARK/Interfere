// import { react } from 'react'
function App() {
  return (
    <>
      {/* outer Wrapper */}
      <div className="bg-[#0B0B0B] min-h-screen relative text-white">

        {/* Glow layer*/}
        <div className="pointer-events-none w-full h-[500px] blur-3xl absolute bg-gradient-to-r from-[#3E1E18] via-[#0A1825]/40 to-transparent blur-3xl bottom-0"></div>

        {/* text-layout/ navbar */}
        <div className="relative z-10 w-full">
          <nav className="md:px-10 lg:px-50 py-5 border-b border-[#3A3A3B] flex justify-between">

            {/* logo */}
            <div className="text-xl">Interfere</div>

            {/* links */}
            <div className="flex gap-6">
              <a href="#">Product</a>
              <a href="#">Resources</a>
              <a href="#">Company</a>
              <a href="#">Contact</a>
            </div>

            {/* auth-btn */}
            <div className="flex gap-6">
              <button>Login</button>
              <button className="rounded-lg bg-[#202022] px-4 py-2 text-sm font-medium">Sign up</button>
            </div>
          </nav>

              {/* hero */}
      <section className="py-24 md:px-10 lg:px-50 flex justify-between gap-16">
  <div className="flex-1 ">
    <h1 className="text-5xl font-bold leading-tight">
      Ship software that<br/> never <span className="font-serif italic">breaks</span>
    </h1>
  </div>
  <div className="flex-1 text-right">
    <p className="text-neutral-400 max-w-md ml-auto">
      Interfere empowers engineers, product managers and designers with real-time understanding of previously unseen bugs and issues.
    </p>
    <div className="mt-5 flex gap-3 justify-end">
      <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200">
        Sign up
      </button>
      <button className="rounded-lg bg-[#202022] px-4 py-2 text-sm font-medium hover:bg-[#2a2a2c]">
        Contact Sales
      </button>
    </div>
  </div>
</section>
        </div>
      </div>
    </>
  )
}

export default App
