import { useState, useRef } from "react";

const TermsAndContionModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <button
            className="text-white font-bold text-sm underline flex"
            type="button"
            onClick={() => setShowModal(true)}
        >
            Consulta Términos y Condiciones
        </button>
        {showModal ? (
            <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                    <main className="relative p-6 flex-auto">
                        <header className="grid place-items-center gap-3">
                            <img className="w-[75px]" src="/atomic/alert_sign.png" alt="alert_image" />
                            <p className="font-bold text-xl">Términos y Condiciones</p>
                        </header>
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                            Para llevar a cabo las finalidades descritas en el presente Aviso de Privacidad, utilizaremos datos personales de identificación, contacto y laborales.
                        </p>
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                            Los datos personales que AtomicLabs recaba...
                        </p>
                        <li className="my-4 text-slate-500 text-lg leading-relaxed">
                            AtomicLabs requiere utilizar sus datos personales para incluirlo en la base de datos que utilizamos para prestar los servicios...
                        </li>
                    </main>

                    <footer className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                        className="text-orange-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                    >
                        cerrar
                    </button>
                    </footer>
                </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}
        </>
    );
}

export default TermsAndContionModal