
"use client";

import { cn } from "@/lib/utils";
import {
    CheckCircle,
    Clock,
    Star,
    TrendingUp,
    Video,
    Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

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
        <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto", className)}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "group relative p-6 rounded-md overflow-hidden transition-all duration-300",
                        "border border-black/10 bg-white/50 hover:bg-white/80",
                        "hover:shadow-sm hover:-translate-y-1 will-change-transform",
                        item.colSpan === 2 ? "md:col-span-2" : "",
                    )}
                >
                    <div className="relative flex flex-col space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="bg-black/5 p-2 rounded-md">
                                {item.icon}
                            </div>
                            <span className="text-xs px-2 py-1 rounded-md bg-black/5 text-black/70">
                                {item.status}
                            </span>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-medium text-base">
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
                            <div className="flex items-center space-x-2 text-xs text-black/50">
                                {item.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 rounded-md bg-black/5"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            {item.href && (
                                <Link
                                    to={item.href}
                                    className="text-xs text-black/60 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    {item.cta || "View →"}
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export { BentoGrid };
