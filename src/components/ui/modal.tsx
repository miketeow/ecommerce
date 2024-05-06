"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type ModalProps = {
  title: string;
  description: string;
  buttonTrigger: string;
  buttonVariant: "default" | "destructive" | "outline" | "secondary" | "ghost";
  children: React.ReactNode;
  footerChildren: React.ReactNode;
};

export const Modal = ({
  title,
  description,
  children,
  footerChildren,
  buttonTrigger,
  buttonVariant,
}: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={buttonVariant}>{buttonTrigger}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{children}</div>
        <DialogFooter className="pt-6 space-x-2 flex items-center justify-end">
          <DialogClose asChild>{footerChildren}</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
