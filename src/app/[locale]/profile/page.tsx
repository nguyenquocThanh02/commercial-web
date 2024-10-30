import React from "react";

import SidebarProfileComponent from "@/components/custom/sidebarProfile.component";
import ProfileForm from "@/components/form/profile.form";
import {BreadcrumbComponent} from "@/components/custom/breadscrumb.component";
import {typeBreadCrumbs} from "@/types";

const ProfilePage = () => {
  const nav: typeBreadCrumbs[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "My Account",
      link: "/profile",
    },
  ];

  return (
    <section>
      <div className="flex items-end justify-between">
        <BreadcrumbComponent links={nav} />
        <div>
          Welcome! <span className="text-Secondary2">Md Rimel</span>
        </div>
      </div>

      <div className="mt-20 flex justify-between">
        <SidebarProfileComponent />
        <ProfileForm />
      </div>
    </section>
  );
};

export default ProfilePage;
