'use client';

import { useState } from 'react';
import Link from 'next/link';

const navigation = [
    { name: 'Haut', href: '#top', current: true },
    { name: 'Compétences', href: '#competence' },
    { name: 'Projets', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
];

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}

function Navigation() {
    const [currentItem, setCurrentItem] = useState(navigation.find(item => item.current) || null);

    const handleClick = (item: any, event: any) => {
        setCurrentItem(item);
        if (item.href === '#competence') { // project ??
            event.preventDefault();
            scrollToSection(item.href);
        }
    };

    const scrollToSection = (href: string) => {
        const id = href.substring(1); // - #
        const targetElement = document.getElementById(id);
        if (targetElement) {
            const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2 - targetElement.clientHeight / 2);
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        // bandeau
        <div className="fixed ml-0 left-0 top-0 flex w-full justify-center py-0
                        border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl
                        // dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit
                        md:p-4
                        lg:py-6 lg:ml-20 lg:left-auto lg:top-auto lg:w-auto lg:rounded-xl lg:border lg:p-4 lg:dark:bg-zinc-800/30"
            style={{ backdropFilter: 'blur(10px) brightness(0.8)', backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
        >

            {/* container à bouttons */}
            <div className="sm:mx-4 sm:block space-x-4">
                {/* bouttons */}
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={(event) => handleClick(item, event)}
                        className={classNames(
                            'transition-colors duration-300 rounded-md px-3 py-2 text-sm font-montSemiBold drop-shadow-md border-b border-gray-400',
                            item === currentItem ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-700 hover:text-white',
                            'md:filter-none',
                            'lg:filter-none lg:border-none',
                        )}
                        aria-current={item === currentItem ? 'page' : undefined}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Navigation;
