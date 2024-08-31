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

const FormSchema = z.object({
  fullname: z.string().min(2, {
    message: "Full Name must be at least 2 characters.",
  }),
});

const CreateResumePage = () => {
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
    <div className="flex flex-col min-h-screen  text-primary">
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="flex justify-between">
          <section className="w-1/2">
            <Card className=" border-gray-800">
              <CardHeader>
                <CardTitle className="text-primary text-3xl">
                  Personal details
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
                              <Input
                                placeholder="Enter your Full name"
                                {...field}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="fullname"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Job Title</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your Job title"
                                {...field}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex  justify-between gap-4">
                        <div className="w-1/2">
                          <FormField
                            control={form.control}
                            name="fullname"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter email" {...field} />
                                </FormControl>

                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="w-1/2">
                          <FormField
                            control={form.control}
                            name="fullname"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter phone" {...field} />
                                </FormControl>

                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      <FormField
                        control={form.control}
                        name="fullname"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                              <Input placeholder="City, Country" {...field} />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="space-y-4">
                        <h3 className="text-primary font-bold text-2xl">
                          Personal information
                        </h3>
                        <div className="flex gap-4  flex-wrap">
                          <button className="btn bg-secondary">
                            <Plus className="h-4 w-4" /> date of Birth
                          </button>
                          <button className="btn bg-secondary">
                            <Plus className="h-4 w-4" /> Nationality
                          </button>
                          <button className="btn bg-secondary">
                            <Plus className="h-4 w-4" /> Driving License
                          </button>
                          <button className="btn bg-secondary">
                            <Plus className="h-4 w-4" /> Military Service
                          </button>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-primary font-bold text-2xl">
                          Links
                        </h3>
                        <div className="flex gap-4   ">
                          <button className="btn bg-secondary">
                            <Plus className="h-4 w-4" /> Website
                          </button>
                          <button className="btn bg-secondary">
                            <Plus className="h-4 w-4" /> Linkedin
                          </button>
                          <button className="btn bg-secondary">
                            <Plus className="h-4 w-4" /> X
                          </button>
                          <button className="btn bg-secondary">
                            <Plus className="h-4 w-4" />
                            Meduim
                          </button>
                          <button className="btn bg-secondary">
                            <Plus className="h-4 w-4" />
                            Github
                          </button>
                          <button className="btn bg-secondary">
                            <Plus className="h-4 w-4" />
                            Dribbble
                          </button>
                          <button className="btn bg-secondary">
                            <Plus className="h-4 w-4" />
                            Behance
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className="w-1/3  items-start justify-center flex mt-9">
                      <div className="indicator">
                        <button className="indicator-item indicator-bottom rounded-full   bg-purple-400 w-10 h-10 p-2 hover:bg-purple-300">
                          <Edit2 className="" />
                        </button>
                        <div className="flex w-44 h-44  bg-gray-200 shadow-md items-center justify-center cursor-pointer hover:bg-gray-100 transition-all">
                          <Camera className="text-white w-24 h-24  " />
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              </CardContent>
            </Card>
          </section>
          <section className="w-1/2">section 2</section>
        </div>
      </main>
    </div>
  );
};
export default CreateResumePage;
