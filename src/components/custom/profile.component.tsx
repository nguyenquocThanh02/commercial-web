"use client";
import React, {useState} from "react";
import {useTranslations} from "next-intl";

import ProfileActiveIcon from "../icon/profileActive.icon";
import ProfileIcon from "../icon/profile.icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import OrderIcon from "../icon/order.icon";
import CancelIcon from "../icon/cancel.icon";
import ReviewIcon from "../icon/reviewing.icon";
import LogoutIcon from "../icon/logout.icon";

import {typeProfileNav} from "@/types";
import {authStore} from "@/store";
import {localStorageKey} from "@/constants/localStorage";
import {Link} from "@/app/navigation";

const ProfileComponent = () => {
  const t = useTranslations("Header.Profile");

  const [open, setOpen] = useState<boolean>(false);
  const {setIsAuth} = authStore();

  const profileNav: typeProfileNav[] = [
    {
      name: t("account"),
      icon: <ProfileIcon height={24} strokeColor="#fff" width={24} />,
      path: "/profile",
    },
    {
      name: t("order"),
      icon: <OrderIcon strokeColor="#fff" />,
      path: "#",
    },
    {
      name: t("cancel"),
      icon: <CancelIcon strokeColor="#fff" />,
      path: "#",
    },
    {
      name: t("review"),
      icon: <ReviewIcon strokeColor="#fff" />,
      path: "#",
    },
    {
      name: t("logout"),
      icon: <LogoutIcon strokeColor="#fff" />,
      path: "#",
      isButton: true,
    },
  ];

  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const handleLogout = async () => {
    localStorage.removeItem(localStorageKey.accessToken);

    await fetch("/api/auth/logout", {
      method: "POST",
      body: JSON.stringify(""),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      const payload = await res.json();
    });
    setIsAuth(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="outline-none">
        {open ? <ProfileActiveIcon /> : <ProfileIcon />}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dropdown-blur-custom text-Text">
        <DropdownMenuRadioGroup>
          {profileNav.map((item, index) =>
            item?.isButton ? (
              <DropdownMenuItem
                key={index}
                className="flex w-[200px] text-sm"
                onClick={handleLogout}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {React.cloneElement(item.icon, {
                  strokeColor: hoveredItem === index ? "#000" : "#fff",
                })}
                {item.name}
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem
                key={index}
                className="text-sm"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link className="flex gap-3" href={item.path}>
                  {React.cloneElement(item.icon, {
                    strokeColor: hoveredItem === index ? "#000" : "#fff",
                  })}
                  {item.name}
                </Link>
              </DropdownMenuItem>
            ),
          )}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileComponent;
