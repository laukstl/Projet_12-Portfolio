
import Image from "next/image";

export const logo_listing = [
    { src: "./icons/html5.svg", alt: "Html", techno: "htm"  },
    { src: "./icons/css3.svg", alt: "Css", techno: "css"  },
    { src: "./icons/js.svg", alt: "Javascript", techno: "js" },
    { src: "./icons/scss.svg", alt: "Scss", techno: "sas"  },
    { src: "./icons/ts.svg", alt: "Typescript", techno: "ts"  },
    { src: "./icons/redux.svg", alt: "Redux", techno: "rtk"  },
    { src: "./icons/jest.svg", alt: "Jest", techno: "jst"  },
    { src: "./icons/react.svg", alt: "React", techno: "rea"  },
    { src: "./icons/next-js.svg", alt: "Next", techno: "nxt"  },
    { src: "./icons/tailwind.svg", alt: "Tailwind", techno: "tlw"  },
]

function Competences () {
    return (
        <div className="flex flex-wrap gap-2">
            {logo_listing.map((item) => (
                <div className="px-4 py-2 border border-grey-500 rounded-lg flex grow h-12 items-center justify-center
                                bg-slate-500 hover:bg-slate-400 text-white
                                "
                                key={item.techno}>
                    <Image
                    className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                    src={item.src}
                    alt={`Technologie ${item.alt}`}
                    width={35}
                    height={35}
                    loading="lazy"
                    />
                    <div className="font-light text-semibold text-lg m-2 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                        {item.alt}
                    </div>
                </div>
            ))}
         </div>
    )
}

export default Competences;