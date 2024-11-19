"use Client";

import { useStoreModalStore } from "@/hooks/use-store-modal";
import { Modal } from "../modal";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel } from "../form";
import { Input } from "../input";
import { Button } from "../button";

const formSchema = z.object({
  name: z.string().min(1),
});

const onSubmit = async (values: z.infer<typeof formSchema>) => {
  console.log(values);
};

export const StoreModal = () => {
  const storeModal = useStoreModalStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  return (
    <Modal
      title="Buat Store"
      description="Lengkapi data store anda"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div>
          <Form {...form}>
            <form
            onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder="Nama Toko" {...field} />
                  </FormItem>
                )}
              />
              <div className="px-3 pt-3 space-x-2 flex justify-end w-full">
                <Button variant={"outline"} onClick={storeModal.onClose}>Cancel</Button>
                <Button type="submit">Continue</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
