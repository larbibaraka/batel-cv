import { Button } from "@/components/ui/button";
import { CheckIcon, PenLine } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="  px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Choose Your Plan
              </h1>
              <p className="max-w-[600px] text-gray-400 md:text-xl">
                Select the perfect plan to create your professional resume and
                land your dream job.
              </p>
            </div>
          </div>
          <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col p-6 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-purple-400">Free</h3>
              <div className="mt-4 text-3xl font-bold">
                $0
                <span className="text-xl font-normal text-gray-400">
                  /month
                </span>
              </div>
              <p className="mt-2 text-gray-400">Get started with basics</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4 text-purple-400" />
                  <span>1 basic resume template</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4 text-purple-400" />
                  <span>Limited customization</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4 text-purple-400" />
                  <span>Download as PDF</span>
                </li>
              </ul>
              <Button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white">
                Get Started
              </Button>
            </div>
            <div className="flex flex-col p-6 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-purple-400">Basic</h3>
              <div className="mt-4 text-3xl font-bold">
                $9.99
                <span className="text-xl font-normal text-gray-400">
                  /month
                </span>
              </div>
              <p className="mt-2 text-gray-400">Perfect for job seekers</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4 text-purple-400" />
                  <span>3 resume templates</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4 text-purple-400" />
                  <span>Basic customization</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4 text-purple-400" />
                  <span>Download as PDF</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4 text-purple-400" />
                  <span>Email support</span>
                </li>
              </ul>
              <Button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white">
                Choose Basic
              </Button>
            </div>
            <div className="flex flex-col p-6 bg-gray-900 rounded-lg shadow-lg border-2 border-purple-400">
              <h3 className="text-2xl font-bold text-purple-400">Pro</h3>
              <div className="mt-4 text-3xl font-bold">
                $19.99
                <span className="text-xl font-normal text-gray-400">
                  /month
                </span>
              </div>
              <p className="mt-2 text-gray-400">For serious career builders</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4 text-purple-400" />
                  <span>10 resume templates</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4 text-purple-400" />
                  <span>Advanced customization</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4 text-purple-400" />
                  <span>Download as PDF & Word</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4 text-purple-400" />
                  <span>Cover letter builder</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4 text-purple-400" />
                  <span>Priority email support</span>
                </li>
              </ul>
              <Button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white">
                Choose Pro
              </Button>
            </div>
            <div className="flex flex-col p-6 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-purple-400">Enterprise</h3>
              <div className="mt-4 text-3xl font-bold">
                $49.99
                <span className="text-xl font-normal text-gray-400">
                  /month
                </span>
              </div>
              <p className="mt-2 text-gray-400">For teams and businesses</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4 text-purple-400" />
                  <span>Unlimited templates</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4 text-purple-400" />
                  <span>Full customization</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4 text-purple-400" />
                  <span>All file formats</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4 text-purple-400" />
                  <span>Team collaboration</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4 text-purple-400" />
                  <span>Priority phone support</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4 text-purple-400" />
                  <span>Custom branding</span>
                </li>
              </ul>
              <Button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white">
                Choose Enterprise
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="  px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-purple-400">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl">
                Find answers to common questions about our pricing plans and
                features.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-100">
                Can I change plans?
              </h3>
              <p className="text-gray-400">
                Yes, you can upgrade or downgrade your plan at any time.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-100">
                Is there a free trial?
              </h3>
              <p className="text-gray-400">
                We offer a free plan with basic features. You can upgrade
                anytime.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-100">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-400">
                We accept all major credit cards and PayPal.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-100">
                Can I cancel anytime?
              </h3>
              <p className="text-gray-400">
                Yes, you can cancel your subscription at any time without
                penalty.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
