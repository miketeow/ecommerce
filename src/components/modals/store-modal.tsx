"use client";

import { Modal } from "@/components/ui/modal";
import { storeSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const StoreModal = () => {
  const form = useForm<z.infer<typeof storeSchema>>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(storeSchema),
  });

  const onSubmit = async (values: z.infer<typeof storeSchema>) => {
    console.log(values);
  };
  return (
    <Modal
      title="Create Store"
      description="Create a new store"
      buttonTrigger="Create Store"
      buttonVariant={"outline"}
      footerChildren={
        <>
          <Button type="button" onClick={() => form.reset()}>
            Cancel
          </Button>
        </>
      }
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Store name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end">
                <Button type="submit">Create</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
