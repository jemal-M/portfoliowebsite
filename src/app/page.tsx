import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedPhoto } from "@/components/animated-photo"

export default function Home() {
  return (
    <div className="flex px-3 min-h-screen flex-col overflow-x-hidden">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold inline-block">Jemal Mohammed</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link href="#about" className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">About</Link>
              <Link href="#skills" className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">Skills</Link>
              <Link href="#projects" className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">Projects</Link>
              <Link href="#contact" className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">Contact</Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container relative py-16 sm:py-24">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  Jemal Mohammed
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground">
                  Full-Stack Developer
                </h2>
              </div>
              <p className="max-w-[600px] text-lg text-muted-foreground">
                Crafting exceptional digital experiences with modern technologies. 
                Specializing in building scalable, performant, and user-friendly web applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href="#contact">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                  <Link href="#projects">View My Work</Link>
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <AnimatedPhoto 
                src="/profile.jpg" 
                alt="Jemal Mohammed" 
                className="w-64 h-64 lg:w-80 lg:h-80"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">About Me</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              I'm a passionate full-stack developer with expertise in building modern web applications. 
              With a strong foundation in both front-end and back-end technologies, I create seamless, 
              user-friendly experiences that solve real-world problems. I'm constantly learning and 
              adapting to new technologies to stay at the forefront of web development.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Skills & Technologies</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-6">
              Here are some of the technologies I work with on a daily basis.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
            <SkillBadge name="Laravel/PHP" />

              <SkillBadge name="React" />
              <SkillBadge name="Next.js" />
              <SkillBadge name="TypeScript" />
              <SkillBadge name="Node.js" />
              <SkillBadge name="Express" />
              <SkillBadge name="MongoDB" />
              <SkillBadge name="PostgreSQL" />
              <SkillBadge name="Tailwind CSS" />
              <SkillBadge name="Redux" />
              <SkillBadge name="GraphQL" />
              <SkillBadge name="Docker" />
              <SkillBadge name="AWS" />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Projects</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-6">
              Check out some of my recent work.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Project Management System"
                description="Developed a centralized project tracking and management platform for Shaggar City, enabling city administrators to manage public projects efficiently."
                tags={["Laravel"]}
                image="/pms.png"
                link="https://pms.shaggarcity.et"
              />
              <ProjectCard
                title="ABG Electronic Services Platform"
                description="A digital public service platform implemented in Dire Dawa, Shaggar City, and Adama City. Enables citizens, businesses, and government entities to access services online seamlessly."
                tags={["Laravel", "React/Next.js", "Tailwind CSS"]}
                image="/eservice.png"
                link="https://www.eservices.et"
              />
              <ProjectCard
                title="Document Management System (DMS) for Shaggar City"
                description="Designed a document management system for internal document handling and workflow automation in municipal government offices."
                tags={["Laravel"]}
                image="/dms.png"
                link="https://dms.hulupost.com/login"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Get In Touch</h2>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Jemal Mohammed. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
