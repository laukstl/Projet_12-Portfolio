export interface Project {
    prjt_numb: number;
    name: string;
    pname: string;
    date?: string;
    href: string;
    git: string;
    img: string;
    img_sm: string;
    techno: string[];
    desc: string;
}

export const projects: Project[] = [
    {
        prjt_numb: 3,
        name: 'booki',
        pname: 'Booki',
        date: '09/2023',
        href: 'https://p3.kstl.fr',
        git: 'https://github.com/laukstl/Projet_booki/',
        img: '/screenshots/3_booki_mid.png',
        img_sm: './screenshots/3_booki_low.png',
        techno: ['htm', 'css'],
        desc: "Ce projet a marqué ma première incursion dans le domaine du HTML/CSS et du 'responsive design', à partir d'une maquette sur Figma que j'ai dû suivre méticuleusement, respectant ainsi le travail du designer UI."
    },
    {
        prjt_numb: 4,
        name: 'ohMyFood',
        pname: 'Oh My Food!',
        date: '11/2023',
        href: 'https://p4.kstl.fr',
        git: 'https://github.com/laukstl/OC_omf',
        img: '/screenshots/4_ohMyFood_mid.png',
        img_sm: './screenshots/4_ohMyFood_low.png',
        techno: ['htm', 'sas'],
        desc: "Cet projet visait à adopter une approche 'mobile first' pour ensuite l'étendre à une version desktop, tout en enrichissant les fonctionnalités du CSS grâce à l'utilisation du pré-processeur Sass."
    },
    {
        prjt_numb: 8,
        name: 'kasa',
        pname: 'Kasa',
        date: '01/2024',
        href: 'https://p8.kstl.fr',
        git: 'https://github.com/laukstl/kasa-localrepos',
        img: '/screenshots/8_kasa_mid.png',
        img_sm: './screenshots/8_kasa_low.png',
        techno: ['rea', 'sas'],
        desc: "Cet projet était une introduction à React et React Router : nous avons créé des routes, découpé le site en composants, et utilisé une base de données pour explorer les bases de ces technologies."
    },
    {
        prjt_numb: 9,
        name: 'nina',
        pname: 'Nina Carducci',
        date: '02/2024',
        href: 'https://p9.kstl.fr',
        git: 'https://github.com/laukstl/nina---New-way',
        img: '/screenshots/9_nina_mid.png',
        img_sm: './screenshots/9_nina_low.png',
        techno: ['js'],
        desc: "Cet projet était axé sur l'optimisation SEO en améliorant ses performances et son accessibilité, notamment par l'optimisation du code et des ressources, ainsi que l'intégration de références aux réseaux sociaux."
    },
    {
        prjt_numb: 11,
        name: 'argentBank',
        pname: 'Argent B',
        date: '04/2024',
        href: 'https://p11.kstl.fr',
        git: 'https://github.com/laukstl/ArgentBank',
        img: '/screenshots/11_argentBank_mid.png',
        img_sm: './screenshots/11_argentBank_low.png',
        techno: ['ts', 'rtk', 'rea'],
        desc: "Cet projet nous invitait à explorer Redux, mais m'a également offert l'opportunité d'approfondir mes connaissances en découvrant Redux Toolkit, notamment son Query (RTKQ), ainsi que le code splitting, et bien d'autres fonctionnalités."
    },
    {
        prjt_numb: 12,
        name: 'portfolio',
        pname: 'Portfolio',
        date: '05/24',
        href: 'https://p12.kstl.fr',
        git: 'https://github.com/laukstl/',
        img: '/screenshots/12_portfolio_mid.png',
        img_sm: './screenshots/12_portfolio_low.png',
        techno: ['ts', 'nxt', 'tlw', 'njs', 'xps'],
        desc: "Pour ce dernier projet, nous avions carte blanche pour utiliser toutes nos connaissances afin de développer un portfolio. J'ai donc choisi de pousser mes limites en apprenant Next.js et Tailwind CSS."
    }
];
