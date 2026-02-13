"use client";

import React, { useState, useEffect } from "react";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaFacebook,
    FaEnvelope,
    FaPhone,
    FaFilePdf
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
    const [age, setAge] = useState<number>(0);

    // Dynamic Age Calculation
    useEffect(() => {
        const birthYear = 2005;
        const currentYear = new Date().getFullYear();
        setAge(currentYear - birthYear);
    }, []);

    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/ayush-sh-01",
            icon: <FaGithub size={24} />,
            color: "hover:text-white"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/ayush-sharma-243826290?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            icon: <FaLinkedin size={24} />,
            color: "hover:text-blue-400"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/ayush_sh_01/?hl=en",
            icon: <FaInstagram size={24} />,
            color: "hover:text-pink-500"
        },
        {
            name: "Facebook",
            url: "https://facebook.com/ayushsharma",
            icon: <FaFacebook size={24} />,
            color: "hover:text-blue-500"
        },
        {
            name: "Resume",
            url: "/My_Resume_done.pdf",
            icon: <FaFilePdf size={24} />,
            color: "hover:text-red-500"
        },
    ];

    const techStack = [
        "REACT", "NEXT.JS", "TYPESCRIPT", "THREE.JS", "TAILWIND CSS", "FRAMER MOTION", "NODE.JS", "POSTGRESQL"
    ];

    return (
        <footer className="relative w-full bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] py-20 overflow-hidden border-t border-white/10">

            {/* Animated Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                        rotate: [0, 90, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-30%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.15, 0.1],
                        rotate: [0, -60, 0]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-30%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mt-16 flex flex-col md:flex-row justify-between items-start gap-12">

                {/* Left Side: Name and Details */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-6"
                >
                    <div className="space-y-2">
                        <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 tracking-tighter">
                            Ayush Sharma
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl font-light font-mono">
                            Based in India • <span className="text-blue-400">{age} years old</span>
                        </p>
                    </div>

                    <p className="text-white/60 max-w-sm text-sm leading-relaxed border-l-2 border-blue-500/30 pl-4">
                        Full Stack Developer crafting secure, high-performance digital experiences with modern web technologies.
                    </p>
                </motion.div>

                {/* Right Side: Links and Contact */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col gap-10"
                >
                    {/* Social Icons */}
                    <div className="flex gap-4">
                        {socialLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className={`p-3 rounded-full bg-white/5 border border-white/10 transition-colors ${link.color} group relative overflow-hidden`}
                                aria-label={link.name}
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10 text-white/70 group-hover:text-white transition-colors">
                                    {link.icon}
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-4 text-white/80 font-mono text-sm">
                        <a href="mailto:bharadwajayush6232@gmail.com" className="flex items-center gap-4 hover:text-blue-400 transition-colors group p-2 hover:bg-white/5 rounded-lg -ml-2">
                            <div className="p-2 bg-blue-500/20 rounded-md group-hover:bg-blue-500/30 transition-colors">
                                <FaEnvelope className="text-blue-400" />
                            </div>
                            <span>bharadwajayush6232@gmail.com</span>
                        </a>
                        <a href="tel:+917697912636" className="flex items-center gap-4 hover:text-green-400 transition-colors group p-2 hover:bg-white/5 rounded-lg -ml-2">
                            <div className="p-2 bg-green-500/20 rounded-md group-hover:bg-green-500/30 transition-colors">
                                <FaPhone className="text-green-400" />
                            </div>
                            <span>+91 76979 12636</span>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Copyright Line */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative z-10 mt-24 pt-8 border-t border-white/5 text-center"
            >
                <p className="text-white/20 text-xs uppercase tracking-widest hover:text-white/40 transition-colors">
                    &copy; {new Date().getFullYear()} Ayush Sharma. Built with Next.js & Passion.
                </p>
            </motion.div>

        </footer>
    );
}
