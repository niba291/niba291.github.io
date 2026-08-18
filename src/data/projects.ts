import type { Project } from "@/types";

export const projects: Project[] = [
    {
        title           : "GANCHITOS BURGES",
        description     : "Landing page para hamburguesería en Peralillo con diseño moderno, carta de hamburguesas y carrito de compra que envía el pedido directo por WhatsApp.",
        live            : "https://ganchitos.nibachavez291.workers.dev/",
        img             : "/projects/ganchitos.webp",
        tags            : ["ASTRO", "TAILWINDSCSS"]
    },
    {
        title           : "DIGITALDEVSOLUTIONS",
        description     : "Landing page creada con Astro y Tailwind CSS, enfocada en promover servicios de programación web. Diseño rápido y responsivo. Optimizada para una experiencia fluida y conversión de clientes.",
        github          : "https://github.com/DigitalDevSolutions/LAN-WEB",
        live            : "https://digitaldevsolutions.cl/",
        img             : "/projects/landingPage.webp",
        tags            : ["ASTRO", "TAILWINDSCSS"]
    },
    {
        title           : "PDF-EDITOR",
        description     : "Sitio web para crear pdf basico en tiempo real donde podrás descargar el archivo pdf, creado con React, React-pdf y TailwindCSS",
        github          : "https://github.com/niba291/PDF-EDITOR",
        live            : "https://niba291.github.io/PDF-EDITOR/",
        img             : "https://github.com/niba291/PDF-EDITOR/assets/63934510/b60f1d84-098a-439c-a55f-e2016965e0ab",
        tags            : ["REACT", "TAILWINDSCSS", "REACT-PDF"]
    },
    {
        title           : "POKEAPI",
        description     : "Sitio web sencillo diseñado con TailwindCSS y React. Utiliza una API externa llamada PokeAPI para mostrar todos los Pokémon, buscar Pokémon y obtener sus estadísticas y tipos.",
        github          : "https://github.com/niba291/POKEAPI",
        live            : "https://niba291.github.io/POKEAPI/",
        img             : "https://github.com/niba291/POKEAPI/assets/63934510/2a789344-66a1-45af-bfa6-85e3e48eb764",
        tags            : ["REACT", "TAILWINDSCSS"]
    },
    {
        title           : "TO-DO",
        description     : "Sitio web para realizar to-do list",
        github          : "https://github.com/niba291/To-do",
        live            : "https://niba291.github.io/To-do/",
        img             : "https://raw.githubusercontent.com/niba291/To-do/refs/heads/master/demo_1.png",
        tags            : ["REACT", "TAILWINDSCSS"]
    }
];
