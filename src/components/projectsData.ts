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
        desc: "Ce projet était ma première rencontre avec le HTML/CSS et le 'responsive design' à partir d'une maquette sur Figma."
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
        desc: "Ce projet avait pour but une approche 'mobile first' pour l'étendre à une version desktop, et l'extension des fonctionalités du css en utilisant le pré-processeur Sass."
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
        desc: "Ce projet avait pour but de faire nos premiers pas avec React et React Router : création des routes, découpage du site en components, utilisation d'une base de donnée, ..."
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
        desc: "Ce projet était tourné vers l'optimisation SEO en améliorant ses performances et son accessibilité ( optimisation du code et des assets, références aux réseaux sociaux, ... )"
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
        desc: "Ce projet nous demandait de découvrir Redux, mais m'a permis d'aller plus loin en découvrant Redux Tool Kit, son Query (RTKQ), le code splitting, ..."
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
        desc: "Et enfin ce dernier projet nous laissant la liberté d'utiliser toutes nos connaissances pour développer un portfolio. C'est pourquoi j'ai décidé d'aller toujours plus loin en apprenant NextJS et TailwindCSS."
    }
];
