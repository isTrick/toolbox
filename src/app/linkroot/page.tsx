"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

type dataSchema = {
  name: string;
  description: string;
  skill1: string;
};

export default function Linkroot() {
  const { register, handleSubmit, watch } = useForm();

  const formData = watch();

  function submitForm(data: dataSchema) {
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
        <p>{formData.description}</p>
        <p>{formData.skill1}</p>
      </div>
    </div>
  );
}
