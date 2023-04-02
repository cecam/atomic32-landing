import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IProps {
    show:boolean,
    setShowSplash: Dispatch<SetStateAction<boolean>>
}

function SplashScreen({show, setShowSplash}:IProps) {
    const [status, setStatus] = useState(2);

    //in a real case, this would change for a promise
    useEffect(() => {
        if(show) {                
            setStatus(0)
            setTimeout(() => {
                setStatus(1)
                setTimeout(() => {
                    setStatus(2)
                    setShowSplash(false)
                }, 2000)
            }, 2000)        
        }
    }, [show]);

    const renderSplash = (text:string, image: string) => (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-blue-900 opacity-75 flex flex-col items-center justify-center">
            <img src={image} alt="splash image" className="w-[100px] mb-4" />
            <p className="w-1/3 text-center text-white text-lg">{text}</p>
        </div>
    )

    return (
        <>
            {status === 0 ? (
                renderSplash('Te estamos enviando el código...', '/atomic/paper_plane.webp')
            ) : status === 1 ? (
                renderSplash('Código enviado!', '/atomic/checkmark@2x.png')
            ) : (
                null
            )
            }
        </>
    );
}

export default SplashScreen;
