
import AnimatedBackground from '../components/AnimatedBackground'
import Navigation from "@/components/Navigation";
import LogoPub from "@/components/LogoPub";
import Logo from "@/components/Logo";
import Competences from "@/components/Competences";
import ProjectsGallery from "@/components/ProjectsGallery";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

function Home() {
    const LogoBackgroundColorsLight = [
        "linear-gradient(180deg, #cc2222 0%, rgb(200, 200, 200) 100%)",
        "linear-gradient(180deg, #eeeeee 0%, rgb(220, 220, 255) 100%)",
        "linear-gradient(180deg, rgb(220, 220, 255) 0%, rgb(100, 100, 255) 100%)"
    ];


    const LogoBackgroundColorsDark = [
        "linear-gradient(180deg, #0d0d0d 0%, #000000 100%)",
        "linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)",
        "linear-gradient(180deg, #262626 0%, #0d0d0d 100%)"
    ];

    const AnimatedBackgroundColorsLight = [
        "rgb(200, 200, 200)",
        "rgb(220, 220, 255)",
        "rgb(255, 255, 255)"
    ];

    const AnimatedBackgroundColorsDark = [
        "rgb(13, 13, 13)",
        "rgb(210, 21, 21)",
        "rgb(26, 26, 26)"
    ];
    

    return (
          <main id="top" className="px-2 min-w-[375px] flex flex-col justify-between lg:mt-[57px] max-w-screen-xl
          ">

            {/*** BACKGOUND ***/}
            <div className="-z-40">
                <AnimatedBackground colorsLight={AnimatedBackgroundColorsLight} colorsDark={AnimatedBackgroundColorsDark}/>
            </div>

            {/*** NAVIGATION ***/}
            <div className="z-40 ml-50">
                <Navigation />
            </div>

            {/*** PUB LOGO ***/}
            <div className="z-40">
                <LogoPub />
            </div>

            {/*** ABOUT ***/}
            <div id="about" className="flex flex-col items-center mt-20 md:flex-row md:gap-10 mx-auto p-4 md:p-8">
                {/* Logo */}
                <Logo colorsLight={LogoBackgroundColorsLight} colorsDark={LogoBackgroundColorsDark} />
                
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
