"use client";
import React, {useEffect, useState} from "react";
import {useLocale, useTranslations} from "next-intl";
import Image from "next/image";
import {toast} from "sonner";
import {CircleCheckBig} from "lucide-react";

import {Sheet, SheetContent, SheetHeader, SheetTitle} from "../ui/sheet";
import AddToWishlistComponent from "../form/addToWishListComponent";

import RatingComponent from "./rating.component";
import SecondaryButton from "./secondaryButton.component";
import InputQuanlityComponent from "./inputQuanlity.component";
import PrimaryButton from "./primaryButton.ui";
import SizesProductComponent from "./sizesProduct.component";
import SelectColorProductComponent from "./selectColorProduct.component";

import {calculatePriceSale, renderPriceFollowCurrency} from "@/utils";
import {Link} from "@/app/navigation";
import {cartStore, productStore} from "@/store";
import {typeProductSelect} from "@/types";
import {productSelectStore} from "@/store/productSelect.store";

const QuickReviewAddToCartComponent = () => {
  const {productSelect, setProductSelect} = productSelectStore();
  const {cart, setCart} = cartStore();
  const {setOpenQuickReviewAddToCart, openQuickReviewAddToCart, product: data} = productStore();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const t = useTranslations("Home.ExploreProduct.QuickReview");
  const locale = useLocale();

  useEffect(() => {
    if (data) {
      setProductSelect({
        product: data,
        selectedColor: data.colors[0],
        selectedSize: "",
        quantity: 1,
        totalPrice: 0,
        discount: 0,
      });
    }
  }, [data]);

  const handleAddToCart = () => {
    setIsLoading(true);
    if (data.sizes && data.sizes.length > 0 && !productSelect.selectedSize) {
      toast.warning(t("messageErrorAdd"));

      return;
    }

    const existingProductIndex = cart.findIndex(
      (item: typeProductSelect) =>
        item.product.id === productSelect.product.id &&
        item.selectedSize === productSelect.selectedSize &&
        item.selectedColor === productSelect.selectedColor,
    );

    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += productSelect.quantity;
    } else {
      cart.push(productSelect);
    }
    setCart(cart);

    toast.success(t("messageAdded"));
    setIsAdded(true);
    setIsLoading(false);
  };

  return (
    <Sheet open={openQuickReviewAddToCart} onOpenChange={setOpenQuickReviewAddToCart}>
      <SheetContent className="w-fit px-12" onCloseAutoFocus={() => setIsAdded(false)}>
        <SheetHeader>
          <SheetTitle>
            {isAdded ? (
              <div className="mb-4 flex items-center gap-8">
                <CircleCheckBig className="text-green-600" />
                <p className="text-center text-xl font-medium">{t("messageAdded")}</p>
              </div>
            ) : (
              <p className="mb-4 text-center text-xl font-medium">{t("title")}</p>
            )}
            <hr className="text-Text2" />
          </SheetTitle>
        </SheetHeader>
        <div className="mt-12">
          <div className="flex w-full items-center justify-evenly gap-3">
            <Image
              alt="product img"
              height={100}
              src={productSelect?.selectedColor?.imageUrl || ""}
              width={100}
            />
            <div className="flex flex-col justify-center">
              <h3 className="font-medium">{data.name}</h3>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="font-medium text-Secondary2">
                    {renderPriceFollowCurrency(
                      locale,
                      calculatePriceSale(data.price[locale], data.discountPercentage),
                    )}
                  </p>
                  <p className="font-medium text-Text2/50 line-through">
                    {renderPriceFollowCurrency(locale, data.price[locale])}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <RatingComponent rating={data.rating} />
                  <p className="mt-[2px] text-sm font-semibold text-Text2/50">
                    ({data.numberOfReviews})
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="my-4 text-center text-sm italic">{data.description}</p>
          {isAdded ? (
            <div className="mt-12 flex flex-col items-center gap-3">
              <Link href={"/cart"}>
                <PrimaryButton
                  classForText="text-sm font-medium"
                  className="h-12 w-[220px] text-sm"
                >
                  {t("buttonCheckout")}
                </PrimaryButton>
              </Link>
              <SecondaryButton
                className="h-12 w-[220px] text-sm"
                onClick={() => setOpenQuickReviewAddToCart(false)}
              >
                {t("buttonReturn")}
              </SecondaryButton>
            </div>
          ) : (
            <>
              <div className="mt-12 flex flex-col gap-6">
                <SelectColorProductComponent />
                <SizesProductComponent />
                <div className="flex items-center gap-4">
                  <InputQuanlityComponent />
                  <div className="flex size-10 items-center justify-center rounded border border-Primary1">
                    <AddToWishlistComponent data={data} />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex w-full justify-center gap-3">
                <Link
                  className="flex-1"
                  href={`/product/${data.id}`}
                  onClick={() => setOpenQuickReviewAddToCart(false)}
                >
                  <SecondaryButton className="h-12 w-full">{t("details")}</SecondaryButton>
                </Link>

                <PrimaryButton
                  classForText="text-sm font-medium flex-1 w-full"
                  className="h-12 text-sm"
                  onClick={handleAddToCart}
                >
                  {t("buttonAddToCart")}
                </PrimaryButton>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default QuickReviewAddToCartComponent;
