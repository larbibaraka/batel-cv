import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PenLine, FileText, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import homeLogo from "@/assets/images/home.jpg";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100 ">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800">
        <Link className="flex items-center justify-center" href="/">
          <PenLine className="h-6 w-6 text-purple-400" />
          <span className="ml-2 text-lg font-bold text-purple-400">
            Batel cv
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-purple-400 transition-colors"
            href="/features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:text-purple-400 transition-colors"
            href="/pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:text-purple-400 transition-colors"
            href="/about"
          >
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1 ">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-gray-900 to-gray-950">
          <div className=" flex  justify-center px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center   ">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    Create Your Perfect Resume
                  </h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    Build professional resumes in minutes. Stand out from the
                    crowd and land your dream job.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Sign Up
                  </Button>
                  <Button
                    className="bg-gray-800 hover:bg-gray-700 text-purple-400"
                    variant="outline"
                  >
                    <Link href={"/dashboard"}>Sign In</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-20 blur-xl"></div>
                  <Image
                    alt="Professional resume example"
                    className="relative z-10 w-full h-full object-cover rounded-lg"
                    height={500}
                    src={homeLogo}
                    width={600}
                    style={{
                      aspectRatio: "600/500",
                      objectFit: "cover",
                    }}
                  />
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
                  Key Features
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl">
                  Our resume builder offers everything you need to create a
                  standout resume
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <FileText className="h-10 w-10 text-purple-400" />
                <h3 className="text-xl font-bold text-gray-100">
                  Professional Templates
                </h3>
                <p className="text-gray-400">
                  Choose from a variety of ATS-friendly templates
                </p>
                <Image
                  alt="Professional resume templates"
                  className="rounded-lg object-cover"
                  height={200}
                  src={homeLogo}
                  width={300}
                />
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <PenLine className="h-10 w-10 text-purple-400" />
                <h3 className="text-xl font-bold text-gray-100">
                  Easy Customization
                </h3>
                <p className="text-gray-400">
                  Tailor your resume with our intuitive editor
                </p>
                <Image
                  alt="Resume customization interface"
                  className="rounded-lg object-cover"
                  height={200}
                  src={homeLogo}
                  width={300}
                />
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Share2 className="h-10 w-10 text-purple-400" />
                <h3 className="text-xl font-bold text-gray-100">
                  Instant Sharing
                </h3>
                <p className="text-gray-400">
                  Download or share your resume with a single click
                </p>
                <Image
                  alt="Resume sharing options"
                  className="rounded-lg object-cover"
                  height={200}
                  src={homeLogo}
                  width={300}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-t from-gray-900 to-gray-950">
          <div className="  px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-purple-400">
                  Get Started Today
                </h2>
                <p className="max-w-[600px] text-gray-400 md:text-xl">
                  Join thousands of job seekers who have successfully landed
                  their dream jobs with our resume builder.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-gray-800 border-gray-700 text-gray-100"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </form>
                <p className="text-xs text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link
                    className="underline underline-offset-2 hover:text-purple-400"
                    href="#"
                  >
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Batel cv. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:text-purple-400 transition-colors"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:text-purple-400 transition-colors"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
