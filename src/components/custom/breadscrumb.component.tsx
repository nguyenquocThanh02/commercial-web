"use client";
import React from "react";
import {usePathname} from "next/navigation";
import {SlashIcon} from "@radix-ui/react-icons";

import LinkCustom from "./link.custom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {cn} from "@/libs/utils";
import {typeBreadCrumbs} from "@/types";

interface BreadcrumbCustomProps {
  links: typeBreadCrumbs[];
}

export function BreadcrumbComponent({links}: BreadcrumbCustomProps) {
  const paramPath = usePathname();

  return (
    <Breadcrumb className="mt-20">
      <BreadcrumbList>
        {links.map((item, index) => (
          <React.Fragment key={index}>
            {item.link ? (
              <BreadcrumbItem>
                <LinkCustom
                  className={cn("transition-colors", {
                    "text-Primary": paramPath === item.link,
                  })}
                  href={item.link}
                  text={item.name}
                />
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem>
                <BreadcrumbPage
                  className={cn("text-Text2/50", {"text-Text2": index >= links.length - 1})}
                >
                  {item.name}
                </BreadcrumbPage>
              </BreadcrumbItem>
            )}
            {index < links.length - 1 && <SlashIcon />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
