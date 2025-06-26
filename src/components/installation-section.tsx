"use client";

import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CodeBlock from "@/components/ui/code-block";
import MyTerminal, { CommandMap } from "@/components/ui/my-terminal";
import { ScrollArea } from "@/components/ui/scroll-area";
import { customFormFieldCode } from "@/const/custom-form-field-code";
import { useInFormCode } from "@/const/use-in-form";
import { Code, Download, Terminal as TerminalIcon } from "lucide-react";

const shadcnInstallCommand: CommandMap = {
  npm: "npx shadcn@latest add button form input textarea select popover checkbox switch radio-group calendar",
  yarn: "yarn shadcn@latest add button form input textarea select popover checkbox switch radio-group calendar",
  pnpm: "pnpm shadcn@latest add button form input textarea select popover checkbox switch radio-group calendar",
  bun: "bun shadcn@latest add button form input textarea select popover checkbox switch radio-group calendar",
};

export function InstallationSection() {
  return (
    <section id="installation" className="space-y-8 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <Badge variant="outline" className="mb-2">
          <Download className="mr-2 h-3 w-3" />
          <AnimatedShinyText>Quick Setup</AnimatedShinyText>
        </Badge>
        <h2 className="text-3xl leading-tight font-bold tracking-tighter md:text-5xl">
          Get Started in Minutes
        </h2>
        <p className="text-muted-foreground max-w-[750px] text-lg">
          Install CustomFormField and start building better forms with just a
          few simple steps.
        </p>
      </div>

      <div className="mx-auto max-w-5xl space-y-6">
        {/* Step 1: Install Dependencies */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold">
                1
              </div>
              <div>
                <CardTitle className="flex items-center gap-2">
                  <TerminalIcon className="h-5 w-5" />
                  Install Required Components
                </CardTitle>
                <CardDescription>
                  Install all the shadcn/ui components that CustomFormField
                  depends on
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <pre className="">
                {/* <code className="font-mono text-sm">
                  {shadcnInstallCommand}
                </code> */}
                <MyTerminal commands={shadcnInstallCommand} />
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Step 2: Add the Component */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold">
                2
              </div>
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Add the CustomFormField Component
                </CardTitle>
                <CardDescription>
                  Create the component file in your project
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground mb-3 text-sm">
              Create a new file:{" "}
              <code className="bg-muted rounded px-2 py-1 font-mono text-xs">
                components/ui/custom-form-field.tsx
              </code>
            </p>

            <ScrollArea className="h-[500px] rounded-md">
              <CodeBlock code={customFormFieldCode} />
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Usage Example */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-primary">
              🎉 You&apos;re Ready!
            </CardTitle>
            <CardDescription>
              Import and use CustomFormField in your forms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-md">
              <CodeBlock code={useInFormCode} />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
