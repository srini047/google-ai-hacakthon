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

interface SubjectSelectProps {
  onSubjectChange: (selectedSubject: string) => void;
}

export function SubjectSelect({ onSubjectChange }: SubjectSelectProps) {
  const handleSubjectChange = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const selectedSubject = event.currentTarget.getAttribute("data-value");
    if (selectedSubject) {
      onSubjectChange(selectedSubject);
    }
  };

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Science Subjects</SelectLabel>
          <SelectItem value="Physics" onClick={handleSubjectChange}>
            Physics
          </SelectItem>
          <SelectItem value="Chemistry" onClick={handleSubjectChange}>
            Chemistry
          </SelectItem>
          <SelectItem value="Biology" onClick={handleSubjectChange}>
            Biology
          </SelectItem>

          <SelectLabel>Computer Subjects</SelectLabel>
          <SelectItem value="Programming" disabled>
            Programming
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
  );
}
