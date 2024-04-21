"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

  return (
    <>
      {/* Input section */}
      <div className="flex flex-row items-end gap-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Title of the Experiment</Label>
          <Input
            type="text"
            id="title"
            placeholder="Enter your title"
            onChange={handleTitleChange}
          />
        </div>

        <div>
          <Select onValueChange={(value) => handleSubjectChange(value)}>
            <SelectTrigger className="w-[180px]">
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
      </div>
    </>
  );
}
