import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17a5.2 5.2 0 0 0-1.39-3.56 5.2 5.2 0 0 0-.1-3.51s-1.13-.36-3.7 1.38a12.8 12.8 0 0 0-6.8 0C5.83 2.5 4.7 2.86 4.7 2.86a5.2 5.2 0 0 0-.1 3.51 5.2 5.2 0 0 0-1.39 3.56c0 5.77 3.35 6.79 6.5 7.17A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const projects = [
    {
        title: "BakeBook Mobile App",
        description: "A mobile app for storing and sharing baking recipes (WIP).",
        image: "",
        tags: ["React Native", "Javascript", "Appwrite"],
        github: "https://github.com/KylorChou/bake_book_app"
    },
    {
        title: "Hokie Food App",
        description: "A mobile app for finding events offering free food on campus.",
        image: "/projects/hokie-food-map.png",
        tags: ["React Native", "Javascript", "Python", "GeoAPI"],
        github: "https://github.com/KylorChou/Hokie-Food-Map"
    },
    {
        title: "Personal Server",
        description: "A personal server with login, video streaming, and file storage capabilities.",
        image: "",
        tags: ["Python", "C", "Command Line", "GitLab"],
        github: "https://github.com/KylorChou/Personal-Server"
    },
    {
        title: "Threadpool",
        description: "A thread pool implementation in C",
        image: "",
        tags: ["C", "Python", "Command Line", "GitLab"],
        github: "https://github.com/KylorChou/Threadpool"
    }
]

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Bg Glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider animate-fade-in">
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italix font-normal text-white"> make an impact</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Here are some of my recent projects that I'm proud of.
                    </p>
                </div>

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div 
                            key={idx} 
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                                <div 
                                    className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" 
                                />

                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opcaity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-foreground transition-all">
                                        <GithubIcon className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Content */} 
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight 
                                        className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                                    />
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span 
                                            key={tagIdx}
                                            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton>
                        View All Projects
                        <ArrowUpRight className="w-5 h-5" />
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    );
};