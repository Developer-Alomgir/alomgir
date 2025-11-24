import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black/5 border-t border-white/10 py-12 mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Alomgir Hossen</h3>
                        <p className="text-muted-foreground max-w-xs">
                            Crafting high-performance, intuitive digital experiences with modern web technologies and 3D artistry.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
                            <li><Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</Link></li>
                            <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="https://github.com/Developer-Alomgir" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://www.artstation.com/alomgirhossen" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                {/* ArtStation Icon placeholder or text */}
                                <span className="font-bold">AS</span>
                            </a>
                            {/* Add LinkedIn if available */}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Alomgir Hossen. All Rights Reserved.</p>
                    <p>Development & Built with Next.js, Typescript, React, Theater.Js and TailwindCSS</p>
                </div>
            </div>
        </footer>
    );
}
