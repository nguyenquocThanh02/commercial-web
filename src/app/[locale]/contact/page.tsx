import React from "react";

import {BreadcrumbComponent} from "@/components/custom/breadscrumb.component";
import {typeBreadCrumbs} from "@/types";
import SidebarContactComponent from "@/components/custom/sidebarContact.component";
import ContactForm from "@/components/form/contact.form";

const ContactPage = () => {
  const nav: typeBreadCrumbs[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <section>
      <BreadcrumbComponent links={nav} />

      <div className="mt-20 flex h-[457px] justify-between gap-[30px]">
        <SidebarContactComponent />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
