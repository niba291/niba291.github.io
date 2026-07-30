import type { Experience } from "@/types";

export const experience: Experience[] = [
    {
        title           : "DESARROLLADOR FULL STACK | 2024 JULIO - ACTUALMENTE",
        description     : [
            "• Implementación de microservicios utilizando Docker y metodologia SOLID, conectados a un controlador en Symfony para mejorar la modularidad y escalabilidad del sistema.",
            "• Desarrollo de un bot en Node.js para automatizar diversas tareas dentro de la plataforma.",
            "• Integración de la API de Jira para gestionar organizaciones, asignar personas a tareas y generar tickets de soporte, optimizando el flujo de trabajo interno.",
            "•  Diseño y mantenimiento de un módulo para el sistema de facturación, implementando mejoras significativas en el rendimiento de consultas y optimizando la performance general de la aplicación.",
        ],
        company         : "POLITE SPA",
        tags            : ["NODE.JS", "REACT-NATIVE", "PHP", "SYMFONY"]
    },
    {
        title           : "DESARROLLADOR FULL STACK | 2024 FEBRERO - 2024 MAYO",
        description     : [
            "• Implementación de microservicios utilizando Docker y metodologia SOLID, conectados a un controlador en Symfony para mejorar la modularidad y escalabilidad del sistema.",
            "• Creación de una API para la gestión de Excel, modularizando su uso en la facturación y monitoreando errores mediante la integración de Sentry.",
            "• Modificación y adaptación de archivos XML para el envío de facturas al SII.",
            "• Estructuración de la base de datos para soportar las implementaciones desarrolladas y optimizar el sistema de facturación.",
        ],
        company         : "WEBFACTURA SPA",
        tags            : ["PHP", "SYMFONY", "TWIG"]
    },
    {
        title           : "DESARROLLADOR FULL STACK | 2023 MARZO - 2024 FEBRERO",
        description     : [
            "• Desarrollo de API de facturación electrónica con firma de XML utilizando PFX y envío automático al SII, además de la integración con una casilla de correo para procesar documentos.",
            "• Desarrollo de una aplicación de punto de venta full-stack con interfaz dinámica controlada por JSON, implementada con React en el front-end y microservicios en Python y Node.js para la gestión de facturación e inventario, usando MongoDB y MySQL.",
            "• Creación de una API para Google Sheets, asegurando la sincronización constante de las hojas de cálculo, facilitando la integración para casi la mitad de los clientes.",
            "• Apoyo en la organización y liderazgo del equipo, facilitando la incorporación de nuevas tecnologías y asumiendo responsabilidades en su implementación y puesta en marcha."
        ],
        company         : "ACHL SPA",
        tags            : ["PYTHON", "NODE.JS", "REACT", "REACT-NATIVE", "PHP", "LARAVEL", "TAILWINDSCSS"]
    },
    {
        title           : "DESARROLLADOR FULL STACK | 2022 MAYO - 2023 MARZO",
        description     : [
            "• Reestructuración de una aplicación GPS desarrollada en CodeIgniter, adaptándola para usuarios individuales en lugar de flotas, con funcionalidades adicionales para distintos clientes.",
            "• Configuración de Mikrotik y desarrollo de módulos para gestionar redes, incluyendo la creación de VLANs, máscaras de red, entre otros.",
            "• Desarrollo de una API para WhatsApp utilizando un móvil con Termux, conectando una aplicación en Java con un programa en Python mediante sockets para automatizar el envío de mensajes.",
            "• Implementación de notificaciones push con Firebase para alertar a los usuarios cuando un vehículo salía de una geocerca, activando un corta corriente o avisando al usuario según el caso.",
        ],
        company         : "TIC NETWORKS AND SECURITY LTDA",
        tags            : ["CODEIGNITER", "PHP", "PYTHON", "JAVA", "ANTROID", "POWER BI", "BOOTSTRAP"]
    },
    {
        title           : "DESARROLLADOR FULL STACK | 2021 AGOSTO - 2022 MARZO",
        description     : [
            "• Realización de scraping con C# utilizando Selenium para extraer boletas electrónicas desde una API con autenticación JWT.",
            "• Mantenimiento del programa administrativo de la empresa, incluyendo la creación de un módulo para notas de venta y consultas de boletas de honorarios.",
            "• Mantenimiento y desarrollo de nuevas características para boletas y facturas electrónicas, asegurando su correcta implementación en el sistema.",
            "• Diseño y desarrollo de una alerta estándar para la plataforma, mejorando la experiencia del usuario.",
            "• Codificación de XML para la integración y envío de documentos electrónicos, incluyendo la mitigación de errores al convertir archivos a UTF-8 BOM.",
        ],
        company         : "CONTALINE S.A",
        tags            : ["ASP", "BOOTSTRAP", "C#", "SCRAPING SELENIUM", "VISUAL BASIC", ".NET"]
    }
];
