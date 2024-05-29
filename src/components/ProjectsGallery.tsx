'use client';

import { useState } from 'react';
import Image from 'next/image';
import default_image from '/public/screenshots/erreur_card.webp';
import ProjectModal from './ProjectModal';
import { logo_listing } from './Competences';

export interface Project {
    prjt_numb: number;
    name: string;
    pname: string;
    date?: String;
    href: string;
    git: string;
    img: string;
    img_sm: string;
    techno: string[];
    desc: string;
}

const projects: Project[] = [
    { 
        prjt_numb: 3,
        name: 'booki',
        pname: 'Booki',
        date: '09/2023',
        href: 'https://p3.kstl.fr',
        git: 'https://github.com/laukstl/Projet_booki/',
        img: '/screenshots/3_booki_mid.png',
        img_sm: '/screenshots/3_booki_low.png',
        techno: ['htm', 'css'],
        desc: "Ce projet était ma première rencontre avec le HTML/CSS et le 'responsive design' à partir d'une maquette sur Figma."
     },
    {
        prjt_numb: 4,
        name: 'ohMyFood',
        pname: 'Oh My Food!',
        date: '11/2023',
        href: 'https://p4.kstl.fr',
        git: 'https://github.com/laukstl/OC_omf',
        img: '/screenshots/4_ohMyFood_mid.png',
        img_sm: '/screenshots/4_ohMyFood_low.png',
        techno: ['htm', 'sas'],
        desc: "Ce projet avait pour but une approche 'mobile first' pour l'étendre à une version desktop, et l'extension des fonctionalités du css en utilisant le pré-processeur Sass."
     },
    {
        prjt_numb: 8,
        name: 'kasa',
        pname: 'Kasa',
        date: '01/2024',
        href: 'https://p8.kstl.fr',
        git: 'https://github.com/laukstl/kasa-localrepos',
        img: '/screenshots/8_kasa_mid.png',
        img_sm: '/screenshots/8_kasa_low.png',
        techno: ['rea', 'sas'],
        desc: "Ce projet avait pour but de faire nos premiers pas avec React et React Router : création des routes, découpage du site en components, utilisation d'une base de donnée, ..."
     },
    {
        prjt_numb: 9,
        name: 'nina',
        pname: 'Nina Carducci',
        date: '02/2024',
        href: 'https://p9.kstl.fr',
        git: 'https://github.com/laukstl/nina---New-way',
        img: '/screenshots/9_nina_mid.png',
        img_sm: '/screenshots/9_nina_low.png',
        techno: ['js'],
        desc: "Ce projet était tourné vers l'optimisation SEO en améliorant ses performances et son accessibilité ( optimisation du code et des assets, références aux réseaux sociaux, ... )"
     },
    {
        prjt_numb: 10,
        name: '724Events',
        pname: '724 Events',
        date: '03/2024',
        href: 'https://p10.kstl.fr',
        git: 'https://github.com/laukstl/Debuggez-une-application-ReactJS',
        img: '/screenshots/10_724Events_mid.png',
        img_sm: '/screenshots/10_724Events_low.png',
        techno: ['rea', 'jst'],
        desc: "Ce projet avait pour but de nous apprendre à débugger un site grâce aux outils tels que React Developper Tools, ainsi que s'assurer de son bon fonctionnemùent à l'aide de tests Jest."
     },
    {
        prjt_numb: 11,
        name: 'argentBank',
        pname: 'Argent Bank',
        date: '04/2024',
        href: 'https://p11.kstl.fr',
        git: 'https://github.com/laukstl/ArgentBank',
        img: '/screenshots/11_argentBank_mid.png',
        img_sm: '/screenshots/11_argentBank_low.png',
        techno: ['ts', 'rtk', 'rea'],
        desc: "Ce projet nous demandait de découvrir Redux, mais m'a permis d'aller plus loin en découvrant Redux Tool Kit, son Query (RTKQ), le code splitting, ..."
     },
    {
        prjt_numb: 12,
        name: 'portfolio',
        pname: 'Portfolio',
        date: '05/2024',
        href: 'https://p12.kstl.fr',
        git: 'https://github.com/laukstl/',
        img: '/screenshots/12_portfolio_mid.png',
        img_sm: '/screenshots/12_portfolio_low.png',
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
                            // onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="flex flex-col min-w-[300px] w-full shadow-xl rounded-lg mob:h-auto
                            ">

                                <Image
                                    alt={'Image de' + item.name}
                                    className="h-full rounded-lg w-full object-cover"
                                    src={item.img ? item.img : default_image}
                                    width={1280}
                                    height={890}
                                />

                                {/* Bandeau du bas */}
                                <div className='bg-blur absolute inset-x-0 bottom-0 h-16 backdrop-blur-md m-4 p-1 rounded-lg border border-gray-500 flex justify-between'>
                                    <div className='ml-3 text-center flex-1'>
                                        <div className='font-bold text-white text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>{item.pname ? item.pname : "Titre"}</div>
                                        <div className='text-black drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]'>Projet N°{item.prjt_numb}: {item.date}</div>
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
