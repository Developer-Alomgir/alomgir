"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Frontend Frameworks",
        skills: ["React.js", "Next.js", "Redux", "Zustand"],
    },
    {
        title: "Core Languages",
        skills: ["JavaScript (ES6+)", "HTML5", "CSS3", "TypeScript"],
    },
    {
        title: "Styling & UI",
        skills: ["Tailwind CSS", "SCSS", "Framer Motion", "Shadcn UI"],
    },
    {
        title: "Backend & Runtime",
        skills: ["Node.js", "Express.js", "REST API"],
    },
    {
        title: "Tools & Version Control",
        skills: ["Git", "GitHub", "Webpack", "VS Code"],
    },
    {
        title: "Design Focus",
        skills: ["Responsive Design", "UI/UX Principles", "Performance Optimization"],
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        My Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto"
                    >
                        A comprehensive list of the technologies and tools I use to bring ideas to life.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm rounded-full bg-white/5 text-muted-foreground border border-white/5"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
