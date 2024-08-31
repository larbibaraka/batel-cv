import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PenLine,
  FileText,
  Share2,
  Zap,
  Globe,
  Lock,
  BarChart,
  Palette,
  Award,
  Headphones,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import homeLogo from "@/assets/images/home.jpg";

const FeaturesPage = () => {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="  px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Powerful Features for Your Perfect Resume
              </h1>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover the tools and capabilities that make our resume builder
                stand out from the rest. Create, customize, and share your
                professional resume with ease.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="  px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <FileText className="h-10 w-10 text-purple-400 mb-2" />
                <CardTitle className="text-xl font-bold text-gray-100">
                  Professional Templates
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Choose from a wide variety of ATS-friendly templates designed
                  by career experts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={homeLogo}
                  alt="Professional resume templates"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full"
                />
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• 50+ professionally designed templates</li>
                  <li>• Tailored for various industries</li>
                  <li>• Optimized for Applicant Tracking Systems (ATS)</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <PenLine className="h-10 w-10 text-purple-400 mb-2" />
                <CardTitle className="text-xl font-bold text-gray-100">
                  Easy Customization
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Tailor your resume with our intuitive editor for a
                  personalized touch.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={homeLogo}
                  alt="Resume customization interface"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full"
                />
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Drag-and-drop interface</li>
                  <li>• Real-time preview</li>
                  <li>• Customizable sections and layouts</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <Share2 className="h-10 w-10 text-purple-400 mb-2" />
                <CardTitle className="text-xl font-bold text-gray-100">
                  Instant Sharing
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Download or share your resume with potential employers in
                  seconds.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={homeLogo}
                  alt="Resume sharing options"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full"
                />
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Multiple file formats (PDF, DOCX, TXT)</li>
                  <li>• Direct email sharing</li>
                  <li>• Unique URL for online viewing</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <Zap className="h-10 w-10 text-purple-400 mb-2" />
                <CardTitle className="text-xl font-bold text-gray-100">
                  AI-Powered Suggestions
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Get intelligent recommendations to enhance your resume
                  content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={homeLogo}
                  alt="AI-powered resume suggestions"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full"
                />
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Keyword optimization for job descriptions</li>
                  <li>• Skill gap analysis</li>
                  <li>• Action verb recommendations</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <Globe className="h-10 w-10 text-purple-400 mb-2" />
                <CardTitle className="text-xl font-bold text-gray-100">
                  Multi-Language Support
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Create resumes in multiple languages to target international
                  job markets.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={homeLogo}
                  alt="Multi-language resume support"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full"
                />
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Support for 30+ languages</li>
                  <li>• Automatic translation of section titles</li>
                  <li>• Region-specific formatting options</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <Lock className="h-10 w-10 text-purple-400 mb-2" />
                <CardTitle className="text-xl font-bold text-gray-100">
                  Privacy and Security
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Keep your personal information safe with our advanced security
                  measures.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={homeLogo}
                  alt="Privacy and security features"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full"
                />
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• End-to-end encryption</li>
                  <li>• GDPR compliance</li>
                  <li>• Optional data anonymization</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <BarChart className="h-10 w-10 text-purple-400 mb-2" />
                <CardTitle className="text-xl font-bold text-gray-100">
                  Resume Analytics
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Gain insights into how your resume performs with potential
                  employers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={homeLogo}
                  alt="Resume performance analytics"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full"
                />
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• View count and engagement metrics</li>
                  <li>• A/B testing for different versions</li>
                  <li>• Industry benchmark comparisons</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <Palette className="h-10 w-10 text-purple-400 mb-2" />
                <CardTitle className="text-xl font-bold text-gray-100">
                  Design Flexibility
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Express your unique style with customizable design elements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={homeLogo}
                  alt="Resume design customization"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full"
                />
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Custom color schemes</li>
                  <li>• Font pairing options</li>
                  <li>• Adjustable margins and spacing</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <Award className="h-10 w-10 text-purple-400 mb-2" />
                <CardTitle className="text-xl font-bold text-gray-100">
                  Achievement Showcase
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Highlight your accomplishments with visual elements and data.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={homeLogo}
                  alt="Achievement showcase feature"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full"
                />
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Infographic-style data visualization</li>
                  <li>• Portfolio integration</li>
                  <li>• Testimonial and endorsement section</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-t from-gray-900 to-gray-950">
        <div className="  px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-purple-400">
                Ready to Build Your Perfect Resume?
              </h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of job seekers who have successfully landed their
                dream jobs with our powerful resume builder.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Get Started for Free
              </Button>
              <p className="text-xs text-gray-400">
                No credit card required. Start building your professional resume
                today!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FeaturesPage;
