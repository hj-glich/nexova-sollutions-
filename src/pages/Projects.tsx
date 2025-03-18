
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Users, Zap } from 'lucide-react';

const ProjectCard = ({ title, description, category, image, delay = 0 }) => (
  <motion.div 
    className="group overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay }}
  >
    <div className="aspect-video w-full overflow-hidden bg-muted">
      <div className="h-full w-full bg-gradient-to-br from-neutral-200 to-neutral-300 object-cover" />
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{category}</span>
        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
          2025
        </span>
      </div>
      <h3 className="mt-3 text-xl font-display font-semibold">{title}</h3>
      <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>3 months</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>Team of 4</span>
          </div>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
          <ArrowUpRight size={16} />
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Velocity Commerce Platform",
      description: "A modern e-commerce solution with integrated analytics and customer behavior tracking for improved conversion rates.",
      category: "E-commerce",
    },
    {
      title: "MindfulTech Dashboard",
      description: "A wellness application dashboard featuring meditation tracking, mood journaling, and personalized recommendations.",
      category: "Health & Wellness",
    },
    {
      title: "EcoTrack Mobile App",
      description: "A sustainability platform that helps users track and reduce their carbon footprint with gamification elements.",
      category: "Sustainability",
    },
    {
      title: "MetroGo Transit Portal",
      description: "A public transportation solution that integrates real-time scheduling, route planning, and community feedback.",
      category: "Transportation",
    },
    {
      title: "ArtisanLink Marketplace",
      description: "A peer-to-peer marketplace connecting artisans with customers, featuring secure transactions and creator stories.",
      category: "Marketplace",
    },
    {
      title: "FinVision Analytics Suite",
      description: "A financial analytics platform with personalized insights, investment tracking, and goal setting features.",
      category: "Finance",
    },
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-32 px-6 md:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Our Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Transforming ideas into exceptional digital experiences. Browse our latest work showcasing our expertise in design and development.
            </p>
          </motion.div>

          <div className="flex items-center justify-between mb-8">
            <motion.div
              className="flex gap-2 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <button className="rounded-full bg-primary text-primary-foreground px-4 py-1 text-sm">All</button>
              <button className="rounded-full bg-muted text-muted-foreground px-4 py-1 text-sm">Web</button>
              <button className="rounded-full bg-muted text-muted-foreground px-4 py-1 text-sm">Mobile</button>
              <button className="rounded-full bg-muted text-muted-foreground px-4 py-1 text-sm">Design</button>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                title={project.title} 
                description={project.description} 
                category={project.category}
                delay={index * 0.1 + 0.3}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
