"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {

    const { scrollY } = useScroll();

    const [scrolled, setScrolled] = useState(false);

    // Check if scrolled past first page (approx 100vh)
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > window.innerHeight) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    const links = [
        { name: "Home", target: "home" },
        { name: "Projects", target: "work" },
        { name: "About", target: "about" },
        { name: "Contact", target: "contact" },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            className="fixed top-6 right-6 w-max z-50 mix-blend-difference"
        >
            <div
                className={`flex items-center gap-2 px-2 py-2 rounded-full border transition-all duration-500 ${scrolled
                    ? "border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/5"
                    : "border-transparent bg-transparent backdrop-blur-none"
                    }`}
            >
                {links.map((link) => (
                    <button
                        key={link.name}
                        onClick={() => scrollToSection(link.target)}
                        className="relative px-6 py-2 rounded-full text-sm font-medium text-white/80 hover:text-white transition-colors group overflow-hidden"
                    >
                        <span className="relative z-10">{link.name}</span>
                        <motion.div
                            className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            layoutId="navbar-hover"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                        {/* Magnetic Hover Effect Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </button>
                ))}
            </div>
        </nav>
    );
}
