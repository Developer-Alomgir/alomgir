"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ArrowRight } from "lucide-react";

const projects = [
    {
        title: "Tea Stall",
        description: "A modern e-commerce or informational site demo for a tea business. Focus on responsive design and state management.",
        tags: ["React", "Next.js", "Tailwind CSS"],
        link: "https://teastall.vercel.app/",
        github: "https://github.com/Developer-Alomgir", // Assuming generic github link if specific repo not provided
    },
    {
        title: "My Builds",
        description: "Personalized data visualization or project management tool built with Next.js/React.",
        tags: ["Next.js", "Data Viz", "Dashboard"],
        link: "https://mybuilds.vercel.app/",
        github: "https://github.com/Developer-Alomgir",
    },
    {
        title: "Acme House",
        description: "A sleek landing page or real estate demo showcasing professional UI and component structure.",
        tags: ["React", "UI/UX", "Animation"],
        link: "https://acmehouse.vercel.app/",
        github: "https://github.com/Developer-Alomgir",
    },
    {
        title: "Gleam & Grace",
        description: "A portfolio or brand site emphasizing elegant design and smooth user interaction.",
        tags: ["Design System", "Framer Motion"],
        link: "https://gleamandgrace.vercel.app/",
        github: "https://github.com/Developer-Alomgir",
    },
    {
        title: "Gandaria",
        description: "Location-based or community web application with complex data handling.",
        tags: ["Web App", "API Integration"],
        link: "https://gandaria.vercel.app/",
        github: "https://github.com/Developer-Alomgir",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-black/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        My Creative Arsenal
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto"
                    >
                        A showcase of high-performance web applications and immersive digital experiences.
                    </motion.p>
                </div>

                {/* Web Applications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} index={index} />
                    ))}
                </div>

                {/* 3D / Game Engine Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-900 border border-white/10"
                >
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614726365723-49cfae967bda?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />

                    <div className="relative z-10 p-8 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Beyond Web: 3D Artistry & Game Engines</h3>
                            <p className="text-indigo-100 mb-6 text-lg">
                                Exploring the boundaries of digital creation with 3D modeling and Game Engine development.
                                Check out my visual works on ArtStation.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">Unreal Engine</span>
                                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">Blender</span>
                                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">3D Modeling</span>
                            </div>
                        </div>

                        <a
                            href="https://www.artstation.com/alomgirhossen"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-full bg-white text-indigo-900 font-bold hover:bg-indigo-50 transition-colors flex items-center gap-2 whitespace-nowrap"
                        >
                            View ArtStation Portfolio <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

                {/* 3D / Game Engine Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-900 border border-white/10"
                >
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614726365723-49cfae967bda?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />

                    <div className="relative z-10 p-8 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Beyond Web: 3D Artistry & Game Engines</h3>
                            <p className="text-indigo-100 mb-6 text-lg">
                                Exploring the boundaries of digital creation with 3D modeling and Game Engine development.
                                Check out my visual works on ArtStation.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">Unreal Engine</span>
                                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">Blender</span>
                                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">3D Modeling</span>
                            </div>
                        </div>

                        <a
                            href="https://www.artstation.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-full bg-white text-indigo-900 font-bold hover:bg-indigo-50 transition-colors flex items-center gap-2 whitespace-nowrap"
                        >
                            View ArtStation Portfolio <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
