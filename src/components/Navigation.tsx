'use client';

import { useState } from 'react';
import Link from 'next/link';

const navigation = [
  { name: 'About', href: '#about', current: true },
  { name: 'Projects', href: '#gallery' },
  { name: 'Competences', href: '#competence' },
  { name: 'Contact', href: '#contact' },
];

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ');
}

function Navigation() {
  const [currentItem, setCurrentItem] = useState(navigation.find(item => item.current) || null);

  const handleClick = (item:any) => {
    setCurrentItem(item);
  };

  return (
    <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <div className="sm:ml-6 sm:block">
        <div className="flex space-x-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => handleClick(item)}
              className={classNames(
                'transition-colors duration-300',
                item === currentItem ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-300 hover:bg-gray-700 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium'
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
