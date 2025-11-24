"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
    github?: string;
    image?: string; // In a real app, this would be a path to an image
    index: number;
}

export function ProjectCard({ title, description, tags, link, github, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
        >
            {/* Placeholder Image Area */}
            <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                {/* You would use next/image here with real screenshots */}
                <div className="absolute inset-0 flex items-center justify-center text-white/10 font-bold text-4xl uppercase tracking-widest select-none">
                    {title.substring(0, 2)}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/70 border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
                    >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                        >
                            <Github className="w-4 h-4" /> Code
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
