
import Image from 'next/image';

import default_image from '/public/images/erreur_card.webp';
import ProjectModal from './ProjectModal';

const projects = [
    { name: 'booki', pname: 'Booki', href: 'https://p3.kstl.fr', img: '/images/3_booki_mid.png' },
    { name: 'ohMyFood', pname: 'Oh My Food!', href: 'https://p4.kstl.fr', img: '/images/4_ohMyFood_mid.png' },
    { name: 'kasa', pname: 'Kasa', href: 'https://p8.kstl.fr', img: '/images/8_kasa_mid.png' },
    { name: 'nina', pname: 'Nina Cardochi', href: 'https://p9.kstl.fr', img: '/images/9_nina_mid.png' },
    { name: '724Events', pname: '724 Events', href: 'https://p10.kstl.fr', img: '/images/10_724Event_mid.png' },
    { name: 'argentBank', pname: 'Argent Bank', href: 'https://p11.kstl.fr', img: '/images/11_argentBank_mid.png' },
]


function ProjectsGallery() {
    return (
        <div className="grid grid-cols-1 w-full gap-0 md:grid-cols-2 md:gap-5">
            {projects.map((item) => (
                <a
                    key={item.name}
                    className="rounded-lg p-2 laptop:p-4 first:ml-0 link"
                    href={item.href}
                    target="_blank"
                >
                    <div
                        className="hover:scale-105 flex flex-col min-w-[300px] w-full shadow-xl relative rounded-lg transition-all ease-out duration-300 mob:h-auto"
                        // style={{ height: "150px", width: "300px" }}
                    >
                        <Image
                            alt={'Image de' + item.name}
                            className="h-full rounded-lg w-full object-cover transition-all ease-out duration-300"
                            // className="h-full rounded-lg w-full object-cover hover:scale-105 transition-all ease-out duration-300"
                            src={item.img ? item.img : default_image}
                            width={500}
                            height={500} 
                        ></Image>
                        <div className='z-2 bg-blur absolute inset-x-0 bottom-0 h-16 backdrop-blur-md m-1 p-1 rounded-lg border'>
                            <div className='font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>{item.pname ? item.pname : "Titre"}</div>
                            <div className='text-black drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]'>Description de {item.pname}</div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default ProjectsGallery;
