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
import { Copy, Package, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InstallationSection() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section
      id="installation"
      className="bg-muted/50 space-y-6 py-8 md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <Badge variant="outline" className="mb-2">
          <Package className="mr-2 h-3 w-3" />
          Quick Setup
        </Badge>
        <h2 className="text-3xl leading-tight font-bold tracking-tighter md:text-5xl">
          Get Started in Minutes
        </h2>
        <p className="text-muted-foreground max-w-[750px] text-lg">
          Install CustomFormField and start building better forms with just a
          few commands.
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <Tabs defaultValue="npm" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="yarn">yarn</TabsTrigger>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
          </TabsList>

          <TabsContent value="npm" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  Install Dependencies
                </CardTitle>
                <CardDescription>
                  Install the required dependencies for CustomFormField
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted overflow-x-auto rounded-lg p-4">
                    <code>
                      npm install react-hook-form @hookform/resolvers zod
                      date-fns
                    </code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() =>
                      copyToClipboard(
                        "npm install react-hook-form @hookform/resolvers zod date-fns"
                      )
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="yarn" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  Install Dependencies
                </CardTitle>
                <CardDescription>
                  Install the required dependencies for CustomFormField
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted overflow-x-auto rounded-lg p-4">
                    <code>
                      yarn add react-hook-form @hookform/resolvers zod date-fns
                    </code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() =>
                      copyToClipboard(
                        "yarn add react-hook-form @hookform/resolvers zod date-fns"
                      )
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pnpm" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  Install Dependencies
                </CardTitle>
                <CardDescription>
                  Install the required dependencies for CustomFormField
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted overflow-x-auto rounded-lg p-4">
                    <code>
                      pnpm add react-hook-form @hookform/resolvers zod date-fns
                    </code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() =>
                      copyToClipboard(
                        "pnpm add react-hook-form @hookform/resolvers zod date-fns"
                      )
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Add the Component</CardTitle>
            <CardDescription>
              Copy the CustomFormField component to your project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <pre className="bg-muted overflow-x-auto rounded-lg p-4 text-sm">
                <code>{`// Copy the CustomFormField component to:
// components/ui/custom-form-field.tsx

// Then import and use in your forms:
import { CustomFormField } from "@/components/ui/custom-form-field"`}</code>
              </pre>
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-2 right-2"
                onClick={() =>
                  copyToClipboard(
                    'import { CustomFormField } from "@/components/ui/custom-form-field"'
                  )
                }
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
