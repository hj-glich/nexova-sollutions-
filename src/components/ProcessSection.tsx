
import React from "react";
import { Timeline } from "@/components/ui/timeline";

const ProcessSection = () => {
  const timelineData = [
    {
      title: "Discovery",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            We start by understanding your business goals, target audience, and project requirements. This phase involves in-depth research and analysis to establish a solid foundation for your project.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h4 className="font-medium text-base mb-2">Requirements Gathering</h4>
              <p className="text-sm text-neutral-600">Comprehensive analysis of your needs and objectives</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h4 className="font-medium text-base mb-2">Research & Strategy</h4>
              <p className="text-sm text-neutral-600">Market analysis and strategic planning</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Design",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Our design process transforms concepts into visual experiences. We create wireframes and mockups that align with your brand identity and provide the best user experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h4 className="font-medium text-base mb-2">UI/UX Design</h4>
              <p className="text-sm text-neutral-600">User-centered design focused on intuitive experiences</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h4 className="font-medium text-base mb-2">Visual Identity</h4>
              <p className="text-sm text-neutral-600">Crafting compelling visual elements aligned with your brand</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Development",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Our development team transforms designs into fully functional, responsive websites. We use modern technologies to ensure your site is fast, secure, and scalable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h4 className="font-medium text-base mb-2">Frontend Development</h4>
              <p className="text-sm text-neutral-600">Responsive and accessible user interfaces</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h4 className="font-medium text-base mb-2">Backend Integration</h4>
              <p className="text-sm text-neutral-600">Robust systems that power your digital experience</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Launch & Support",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            We carefully deploy your project and provide ongoing support to ensure everything runs smoothly after launch.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✓ Pre-launch testing and quality assurance
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✓ Performance optimization
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✓ Seamless deployment
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✓ Comprehensive training and documentation
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✓ Ongoing maintenance and support
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h4 className="font-medium text-base mb-2">Continuous Improvement</h4>
              <p className="text-sm text-neutral-600">Regular updates and enhancements</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h4 className="font-medium text-base mb-2">Performance Monitoring</h4>
              <p className="text-sm text-neutral-600">Analytics and insights to optimize your digital presence</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="process-section" className="w-full">
      <Timeline data={timelineData} />
    </section>
  );
};

export default ProcessSection;
