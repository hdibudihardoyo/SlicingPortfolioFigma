export const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "portfolio", title: "Portfolio" },
  { id: "skills", title: "Skills" },
  { id: "experience", title: "Experience" },
  { id: "testimony", title: "Testimony" },
  { id: "contact", title: "Contact" },
];

import { Code, Layout, Share2 } from "lucide-react";
export const experienceCards = [
  { icon: Code, subtitle: "3 tahun sebagai", title: "Programmer" },
  { icon: Layout, subtitle: "7 tahun dalam", title: "Pekerjaan" },
  { icon: Share2, subtitle: "4 tahun sebagai", title: "Desainer" },
];

export const experienceBar = [
  { text: "Pengembang", highlight: "Front-end" },
  { text: "Puluhan proyek dan", highlight: "Pengalaman" },
  { text: "Desainer Freelance &", highlight: "UI · UX" },
];

export const projects = [
  {
    title: "Move.it",
    description:
      "Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.",
    tags: ["React Js", "Tailwind CSS"],
    image: "src/assets/pawsconnect.png",
    link: "https://moveit.example.com",
    category: "Dev",
  },
];

import { Palette, Workflow, Code2 } from "lucide-react";
export const filters = [
    { label: "UI Design", value: "UI", icon: Workflow },
    { label: "Design", value: "Design", icon: Palette },
    { label: "Development", value: "Dev", icon: Code2 },
  ];
