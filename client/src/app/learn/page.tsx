"use client";

// Generic imports
import * as React from "react";

// shadcn import
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// Lucide react imports
import { BadgeInfo } from "lucide-react";

export default function learn() {
  const [title, setTitle] = React.useState("");
  const [subject, setSubject] = React.useState("Science");

  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
    console.log("Title", title);
  };

  function handleSubjectChange(value: string) {
    setSubject(value);
    console.log("Subject", subject);
  }

  const data = "Hello world.";

  return (
    <div className="bg-[#000000] h-screen overflow-scroll px-10 pb-20">
      {/* Input section */}
      <div className="p-8 text-white flex flex-col w-full sm:flex-row sm:items-end gap-4">
        {/* Title of Experiment Input */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Title of the Experiment</Label>
          <Input
            type="text"
            id="title"
            placeholder="Enter your title"
            onChange={handleTitleChange}
            className="text-black"
          />
        </div>

        {/* Subject Input */}
        <div>
          <Select onValueChange={(value) => handleSubjectChange(value)}>
            <SelectTrigger className="w-[180px] text-black">
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Science</SelectLabel>
                <SelectItem value="Physics">Physics</SelectItem>
                <SelectItem value="Chemistry">Chemistry</SelectItem>
                <SelectItem value="Biology">Biology</SelectItem>

                <SelectLabel aria-disabled>
                  Computer Science Subjects
                </SelectLabel>
                <SelectItem value="Java" disabled>
                  Java
                </SelectItem>
                <SelectItem value="C++" disabled>
                  C++
                </SelectItem>
                <SelectItem value="Frontend" disabled>
                  Frontend
                </SelectItem>
                <SelectItem value="Backend" disabled>
                  Backend
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Response Generate Button */}
        <Button className="border border-white hover:text-black hover:bg-white">
          Generate
        </Button>
      </div>

      {/* Output Section */}
      <div className="p-8 text-white">
        <div className="grid grid-cols-2 gap-8">
          {/* Aim of the experiment */}
          <div className="border-none">
            <Card x-chunk="dashboard-07-chunk-5">
              <CardHeader>
                <CardTitle>Aim of the experiment</CardTitle>
                <CardDescription>
                  Primary motive of the experiment
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-row gap-2 items-center">
                  <BadgeInfo />
                  <p className="text-xs">
                    Please modify title and subject and generate again if the
                    `Aim` is not to the excpectation or inaccurate.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Apparatus Required */}
          <div className="border-none">
            <Card x-chunk="dashboard-07-chunk-5">
              <CardHeader>
                <CardTitle>Appartus Required</CardTitle>
                <CardDescription>
                  Contains primary tools required to perform the experiment
                </CardDescription>
              </CardHeader>
              <CardContent>
                Lipsum dolor sit amet, consectetur adipiscing elit.
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Theory of the experiment */}
        <div className="mt-8">
          <Card x-chunk="dashboard-07-chunk-5">
            <CardHeader>
              <CardTitle>Theory of the experiment</CardTitle>
              <CardDescription>Contains text + equation</CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              impedit ab deserunt facere a voluptates nostrum accusamus
              quibusdam eos sapiente porro ullam maxime temporibus quos,
              doloribus, non sequi pariatur vero!
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Experiment Setup */}
      <div className="flex justify-center items-center p-10">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            <CarouselItem key={0}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center"></CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      {/* Procedure */}
      <div className="p-8">
        <Card x-chunk="dashboard-07-chunk-5">
          <CardHeader>
            <CardTitle>Procedure of the experiment</CardTitle>
            <CardDescription>
              Provides step by step guide on how to proceed with the experiment.
            </CardDescription>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            impedit ab deserunt facere a voluptates nostrum accusamus quibusdam
            eos sapiente porro ullam maxime temporibus quos, doloribus, non
            sequi pariatur vero!
          </CardContent>
        </Card>
      </div>

      <div className="p-8 text-white">
        <div className="grid grid-cols-2 gap-8">
          {/* Result of the experiment */}
          <div className="border-none">
            <Card x-chunk="dashboard-07-chunk-5">
              <CardHeader>
                <CardTitle>Results</CardTitle>
                <CardDescription>Inference from the experiment</CardDescription>
              </CardHeader>
              <CardContent>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                impedit ab deserunt facere a voluptates nostrum accusamus
                quibusdam eos sapiente porro ullam maxime temporibus quos,
                doloribus, non sequi pariatur vero!
              </CardContent>
            </Card>
          </div>

          {/* Precautions */}
          <div className="border-none">
            <Card x-chunk="dashboard-07-chunk-5">
              <CardHeader>
                <CardTitle>Necessary Precautions</CardTitle>
                <CardDescription>
                  List of safety measures to adhere to carry out the experiment.
                  Please don't attempt this experiment at home. Make sure to
                  have supervision.
                </CardDescription>
              </CardHeader>
              <CardContent>
                Lipsum dolor sit amet, consectetur adipiscing elit.
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
