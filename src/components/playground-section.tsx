"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Play, RotateCcw } from "lucide-react";
import { CustomFormField } from "@/components/ui/custom-form-field";

const playgroundSchema = z.object({
  textField: z.string().min(2, "Text must be at least 2 characters"),
  emailField: z.string().email("Invalid email address"),
  numberField: z
    .number()
    .min(1, "Number must be at least 1")
    .max(100, "Number must be at most 100"),
  textareaField: z.string().min(10, "Textarea must be at least 10 characters"),
  dateField: z.date({
    required_error: "Please select a date",
  }),
  selectField: z.string().min(1, "Please select an option"),
  checkboxField: z.boolean(),
  switchField: z.boolean(),
  radioField: z.enum(["option1", "option2", "option3"], {
    required_error: "Please select an option",
  }),
});

const selectOptions = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

const radioOptions = [
  { label: "First Option", value: "option1" },
  { label: "Second Option", value: "option2" },
  { label: "Third Option", value: "option3" },
];

export function PlaygroundSection() {
  const [submittedData, setSubmittedData] = useState<z.infer<
    typeof playgroundSchema
  > | null>(null);

  const form = useForm({
    resolver: zodResolver(playgroundSchema),
    defaultValues: {
      textField: "",
      emailField: "",
      numberField: 1,
      textareaField: "",
      checkboxField: false,
      switchField: false,
    },
  });

  const onSubmit = (values: z.infer<typeof playgroundSchema>) => {
    setSubmittedData(values);
  };

  const resetForm = () => {
    form.reset();
    setSubmittedData(null);
  };

  return (
    <section id="playground" className="space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <Badge variant="outline" className="mb-2">
          <Play className="mr-2 h-3 w-3" />
          Interactive Demo
        </Badge>
        <h2 className="text-3xl leading-tight font-bold tracking-tighter md:text-5xl">
          Try It Yourself
        </h2>
        <p className="text-muted-foreground max-w-[750px] text-lg">
          Experiment with all field types and see how CustomFormField handles
          validation and user interaction.
        </p>
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Interactive Form
                <Button variant="outline" size="sm" onClick={resetForm}>
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset
                </Button>
              </CardTitle>
              <CardDescription>
                Try out different field types and see real-time validation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <CustomFormField
                    control={form.control}
                    name="textField"
                    type="text"
                    label="Text Field"
                    placeholder="Enter some text"
                    description="This is a basic text input field"
                    required
                  />

                  <CustomFormField
                    control={form.control}
                    name="emailField"
                    type="email"
                    label="Email Field"
                    placeholder="Enter your email"
                    description="Email validation is built-in"
                    required
                  />

                  <CustomFormField
                    control={form.control}
                    name="numberField"
                    type="number"
                    label="Number Field"
                    min={1}
                    max={100}
                    step={1}
                    description="Number between 1 and 100"
                    required
                  />

                  <CustomFormField
                    control={form.control}
                    name="textareaField"
                    type="textarea"
                    label="Textarea Field"
                    placeholder="Enter a longer message"
                    rows={3}
                    description="Multi-line text input"
                    required
                  />

                  <CustomFormField
                    control={form.control}
                    name="dateField"
                    type="date"
                    label="Date Field"
                    description="Date picker with calendar"
                    required
                  />

                  <CustomFormField
                    control={form.control}
                    name="selectField"
                    type="select"
                    label="Select Field"
                    placeholder="Choose an option"
                    options={selectOptions}
                    description="Dropdown selection"
                    required
                  />

                  <CustomFormField
                    control={form.control}
                    name="radioField"
                    type="radio"
                    label="Radio Field"
                    options={radioOptions}
                    description="Single selection from multiple options"
                    required
                  />

                  <CustomFormField
                    control={form.control}
                    name="checkboxField"
                    type="checkbox"
                    label="Checkbox Field"
                    description="Boolean checkbox input"
                  />

                  <CustomFormField
                    control={form.control}
                    name="switchField"
                    type="switch"
                    label="Switch Field"
                    description="Toggle switch input"
                  />

                  <Button type="submit" className="w-full">
                    Submit Form
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Form Output</CardTitle>
              <CardDescription>
                See the submitted form data and validation results
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submittedData ? (
                <div className="space-y-4">
                  <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                    <h4 className="mb-2 font-semibold text-green-800">
                      ✅ Form Submitted Successfully!
                    </h4>
                    <pre className="overflow-x-auto text-sm text-green-700">
                      {JSON.stringify(submittedData, null, 2)}
                    </pre>
                  </div>
                </div>
              ) : (
                <div className="text-muted-foreground p-8 text-center">
                  <p>Fill out the form and submit to see the results here.</p>
                  <p className="mt-2 text-sm">
                    Form validation will be displayed in real-time.
                  </p>
                </div>
              )}

              <div className="mt-6 space-y-4">
                <h4 className="font-semibold">Form State</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-muted rounded p-3">
                    <div className="font-medium">Valid</div>
                    <div
                      className={
                        form.formState.isValid
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {form.formState.isValid ? "✅ Yes" : "❌ No"}
                    </div>
                  </div>
                  <div className="bg-muted rounded p-3">
                    <div className="font-medium">Errors</div>
                    <div className="text-red-600">
                      {Object.keys(form.formState.errors).length}
                    </div>
                  </div>
                  <div className="bg-muted rounded p-3">
                    <div className="font-medium">Touched</div>
                    <div>
                      {Object.keys(form.formState.touchedFields).length}
                    </div>
                  </div>
                  <div className="bg-muted rounded p-3">
                    <div className="font-medium">Dirty</div>
                    <div
                      className={
                        form.formState.isDirty
                          ? "text-blue-600"
                          : "text-gray-600"
                      }
                    >
                      {form.formState.isDirty ? "✅ Yes" : "❌ No"}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
