'use client';

import { useState } from 'react';
import Image from 'next/image';
import default_image from '/public/screenshots/erreur_card.webp';
import ProjectModal from './ProjectModal';
import { logo_listing } from './Competences';

export interface Project {
    name: string;
    pname: string;
    href: string;
    git: string;
    img: string;
    techno: string[];
    desc: string;
}

const projects: Project[] = [
    { 
        name: 'booki',
        pname: 'Booki',
        href: 'https://p3.kstl.fr',
        git: 'https://github.com/laukstl/Projet_booki/',
        img: '/screenshots/3_booki_mid.png',
        techno: ['htm', 'css'],
        desc: "Ce projet était ma première rencontre avec le HTML/CSS et le 'responsive design' à partir d'une maquette sur Figma."
     },
    {
        name: 'ohMyFood',
        pname: 'Oh My Food!',
        href: 'https://p4.kstl.fr',
        git: 'https://github.com/laukstl/OC_omf',
        img: '/screenshots/4_ohMyFood_mid.png',
        techno: ['htm', 'sas'],
        desc: "Ce projet avait pour but une approche 'mobile first' pour l'étendre à une version desktop, et l'extension des fonctionalités du css en utilisant le pré-processeur Sass."
     },
    {
        name: 'kasa',
        pname: 'Kasa',
        href: 'https://p8.kstl.fr',
        git: 'https://github.com/laukstl/kasa-localrepos',
        img: '/screenshots/8_kasa_mid.png',
        techno: ['rea', 'sas'],
        desc: "Ce projet avait pour but de faire nos premiers pas avec React et React Router : création des routes, découpage du site en components, utilisation d'une base de donnée, ..."
     },
    {
        name: 'nina',
        pname: 'Nina Cardochi',
        href: 'https://p9.kstl.fr',
        git: 'https://github.com/laukstl/nina---New-way',
        img: '/screenshots/9_nina_mid.png',
        techno: ['js'],
        desc: "Ce projet était tourné vers l'optimisation SEO en améliorant ses performances et son accessibilité ( optimisation du code et des assets, références aux réseaux sociaux, ... )"
     },
    {
        name: '724Events',
        pname: '724 Events',
        href: 'https://p10.kstl.fr',
        git: 'https://github.com/laukstl/Debuggez-une-application-ReactJS',
        img: '/screenshots/10_724Event_mid.png',
        techno: ['rea', 'jst'],
        desc: "Ce projet avait pour but de nous apprendre à débugger un site grâce aux outils tels que React Developper Tools, ainsi que s'assurer de son bon fonctionnemùent à l'aide de tests Jest."
     },
    {
        name: 'argentBank',
        pname: 'Argent Bank',
        href: 'https://p11.kstl.fr',
        git: 'https://github.com/laukstl/ArgentBank',
        img: '/screenshots/11_argentBank_mid.png',
        techno: ['ts', 'rtk', 'rea'],
        desc: "Ce projet nous demandait de découvrir Redux, mais m'a permis d'aller plus loin en découvrant Redux Tool Kit, son Query (QTKQ), le code splitting, ..."
     },
    {
        name: 'portfolio',
        pname: 'Portfolio',
        href: 'https://p12.kstl.fr',
        git: 'https://github.com/laukstl/',
        img: '/screenshots/12_portfolio_mid.png',
        techno: ['ts', 'rea', 'nxt', 'tlw'],
        desc: "Et enfin ce dernier projet nous laissant la liberté d'utiliser toutes nos connaissances pour développer un portfolio. C'est pourquoi j'ai décidé d'aller toujours plus loin en apprenant NextJS et TailwindCSS."
     },
];

function ProjectsGallery() {
    const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

    return (
        <div className="relative">
            <div className="grid grid-cols-1 w-full gap-0 md:grid-cols-2 md:gap-5">
                {projects.map((item) => {
                    const filteredLogos = logo_listing.filter(logo => item.techno.includes(logo.techno));
                    return (
                        <div
                            key={item.name}
                            className="rounded-lg p-2 laptop:p-4 first:ml-0 link relative"
                            onClick={() => setHoveredProject(item)}
                            // onMouseEnter={() => setHoveredProject(item)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="flex flex-col min-w-[300px] w-full shadow-xl rounded-lg mob:h-auto">
                                <div className='flex'>
                                <Image
                                    alt={'Image de' + item.name}
                                    className="h-full rounded-lg w-full object-cover transition-all ease-out duration-300"
                                    src={item.img ? item.img : default_image}
                                    width={1280}
                                    height={890}
                                />
                                {/* <Image
                                    alt={'Image de' + item.name}
                                    className="h-full rounded-lg w-full object-cover transition-all ease-out duration-300"
                                    src={"/screenshots/3_booki_low.png"}
                                    width={500}
                                    height={764}
                                /> */}
                                </div>
                                <div className='z-2 bg-blur absolute inset-x-0 bottom-0 h-16 backdrop-blur-md m-4 p-1 rounded-lg border border-gray-500 flex justify-between'>
                                    <div>
                                        <div className='font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>{item.pname ? item.pname : "Titre"}</div>
                                        <div className='text-black drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]'>Description de {item.pname}</div>
                                    </div>
                                    <div className='flex gap-2 items-center mr-2'>
                                        {filteredLogos.map((logo) => (
                                            <div key={logo.alt}>
                                                <Image
                                                    alt={'Technologie de ' + logo.alt}
                                                    className="object-cover filter grayscale hover:filter-none transition-filter duration-300"
                                                    src={logo.src ? logo.src : default_image}
                                                    width={35}
                                                    height={35}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {hoveredProject === item && (
                                    <ProjectModal project={item} />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ProjectsGallery;
