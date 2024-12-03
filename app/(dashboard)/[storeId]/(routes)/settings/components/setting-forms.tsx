'use client';

import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Store } from "@prisma/client";
import { Trash } from "lucide-react";
import { useState } from "react";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";

interface SettingFormProps {
  initialData: Store;
}

const formSchema = z.object({
    name : z.string().min(1),
})

type SettingFormValues = z.infer<typeof formSchema>

export const SettingForm = ({ initialData }: SettingFormProps) => {

    const [open,setOpen] = useState(false);
    const [loading , setLoading] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:initialData,
    })

    const onSubmit=()=>{
        console.log('tes`')
    }
        

  return (
    <>
    <div className="flex items-center justify-between mb-3">
        <Heading title="Settings" description="Manage store preferences" />
      <Button
        variant="destructive"
        size="sm" 
        onClick={() => {
          alert("tes");
        }}
        className="ml-auto"
      >
        <Trash className="h-4 w-4" />
      </Button>
    </div>
      <Separator />
      <Form  {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full ">
            <div className="grid grid-cols-3 gap-8">
                <FormField
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input disabled={loading} placeholder="Store name" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                name="name"
                control={form.control}
                />
                <FormItem>
                    <FormLabel>Store Name</FormLabel>
                </FormItem>
            </div>


        </form>


      </Form>
    
    </>
  );
};
