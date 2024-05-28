// Idée : En mode mobile, mettre les screenshot mobile

import Image from "next/image";

import AnimatedBackground from '../components/AnimatedBackground'
import Navigation from "@/components/Navigation";
import ProjectsGallery from "@/components/ProjectsGallery";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Image3D from "@/components/Image3D";
import Competences from "@/components/Competences";

function Home() {
    return (
        <main className="ml-2 min-w-[575px] flex flex-col items-center justify-between mt-[57px] sm:mt-[93px] lg:mt-[57px] overflow-hidden">
        {/* <main className="flex min-h-screen flex-col items-center justify-between border border-red-500"> */}
        {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}

            {/*** BACKGOUND ***/}
            <div className="-z-50">
                <AnimatedBackground />
            </div>

            {/*** NAVIGATION + LOGO ***/}
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <Navigation />
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
                    <a
                        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        href="https://www.kstl.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{" "}
                        <Image
                            src="/kstl_logo.webp"
                            alt="Kstl Logo"
                            className="dark:invert"
                            width={150}
                            height={150}
                            priority
                        />
                    </a>
                </div>
            </div>

            {/*** ABOUT ***/}
            <div id="about" className="flex items-center">
                <div className="text-center">
                    <h1 className="text-bold text-4xl">Laurent Castell</h1>
                    <h2 className="text-2xl">Portfolio</h2>
                    <p className="italic mt-2">"Passionné par l'intégration web, je vous invite à découvrir mes premiers pas dans ce monde captivant."</p>
                </div>
                    <div className="flex justify-center items-center">
                        <Image3D />
                    </div>
            </div>

            {/*** GALLERY ***/}
            <div id="gallery">
                <h2 className="font-bold text-3xl text-center">Projects :</h2>
                <ProjectsGallery />
            </div>

            {/*** Card Titre Flèche Desc ***/}
            {/* <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
                <a
                    href="https://www.google.com"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        Docs{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        You can click, yall go on google.
                    </p>
                </a>
            </div> */}


            {/*** COMPETENCES ***/}
            <div id="competence" className="font-bold text-3xl text-center">
                <h2>Competences</h2>
                <Competences />
            </div>

            {/*** FORM ***/}
            <div id="contact" className="w-full mt-20">
                <h2 className="font-bold text-3xl text-center">Contactez moi</h2>
                <ContactForm />
            </div>

            {/*** FOOTER ***/}
            <div className="mt-20">
                <Footer />
            </div>
        </main>
    );
}

export default Home;
