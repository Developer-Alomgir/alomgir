"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-sm md:text-base font-medium tracking-wider text-primary mb-4 uppercase">
                        Frontend Developer
                    </h1>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                >
                    Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Pixel-Perfect</span> <br className="hidden md:block" />
                    Coding Experiences.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                >
                    Hi, I'm Alomgir. I specialize in React.js, Next.js, and creating seamless, responsive web solutions that blend code with creativity.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="#projects"
                        className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                    >
                        Explore My Work <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                        href="https://github.com/Developer-Alomgir"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors flex items-center gap-2"
                    >
                        <Github className="w-4 h-4" /> View GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
