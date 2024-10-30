import React from "react";
import Image from "next/image";
import {useTranslations} from "next-intl";

import iconPhone from "@/assets/svg/icons-phone.svg";
import iconMail from "@/assets/svg/icons-mail.svg";

const SidebarContactComponent = () => {
  const t = useTranslations("Contact.Sidebar");
  const sidebarPhone = [t("Phone.content1"), t("Phone.content2")];
  const sidebarEmail = [
    t("Email.content1"),
    "Emails: customer@exclusive.com",
    "Emails: support@exclusive.com",
  ];

  return (
    <div className="shadow-input-primary w-[340px] rounded">
      <div className="px-[35px] py-10">
        <div className="">
          <div className="flex items-center gap-4">
            <Image alt="icon phone" sizes="40" src={iconPhone} />
            <p>{t("Phone.title")}</p>
          </div>
          <div className="mt-6 space-y-4">
            {sidebarPhone.map((item, index) => (
              <p key={index} className="text-sm leading-[21px]">
                {item}
              </p>
            ))}
          </div>
          <hr className="mt-8 text-Text2" />
        </div>
        <div className="mt-8">
          <div className="flex items-center gap-2">
            <Image alt="icon phone" sizes="40" src={iconMail} />
            <p>{t("Email.title")}</p>
          </div>
          <div className="mt-6 space-y-4">
            {sidebarEmail.map((item, index) => (
              <p key={index} className="text-sm leading-[21px]">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarContactComponent;
