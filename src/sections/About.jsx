import { Code2, Users, Rocket, Lightbulb } from 'lucide-react';

const highlights = [
    {
        icon: Code2,
        title: "Systems-Level Optimization",
        description: "I build highly efficient applications by focusing on low-level optimization and robust software architecture."
    },
    {
        icon: Users,
        title: "Operational Collaboration",
        description: "I leverage my leadership background in complex logistics to bridge the gap between technical execution and cross-functional teamwork."
    },
    {
        icon: Rocket,
        title: "Precision and Performance",
        description: "I apply an uncompromising attention to detail to ensure seamless user experiences and flawless underlying logic."
    },
    {
        icon: Lightbulb,
        title: "Rapid Adaptation",
        description: "I quickly master new technologies and specialized domains to solve complex, multifaceted engineering problems."
    }
]

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className=" space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Crafting precision-driven software
                            <span className="font-serif italic font-normal text-white"> from the ground up.</span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I am a passionate software engineer pursuing a B.S. in Computer Science with a minor in Mathematics at Virginia Tech.
                                For me, I've always had a deep curiosity about how things work and a desire to create solutions that make a difference.
                                I thrive on the challenge of solving complex problems and turning ideas that bridge deep technical concepts and human
                                needs into reality.
                            </p>
                            <p>
                                While I am still in the early stages of my career, I am committed to continuous learning and growth in the field of 
                                software engineering. My main expertise lies in using React, Next.js, Node.js and Javascript to build modern web applications.
                                However, I also have experience with other languages and frameworks such as Python, Java, and am always eager to learn
                                new technologies and approaches.
                            </p>
                            <p>
                                When I'm not coding, you can find me baking a variety of cakes or bread for my friends and family, cooking up a delicious
                                meal, going out with my friends, or managing complex logistics for the multitude of student organizations that I lead.
                                I bring the same level of dedication and enthusiasm to these activities as I do to my coding projects, and I am always 
                                looking for new ways to improve and grow.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "My mission is to solve complex problems by combining technical expertise 
                                with cross-functional collaboration to bring users a product that they will love."
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Highlights*/}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary"/>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    {item.description}  
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}