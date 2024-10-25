import React from "react";
import {useTranslations} from "next-intl";
import {toast} from "sonner";

import WishlistIcon from "../icon/wishlist.icon";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "../ui/tooltip";

import {typeProduct} from "@/types";
import {wishlistStore} from "@/store";

const AddToWishlistComponent: React.FC<{data: typeProduct}> = ({data}) => {
  const t = useTranslations("Tooltip");
  const {wishlist, setWishlist} = wishlistStore();

  const inWishlist = wishlist.some((item) => item.id === data.id);

  const handleAddToWishlist = () => {
    if (!wishlist.some((item) => item.id === data.id)) {
      wishlist.push(data);
      setWishlist(wishlist);
      toast.success(t("MessageToast.added"));
    } else {
      const favoritesAfterDelete: typeProduct[] = wishlist.filter((item) => item.id !== data.id);

      setWishlist(favoritesAfterDelete);
      toast.success(t("MessageToast.removed"));
    }
  };

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>
          <button
            className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-Primary"
            onClick={handleAddToWishlist}
          >
            {inWishlist ? (
              <WishlistIcon fillColor="red" height={24} strokeColor="red" width={24} />
            ) : (
              <WishlistIcon height={24} width={24} />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent>{t("addToWishlist")}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AddToWishlistComponent;
