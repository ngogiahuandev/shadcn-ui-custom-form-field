import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Zap } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="space-y-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:py-32"
      id="hero"
    >
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
        <Badge variant="outline" className="mb-4">
          <Code2 className="mr-2 h-3 w-3" />
          <AnimatedShinyText>
            Build Better Forms with CustomFormField
          </AnimatedShinyText>
        </Badge>

        <h1 className="text-3xl leading-tight font-bold tracking-tighter md:text-6xl lg:leading-[1.1]">
          Build Better Forms with{" "}
          <span className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-transparent">
            CustomFormField
          </span>
        </h1>

        <div className="my-6 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="#installation">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#playground">
              Try Interactive Demo
              <Zap className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="text-muted-foreground flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            TypeScript Ready
          </div>
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            Fully Accessible
          </div>
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-purple-500" />
            Zero Dependencies
          </div>
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
            Easy to Use
          </div>
        </div>
      </div>
    </section>
  );
}
