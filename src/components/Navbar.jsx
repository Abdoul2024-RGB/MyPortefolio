import React from 'react';
import { Code2, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [activelink, setactivelink] = useState("Home")
    const navlinks = [
        { name: 'Home', href: '#home', },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        // { name: 'Blog', href: '#blog' },

    ]
    // Détection automatique de la section visible lors du défilement
    useEffect(() => {
        const handleScroll = () => {
            const sections = navlinks.map(link => document.querySelector(link.href));
            const scrollPosition = window.scrollY + 500; // Marge pour anticiper le haut de page

            sections.forEach((section, index) => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setactivelink(navlinks[index].name);
                    }
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header className="fixed top-0 left-0 w-full z-50
         bg-brand-bg/80 backdrop-blur-md border-b
          border-brand-border/50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-2 
                text-xl font-bold tracking-wide">
                    <Code2 className="w-7 h-7 text-brand-purple" />
                    <span className="text-white">CodeAndStat.Lab</span>
                </a>
                {/* Navigation Links */}
                <nav className="hidden md:flex items-center gap-8">
                    {

                        navlinks.map((link) => {
                            const isActive = activelink === link.name
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setactivelink(link.name)}
                                    className={`text-sm font-medium transition-all duration-300 ${isActive
                                        ? 'text-white border-b-2 border-brand-purple pb-1'
                                        : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                    {/* Barre violette animée sous le lien actif */}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-purple rounded-full transition-all duration-300" />
                                    )}
                                </a>
                            )

                        }
                        )}
                </nav>

                {/* Bouton Call-to-Action */}
                <a
                    href="#contact"
                    onClick={() => setactivelink('Contact')}
                    className="btn btn-sm sm:btn-md bg-brand-purple hover:bg-brand-blue border-none
                     text-white rounded-lg gap-2 shadow-lg shadow-brand-purple/20 transition-all duration-300">
                    <span>Hire Me</span>
                    <ArrowUpRight className="w-4 h-4" />
                </a>
            </div>
        </header>
    );
};

export default Navbar;