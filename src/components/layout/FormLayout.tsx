import { memo, useEffect, useState } from "react";
import Footer from "./Footer";

const FormLayout = ({children, stepState, config}:any) => {
    const [ currStep, setCurrStep ] = stepState;
    const [ steps, setSteps ] = useState<string[]>([])

    //tailwind does not support dynamic clases
    const percentage = () => {
        switch(currStep) {
            case 1:
                return 'w-[20%]'
            case 2:
                return 'w-[40%]'
            case 3:
                return 'w-[60%]'
            case 4:
                return 'w-[80%]'
        }
    }
    
    const renderSteps = () => {
        let generateSteps = [];
        let i = 1;
        while(i <= 4) {
            if(i < currStep) generateSteps.push('/atomic/checked.png');
            if(i > currStep) generateSteps.push(`/atomic/${i}outlined.png`)
            if(i === currStep) generateSteps.push(`/atomic/${i}outlinedcolor.png`)
            i++;
        }
        
        setSteps(generateSteps)
    }

    useEffect(() => {
        renderSteps()
    }, [currStep])

    return (
        <>
            <main className="bg-blue-950 h-screen py-10 px-16">
                <header>
                    <img src="/atomic/LogoAtomic.webp" alt="atomic-logo" />
                </header>
                <main className="bg-[url('/atomic/bg-svg.svg')] bg-cover bg-no-repeat h-full flex">
                    <section className="w-2/3">
                        <header className="py-10">
                            <div className="w-full flex justify-evenly align-center py-3">
                                {steps.map((item:string, key:number) => (
                                    <img src={item} key={key} alt="step image" />
                                ))}
                            </div>
                            <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                                <div className={`h-4 rounded-full transition-all dark:bg-orange-500 ${percentage()}`}></div>
                            </div>
                            {currStep !== 1 &&
                                <button
                                    onClick={() => setCurrStep((curr:number) =>  curr - 1 )}
                                    className="text-white flex space-x-2 items-center"
                                >
                                    <svg className="text-xs text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                                    </svg>
                                    <span>Regresar</span>
                                </button>
                            }
                        </header>

                        {children}

                    </section>
                    <aside className="w-1/3">
                        <img 
                            className="w-full animate-float-element transition-all"
                            src={config.image} alt="atomic astronaun image" 
                        />
                    </aside>
                </main>
            </main>
            <Footer />
        </>
    )
}

export default memo(FormLayout);