'use client';

import Image from "next/image";

const logo_listing = [
    { src: "./js.svg", alt: "Javascript" },
    { src: "./ts.svg", alt: "Typescript" },
    { src: "./react.svg", alt: "React" },
    { src: "./redux.svg", alt: "Redux" },
    { src: "./next-js.svg", alt: "Next" },
]

function Competences () {
    return (
        <div className="flex gap-2">
            {logo_listing.map((item) => (
                <Image
                src={item.src}
                alt={item.alt}
                width={100}
                height={100}
                loading="lazy"
                />
            ))}
         </div>
    )
}

export default Competences;