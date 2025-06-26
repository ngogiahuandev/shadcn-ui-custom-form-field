export const validationCode = `import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CustomFormField } from "@/components/ui/custom-form-field"

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  age: z.number().min(18, "Must be at least 18"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  newsletter: z.boolean(),
})

function MyForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      age: 0,
      bio: "",
      newsletter: false,
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
          label="Biography"
          placeholder="Tell us about yourself"
          rows={4}
        />
        <CustomFormField
          control={form.control}
          name="newsletter"
          type="checkbox"
          label="Subscribe to newsletter"
        />
      </form>
    </Form>
  )
}`;
