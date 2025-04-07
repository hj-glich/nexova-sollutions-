
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Users } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { projectsData } from '@/data/projects';
import DoodleBackground from '@/components/DoodleBackground';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const projectData = projectsData.find((p) => p.id === id);
      setProject(projectData);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <DoodleBackground />
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Project not found</h2>
          <Link to="/projects">
            <Button>
              <ArrowLeft className="mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <DoodleBackground />
      <NavBar />
      <main>
        <div className="w-full bg-nexova-light py-20">
          <div className="max-w-7xl mx-auto px-6">
            <Link to="/projects" className="inline-flex items-center text-sm font-medium mb-6 hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{project.title}</h1>
            <div className="flex flex-wrap gap-4 mb-10">
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                {project.category}
              </span>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                2025
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted mb-8">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {project.description}
              </p>

              <h2 className="text-2xl font-semibold mb-4">Challenge</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {project.challenge || "Our team was tasked with creating an intuitive and efficient solution that addresses key user pain points while maintaining scalability and performance."}
              </p>

              <h2 className="text-2xl font-semibold mb-4">Solution</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {project.solution || "We developed a comprehensive platform with a user-centered design approach, incorporating the latest technologies and best practices to deliver a seamless experience."}
              </p>
            </div>

            <div>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Duration</h4>
                      <p className="flex items-center mt-1">
                        <Calendar size={16} className="mr-2" />
                        {project.duration || "3 months"}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Team</h4>
                      <p className="flex items-center mt-1">
                        <Users size={16} className="mr-2" />
                        {project.team || "Team of 4"}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Technologies</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies ? (
                          project.technologies.map((tech: string, index: number) => (
                            <span key={index} className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                              {tech}
                            </span>
                          ))
                        ) : (
                          <>
                            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                              React
                            </span>
                            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                              TypeScript
                            </span>
                            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                              Tailwind CSS
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
