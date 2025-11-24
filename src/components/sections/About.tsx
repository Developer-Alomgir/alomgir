"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-20 bg-black/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Behind The Code</h2>
                        <div className="space-y-4 text-muted-foreground text-lg">
                            <p>
                                Hi, I'm Alomgir. My journey in technology is driven by a dual passion: the logical precision of code and the boundless creativity of 3D art.
                            </p>
                            <p>
                                I believe that the best user experience is a seamless blend of technical excellence and artistic vision. My work in 3D and Game Engines gives me a unique perspective on design and optimization, which I apply to all my web applications.
                            </p>
                            <p>
                                Whether I'm architecting a complex Next.js application or modeling a 3D asset, I am always focused on performance, responsiveness, and creating an intuitive experience for the user.
                            </p>
                        </div>

                        <div className="mt-8 p-6 bg-primary/5 border border-primary/10 rounded-xl">
                            <p className="text-primary font-medium italic">
                                "I thrive on challenges that require both analytical thinking and creative problem-solving. Building the future of the web, one pixel at a time."
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Abstract Visual Representation */}
                        <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-black relative">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-50 mix-blend-overlay" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-6">
                                    <div className="text-6xl font-bold text-white/20 mb-2">CODE</div>
                                    <div className="text-6xl font-bold text-white/20">+</div>
                                    <div className="text-6xl font-bold text-white/20 mt-2">ART</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
