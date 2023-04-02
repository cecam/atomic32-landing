import Footer from '@/components/layout/Footer'

const ThanksPage = () => (
    <div className="bg-blue-950 h-screen ">

        <main className="bg-[url('/atomic/bg-svg.svg')] bg-cover bg-no-repeat h-[90%] py-10 px-16 flex justify-evenly items-stretch">
            <header>
                <img src="/atomic/LogoAtomic.webp" alt="atomic-logo" />
            </header>
            <section className="flex flex-col justify-center w-2/4 gap-10">
                <header className="flex flex-col py-5">
                        <h1 className="text-5xl uppercase font-bold tracking-wide text-white">
                            tus datos <span className="text-orange-600">han sido enviados con éxito</span>
                        </h1>
                </header>

                <p 
                    className="text-white text-2xl tracking-wide"
                >En breve recibirás un correo de confirmación por parte del equipo de AtomicLabs</p>
                
                <div>
                    <p
                        className="text-white text-lg"
                    >Recuerda revisar tu bandeja de SPAM</p>
                    <p
                        className="text-white text-lg"
                    >¡Esperamos verte pronto!</p>
                </div>

            </section>
            <aside className="w-2/4 flex justify-center">
                <img 
                    className="w-3/4 h-auto"
                    src="/atomic/a-4.png" alt="atomic astronaun image" 
                />
            </aside>
        </main>

        <Footer />
    </div>
)

export default ThanksPage