import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Shield,
  Zap,
  Code2,
  Palette,
  CheckCircle,
  Accessibility,
  Type,
  Puzzle,
} from "lucide-react";

const features = [
  {
    icon: Type,
    title: "Type-Safe",
    description:
      "Built with TypeScript for complete type safety and excellent developer experience with IntelliSense support.",
  },
  {
    icon: Puzzle,
    title: "10+ Field Types",
    description:
      "Support for text, email, password, number, textarea, date, select, checkbox, switch, and radio field types.",
  },
  {
    icon: Shield,
    title: "Built-in Validation",
    description:
      "Seamless integration with React Hook Form validation and Zod schema validation for robust form handling.",
  },
  {
    icon: Accessibility,
    title: "Accessibility First",
    description:
      "WCAG compliant with proper ARIA attributes, keyboard navigation, and screen reader support out of the box.",
  },
  {
    icon: Palette,
    title: "Themeable",
    description:
      "Fully customizable with Tailwind CSS classes and seamless integration with Shadcn UI design system.",
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description:
      "Lightweight with zero external dependencies beyond React Hook Form and Shadcn UI components.",
  },
  {
    icon: Code2,
    title: "Developer Friendly",
    description:
      "Simple API with comprehensive documentation, examples, and TypeScript definitions for easy adoption.",
  },
  {
    icon: CheckCircle,
    title: "Production Ready",
    description:
      "Battle-tested component with comprehensive error handling and edge case coverage for production use.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h2 className="text-3xl leading-tight font-bold tracking-tighter md:text-5xl">
          Why Choose CustomFormField?
        </h2>
        <p className="text-muted-foreground max-w-[750px] text-lg">
          Built with modern React patterns and best practices to provide the
          ultimate form building experience.
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardHeader>
              <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <feature.icon className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
