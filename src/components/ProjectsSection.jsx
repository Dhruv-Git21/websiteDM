import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Drug Design",
    description: "Valid Property-Enhanced Contrastive Learning for Targeted Optimization & Resampling for Novel Drug Design",
    image: "/projects/project1.png",
    tags: ["Contrastive Learning", "GMM", "Chemical Synthesis"],
    demoUrl: "https://arxiv.org/abs/2509.00684",
    githubUrl: "https://github.com/amartya21/vector-drug-design.git",
  },
  {
    id: 2,
    title: "Representation Framework",
    description:
      "Creating a benchmark for molecular representations, providing a more context aware segmentation",
    image: "/projects/project2.png",
    tags: ["Graphs", "GenAI", "Contrastive Learning"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "LLM Optimisation",
    description:
      "LORA optimised pipeline for Ligand design optmisation and query classifier ",
    image: "/projects/project3.png",
    tags: ["Ligand Optimisation", "LoRA", "Large Language Model"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Biomedical Agentic RAG",
    description:
      "Biomedical Evidence Retrieval with Agentic RAG and Dual Text Encoders ",
    image: "/projects/project4.png",
    tags: ["RAG", "Agentic AI", "Large Language Model"],
    demoUrl: "https://openreview.net/forum?id=G3WqyjD03u",
    githubUrl: "https://github.com/Dhruv-Git21/Agentic-Biomedical-Retrieval-System",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Research <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our work spans diverse projects, each aimed at pushing the boundaries of statistical chemical and computational biological research.
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
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
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
            href="https://github.com/Dhruv-Git21"
          >
            Check Our Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
