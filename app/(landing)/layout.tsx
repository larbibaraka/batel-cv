import { Button } from "@/components/ui/button";
import { CheckIcon, PenLine } from "lucide-react";
import Link from "next/link";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100 ">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800">
        <Link className="flex items-center justify-center" href="/">
          <PenLine className="h-6 w-6 text-purple-400" />
          <span className="ml-2 text-lg font-bold text-purple-400">
            ResumeBuilder
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
      <div className="flex  justify-center items-center">{children}</div>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">
          © 2024 BatelCv. All rights reserved.
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
};

export default LandingLayout;
