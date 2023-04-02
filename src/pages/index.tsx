import Link from "next/link"

export default function Page() {
  return (
    <section className="h-screen w-screen bg-no-repeat bg-cover bg-center bg-sticky" style={{ backgroundImage: `url('/atomic/bg-space-lg.png')` }}>
      <header className="p-10 w-[300px]">
        <Link href="/">
          <img src="/atomic/LogoAtomic.webp" className="w-full h-auto" alt="atomic-logo" />
        </Link>
      </header>
      <div className="py-10 px-10 flex">
        <aside className="w-full ">
              <img 
                  className="w-full h-auto animate-float-element"
                  src="/atomic/a-5.png" alt="atomic astronaun image" 
              />
          </aside>
        <main className="py-10 px-16 grid place-items-center">          
          <section className="grid place-items-center w-3/4 gap-10">              
              <h1 className="text-6xl font-bold tracking-wide text-white">
                  Desarrolla todo 
                  <span className="text-orange-600"> tu Potencial </span> 
                  dentro del equipo 
                  <span className="text-orange-600">ATOMIC</span>LABS
              </h1>              

              <Link href="/register" className="w-full grid place-items-center"> 
                <button 
                  className="bg-white rounded-full text-2xl text-blue-900 py-3 px-10"
                >
                  ¡Quiero ser parte!
                </button>
              </Link>

          </section>          
        </main>
      </div>
    </section>
  )
}
