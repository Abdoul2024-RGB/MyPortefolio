import React from 'react';
import { Calendar, Code, UserCheck, Trophy, ArrowRight } from 'lucide-react';

const About = () => {
    // Statistiques à afficher dans les 4 cartes
    const stats = [
        {
            icon: <Calendar className="w-6 h-6 text-brand-purple" />,
            value: "2+",
            label: "Années d'expérience",
        },
        {
            icon: <Code className="w-6 h-6 text-brand-blue" />,
            value: "15+",
            label: "Projets Réalisés",
        },
        {
            icon: <UserCheck className="w-6 h-6 text-brand-purple" />,
            value: "100%",
            label: "Rigueur & Engagement",
        },
        {
            icon: <Trophy className="w-6 h-6 text-brand-blue" />,
            value: "Double Cursus",
            label: "Statistique & Informatique",
        },
    ];

    // Liste des compétences avec pourcentages et logos
    const skills = [
        {
            name: "React.js & Front-end",
            level: 75,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "Laravel & PHP",
            level: 65,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
        },
        {
            name: "Python & Data Analysis",
            level: 85,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
            name: "R & Économétrie / Statistiques",
            level: 80,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
        },
        {
            name: "SQL (Oracle, MySQL, SQLite)",
            level: 85,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
        },
        {
            name: "Tailwind CSS & UI/UX",
            level: 90,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
    ];

    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* --- PARTIE 1 : ABOUT ME & STATS --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">

                    {/* Gauche : Description */}
                    <div className="lg:col-span-6 space-y-6 text-left">
                        <span className="text-xs uppercase tracking-widest text-brand-purple font-semibold">
                            À Propos de moi
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                            Passionné par la conception de solutions numériques et l'analyse de données
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Analyste Informaticien alliant compétences en développement web moderne (React, Laravel, Tailwind) et en analyse statistique (Python, R, SQL, Econométrie).
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            Mon objectif est d'aider les entreprises et organisations à concrétiser leurs idées grâce à un code propre, performant et basé sur une exploitation rigoureuse des données.
                        </p>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 text-brand-purple hover:text-brand-blue font-semibold transition-colors pt-2"
                        >
                            <span>En savoir plus sur mon parcours</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Droite : Grille 2x2 des 4 statistiques */}
                    <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-brand-card/70 border border-brand-border/60 hover:border-brand-purple/50 transition-all duration-300 flex flex-col justify-between space-y-4"
                            >
                                <div className="p-3 rounded-xl bg-brand-bg w-fit border border-brand-border/40">
                                    {stat.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                                    <p className="text-sm text-gray-400">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* --- PARTIE 2 : SKILLS (COMPÉTENCES) --- */}
                <div id="skills" className="pt-8">
                    <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                        <span className="text-xs uppercase tracking-widest text-brand-purple font-semibold">
                            Mes Compétences
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            Technologies & Outils Maîtrisés
                        </h2>
                    </div>

                    {/* Grille des barres de progression */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="p-5 rounded-xl bg-brand-card/60 border border-brand-border/50 space-y-3 text-left"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <img src={skill.logo} alt={skill.name} className="w-6 h-6 object-contain" />
                                        <span className="font-semibold text-sm sm:text-base text-gray-200">{skill.name}</span>
                                    </div>
                                    <span className="text-sm font-bold text-brand-purple">{skill.level}%</span>
                                </div>

                                {/* Barre de progression avec DaisyUI / Tailwind */}
                                <div className="w-full bg-brand-bg rounded-full h-2.5 overflow-hidden border border-brand-border/30">
                                    <div
                                        className="bg-gradient-to-r from-brand-purple to-brand-blue h-2.5 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;