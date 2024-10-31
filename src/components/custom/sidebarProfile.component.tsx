"use client";
import {useTranslations} from "next-intl";
import React from "react";

import {typeSidebarProfile} from "@/types";
import {Link, usePathname} from "@/app/navigation";
import {cn} from "@/libs/utils";

const SidebarProfileComponent = () => {
  const t = useTranslations("Profile.Sidebar");
  const pathname = usePathname();

  const sidebars: typeSidebarProfile[] = [
    {
      name: t("Manage.account"),
      sub: [
        {
          name: t("Manage.profile"),
          link: "/profile",
        },
        {
          name: t("Manage.address"),
          link: "#",
        },
        {
          name: t("Manage.payment"),
          link: "#",
        },
      ],
    },
    {
      name: t("Order.order"),
      sub: [
        {
          name: t("Order.return"),
          link: "#",
        },
        {
          name: t("Order.cancel"),
          link: "#",
        },
      ],
    },
    {
      name: t("Wishlist.wishlist"),
      link: "/wishlist",
      sub: [],
    },
  ];

  return (
    <div className="w-[300px]">
      {sidebars.map((item, index) => (
        <div key={index} className="flex flex-col gap-6">
          {item?.link ? (
            <Link className="" href={item.link}>
              <h3 className="font-medium leading-6">{item.name}</h3>
            </Link>
          ) : (
            <div className="mb-6">
              <h3 className="font-medium leading-6">{item.name}</h3>
              <div className="mt-4 flex flex-col gap-2">
                {item.sub?.map((sub, index) => (
                  <Link
                    key={index}
                    className={cn(
                      "ml-[35px] leading-6 transition-all duration-300 hover:text-Secondary2",
                      {
                        "text-Secondary2": pathname === sub.link,
                      },
                    )}
                    href={sub.link || ""}
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SidebarProfileComponent;
