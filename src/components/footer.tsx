import Link from "next/link"
import { Github, Twitter, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary" />
            <span className="font-bold">CustomFormField</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with <Heart className="inline h-4 w-4 text-red-500" /> for the React community.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/yourusername/custom-form-field"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
