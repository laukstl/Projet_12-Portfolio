import type { Project } from "./ProjectsGallery";
import Link from 'next/link';
import { GithubIcon } from './icons';

const ProjectModal = ({ project }: { project: Project }) => {
    return (
        <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50 rounded-lg p-4 shadow-xl">
            <div className="w-full text-center">
                <h2 className="text-xl font-bold mb-4">{project.pname}</h2>
                <p>{project.desc}</p>
                <div className="flex flex-row items-center mt-10 gap-5 border justify-center">
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
