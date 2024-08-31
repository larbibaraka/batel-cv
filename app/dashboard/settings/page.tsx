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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { PenLine, User, Mail, Lock, Bell, Globe, Palette } from "lucide-react";
import Link from "next/link";

export default function SettingsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-100 mb-6">
          Account Settings
        </h1>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-gray-100 flex items-center">
                <User className="mr-2 h-5 w-5 text-purple-400" />
                Personal Information
              </CardTitle>
              <CardDescription className="text-gray-300">
                Update your personal details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-200">
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="bg-gray-800 border-gray-700 text-gray-100"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-gray-800 border-gray-700 text-gray-100"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Save Changes
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-gray-100 flex items-center">
                <Lock className="mr-2 h-5 w-5 text-purple-400" />
                Password
              </CardTitle>
              <CardDescription className="text-gray-300">
                Change your password
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password" className="text-gray-200">
                  Current Password
                </Label>
                <Input
                  id="current-password"
                  type="password"
                  className="bg-gray-800 border-gray-700 text-gray-100"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password" className="text-gray-200">
                  New Password
                </Label>
                <Input
                  id="new-password"
                  type="password"
                  className="bg-gray-800 border-gray-700 text-gray-100"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="text-gray-200">
                  Confirm New Password
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  className="bg-gray-800 border-gray-700 text-gray-100"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Update Password
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-gray-100 flex items-center">
                <Bell className="mr-2 h-5 w-5 text-purple-400" />
                Notifications
              </CardTitle>
              <CardDescription className="text-gray-300">
                Manage your notification preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications" className="text-gray-200">
                  Email Notifications
                </Label>
                <Switch id="email-notifications" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="marketing-emails" className="text-gray-200">
                  Marketing Emails
                </Label>
                <Switch id="marketing-emails" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="resume-views" className="text-gray-200">
                  Resume View Alerts
                </Label>
                <Switch id="resume-views" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-gray-100 flex items-center">
                <Globe className="mr-2 h-5 w-5 text-purple-400" />
                Language and Region
              </CardTitle>
              <CardDescription className="text-gray-300">
                Set your language and regional preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language" className="text-gray-200">
                  Language
                </Label>
                <Select>
                  <SelectTrigger
                    id="language"
                    className="bg-gray-800 border-gray-700 text-gray-100"
                  >
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-gray-100">
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone" className="text-gray-200">
                  Timezone
                </Label>
                <Select>
                  <SelectTrigger
                    id="timezone"
                    className="bg-gray-800 border-gray-700 text-gray-100"
                  >
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-gray-100">
                    <SelectItem value="utc">UTC</SelectItem>
                    <SelectItem value="est">Eastern Time</SelectItem>
                    <SelectItem value="cst">Central Time</SelectItem>
                    <SelectItem value="pst">Pacific Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Save Preferences
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
