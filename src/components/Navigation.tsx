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

    const handleClick = (item: any) => {
        setCurrentItem(item);
    };

    return (
        <div className="fixed ml-0 lg:ml-20 left-0 top-0 flex w-full justify-center border-b border-gray-300
                        bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl
                        // dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit
                        lg:left-auto lg:top-auto lg:w-auto lg:rounded-xl lg:border lg:p-4 lg:dark:bg-zinc-800/30"
             style={{ backdropFilter: 'blur(10px) brightness(0.8)', backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
            //  style={{ backdropFilter: 'blur(10px) brightness(0.8)', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >

            <div className="sm:mx-4 sm:block">
                <div className="space-x-4">
                {/* <div className="flex space-x-4"> */}
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => handleClick(item)}
                            className={classNames(
                                'transition-colors duration-300',
                                item === currentItem ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 text-sm font-montSemiBold'
                            )}
                            aria-current={item === currentItem ? 'page' : undefined}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navigation;
