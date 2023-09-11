import { useState } from "react";

// components:
import ContactMenu from "./ContactMenu";

// types:
import { ContactItemType } from "../../@types/contact";

// main:
const ContactItem = ({ imgLink, name, contact }: ContactItemType) => {
  // states:
  const [isContactMenuActive, setIsContactMenuActive] =
    useState<boolean>(false);

  return (
    <div className="flex items-center justify-between rounded p-2 cursor-pointer bg-[--primary-violet-op22] hover:bg-[--primary-violet-op33] duration-200 shadow-lg hover:shadow-none active:bg-[--primary-violet-op55]">
      <div className="flex items-center gap-2 _left">
        <div className="_img-container w-12 h-12 overflow-hidden rounded-[50%] bg-[--primary-violet-op55]">
          {imgLink ? (
            <img
              src={imgLink}
              alt="profile"
              className="object-cover rounded-full"
            />
          ) : (
            <div className="uppercase rounded-full flex items-center justify-center w-full h-full text-[--primary-violet] font-semibold">
              {name.split(" ")[0][0] + name.split(" ")[1][0]}
            </div>
          )}
        </div>
        <div className="_info-container">
          <h3 className="text-[--secondary-text-slate] text-lg">{name}</h3>
          <p className="text-[--secondary-text-dim]">{contact}</p>
        </div>
      </div>

      <ContactMenu
        isContactMenuActive={isContactMenuActive}
        setIsContactMenuActive={setIsContactMenuActive}
      />
    </div>
  );
};

export default ContactItem;
