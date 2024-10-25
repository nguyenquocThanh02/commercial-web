import AssuranceComponent from "@/components/custom/assurance.component";
import BestSellingProductComponent from "@/components/custom/bestSellingProduct.component";
import DeviceCategoryComponent from "@/components/custom/deviceCategory.component";
import ExploreProductComponent from "@/components/custom/exploreProduct.component";
import FlashSaveComponent from "@/components/custom/flashSave.component";
import HeroComponent from "@/components/custom/hero.component";
import NewArrivalComponent from "@/components/custom/newArrival.component";
import PromoProductComponent from "@/components/custom/promoProduct.component";

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <FlashSaveComponent />
      <DeviceCategoryComponent />
      <BestSellingProductComponent />
      <PromoProductComponent />
      <ExploreProductComponent />
      <NewArrivalComponent />
      <AssuranceComponent />
    </div>
  );
}
