# CustomFormField - Advanced Form Component for Shadcn UI

[![NPM Version](https://img.shields.io/npm/v/custom-form-field)](https://www.npmjs.com/package/custom-form-field)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)](https://www.typescriptlang.org/)
[![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-Compatible-orange)](https://react-hook-form.com/)
[![Accessibility](https://img.shields.io/badge/A11y-WCAG%20Compliant-green)](https://www.w3.org/WAI/WCAG21/quickref/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 The Ultimate Form Field Component for Modern React Applications

**CustomFormField** is a comprehensive, type-safe form field component designed specifically for React Hook Form and Shadcn UI. Built with TypeScript, accessibility, and developer experience in mind, it supports 10+ field types with built-in validation and seamless integration.

### ✨ Why Choose CustomFormField?

- **🔒 Type-Safe**: Complete TypeScript support with IntelliSense
- **🎨 10+ Field Types**: Text, email, password, number, textarea, date, select, checkbox, switch, radio, and more
- **✅ Built-in Validation**: Seamless React Hook Form and Zod integration
- **♿ Accessibility First**: WCAG compliant with ARIA support
- **🎭 Fully Themeable**: Customizable with Tailwind CSS and Shadcn UI
- **⚡ Performance Optimized**: Zero external dependencies, lightweight bundle
- **📚 Developer Friendly**: Comprehensive docs and examples
- **🏗️ Production Ready**: Battle-tested with edge case coverage

## 🚀 Quick Start

### Installation

```bash
npm install custom-form-field
# or
yarn add custom-form-field
# or
pnpm add custom-form-field
```

### Prerequisites

Make sure you have these dependencies installed:

```bash
npm install react-hook-form @hookform/resolvers zod
npm install @radix-ui/react-* # Shadcn UI components
```

### Basic Usage

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CustomFormField } from "custom-form-field";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

// Define your schema
const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  age: z.number().min(18, "Must be at least 18 years old"),
  bio: z.string().optional(),
  newsletter: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;

export function MyForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      age: 18,
      bio: "",
      newsletter: false,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomFormField
          control={form.control}
          name="email"
          type="email"
          label="Email Address"
          placeholder="Enter your email"
          required
        />

        <CustomFormField
          control={form.control}
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          required
        />

        <CustomFormField
          control={form.control}
          name="age"
          type="number"
          label="Age"
          min={18}
          max={120}
          required
        />

        <CustomFormField
          control={form.control}
          name="bio"
          type="textarea"
          label="Bio"
          placeholder="Tell us about yourself"
          rows={4}
        />

        <CustomFormField
          control={form.control}
          name="newsletter"
          type="checkbox"
          label="Subscribe to newsletter"
          description="Get updates about new features and releases"
        />

        <Button type="submit">Submit Form</Button>
      </form>
    </Form>
  );
}
```

## 📋 Supported Field Types

| Type       | Description                 | Props                                             |
| ---------- | --------------------------- | ------------------------------------------------- |
| `text`     | Standard text input         | `placeholder`                                     |
| `email`    | Email input with validation | `placeholder`                                     |
| `password` | Password input              | `placeholder`                                     |
| `number`   | Number input                | `min`, `max`, `step`, `placeholder`               |
| `textarea` | Multi-line text input       | `rows`, `placeholder`                             |
| `date`     | Date picker with calendar   | `dateFormat`, `minDate`, `maxDate`, `placeholder` |
| `select`   | Dropdown selection          | `options: SelectOption[]`, `placeholder`          |
| `checkbox` | Single checkbox             | -                                                 |
| `switch`   | Toggle switch               | -                                                 |
| `radio`    | Radio button group          | `options: RadioOption[]`                          |

## 🎨 Advanced Examples

### Date Picker with Validation

```tsx
<CustomFormField
  control={form.control}
  name="birthDate"
  type="date"
  label="Birth Date"
  dateFormat="PP"
  maxDate={new Date()}
  placeholder="Select your birth date"
  required
/>
```

### Select with Options

```tsx
<CustomFormField
  control={form.control}
  name="country"
  type="select"
  label="Country"
  placeholder="Select your country"
  options={[
    { label: "United States", value: "us" },
    { label: "Canada", value: "ca" },
    { label: "United Kingdom", value: "uk" },
  ]}
  required
/>
```

### Radio Group

```tsx
<CustomFormField
  control={form.control}
  name="plan"
  type="radio"
  label="Subscription Plan"
  options={[
    { label: "Basic ($9/month)", value: "basic" },
    { label: "Pro ($19/month)", value: "pro" },
    { label: "Enterprise ($49/month)", value: "enterprise" },
  ]}
  required
/>
```

## 🔧 API Reference

### Props Interface

```typescript
interface CustomFormFieldProps<TFieldValues, TName> {
  // Core props
  control: Control<TFieldValues>;
  name: TName;
  type: FieldType;

  // Display props
  label?: string;
  description?: string;
  placeholder?: string;

  // Behavior props
  disabled?: boolean;
  required?: boolean;
  className?: string;
  formFieldClassName?: string;

  // Type-specific props
  // ... varies by field type
}
```

### Field Types

```typescript
type FieldType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "textarea"
  | "date"
  | "select"
  | "checkbox"
  | "switch"
  | "radio";
```

## 🎯 Best Practices

### 1. Schema-First Validation

Always define your form schema with Zod for type safety:

```tsx
const schema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  age: z.number().min(13),
});
```

### 2. Accessibility

The component includes built-in accessibility features:

- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatibility
- Focus management

### 3. Custom Styling

Customize appearance with Tailwind CSS:

```tsx
<CustomFormField
  control={form.control}
  name="email"
  type="email"
  label="Email"
  className="border-blue-500 focus:ring-blue-500"
  formFieldClassName="mb-6"
