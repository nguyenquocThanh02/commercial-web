import React from "react";
import {useTranslations} from "next-intl";
import {toast} from "sonner";

import WishlistIcon from "../icon/wishlist.icon";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "../ui/tooltip";

import {typeProduct} from "@/types";
import {authStore, wishlistStore} from "@/store";

const AddToWishlistComponent: React.FC<{data: typeProduct}> = ({data}) => {
  const t = useTranslations("Tooltip");
  const {wishlist, setWishlist} = wishlistStore();
  const {auth} = authStore();

  const inWishlist = auth ? wishlist.some((item) => item.id === data.id) : false;

  const handleAddToWishlist = () => {
    if (auth) {
      if (!wishlist.some((item) => item.id === data.id)) {
        wishlist.push(data);
        setWishlist(wishlist);
        toast.success(t("MessageToast.added"));
      } else {
        const favoritesAfterDelete: typeProduct[] = wishlist.filter((item) => item.id !== data.id);

        setWishlist(favoritesAfterDelete);
        toast.info(t("MessageToast.removed"));
      }
    } else {
      toast.warning("You need to login before action with wishlist");
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
        <TooltipContent>{inWishlist ? t("removeWishlist") : t("addToWishlist")}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AddToWishlistComponent;
