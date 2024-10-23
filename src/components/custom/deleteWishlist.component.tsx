"use client";
import React, {useState} from "react";
import {useTranslations} from "next-intl";
import {toast} from "sonner";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import TrashIcon from "../icon/trash.icon";
import {Button} from "../ui/button";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "../ui/tooltip";

import PrimaryButton from "./primaryButton.ui";

import {wishlistStore} from "@/store";
import {typeProduct} from "@/types";
import {localStorageKey} from "@/constants/localStorage";

const DeleteWishlistComponent: React.FC<{
  data: typeProduct;
}> = ({data}) => {
  const [open, setOpen] = useState<boolean>(false);
  const t = useTranslations("Wishlist.Trash");
  const {setWishlist} = wishlistStore();

  const handleRemove = () => {
    const favorites: typeProduct[] = localStorage.getItem(localStorageKey.wishlist)
      ? JSON.parse(localStorage.getItem(localStorageKey.wishlist) || "")
      : [];

    const favoritesAfterDelete: typeProduct[] = favorites.filter((item) => item.id !== data.id);

    if (favorites.length > favoritesAfterDelete.length) {
      localStorage.setItem(localStorageKey.wishlist, JSON.stringify(favoritesAfterDelete));
      toast.success(t("toast"));
      setWishlist(favoritesAfterDelete);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-Primary">
                <TrashIcon strokeColor="#000" />
              </div>
            </TooltipTrigger>
            <TooltipContent>{t("tooltip")}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("title")} </DialogTitle>
          <DialogDescription>{t("description")}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex">
          <DialogClose>
            <Button variant="outline">{t("cancel")}</Button>
          </DialogClose>
          <PrimaryButton className="ml-3 w-fit" onClick={handleRemove}>
            {t("button")}
          </PrimaryButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteWishlistComponent;
