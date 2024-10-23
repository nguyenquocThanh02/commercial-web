import React from "react";

import WishlistIcon from "../icon/wishlist.icon";
import CartIcon from "../icon/cart.icon";

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "./tooltip";

import {Link} from "@/app/navigation";

const IconWithCounterComponent: React.FC<{
  account?: number | string;
  icon?: string;
  path?: string;
  tooltip?: string;
}> = ({account = 0, icon = "wishlist", path = "/wishlist", tooltip = "Wishlist"}) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>
          <Link className="hover:opacity-75" href={path}>
            <div className="relative">
              {account !== 0 && (
                <div className="absolute right-0 top-0 flex size-4 items-center justify-center rounded-full border border-Secondary2 bg-Secondary2 text-sm text-Text">
                  {account}
                </div>
              )}
              {icon === "wishlist" ? <WishlistIcon /> : <CartIcon />}
            </div>
          </Link>
        </TooltipTrigger>
        <TooltipContent>{tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default IconWithCounterComponent;
