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
        <main id="top" className="ml-2 min-w-[375px] flex flex-col justify-between mt-[57px] sm:mt-[93px] lg:mt-[57px] overflow-hidden max-w-screen-xl">

            {/*** BACKGOUND ***/}
            <div className="-z-50">
                <AnimatedBackground />
            </div>

            {/*** NAVIGATION + LOGO ***/}
            <div className="z-50 ml-50">
                <Navigation />
            </div>
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mx-auto">
                {/* <Navigation /> */}
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
                            width={75}
                            // 150
                            height={45}
                            // 87
                            style={{ height: 'auto' }}
                            priority
                        />
                    </a>
                </div>
            </div>

            {/*** ABOUT ***/}
            <div id="about" className="flex flex-col items-center mt-20 md:flex-row gap-10 mx-auto">
                <div className="flex justify-center items-center">
                    <Image3D />
                </div>
                <div className="text-center">
                    <h1 className="text-bold text-8xl font-montBlack">Laurent Castell</h1>
                    <h2 className="text-gray-500 text-6xl font-montExtraBold">Portfolio</h2>
                    <p className="italic mt-5 text-2xl font-montLight">"Passionné par l'intégration web, je vous invite à découvrir mes premiers pas dans ce monde captivant."</p>
                </div>
            </div>

            {/*** COMPETENCES ***/}
            <div id="competence" className="mt-20 items-start">
                <h2 className="text-3xl mb-2 font-robotoThin">Compétences acquises :</h2>
                <hr className="z-5 border-t-1 border-gray-400 w-full mx-auto my-4" />
                <Competences />
            </div>

            {/*** GALLERY ***/}
            <div id="gallery" className="mt-20 z-20 md:z-0">
                <h2 className="text-3xl font-robotoThin">Derniers projets :</h2>
                <hr className="border-t-1 border-gray-400 w-full mx-auto my-4" />
                <div className="z-20 ">
                    <ProjectsGallery />
                </div>
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

            {/*** FORM ***/}
            <div id="contact" className="w-full mt-20">
                {/* <h2 className="font-bold text-3xl text-center">Contactez moi</h2> */}
                <h2 className="text-3xl mb-2 font-robotoThin">Pour me contacter :</h2>
                <hr className="z-10 border-t-1 border-gray-400 w-full mx-auto my-4" />
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
