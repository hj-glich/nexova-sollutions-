
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
    items?: BentoItem[];
    className?: string;
}

const itemsSample: BentoItem[] = [
    {
        title: "Analytics Dashboard",
        meta: "v2.4.1",
        description:
            "Real-time metrics with AI-powered insights and predictive analytics",
        icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
        status: "Live",
        tags: ["Statistics", "Reports", "AI"],
        colSpan: 2,
        hasPersistentHover: true,
        href: "#"
    },
    {
        title: "Task Manager",
        meta: "84 completed",
        description: "Automated workflow management with priority scheduling",
        icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
        status: "Updated",
        tags: ["Productivity", "Automation"],
        href: "#"
    },
    {
        title: "Media Library",
        meta: "12GB used",
        description: "Cloud storage with intelligent content processing",
        icon: <Video className="w-4 h-4 text-purple-500" />,
        tags: ["Storage", "CDN"],
        colSpan: 2,
        href: "#"
    },
    {
        title: "Global Network",
        meta: "6 regions",
        description: "Multi-region deployment with edge computing",
        icon: <Globe className="w-4 h-4 text-sky-500" />,
        status: "Beta",
        tags: ["Infrastructure", "Edge"],
        href: "#"
    },
];

function BentoGrid({ items = itemsSample, className }: BentoGridProps) {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-3 p-4 max-w-7xl mx-auto", className)}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "group relative p-4 rounded-xl overflow-hidden transition-all duration-300",
                        "border border-gray-100/80 bg-white",
                        "hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)]",
                        "hover:-translate-y-0.5 will-change-transform",
                        item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
                        {
                            "shadow-[0_2px_12px_rgba(0,0,0,0.03)] -translate-y-0.5":
                                item.hasPersistentHover,
                        }
                    )}
                >
                    <div
                        className={`absolute inset-0 ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
                    </div>

                    <div className="relative flex flex-col space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 group-hover:bg-gradient-to-br transition-all duration-300">
                                {item.icon}
                            </div>
                            <span
                                className={cn(
                                    "text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-sm",
                                    "bg-black/5 text-gray-600",
                                    "transition-colors duration-300 group-hover:bg-black/10"
                                )}
                            >
                                {item.status || "Active"}
                            </span>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-medium text-gray-900 tracking-tight text-[15px]">
                                {item.title}
                                <span className="ml-2 text-xs text-gray-500 font-normal">
                                    {item.meta}
                                </span>
                            </h3>
                            <p className="text-sm text-gray-600 leading-snug font-[425]">
                                {item.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                            <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                                {item.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 rounded-md bg-black/5 backdrop-blur-sm transition-all duration-200 hover:bg-black/10"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                {item.cta || "Explore →"}
                            </span>
                        </div>
                    </div>

                    <div
                        className={`absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-gray-100/50 to-transparent ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    />
                </div>
            ))}
        </div>
    );
}

function BentoCard({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
}: {
    name: string;
    className?: string;
    background: React.ReactNode;
    Icon: any;
    description: string;
    href: string;
    cta: string;
}) {
    return (
        <div
            className={cn(
                "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
                "border border-gray-100/80 bg-white",
                "hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)]",
                "hover:-translate-y-0.5 will-change-transform transition-all duration-300",
                className,
            )}
        >
            <div>{background}</div>
            <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
                <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
                <h3 className="text-xl font-semibold text-neutral-700">
                    {name}
                </h3>
                <p className="max-w-lg text-neutral-400">{description}</p>
            </div>

            <div
                className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            >
                <a 
                    href={href} 
                    className="pointer-events-auto inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                    {cta}
                    <span className="ml-2">→</span>
                </a>
            </div>
            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03]" />
        </div>
    );
}

export { BentoCard, BentoGrid };
