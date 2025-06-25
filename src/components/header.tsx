import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-16 flex items-center space-x-2">
            <span className="font-mono text-lg font-bold">CustomFormField</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#features" className="hover:text-foreground/80">
              Features
            </Link>
            <Link href="#installation" className="hover:text-foreground/80">
              Installation
            </Link>
            <Link href="#docs" className="hover:text-foreground/80">
              Documentation
            </Link>
            <Link href="#examples" className="hover:text-foreground/80">
              Examples
            </Link>
            <Link href="#playground" className="hover:text-foreground/80">
              Playground
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" size="sm" asChild>
            <Link
              href="https://github.com/ngogiahuandev/shadcn-ui-custom-form-field"
              target="_blank"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
