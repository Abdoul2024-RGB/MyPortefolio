import React from 'react';
import { Mail, Phone, ArrowUpRight, Quote, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="contact" className="pt-20 pb-10 bg-brand-bg relative border-t border-brand-border/40">

            {/* Halo lumineux en arrière-plan */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-brand-purple/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 ">

                {/* Grille principale du bas de page */}
                <div className="flex gap-12 pb-16 border-b border-brand-border/50 justify-between">

                    {/* Colonne 1 : CTA Contact (5 cols) */}
                    <div className="lg:col-span-5 space-y-6 text-left">
                        <span className="text-xs uppercase tracking-widest text-brand-purple font-semibold">
                            Travaillons Ensemble
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                            Vous avez un projet en tête ?
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
                            Je suis toujours ouvert à de nouvelles opportunités de collaboration, des projets web sur-mesure ou de l'analyse de données.
                        </p>
                        <a
                            href="mailto:contact@example.com"
                            className="inline-flex items-center gap-2 btn bg-brand-purple hover:bg-brand-blue border-none text-white px-6 rounded-xl shadow-lg shadow-brand-purple/20 transition-all duration-300"
                        >
                            <span>Me contacter</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Colonne 2 : Bloc Témoignage / Citation (4 cols) */}
                    {/*
                    <div className="lg:col-span-4 flex items-center">
                        <div className="p-6 rounded-2xl bg-brand-card/70 border border-brand-border/60 relative text-left space-y-4 w-full">
                            <Quote className="w-8 h-8 text-brand-purple/60" />
                            <p className="text-gray-300 text-sm italic leading-relaxed">
                                "Un développeur rigoureux et autonome, capable de concilier parfaitement la logique algorithmique et une excellente vision analytique des données."
                            </p>
                            <div className="flex items-center gap-3 pt-2">
                                <div className="w-10 h-10 rounded-full bg-brand-purple/20 border border-brand-purple flex items-center justify-center font-bold text-brand-purple text-sm">
                                    ND
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white">Nicolas Dupont</h4>
                                    <p className="text-xs text-gray-400">Directeur Technique / CTO</p>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* Colonne 3 : Coordonnées & Réseaux sociaux (3 cols) */}
                    <div className="lg:col-span-3 space-y-6 text-left">
                        <span className="text-xs uppercase tracking-widest text-brand-purple font-semibold">
                            Me Suivre
                        </span>

                        {/* Icônes de réseaux sociaux */}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 rounded-xl bg-brand-card border border-brand-border hover:border-brand-purple hover:text-brand-purple transition-all"
                                title="GitHub"
                            >
                                <FaGithub className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 rounded-xl bg-brand-card border border-brand-border hover:border-brand-purple hover:text-brand-purple transition-all"
                                title="LinkedIn"
                            >
                                <FaLinkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 rounded-xl bg-brand-card border border-brand-border hover:border-brand-purple hover:text-brand-purple transition-all"
                                title="Twitter"
                            >
                                <FaTwitter className="w-5 h-5" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 rounded-xl bg-brand-card border border-brand-border hover:border-brand-purple hover:text-brand-purple transition-all"
                                title="Instagram"
                            >
                                <FaInstagram className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Informations directes */}
                        <div className="space-y-3 pt-2 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-brand-purple" />
                                <a href="mailto:yameogomalick10@gmail.com" className="hover:text-white transition-colors">
                                    yameogomalick10@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-brand-purple" />
                                <a href="tel:+22600000000" className="hover:text-white transition-colors">
                                    +226 74 53 82 18
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Copyright tout en bas */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} CodeCraft. Tous droits réservés.</p>
                    <p className="flex items-center gap-1">
                        Fait avec <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> en React & Tailwind CSS
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;