

const FormLayout = ({children, stepState, config}:any) => {
    const [ currStep, setCurrStep ] = stepState;

    return (
        <>
            <main className="bg-blue-950 h-screen py-10 px-16">
                <header>
                    <img src="/atomic/LogoAtomic.webp" alt="atomic-logo" />
                </header>
                <main className="bg-[url('/atomic/bg-svg.svg')] bg-cover bg-no-repeat h-full flex">
                    <section className="w-2/3">
                        <header>
                            <div className="w-full flex justify-evenly align-center">
                                <button>1</button>
                                <button>2</button>
                                <button>3</button>
                                <button>4</button>
                            </div>
                            <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                                <div className={`h-4 bg-orange-600 rounded-full dark:bg-orange-500 w-[${currStep*20}%]`}></div>
                            </div>
                            <button
                                onClick={() => setCurrStep((curr:number) =>  curr - 1 )}
                                className="text-white flex space-x-2 items-center"
                            >
                                <svg className="text-xs text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                                </svg>
                                <span>Regresar</span>
                            </button>
                        </header>

                        {children}

                    </section>
                    <aside className="w-1/3">
                        <img 
                            className="w-full"
                            src={config.image} alt="atomic astronaun image" 
                        />
                    </aside>
                </main>
            </main>
            <footer>
                <p>Todos los derechos reservados</p>

                <a href="#">Aviso de privacidad</a>

                <div>redes socuales</div>
            </footer>
        </>
    )
}

export default FormLayout;