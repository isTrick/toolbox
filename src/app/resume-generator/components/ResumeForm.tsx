"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitHandler, useForm } from "react-hook-form";
import BaseDocument from "./BaseDocument";
import { ResumeData } from "@/src/types/resume";
import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";
import FileUpload from "./FileUpload";

export default function ResumeForm() {
  const { register, handleSubmit } = useForm<ResumeData>();
  const [userData, setUserData] = useState<ResumeData>({
    name: "Seu nome",
    address: "Seu endereço",
    number: "Seu número",
    email: "Seu e-mail",
    linkedin: "Seu Linkedin",
    experience: "Sua experiência",
    education: "Sua escolaridade",
    skills: "Suas habilidades",
    achievements: "Suas conquistas",
  });

  const generatePDF: SubmitHandler<ResumeData> = (data) => {
    console.log(data);
    setUserData(data);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen flex-row flex-nowrap p-10 gap-2">
      <form
        onSubmit={handleSubmit(generatePDF)}
        className="w-2/6 h-fit border border-black rounded-lg p-5 flex flex-col gap-2"
      >
        <div>
          <Label htmlFor="name">Nome Completo</Label>
          <Input type="text" {...register("name")} />
        </div>
        <div>
          <Label htmlFor="address">Endereço</Label>
          <Input type="text" {...register("address")} />
        </div>
        <div>
          <Label htmlFor="number">Número</Label>
          <Input type="text" {...register("number")} />
        </div>
        <div>
          <Label htmlFor="email">E-Mail</Label>
          <Input type="text" {...register("email")} />
        </div>
        <div>
          <Label htmlFor="linkedin">Linkedin</Label>
          <Input type="text" {...register("linkedin")} />
        </div>
        <div>
          <Label htmlFor="experience">Experiência</Label>
          <Input type="text" {...register("experience")} />
        </div>
        <div>
          <Label htmlFor="education">Escolaridade</Label>
          <Input type="text" {...register("education")} />
        </div>
        <div>
          <Label htmlFor="skills">Habilidades</Label>
          <Input type="text" {...register("skills")} />
        </div>
        <div>
          <Label htmlFor="achievements">Conquistas</Label>
          <Input type="text" {...register("achievements")} />
        </div>
        <Button type="submit">Gerar Currículo</Button>
      </form>
      <PDFViewer className="rounded-lg w-3/6 h-[688px] border-black border" showToolbar={false}>
        <BaseDocument
          name={`${userData.name}`}
          address={`${userData.address}`}
          number={`${userData.number}`}
          email={`${userData.email}`}
          linkedin={`${userData.linkedin}`}
          experience={`${userData.experience}`}
          education={`${userData.education}`}
          skills={`${userData.skills}`}
          achievements={`${userData.achievements}`}
        />
      </PDFViewer>
      <FileUpload />
    </div>
  );
}
