import type { ImageMetadata } from "astro";

export interface SiteConfig {
    title: string;
    description: string;
    name: string;
    role: string;
    profileImage: string;
    social: SocialLinks;
}

export interface SocialLinks {
    github: string;
    linkedin: string;
    email: string;
    resume: string;
}

export interface Experience {
    title: string;
    description: string | string[];
    company: string;
    tags: string[];
}

export interface Project {
    title: string;
    description: string;
    github: string;
    live: string;
    img: ImageMetadata | string;
    tags: string[];
}

export interface Certificate {
    title: string;
    description: string;
    url: string;
    img: string;
    tags: string[];
}

export interface SocialButton {
    icon: string;
    label: string;
    href: string;
    download?: string;
}
