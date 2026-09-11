import React from 'react';
import { ArrowUpRight, Download, Code2 } from 'lucide-react';
import profile from '../assets/profil7.jpeg';
import cv from '../assets/cvn.pdf';

const Hero = () => {
    // Liste des icônes/technologies
    const techStack = [
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'R', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
        // Bases de données
        { name: 'Oracle Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        //analyse de données
        { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
        { name: 'Matplotlib', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
        { name: 'Scikit-learn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    ];
    return (
        <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center w-full">

            {/* Effet d'arrière-plan lumineux (Glow background) */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-purple/20 rounded-full blur-3xl
             pointer-events-none"></div>
            <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl
             pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12
             gap-12 items-center">

                {/* Colonne Gauche : Textes & Boutons (7 cols) */}
                <div className="lg:col-span-7 space-y-6 text-left">

                    {/* Badge */}
                    <div className="inline-block px-4 py-1.5 rounded-full bg-brand-purple/10 border
                     border-brand-purple/30 text-brand-purple text-xs font-semibold tracking-wider uppercase">
                        Analyste Informaticien
                    </div>

                    {/* Titre Principal */}
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                        Hi, I'm <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text
                         text-transparent">Abdoul</span>
                        <br />
                        I build things for the web.
                    </h1>

                    {/* Description */}
                    <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
                        Passionné par la conception de solutions numériques performantes, l'analyse de données et le développement d'applications modernes.
                    </p>

                    {/* Boutons d'action */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <a
                            href="#projects"
                            className="btn bg-brand-purple hover:bg-brand-blue border-none text-white px-6 
                            rounded-lg gap-2 shadow-lg shadow-brand-purple/25 transition-all duration-300"
                        >
                            <span>View My Work</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </a>

                        <a
                            href={cv}
                            download
                            className="btn btn-outline border-brand-border text-white 
                            hover:bg-brand-card hover:border-brand-purple px-6 rounded-lg gap-2 
                            transition-all duration-300"
                        >
                            <span>Download CV</span>
                            <Download className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Stack Technologique */}
                    <div className="pt-8 space-y-3">
                        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                            Technologies I work with
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            {techStack.map((tech) => (
                                <div
                                    key={tech.name}
                                    className="p-2.5 rounded-xl bg-brand-card/80 border
                                     border-brand-border/60 hover:border-brand-purple/50 transition-all duration-300 transform hover:-translate-y-1"
                                    title={tech.name}
                                >
                                    <img src={tech.logo} alt={tech.name} className="w-6 h-6 object-contain" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap items-center gap-4">

                        </div>
                    </div>

                </div>

                {/* Colonne Droite : Photo avec halo neon + Bloc de code (5 cols) */}
                <div className="lg:col-span-5 flex justify-center relative">

                    {/* Cercle Lumineux arrière-plan */}
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-b from-brand-purple
                     via-brand-blue to-transparent shadow-2xl shadow-brand-purple/30">
                        <div className="w-full h-full rounded-full bg-brand-card overflow-hidden flex items-center justify-center border-4 border-brand-bg">
                            {/* Image de profil (remplaçable par la vôtre) */}
                            <img
                                src={profile}
                                alt="Profile"
                                className="w-full h-full object-cover relative "
                            />
                        </div>
                    </div>

                    {/* Card Extrait de Code Flottant */}
                    <div className="hidden sm:block absolute -bottom-40 -right-10 bg-brand-card/95 
                    border border-brand-border rounded-xl p-4 shadow-xl backdrop-blur-md max-w-xs 
                    text-left">
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-brand-border/40">
                            <div className="flex items-center gap-1.5">
                                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                            </div>
                            <Code2 className="w-4 h-4 text-gray-500" />
                        </div>

                        <pre className="text-xs font-mono text-purple-300 leading-relaxed ">
                            <code>
                                <span className="text-purple-400">import </span>
                                pandas
                                <span className="text-purple-400"> as </span>
                                pd <br />
                                <br />
                                data = pd.read_csv(<span className="text-green-400">
                                    "insights.csv"</span>)<br />
                                <span className="text-yellow-400">print</span>(data.describe())
                            </code>
                            <code>
                                <span className="text-purple-400">const</span> developer = &#123;<br />
                                &nbsp;&nbsp;name: <span className="text-green-400">"Alex"</span>,<br />
                                &nbsp;&nbsp;role: <span className="text-green-400">"Analyst"</span>,<br />
                                &nbsp;&nbsp;status: <span className="text-yellow-400">"Building ideas"</span><br />
                                &#125;;
                            </code>
                        </pre>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;