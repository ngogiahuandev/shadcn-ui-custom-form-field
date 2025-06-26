"use client";

import Link from "next/link";
import { Github, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type NavigationItem = {
  href: string;
  label: string;
  isActive: boolean;
};

export function Header() {
  const [currentHash, setCurrentHash] = useState("");
  const [navigationItems] = useState<NavigationItem[]>([
    { href: "#installation", label: "Installation", isActive: false },
    { href: "#docs", label: "Documentation", isActive: false },
    { href: "#examples", label: "Examples", isActive: false },
    { href: "#playground", label: "Playground", isActive: false },
  ]);

  useEffect(() => {
    // Set initial hash
    setCurrentHash(window.location.hash);

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash;
      setCurrentHash(newHash);
      console.log("Hash changed to:", newHash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleSmoothScroll = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Update URL hash without triggering page jump
      window.history.replaceState(null, "", href);
      setCurrentHash(href);
    }
  };

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-16 flex items-center space-x-2">
            <span className="font-mono text-lg font-bold">CustomFormField</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigationItems.map((item) => {
              const isActive = currentHash === item.href;

              return (
                <button
                  key={item.href}
                  onClick={() => handleSmoothScroll(item.href)}
                  className={cn(
                    "text-muted-foreground hover:text-foreground/80 cursor-pointer border-none bg-transparent p-0 text-sm font-medium transition-colors",
                    isActive && "text-foreground"
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="outline" size="default" asChild>
            <Link
              href="https://github.com/ngogiahuandev/shadcn-ui-custom-form-field"
              target="_blank"
            >
              <Github className="h-4 w-4" />
              <span>ngogiahuandev</span>
            </Link>
          </Button>
          <Button
            size="default"
            asChild
            className="cursor-pointer bg-amber-400 text-black hover:bg-amber-600"
          >
            <Link href="https://buymeacoffee.com/ngogiahuana" target="_blank">
              <Coffee className="h-4 w-4" />
              <span>Buy me a coffee</span>
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
