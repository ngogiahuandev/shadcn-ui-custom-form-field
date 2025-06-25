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
import { Code2, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ExamplesSection() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const basicExample = `import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CustomFormField } from "@/components/ui/custom-form-field"
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomFormField
          control={form.control}
          name="name"
          type="text"
          label="Full Name"
          placeholder="Enter your full name"
          required
        />
        
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
          name="message"
          type="textarea"
          label="Message"
          placeholder="Enter your message"
          rows={4}
          required
        />
        
        <Button type="submit">Send Message</Button>
      </form>
    </Form>
  )
}`;

  const advancedExample = `import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CustomFormField } from "@/components/ui/custom-form-field"
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  age: z.number().min(18, "Must be at least 18 years old"),
  birthDate: z.date({
    required_error: "Birth date is required",
  }),
  country: z.string().min(1, "Please select a country"),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select a gender",
  }),
  newsletter: z.boolean().default(false),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
})

const countryOptions = [
  { label: "United States", value: "us" },
  { label: "Canada", value: "ca" },
  { label: "United Kingdom", value: "uk" },
  { label: "Germany", value: "de" },
  { label: "France", value: "fr" },
]

const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
]

export function RegistrationForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: 18,
      newsletter: false,
      terms: false,
    },
  })

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CustomFormField
            control={form.control}
            name="firstName"
            type="text"
            label="First Name"
            placeholder="Enter your first name"
            required
          />
          
          <CustomFormField
            control={form.control}
            name="lastName"
            type="text"
            label="Last Name"
            placeholder="Enter your last name"
            required
          />
        </div>
        
        <CustomFormField
          control={form.control}
          name="email"
          type="email"
          label="Email Address"
          placeholder="Enter your email"
          required
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            name="birthDate"
            type="date"
            label="Birth Date"
            required
          />
        </div>
        
        <CustomFormField
          control={form.control}
          name="country"
          type="select"
          label="Country"
          placeholder="Select your country"
          options={countryOptions}
          required
        />
        
        <CustomFormField
          control={form.control}
          name="gender"
          type="radio"
          label="Gender"
          options={genderOptions}
          required
        />
        
        <CustomFormField
          control={form.control}
          name="newsletter"
          type="checkbox"
          label="Subscribe to our newsletter"
          description="Receive updates about new features and promotions"
        />
        
        <CustomFormField
          control={form.control}
          name="terms"
          type="checkbox"
          label="I accept the terms and conditions"
          required
        />
        
        <Button type="submit" className="w-full">
          Create Account
        </Button>
      </form>
    </Form>
  )
}`;

  return (
    <section
      id="examples"
      className="bg-muted/50 space-y-6 py-8 md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <Badge variant="outline" className="mb-2">
          <Code2 className="mr-2 h-3 w-3" />
          Code Examples
        </Badge>
        <h2 className="text-3xl leading-tight font-bold tracking-tighter md:text-5xl">
          Real-World Examples
        </h2>
        <p className="text-muted-foreground max-w-[750px] text-lg">
          See CustomFormField in action with practical examples you can copy and
          use in your projects.
        </p>
      </div>

      <div className="mx-auto max-w-6xl">
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="basic">Basic Contact Form</TabsTrigger>
            <TabsTrigger value="advanced">Advanced Registration</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Simple Contact Form</CardTitle>
                <CardDescription>
                  A basic contact form demonstrating text, email, and textarea
                  fields with validation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted max-h-96 overflow-x-auto overflow-y-auto rounded-lg p-4 text-sm">
                    <code>{basicExample}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(basicExample)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Registration Form</CardTitle>
                <CardDescription>
                  A comprehensive registration form showcasing all field types
                  with complex validation rules.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted max-h-96 overflow-x-auto overflow-y-auto rounded-lg p-4 text-sm">
                    <code>{advancedExample}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(advancedExample)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
