import { Button } from "@/components/ui/button";
import { PenLine, Users, Target, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import homeLogo from "@/assets/images/home.jpg";
export default function About() {
  return (
    <main className="flex-1 justify-center items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="  px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                About Batel Cv
              </h1>
              <p className="max-w-[600px] text-gray-400 md:text-xl">
                Empowering job seekers to create standout resumes and land their
                dream jobs.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-12 space-y-8">
            <p className="text-gray-300 text-lg">
              Batel Cv was founded in 2024 with a simple mission: to make the
              job application process easier and more successful for everyone.
              We believe that everyone deserves a chance to showcase their
              skills and experience in the best possible light, regardless of
              their background or design abilities.
            </p>
            <p className="text-gray-300 text-lg">
              Our team of career experts and software engineers have worked
              tirelessly to create a platform that combines the latest in resume
              design trends with cutting-edge technology. The result is a
              user-friendly, powerful tool that helps job seekers create
              professional, ATS-friendly resumes in minutes.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="  px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Users className="h-12 w-12 text-purple-400" />
              <h2 className="text-2xl font-bold">Our Team</h2>
              <p className="text-gray-400">
                We're a diverse group of professionals passionate about helping
                people succeed in their careers.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <Target className="h-12 w-12 text-purple-400" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="text-gray-400">
                To empower job seekers with tools and resources that help them
                stand out in competitive job markets.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <Award className="h-12 w-12 text-purple-400" />
              <h2 className="text-2xl font-bold">Our Achievements</h2>
              <p className="text-gray-400">
                We've helped over 1 million users create resumes that have
                landed them interviews and job offers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-t from-gray-900 to-gray-950">
        <div className="  px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-purple-400">
                Meet Our Leadership
              </h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl">
                The visionaries behind Batel Cv's success
              </p>
            </div>
          </div>
          <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4">
              <Image
                alt="Sarah Johnson"
                className="rounded-full"
                height="150"
                src={homeLogo}
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
                width="150"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                <p className="text-sm text-gray-400">CEO & Co-founder</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                alt="Michael Chen"
                className="rounded-full"
                height="150"
                src={homeLogo}
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
                width="150"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold">Michael Chen</h3>
                <p className="text-sm text-gray-400">CTO & Co-founder</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                alt="Emily Rodriguez"
                className="rounded-full"
                height="150"
                src={homeLogo}
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
                width="150"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold">Emily Rodriguez</h3>
                <p className="text-sm text-gray-400">Head of Design</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="  px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-purple-400">
                Join Our Mission
              </h2>
              <p className="max-w-[600px] text-gray-400 md:text-xl">
                Be part of a team that's changing the way people approach job
                hunting.
              </p>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
