"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useForm } from "react-hook-form";

type dataSchema = {
  name: string;
  description: string;
  skill1: string;
};

export default function Linkroot() {
  const [formData, setFormData] = useState<dataSchema>({
    name: "Name",
    description: "Description",
    skill1: "Skill1"
  });
  const { register, handleSubmit } = useForm();

  function submitForm(data: dataSchema) {
    setFormData(data);
    console.log(data);
  }

  return (
    <div className="w-screen h-screen">
      <form onSubmit={handleSubmit(submitForm)}>
        <Input type="text" placeholder="Name" {...register("name")} />
        <Input
          type="text"
          placeholder="Description"
          {...register("description")}
        />
        <Input type="text" placeholder="Skill1" {...register("skill1")} />
        <Button type="submit">Submit</Button>
      </form>
      <div>
        <p>{formData.name}</p>
        <p>Description</p>
        <p>Skill1</p>
      </div>
    </div>
  );
}
