"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Server, Wrench } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend",
        icon: Code2,
        color: "green",
        skills: [
            { name: "HTML, CSS, JavaScript", desc: "Core web technologies" },
            { name: "Bootstrap, Tailwind", desc: "Building responsive interfaces" },
        ],
    },
    {
        title: "Backend",
        icon: Server,
        color: "blue",
        skills: [
            { name: "Java", desc: "Application logic & server-side development" },
        ],
    },
    {
        title: "Databases",
        icon: Database,
        color: "purple",
        skills: [
            { name: "SQL", desc: "Querying and schema design" },
            { name: "MongoDB", desc: "Document storage and retrieval" },
        ],
    },
    {
        title: "Other / Tools",
        icon: Wrench,
        color: "orange",
        skills: [
            { name: "Python", desc: "Scripting & AI feature prototyping" },
            { name: "Git", desc: "Version control" },
            { name: "Testing & Debugging", desc: "Code quality assurance" },
        ],
    },
];

const colorMap: Record<string, { accent: string; border: string; bg: string }> = {
    green: { accent: "text-green-400", border: "hover:border-green-500", bg: "bg-green-500/10" },
    blue: { accent: "text-blue-400", border: "hover:border-blue-500", bg: "bg-blue-500/10" },
    purple: { accent: "text-purple-400", border: "hover:border-purple-500", bg: "bg-purple-500/10" },
    orange: { accent: "text-orange-400", border: "hover:border-orange-500", bg: "bg-orange-500/10" },
};

export default function About() {
    return (
        <section className="relative z-20 w-full min-h-screen bg-[#121212] px-6 py-24 md:px-12 md:py-32">
            <div className="max-w-7xl mx-auto">
                {/* About Me Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                        About Me
                    </h2>

                    <div className="bg-gray-900/80 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-gray-700">
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p className="text-xl md:text-2xl font-semibold text-white mb-4">
                                Ayush Sharma · <span className="text-green-400">SVVV College</span>
                            </p>

                            <p>
                                I build web applications with <span className="text-green-400 font-medium">HTML, CSS, and JavaScript</span>,
                                and implement backend logic using <span className="text-blue-400 font-medium">Java</span>.
                            </p>

                            <p>
                                I work with <span className="text-purple-400 font-medium">SQL</span> and <span className="text-purple-400 font-medium">MongoDB</span>,
                                and I have basic experience with <span className="text-orange-400 font-medium">Python</span>.
                            </p>

                            <p>
                                I am actively exploring <span className="text-green-400 font-medium">AI features</span> and
                                integrating them into small projects.
                            </p>

                            <p>
                                My focus is to deliver <span className="font-medium text-white">correct, readable code</span> and
                                fully working features.
                            </p>

                            <p className="text-lg font-medium text-green-400 pt-4">
                                I am seeking roles where I can contribute to backend systems or AI-backed application features.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">
                        Skills
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skillCategories.map((category, idx) => {
                            const colors = colorMap[category.color];
                            const Icon = category.icon;

                            return (
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className={`bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 ${colors.border} transition-all duration-300`}
                                >
                                    <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center mb-4`}>
                                        <Icon className={`w-6 h-6 ${colors.accent}`} />
                                    </div>

                                    <h3 className={`text-xl font-bold ${colors.accent} mb-4`}>
                                        {category.title}
                                    </h3>

                                    <div className="space-y-3">
                                        {category.skills.map((skill, skillIdx) => (
                                            <div key={skillIdx}>
                                                <p className="text-white font-medium text-sm">{skill.name}</p>
                                                <p className="text-gray-400 text-xs mt-1">{skill.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
