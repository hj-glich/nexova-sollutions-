
"use client";

import { cn } from "@/lib/utils";
import {
    CheckCircle,
    Clock,
    Star,
    TrendingUp,
    Video,
    Globe,
    ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
    href?: string;
}

interface BentoGridProps {
    items: BentoItem[];
    className?: string;
}

function BentoGrid({ items, className }: BentoGridProps) {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto", className)}>
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className={cn(
                        "group relative p-6 rounded-xl overflow-hidden transition-all duration-300",
                        "border border-black/5 bg-white/70 backdrop-blur-sm hover:bg-white/90",
                        "hover:shadow-lg hover:-translate-y-1 will-change-transform",
                        item.colSpan === 2 ? "md:col-span-2" : "",
                    )}
                >
                    <div className="relative flex flex-col space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="bg-black/5 p-2 rounded-full">
                                {item.icon}
                            </div>
                            <span className="text-xs px-2 py-1 rounded-full bg-black/5 text-black/70 inline-flex items-center">
                                <Clock className="w-3 h-3 mr-1 opacity-70" />
                                {item.status}
                            </span>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-medium text-lg font-display">
                                {item.title}
                                <span className="ml-2 text-xs text-black/50 font-normal">
                                    {item.meta}
                                </span>
                            </h3>
                            <p className="text-sm text-black/70 leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 text-xs text-black/60">
                                {item.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 rounded-full bg-black/5 font-medium"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            {item.href && (
                                <Link
                                    to={item.href}
                                    className="text-xs text-black flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity font-medium"
                                >
                                    {item.cta || "View"} <ArrowUpRight className="w-3 h-3" />
                                </Link>
                            )}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export { BentoGrid };