/>
```

## 🔗 Integration with Popular Libraries

### Zod Validation

```tsx
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
```

### React Hook Form

```tsx
import { useForm } from "react-hook-form";

const form = useForm({
  resolver: zodResolver(schema),
  mode: "onChange", // Real-time validation
});
```

## 🏗️ Framework Compatibility

- ✅ **Next.js** 13+ (App Router & Pages Router)
- ✅ **Vite + React** 18+
- ✅ **Create React App** 5+
- ✅ **Remix** 1.7+
- ✅ **Gatsby** 4+

## 📱 Responsive Design

All field types are responsive out of the box:

```tsx
<CustomFormField
  control={form.control}
  name="description"
  type="textarea"
  label="Description"
  className="w-full sm:w-96 md:w-[500px]"
/>
```

## 🎨 Theming & Customization

### Dark Mode Support

Works seamlessly with Shadcn UI's dark mode:

```tsx
<ThemeProvider attribute="class" defaultTheme="system">
  <YourForm />
</ThemeProvider>
```

### Custom Variants

Extend with custom styles:

```tsx
const customVariants = {
  variant: {
    destructive: "border-red-500 focus:ring-red-500",
    success: "border-green-500 focus:ring-green-500",
  },
};
```

## 🧪 Testing

### Unit Testing with Jest & React Testing Library

```tsx
import { render, screen } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { CustomFormField } from "custom-form-field";

test("renders text field with label", () => {
  const TestComponent = () => {
    const form = useForm();
    return (
      <CustomFormField
        control={form.control}
        name="test"
        type="text"
        label="Test Field"
      />
    );
  };

  render(<TestComponent />);
  expect(screen.getByLabelText("Test Field")).toBeInTheDocument();
});
```

## 🚀 Performance

- **Bundle Size**: < 50KB gzipped
- **Runtime Performance**: Optimized re-renders
- **Tree Shaking**: Import only what you need
- **SSR Compatible**: Works with server-side rendering

## 📚 Resources

- [📖 Full Documentation](https://customformfield.dev/docs)
- [🎮 Interactive Playground](https://customformfield.dev/playground)
- [📋 Examples Gallery](https://customformfield.dev/examples)
- [🐛 Bug Reports](https://github.com/your-org/custom-form-field/issues)
- [💬 Discussions](https://github.com/your-org/custom-form-field/discussions)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

```bash
git clone https://github.com/your-org/custom-form-field.git
cd custom-form-field
npm install
npm run dev
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for the amazing component library
- [React Hook Form](https://react-hook-form.com/) for form state management
- [Zod](https://zod.dev/) for schema validation
- [Radix UI](https://www.radix-ui.com/) for accessible primitives

---

**Built with ❤️ for the React community**

[Website](https://customformfield.dev) • [Documentation](https://customformfield.dev/docs) • [NPM](https://npmjs.com/package/custom-form-field) • [GitHub](https://github.com/your-org/custom-form-field)
