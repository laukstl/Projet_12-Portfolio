
import Image from "next/image";

export const logo_listing = [
    { src: "./icons/html5.svg", alt: "Html", techno: "htm", w: 512, h: 512 },
    { src: "./icons/css3.svg", alt: "Css", techno: "css", w: 1024, h: 1024 },
    { src: "./icons/js.svg", alt: "Javascript", techno: "js", w: 2500, h: 2500 },
    { src: "./icons/scss.svg", alt: "Scss", techno: "sas", w: 800, h: 800 },
    { src: "./icons/nodejs.svg", alt: "NodeJS", techno: "njs", w: 2500, h: 1533 },
    { src: "./icons/ts.svg", alt: "Typescript", techno: "ts", w: 2500, h: 2500  },
    { src: "./icons/redux.svg", alt: "Redux", techno: "rtk", w: 2500, h: 2383 },
    { src: "./icons/jest.svg", alt: "Jest", techno: "jst", w: 800, h: 800 },
    { src: "./icons/react.svg", alt: "React", techno: "rea", w: 2194, h: 2500 },
    { src: "./icons/tailwind.svg", alt: "Tailwind", techno: "tlw", w: 54, h: 33 },
    { src: "./icons/next-js.svg", alt: "Next", techno: "nxt", w: 1024, h: 1024 },
    // { src: "./icons/express.svg", alt: "Express", techno: "xps", w: 800, h: 800 },
]

function Competences () {
    return (
        <div className="flex flex-wrap gap-2">
            {logo_listing.map((item) => (
                <div className="px-4 py-2 border border-grey-500 rounded-lg flex grow h-12 items-center justify-center
                                bg-slate-500 hover:bg-slate-400 text-white
                                dark:rounded-none
                                "
                                key={item.techno}>
                    {/* <img
                    className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8) w-[35px] h-[35px]"
                    src={item.src}
                    alt={`Technologie ${item.alt}`}
                    // width={width}
                    // height={height}
                    loading="lazy"
                    />
                    <div className="font-light text-semibold text-lg m-2 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                        {item.alt}
                    </div> */}

                    <Image
                    className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8) w-[35px] h-[35px]"
                    src={item.src}
                    alt={`Technologie ${item.alt}`}
                    width={item.w}
                    height={item.h}
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                    }}
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