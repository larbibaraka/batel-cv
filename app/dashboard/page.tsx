import React from "react";
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
  BarChart,
  Users,
  FileText,
  ChevronUp,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock data for the chart
const clickData = [
  { name: "Jan", clicks: 400 },
  { name: "Feb", clicks: 300 },
  { name: "Mar", clicks: 500 },
  { name: "Apr", clicks: 280 },
  { name: "May", clicks: 590 },
  { name: "Jun", clicks: 800 },
  { name: "Jul", clicks: 810 },
];

const Dahboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-gray-200">
                Total Resumes
              </CardTitle>
              <FileText className="w-4 h-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-100">12</div>
              <p className="text-xs text-gray-300">+2 from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-gray-200">
                Total Clicks
              </CardTitle>
              <BarChart className="w-4 h-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-100">3,680</div>
              <p className="text-xs text-gray-300">+20% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-gray-200">
                Conversion Rate
              </CardTitle>
              <Users className="w-4 h-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-100">2.5%</div>
              <p className="text-xs text-gray-300">+0.5% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-gray-200">
                Current Plan
              </CardTitle>
              <CreditCard className="w-4 h-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-100">Basic</div>
              <p className="text-xs text-gray-300">$9.99/month</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card className="bg-gray-900 border-gray-800 col-span-2">
            <CardHeader>
              <CardTitle className="text-gray-100">
                Resume Clicks Over Time
              </CardTitle>
              <CardDescription className="text-gray-300">
                The number of times your resumes were viewed
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              {/* <ResponsiveContainer width="100%" height={350}>
                <LineChart data={clickData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#D1D5DB" />
                  <YAxis stroke="#D1D5DB" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1F2937",
                      border: "none",
                    }}
                    itemStyle={{ color: "#F3F4F6" }}
                    labelStyle={{ color: "#D1D5DB" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="clicks"
                    stroke="#8B5CF6"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer> */}
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-gray-100">Recent Resumes</CardTitle>
              <CardDescription className="text-gray-300">
                Your latest created resumes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none text-gray-200">
                      Software Engineer Resume
                    </p>
                    <p className="text-sm text-gray-400">
                      Created on July 15, 2023
                    </p>
                  </div>
                  <div className="ml-auto font-medium text-gray-200">
                    245 clicks
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none text-gray-200">
                      Marketing Specialist CV
                    </p>
                    <p className="text-sm text-gray-400">
                      Created on June 22, 2023
                    </p>
                  </div>
                  <div className="ml-auto font-medium text-gray-200">
                    189 clicks
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none text-gray-200">
                      Data Analyst Resume
                    </p>
                    <p className="text-sm text-gray-400">
                      Created on May 30, 2023
                    </p>
                  </div>
                  <div className="ml-auto font-medium text-gray-200">
                    132 clicks
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-gray-100">Upgrade Your Plan</CardTitle>
              <CardDescription className="text-gray-300">
                Get more features and benefits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <ChevronUp className="mr-2 h-4 w-4 text-purple-400" />
                  <div className="ml-2 space-y-1">
                    <p className="text-sm font-medium leading-none text-gray-200">
                      Unlimited Resume Templates
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <ChevronUp className="mr-2 h-4 w-4 text-purple-400" />
                  <div className="ml-2 space-y-1">
                    <p className="text-sm font-medium leading-none text-gray-200">
                      Advanced Analytics
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <ChevronUp className="mr-2 h-4 w-4 text-purple-400" />
                  <div className="ml-2 space-y-1">
                    <p className="text-sm font-medium leading-none text-gray-200">
                      Priority Support
                    </p>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white">
                Upgrade to Pro
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dahboard;
