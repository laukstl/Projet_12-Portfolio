'use client';

import { useState } from 'react';
import Image from 'next/image';
import ProjectModal from './ProjectModal';
import { logo_listing } from './Competences';
import { projects } from './projectsData';
import type { Project } from './projectsData';
import Link from 'next/link';
import { GithubIcon } from './icons';
import { AnimatePresence, motion } from 'framer-motion';

import { ListBulletIcon, TableCellsIcon } from '@heroicons/react/24/outline';

function ProjectsGallery() {
    const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
    const [isGalleryMode, setIsGalleryMode] = useState<boolean>(true);

    return (
        <>
            <div className='flex mb-3 gap-2'>
                <ListBulletIcon className={`w-8 h-8 ${isGalleryMode ? 'text-gray-700' : 'text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)]'}`} role="button" onClick={() => setIsGalleryMode(false)} />
                <TableCellsIcon className={`w-8 h-8 ${isGalleryMode ? 'text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)]' : 'text-gray-700'}`} role="button" onClick={() => setIsGalleryMode(true)} />
            </div>

            <div className={`flex flex-col items-center w-full gap-2 md:gap-5 ${isGalleryMode ? 'lg:grid lg:grid-cols-2' : 'flex flex-col items-center'}`}>
                {projects.map((item) => {
                    const filteredLogos = logo_listing.filter(logo => item.techno.includes(logo.techno));

                    if (isGalleryMode) {
                        return (
                            <motion.div
                                key={`gallery-${item.name}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="box rounded-lg dark:rounded-none laptop:p-4 first:ml-0 link relative max-w-[622px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                                onMouseEnter={() => setHoveredProject(item)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                <div className="flex flex-col min-w-[300px] w-full shadow-xl rounded-lg dark:rounded-none mob:h-auto">
                                    <Image
                                        alt={'Screenshot de ' + item.name}
                                        className="h-full rounded-lg dark:rounded-none w-full object-cover"
                                        src={item.img}
                                        width={1280}
                                        height={890}
                                    />
                                    <div className='z-40 bg-blur bg-black/50 absolute inset-x-0 bottom-0 h-10 backdrop-blur-md rounded-b-lg dark:rounded-none border border-gray-500 flex justify-between items-center text-nowrap sm:h-16 sm:p-1'>
                                        {/* titre projet et date */}
                                        <div className='ml-2 sm:text-center flex items-center'>
                                            <div className='font-bold text-white text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-2xl'>{item.pname ? item.pname : "Titre"}</div>
                                            <div className='text-white text-sm ml-3 sm:text-xl sm:ml-5'>Projet {item.prjt_numb}: {item.date}</div>
                                        </div>
                                        {/* competences */}
                                        <div className='flex gap-2 items-center mr-2'>
                                            {filteredLogos.map((logo) => (

                                                    <div key={`gallery-${item.name}-${logo.alt}`} className='group flex relative w-8 h-8'>
                                                        <Image
                                                            alt={'Technologie de ' + logo.alt}
                                                            className="object-fit filter grayscale hover:filter-none transition-filter duration-300 sm:w-10 drop-shadow-[0_1.1px_1.1px_rgba(5,5,5,0.6)]"
                                                            src={logo.src}
                                                            width={35}
                                                            height={35}
                                                        />
                                                        {/* Tooltip */}
                                                        <span className="group-hover:opacity-90 bg-blur transition-opacity bg-gray-800 py-1 px-2 text-sm text-gray-100 rounded-md absolute left-1/2 
                                                        drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]
                                                        dark:bg-gray-50 dark:text-gray-900 dark:border dark:border-gray-900
                                                        -translate-x-1/2 -translate-y-14 opacity-0 m-4 mx-auto z-50">{logo.alt}</span>
                                                    </div>

                                            ))}
                                        </div>
                                    </div>
                                    <AnimatePresence>
                                        {hoveredProject === item ? (

                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <ProjectModal project={item} />
                                            </motion.div>

                                        ) : null
                                        }
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    } else {
                        return (
                            <motion.div
                                key={`list-${item.name}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="box flex flex-col items-center w-full"
                            >
                                <div className="w-full mb-4 p-4 border rounded-lg dark:rounded-none shadow-lg flex gap-5 bg-gray-300 dark:bg-gray-500">
                                    <Image
                                        alt={'Screenshot de ' + item.name}
                                        className="rounded-lg dark:rounded-none w-1/6 object-cover hidden md:block"
                                        src={item.img}
                                        width={1280}
                                        height={890}
                                    />
                                    <div>
                                        <div className='grid grid-cols-2 sm:grid-cols-3'>
                                            {/* titre, projet et date */}
                                            <div className="flex flex-col justify-start items-start">
                                                <h2 className="text-nowrap text-2xl font-bold">{item.pname}</h2>
                                                <p className="text-gray-700">Projet {item.prjt_numb}: {item.date}</p>
                                            </div>
                                            {/* competences */}
                                            <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                                Tooltip content
                                                <div className="tooltip-arrow" data-popper-arrow></div>
                                            </div>
                                            <div className='hidden sm:flex justify-center items-center gap-2'
                                                data-tooltip-target="tooltip-default">
                                                {filteredLogos.map((logo) => (
                                                    <div key={`list-${item.name}-${logo.alt}`}>
                                                        <Image
                                                            alt={'Technologie de ' + logo.alt}
                                                            className="w-8 object-cover filter grayscale hover:filter-none transition-filter duration-300 sm:w-10 drop-shadow-[0_1.1px_1.1px_rgba(5,5,5,0.6)]"
                                                            src={logo.src}
                                                            width={35}
                                                            height={35}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                            {/* container à buttons */}
                                            <div className="flex justify-end items-start mt-2 gap-5">
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    target="_blank"
                                                    className={'flex items-center h-full transition-colors duration-300 bg-gray-200 text-gray-500 hover:bg-gray-700 hover:text-white rounded-md dark:rounded-none px-3 py-2 text-sm font-medium'}
                                                >
                                                    Site live
                                                </Link>

                                                <Link
                                                    href={item.git}
                                                    target="_blank"
                                                    className={'flex items-center h-full transition-colors duration-300 bg-gray-200 text-gray-500 hover:bg-gray-700 hover:text-white rounded-md dark:rounded-none px-3 py-2'}
                                                >
                                                    <GithubIcon />
                                                </Link>
                                            </div>
                                        </div>
                                        <p className="mt-2">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );

                    }
                })}
            </div>
        </>
    );
}

export default ProjectsGallery;
