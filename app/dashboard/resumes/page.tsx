import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  PenLine,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download,
  Share2,
} from "lucide-react";
import Link from "next/link";

export default function ResumesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-100">My Resumes</h1>
          <Link href="/dashboard/resumes/create">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <Plus className="mr-2 h-4 w-4" /> Create New Resume
            </Button>
          </Link>
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <Input
              className="w-64 bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
              placeholder="Search resumes..."
            />
            <Select>
              <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700 text-gray-100">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700 text-gray-100">
                <SelectItem value="date">Date Created</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="views">Views</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-gray-100">
                Software Engineer Resume
              </CardTitle>
              <CardDescription className="text-gray-300">
                Created on July 15, 2023
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400 mb-2">Views: 245</p>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-white"
                >
                  <Eye className="mr-2 h-4 w-4" /> Preview
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-green-400 border-green-400 hover:bg-green-400 hover:text-white"
                >
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white"
                >
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="ghost"
                size="sm"
                className="text-yellow-400 hover:text-yellow-500 hover:bg-yellow-400/10"
              >
                <Edit className="mr-2 h-4 w-4" /> Edit
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-red-400 hover:text-red-500 hover:bg-red-400/10"
              >
                <Trash2 className="mr-2 h-4 w-4" /> Delete
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-gray-100">
                Marketing Specialist CV
              </CardTitle>
              <CardDescription className="text-gray-300">
                Created on June 22, 2023
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400 mb-2">Views: 189</p>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-white"
                >
                  <Eye className="mr-2 h-4 w-4" /> Preview
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-green-400 border-green-400 hover:bg-green-400 hover:text-white"
                >
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white"
                >
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="ghost"
                size="sm"
                className="text-yellow-400 hover:text-yellow-500 hover:bg-yellow-400/10"
              >
                <Edit className="mr-2 h-4 w-4" /> Edit
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-red-400 hover:text-red-500 hover:bg-red-400/10"
              >
                <Trash2 className="mr-2 h-4 w-4" /> Delete
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-gray-100">
                Data Analyst Resume
              </CardTitle>
              <CardDescription className="text-gray-300">
                Created on May 30, 2023
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400 mb-2">Views: 132</p>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-white"
                >
                  <Eye className="mr-2 h-4 w-4" /> Preview
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-green-400 border-green-400 hover:bg-green-400 hover:text-white"
                >
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white"
                >
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="ghost"
                size="sm"
                className="text-yellow-400 hover:text-yellow-500 hover:bg-yellow-400/10"
              >
                <Edit className="mr-2 h-4 w-4" /> Edit
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-red-400 hover:text-red-500 hover:bg-red-400/10"
              >
                <Trash2 className="mr-2 h-4 w-4" /> Delete
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
