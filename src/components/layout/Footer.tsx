import Link from "next/link";

const Footer = () => (
    <footer className="bg-black text-white text-xl font-bold w-screen h-[10%] flex items-center justify-evenly">
        <p>&#169;​ AtomicLabs. Todos los derechos reservados</p>

        <a href="#">Aviso de privacidad</a>

        <div className="flex items-center gap-10 ">
            <Link href="#">
                <img src="/atomic/linkedin@2x.png" alt="linkedin logo" />
            </Link>
            <Link href="#">
                <img src="/atomic/twitter@2x.png" alt="linkedin logo" />
            </Link>
        </div>
    </footer>
);

export default Footer