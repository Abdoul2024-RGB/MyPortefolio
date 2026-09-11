import React from 'react';
import { FaGithub } from 'react-icons/fa';


const Projects = () => {
    // Liste de vos projets (remplaçables par vos vrais projets)
    const projectsList = [
        {
            id: "01",
            title: "Guide Local Bobo",
            description: "Plateforme web complète d'orientation interactive permettant de découvrir les commerces, services et lieux d'intérêt de Bobo-Dioulasso.",
            tags: ["React", "Tailwind CSS", "PHP", "MySQL"],
            image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800",
            demoUrl: "#",
            githubUrl: "#"
        },
        {
            id: "02",
            title: "Suivi d'Élevage & Stock",
            description: "Application full-stack de suivi et de gestion d'exploitation d'élevage avec tableaux de bord analytiques et alertes automatiques.",
            tags: ["Laravel", "React", "Tailwind", "PostgreSQL"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            demoUrl: "#",
            githubUrl: "#"
        },
        {
            id: "03",
            title: "AutoDASH - Data Analytics",
            description: "Tableau de bord interactif d'analyse statistique et de détection d'anomalies de données en temps réel.",
            tags: ["Python", "Streamlit", "Pandas", "Scikit-learn"],
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
            demoUrl: "#",
            githubUrl: "#"
        }
    ];
    return (
        <section id="projects" className="py-20 relative">
            {/* Halo lumineux de fond */}
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6">

                {/* En-tête de section */}
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                    <span className="text-xs uppercase tracking-widest text-brand-purple font-semibold">
                        Featured Projects
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Quelques-unes de mes réalisations
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base">
                        Une sélection de projets combinant développement full-stack, conception de bases de données et analyse de données.
                    </p>
                </div>
                {/* Grille des cartes de projets */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsList.map((project) => (
                        <div
                            key={project.id}
                            className="group relative bg-brand-card/70 border border-brand-border/60 rounded-2xl overflow-hidden hover:border-brand-purple/60 transition-all duration-300 flex flex-col justify-between"
                        >

                            {/* Image & Header de la carte */}
                            <div>
                                <div className="relative h-48 w-full overflow-hidden bg-brand-bg">
                                    {/* Badge numéro de projet */}
                                    <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-md bg-brand-bg/80 backdrop-blur-md border border-brand-border/60 text-xs font-mono font-bold text-brand-purple">
                                        {project.id}
                                    </div>

                                    {/* Image du projet */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent"></div>
                                </div>

                                {/* Contenu textuel */}
                                <div className="p-6 space-y-4 text-left">
                                    <h3 className="text-xl font-bold group-hover:text-brand-purple transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tags technologies */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2.5 py-1 rounded-md bg-brand-bg/60 border border-brand-border/40 text-xs font-medium text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* Liens en bas de carte */}
                            <div className="flex justify-between items-center p-6 border-t border-brand-border/60 bg-brand-bg/70">
                                <a
                                    href={project.githubUrl}
                                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white"
                                >

                                    <FaGithub className="w-4 h-4" />
                                    <span>GitHub</span>
                                </a>

                            </div>

                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
};

export default Projects;