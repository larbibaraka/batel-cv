import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import TemplateImage from "@/assets/images/template.png";
import Image from "next/image";
import PersonalDetails from "./_components/PersonalDetails";
import Education from "./_components/Education";
import WorkExperience from "./_components/WorkExperience";
import Skills from "./_components/Skills";
import Interests from "./_components/Interests";
import Courses from "./_components/Courses";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const CreateResumePage = () => {
  return (
    <div className="flex flex-col min-h-screen  text-primary">
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="flex justify-between gap-10">
          <section className="w-1/2 flex flex-col gap-10 overflow-auto h-[1500px]">
            <PersonalDetails title=" Personal details" />
            <Education title="Education" />
            <WorkExperience title="WORK EXPERIENCE" />
            <Skills title="Skills" />
            <Interests title="Interests" />
            <Courses title="courses" />
            <div className="flex items-center justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white w-1/2 h-16 rounded-full">
                <Plus className="mr-2 h-4 w-4" /> Add Content
              </Button>
            </div>
          </section>
          <section className="w-1/2  ">
            <Card className="border-gray-800">
              <CardContent>
                <Image src={TemplateImage} alt="sss" />
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};
export default CreateResumePage;
