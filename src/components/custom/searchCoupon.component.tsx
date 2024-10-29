"use client";
import React, {useCallback, useState} from "react";
import {useTranslations} from "next-intl";

import {Checkbox} from "../ui/checkbox";

import PrimaryButton from "@/components/custom/primaryButton.ui";
import {Input} from "@/components/ui/input";
import {typeCoupon} from "@/types";
import {useDebounce} from "@/hooks/useDebounce.hook";
import {useQueryProduct} from "@/hooks/useQueryHooks";
import {couponStore} from "@/store/coupon.store";
const SearchCouponComponent: React.FC<{
  setDiscount: React.Dispatch<React.SetStateAction<number>>;
}> = ({setDiscount}) => {
  const t = useTranslations();

  const [valueSearch, setValueSearch] = useState<string>("");
  const {coupons, setCoupons} = couponStore();

  const debounceSearchValue = useDebounce(valueSearch, 800);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueSearch(e.target.value);
  };

  const handleSelectCoupon = (item: typeCoupon) => {
    const isSelected = coupons.some((coupon) => coupon.code === item.code);

    if (!isSelected) {
      setCoupons(item, true);
    } else {
      setCoupons(item, false);
    }
  };

  const handleApplyCoupon = useCallback(() => {
    const totalDiscount = coupons.reduce((accumulator, coupon) => {
      return accumulator + Number(coupon.discount);
    }, 0);

    setDiscount(totalDiscount);
  }, [coupons]);

  const {data} = useQueryProduct.useCoupon(debounceSearchValue);

  return (
    <div>
      <div className="flex gap-4">
        <Input
          className="h-[56px] w-[300px] px-8"
          placeholder={t("Payment.Coupon.placeHover")}
          type="text"
          value={valueSearch}
          onChange={(e) => handleSearch(e)}
        />
        <PrimaryButton className="h-[56px] w-[211px]" onClick={handleApplyCoupon}>
          {t("Payment.Coupon.buttonApply")}
        </PrimaryButton>
      </div>
      {data &&
        data.length > 0 &&
        data.map((item: typeCoupon) => (
          <div
            key={item.code}
            className="my-8 flex h-[48px] w-[300px] items-center justify-between rounded px-4 shadow-md"
          >
            <p className="text-Text2/80">{item.name}</p>
            <Checkbox
              checked={coupons.some((coupon) => coupon.code === item.code)}
              className="size-6 data-[state=checked]:border-Secondary2 data-[state=checked]:bg-Secondary2"
              onCheckedChange={() => handleSelectCoupon(item)}
            />
          </div>
        ))}
    </div>
  );
};

export default SearchCouponComponent;
