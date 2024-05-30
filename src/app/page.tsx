
import Image from "next/image";

import AnimatedBackground from '../components/AnimatedBackground'
import Navigation from "@/components/Navigation";
import ProjectsGallery from "@/components/ProjectsGallery";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Logo from "@/components/Logo";
import Competences from "@/components/Competences";

function Home() {
    return (
          <main id="top" className="ml-2 min-w-[375px] flex flex-col justify-between mt-[57px] sm:mt-[93px] lg:mt-[57px] max-w-screen-xl">

            {/*** BACKGOUND ***/}
            <div className="-z-50">
                <AnimatedBackground />
            </div>

            {/*** NAVIGATION ***/}
            <div className="z-50 ml-50">
                <Navigation />
            </div>

            {/*** LOGO ***/}
            <div className="z-10 w-full font-mono text-sm lg:flex lg:justify-end lg:pr-[150px]">
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
                            height={45}
                            style={{ height: 'auto' }}
                            priority
                        />
                    </a>
                </div>
            </div>

            {/*** ABOUT ***/}
            <div id="about" className="flex flex-col items-center mt-20 md:flex-row md:gap-10 mx-auto p-4 md:p-8">
                <Logo />
                <div className="text-center z-20 mt-5 md:mt-0">
                    <h1 className="text-bold text-4xl md:text-8xl font-montBlack">Laurent Castell</h1>
                    <h2 className="text-gray-500 text-2xl md:text-6xl font-montExtraBold">Portfolio</h2>
                    <p className="italic mt-5 text-lg md:text-2xl font-montLight">"Passionné par l'intégration web, je vous invite à découvrir mes premiers pas dans ce monde captivant."</p>
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

            {/*** FORM ***/}
            <div id="contact" className="w-full mt-20">
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
