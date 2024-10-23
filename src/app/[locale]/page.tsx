import BannerComponent from "@/components/custom/banner.component";
import CategoryComponent from "@/components/custom/category.component";
import DeviceCategoryComponent from "@/components/custom/deviceCategory.component";
import BestSellingProductComponent from "@/components/custom/bestSellingProduct.component";
import PromoProductComponent from "@/components/custom/promoProduct.component";
import NewArrivalComponent from "@/components/custom/newArrival.component";
import AssuranceComponent from "@/components/custom/assurance.component";
import FlashSaveComponent from "@/components/custom/flashSave.component";
import ExploreProductComponent from "@/components/custom/exploreProduct.component";

export default function Home() {
  // const t = useTranslations();

  return (
    <div className="l-container flex flex-col gap-[140px]">
      <div className="flex">
        <div className="flex h-full min-h-[384px] w-1/5 items-end border-r border-Text2/30">
          <CategoryComponent />
        </div>
        <div className="flex flex-1 items-end justify-end">
          <BannerComponent />
        </div>
      </div>
      <div className="flex flex-col gap-20">
        <FlashSaveComponent />
        <DeviceCategoryComponent />
        <BestSellingProductComponent />
      </div>
      <div className="flex flex-col gap-20">
        <PromoProductComponent />
        <ExploreProductComponent />
      </div>
      <NewArrivalComponent />
      <AssuranceComponent />
    </div>
  );
}
