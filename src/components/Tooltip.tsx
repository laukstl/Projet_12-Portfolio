
interface ttProps {
    alt: string;
    tx: any;
    ty: any;
}

function Tooltip( {alt, tx, ty}: ttProps ) {
    return (
        <span className={`
            group-hover:opacity-90 bg-blur transition-opacity bg-gray-800 py-1 px-2 text-sm text-gray-100 rounded-md absolute left-1/2
            drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]
            dark:bg-gray-50 dark:text-gray-900 dark:border dark:border-gray-900
            opacity-0 m-4 mx-auto z-50
            ${tx} ${ty}
        `}>{alt}</span>
    )
}

export default Tooltip;
