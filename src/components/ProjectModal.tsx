import type { Project } from "./ProjectsGallery";
import Link from 'next/link';
import { GithubIcon } from './icons';

const ProjectModal = ({ project }: { project: Project }) => {
    return (
        <div className="absolute inset-0 bg-white bg-opacity-95 flex gap-2 items-center justify-center z-20 rounded-lg p-4 shadow-xl overflow-hidden">
                <img
                    alt={'Image de' + project.name}
                    className="w-full h-full object-cover shadow-slate-300 shadow-lg"
                    // className="h-full rounded-lg w-full object-cover transition-all ease-out duration-300"
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
        </div>
    );
};

export default ProjectModal;
