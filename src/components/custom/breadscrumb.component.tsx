"use client";
import React from "react";
import {usePathname} from "next/navigation";

import LinkCustom from "./link.custom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {cn} from "@/libs/utils";

interface BreadcrumbItemProps {
  link?: string;
  name: string;
}

interface BreadcrumbCustomProps {
  links: BreadcrumbItemProps[];
}

export function BreadcrumbComponent({links}: BreadcrumbCustomProps) {
  const paramPath = usePathname();

  return (
    <Breadcrumb className="mb-3 mt-3">
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
                <BreadcrumbPage>{item.name}</BreadcrumbPage>
              </BreadcrumbItem>
            )}
            {index < links.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
