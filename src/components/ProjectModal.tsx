import { motion } from 'framer-motion';
import type { Project } from "./ProjectsGallery";
import Link from 'next/link';
import { GithubIcon } from './icons';

const ProjectModal = ({ project }: { project: Project }) => {
    return (
        // FADE
        // <motion.div 
        //     initial={{ opacity: 0 }}
        //     animate={{ opacity: 1 }}
        //     exit={{ opacity: 0 }}
        //     transition={{ duration: 0.5 }}
        //     className="absolute inset-0 bg-white bg-opacity-95 flex gap-2 items-center justify-center z-20 rounded-lg p-4 shadow-xl overflow-hidden"
        // >

        // zoom BOUNCE
        <motion.div
        className="box absolute inset-0 bg-white bg-opacity-95 flex gap-2 items-center justify-center z-20 rounded-lg p-4 shadow-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 15,
            stiffness: 200,
            restDelta: 0.001
          }
        }}
      >

            <img
                alt={'Image de' + project.name}
                className="w-full h-full object-cover shadow-slate-300 shadow-lg"
                src={project.img_sm}
            />
            <div className="w-full text-center">
                <h2 className="text-3xl font-bold mb-4">{project.pname}</h2>
                <p className="drop-shadow-[0_1.2px_1.2px_rgba(100,100,100,0.5)]">{project.desc}</p>
                <div className="flex flex-row items-center mt-10 gap-5 justify-center">
                    <Link
                        key={project.name}
                        href={project.href}
                        className={'transition-colors duration-300 bg-gray-200 text-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'}
                    >
                        Site live
                    </Link>

                    <Link
                        href={project.git}
                        className={'transition-colors duration-300 bg-gray-200 text-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'}
                    >
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectModal;
