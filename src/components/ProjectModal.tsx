import type { Project } from "./projectsData";
import Link from 'next/link';
import { GithubIcon } from './icons';

const ProjectModal = ({ project }: { project: Project }) => {
    return (
            <div className="absolute inset-0 bg-white bg-opacity-95 flex gap-2 items-center justify-center z-20 rounded-lg dark:rounded-none p-4 shadow-xl overflow-hidden">
                {/* screenshot */}
                <img
                    alt={'Image de' + project.name}
                    className="w-1/5 h-full object-cover shadow-slate-300 shadow-lg sm:w-full"
                    src={project?.img_sm}
                />

                {/* textes + buttons */}
                <div className="w-full text-center mb-12">
                    {/* textes */}
                    <h4 className="text-xl font-bold mb-4 sm:text-3xl"
                    >{project.pname}</h4>
                    <p className="text-xs text-black drop-shadow-[0_1.2px_1.2px_rgba(100,100,100,0.5)] sm:text-sm"
                    >{project.desc}</p>

                    {/* container à buttons */}
                    <div className="flex flex-row items-center mt-10 gap-5 justify-center">
                        <Link
                            key={project.name}
                            href={project.href}
                            target="_blank"
                            className={'transition-colors duration-300 bg-gray-200 text-gray-500 hover:bg-gray-700 hover:text-white rounded-md dark:rounded-none px-3 py-2 text-sm font-medium'}
                        >
                            Site live
                        </Link>

                        <Link
                            href={project.git}
                            target="_blank"
                            className={'transition-colors duration-300 bg-gray-200 text-gray-500 hover:bg-gray-700 hover:text-white rounded-md dark:rounded-none px-3 py-2'}
                        >
                            <GithubIcon />
                        </Link>
                    </div>
                </div>
            </div>
    );
};

export default ProjectModal;
