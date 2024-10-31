import BestSellingProductComponent from "@/components/custom/bestSellingProduct.component";
import DeviceCategoryComponent from "@/components/custom/deviceCategory.component";
import FlashSaveComponent from "@/components/custom/flashSave.component";
import HeroComponent from "@/components/custom/hero.component";

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <FlashSaveComponent />
      <DeviceCategoryComponent />
      <BestSellingProductComponent />
      {/* <PromoProductComponent /> */}
      {/* <ExploreProductComponent /> */}
      {/* <NewArrivalComponent /> */}
      {/* <AssuranceComponent /> */}
    </div>
  );
}
