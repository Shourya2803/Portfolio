import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Artically",
    description: " Your Daily Dose of Thoughts, Likes, and Follows",
    image: "/projects/artically.png",
    tags: ["Nextjs", "Typescript", "neon"],
    demoUrl: "socially-alpha-ten.vercel.app",
    githubUrl: "https://github.com/Shourya2803/Socially",
  },
  {
    id: 2,
    title: "Local-Foodie",
    description:
      "Your Neighborhood's Best, at Your Doorstep",
    image: "/projects/local.png",
    tags: ["React", "CRUD", "AI"],
    demoUrl: "local-foodie.onrender.com/",
    githubUrl: "https://github.com/Shourya2803/Local_Foodie",
  },
  {
    id: 3,
    title: "EMS Portal",
    description:
      "Your All-in-One Employee Management Solution.",
    image: "/projects/ems.png",
    tags: ["React", "tailwind", "UI"],
    demoUrl: "shourya2803.github.io/EMS-1/",
    githubUrl: "https://github.com/Shourya2803/EMS-1",
  },
  {
    id: 4,
    title: "luxury-rentals",
    description:
      "Luxury Rentals: Your Gateway to Opulent Living",
    image: "/projects/rental.png",
    tags: ["React", "tailwind", "UI"],
    demoUrl: "shourya2803.github.io/Luxury_Rental/",
    githubUrl: "https://github.com/Shourya2803/Luxury_Rental",
  },
  {
    id: 5,
    title: "Animated-Website UI",
    description:
      "A Beautifully Animated Website UI",
    image: "/projects/ui.png",
    tags: [ "animation", "GSAP"],
    demoUrl: "https://animated-website-nine-kappa.vercel.app/",
    githubUrl: "https://github.com/Shourya2803/Animated-Website",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}  
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Shourya2803"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
