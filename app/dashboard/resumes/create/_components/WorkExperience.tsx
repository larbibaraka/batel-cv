"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Camera, CameraIcon, Edit2, ImageIcon, Plus } from "lucide-react";
import TemplateImage from "@/assets/images/template.png";
import Image from "next/image";
const FormSchema = z.object({
  fullname: z.string().min(2, {
    message: "Full Name must be at least 2 characters.",
  }),
});
const WorkExperience = ({ title }: any) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullname: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("data on submit");
  }
  return (
    <Card className=" border-gray-800">
      <CardHeader>
        <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 text-3xl">
          {title.toUpperCase()}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-2/3 space-y-6"
            >
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your Full name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkExperience;
