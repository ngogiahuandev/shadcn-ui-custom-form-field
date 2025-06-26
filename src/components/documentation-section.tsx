"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Book, Code, Settings, Lightbulb } from "lucide-react";
import { validationCode } from "@/const/validattion-code";
import CodeBlock from "@/components/ui/code-block";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";

export function DocumentationSection() {
  return (
    <section id="docs" className="space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <Badge variant="outline" className="mb-2">
          <Book className="mr-2 h-3 w-3" />
          <AnimatedShinyText>Documentation</AnimatedShinyText>
        </Badge>
        <h2 className="text-3xl leading-tight font-bold tracking-tighter md:text-5xl">
          Complete API Reference
        </h2>
        <p className="text-muted-foreground max-w-[750px] text-lg">
          Everything you need to know about using CustomFormField in your
          projects.
        </p>
      </div>

      <div className="mx-auto max-w-6xl">
        <Tabs defaultValue="props" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="props">Props</TabsTrigger>
            <TabsTrigger value="types">Field Types</TabsTrigger>
            <TabsTrigger value="validation">Validation</TabsTrigger>
            <TabsTrigger value="styling">Styling</TabsTrigger>
          </TabsList>

          <TabsContent value="props" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Base Props
                  </CardTitle>
                  <CardDescription>
                    Common properties available for all field types
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <code className="bg-muted rounded px-2 py-1 font-mono text-sm">
                      control
                    </code>
                    <p className="text-muted-foreground text-sm">
                      React Hook Form control object (required)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <code className="bg-muted rounded px-2 py-1 font-mono text-sm">
                      name
                    </code>
                    <p className="text-muted-foreground text-sm">
                      Field name for form registration (required)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <code className="bg-muted rounded px-2 py-1 font-mono text-sm">
                      label
                    </code>
                    <p className="text-muted-foreground text-sm">
                      Field label text (optional)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <code className="bg-muted rounded px-2 py-1 font-mono text-sm">
                      description
                    </code>
                    <p className="text-muted-foreground text-sm">
                      Helper text displayed below the field (optional)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <code className="bg-muted rounded px-2 py-1 font-mono text-sm">
                      placeholder
                    </code>
                    <p className="text-muted-foreground text-sm">
                      Placeholder text for input fields (optional)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <code className="bg-muted rounded px-2 py-1 font-mono text-sm">
                      disabled
                    </code>
                    <p className="text-muted-foreground text-sm">
                      Disable the field (optional, default: false)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <code className="bg-muted rounded px-2 py-1 font-mono text-sm">
                      required
                    </code>
                    <p className="text-muted-foreground text-sm">
                      Show required indicator (optional, default: false)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <code className="bg-muted rounded px-2 py-1 font-mono text-sm">
                      className
                    </code>
                    <p className="text-muted-foreground text-sm">
                      Additional CSS classes for the input element (optional)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Type-Specific Props
                  </CardTitle>
                  <CardDescription>
                    Additional properties for specific field types
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <code className="bg-muted rounded px-2 py-1 font-mono text-sm">
                      options
                    </code>
                    <p className="text-muted-foreground text-sm">
                      Array of options for select and radio fields
                    </p>
                  </div>
                  <div className="space-y-2">
                    <code className="bg-muted rounded px-2 py-1 font-mono text-sm">
                      min, max, step
                    </code>
                    <p className="text-muted-foreground text-sm">
                      Number constraints for number fields
                    </p>
                  </div>
                  <div className="space-y-2">
                    <code className="bg-muted rounded px-2 py-1 font-mono text-sm">
                      rows
                    </code>
                    <p className="text-muted-foreground text-sm">
                      Number of rows for textarea fields
                    </p>
                  </div>
                  <div className="space-y-2">
                    <code className="bg-muted rounded px-2 py-1 font-mono text-sm">
                      dateFormat
                    </code>
                    <p className="text-muted-foreground text-sm">
                      Date format string for date fields
                    </p>
                  </div>
                  <div className="space-y-2">
                    <code className="bg-muted rounded px-2 py-1 font-mono text-sm">
                      minDate, maxDate
                    </code>
                    <p className="text-muted-foreground text-sm">
                      Date range constraints for date fields
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="types" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { type: "text", description: "Standard text input field" },
                { type: "email", description: "Email input with validation" },
                { type: "password", description: "Password input field" },
                {
                  type: "number",
                  description: "Numeric input with constraints",
                },
                { type: "textarea", description: "Multi-line text input" },
                { type: "date", description: "Date picker with calendar" },
                { type: "select", description: "Dropdown selection" },
                { type: "checkbox", description: "Boolean checkbox input" },
                { type: "switch", description: "Toggle switch input" },
                { type: "radio", description: "Radio button group" },
              ].map((field) => (
                <Card key={field.type}>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      <code className="text-primary">{field.type}</code>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {field.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="validation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Validation Integration
                </CardTitle>
                <CardDescription>
                  How to use CustomFormField with React Hook Form and Zod
                  validation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock code={validationCode} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="styling" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Customization Options</CardTitle>
                <CardDescription>
                  How to customize the appearance of CustomFormField
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="mb-2 font-semibold">CSS Classes</h4>
                  <p className="text-muted-foreground mb-2 text-sm">
                    Use the{" "}
                    <code className="bg-muted rounded px-1">className</code>{" "}
                    prop to add custom styles to the input element:
                  </p>
                  <pre className="bg-muted rounded p-3 text-sm">
                    <code>{`<CustomFormField
  control={form.control}
  name="email"
  type="email"
  className="border-2 border-blue-500 focus:border-blue-700"
/>`}</code>
                  </pre>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">Form Item Styling</h4>
                  <p className="text-muted-foreground mb-2 text-sm">
                    Use{" "}
                    <code className="bg-muted rounded px-1">
                      formFieldClassName
                    </code>{" "}
                    to style the entire form field container:
                  </p>
                  <pre className="bg-muted rounded p-3 text-sm">
                    <code>{`<CustomFormField
  control={form.control}
  name="email"
  type="email"
  formFieldClassName="mb-6 p-4 border rounded-lg"
/>`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
