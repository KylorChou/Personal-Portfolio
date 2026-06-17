import { Button } from "@/components/Button"
import { ArrowRight, Download, ChevronDown } from "lucide-react"
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17a5.2 5.2 0 0 0-1.39-3.56 5.2 5.2 0 0 0-.1-3.51s-1.13-.36-3.7 1.38a12.8 12.8 0 0 0-6.8 0C5.83 2.5 4.7 2.86 4.7 2.86a5.2 5.2 0 0 0-.1 3.51 5.2 5.2 0 0 0-1.39 3.56c0 5.77 3.35 6.79 6.5 7.17A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const skills = [
    "React",
    "JavaScript",
    "Node.js",
    "Python",
    "Java",
    "Docker",
    "Figma",
    "Git",
    "C",
    "CSS",
    "HTML",
    "Linux CLI",
    "Microsoft Office Suite",
    "Google Workplace",
    "Github Actions",
];

export const Hero = () => {
    return <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bg Image */}
        <div className="absolute inset-0">
            <img  src="/hero-bg.jpg" alt="Hero Background" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
        </div>

        {/* Green Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
                <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                style={{
                    backgroundColor: "#20B2A6",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `slow-drift ${15 + Math.random()  * 20}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`
                }}></div>
            ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">  
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Student at Virginia Tech - Computer Science
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Elevating <span className="font-serif italic font-normal text-white">complex</span>
                            <br />
                            ideas into 
                            <br />
                            <span className="text-primary glow-text">reality.</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-lg animate-fade-in animation-delay-200">
                            Hi, I'm Kylor Chou. I am a computer science student at Virginia Tech specializing in mobile ecosystems, 
                            scalable applications, and community-driven tools. Building primarily with React Native, 
                            Java, and Python, I pair technical precision with a strong background in cross-functional 
                            leadership. I thrive on bridging the gap between complex software logic and 
                            real-world operational execution.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg">
                            Contact Me <ArrowRight className="w-5 h-5" />
                        </Button>
                        <AnimatedBorderButton>
                            <Download className="w-5 h-5" />
                            Download CV
                        </AnimatedBorderButton>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground">Follow Me: </span>
                        {[
                            {icon: GithubIcon, href: "https://github.com/KylorChou"},
                            {icon: LinkedinIcon, href: "https://www.linkedin.com/in/kylor-chou"},
                        ].map((social, idx) => (
                            <a 
                                key={idx}
                                href={social.href}
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            >
                                {<social.icon  className="w-5 h-5"/>}
                            </a>
                        ))}
                    </div>
                </div>
                {/* Right Column - Image */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* Profile Image */}
                    <div className="relative max-w-md mx-auto">
                        <div 
                            className="absolute inset-0 rounded-3xl bg-gradient-to-br
                            from-primary/30 via-transparent to primary/10
                            blur-2xl animate-pulse-glow"
                        />
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img 
                                src="/profile-photo.png" 
                                alt="Kylor Chou" 
                                className="w-full aspect-[4/5] object-cover rounded-2xl"
                            />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
                                    <span className="text-sm font-medium">Available for work summer 2027</span>
                                </div>
                            </div>
                            {/* Stats Badge */}
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                <div className="text-2xl font-bold text-primary">Senior</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-sm text-muted-foreground mb-6 text-center">
                    Technologies I work with
                </p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">
                        {[...skills, ...skills].map((skill, idx) => (
                            <div 
                                key={idx}
                                className="flex-shrink-0 px-8 py-4">
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
            <a 
                href="#about"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
        </div>
    </section>;
}