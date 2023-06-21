// types:
import { ContactItemType } from "../../@types/contact";

// main:
const ContactItem = ({ imgLink, name, contact }: ContactItemType) => {
  return (
    <div className="flex items-center justify-between bg-[--primary-violet-op22] rounded p-2 cursor-pointer hover:bg-[--primary-violet-op33] duration-200 shadow-lg hover:shadow-none">
      <div className="_left flex items-center gap-2">
        <div className="_img-container w-12 h-12 overflow-hidden rounded-[50%] bg-[--primary-violet-op33]">
          {imgLink ? (
            <img
              src={imgLink}
              alt="profile"
              className="object-cover rounded-full"
            />
          ) : (
            <div className="uppercase rounded-full flex items-center justify-center w-full h-full text-[--secondary-text-dim] font-semibold">
              {name.split(" ")[0][0] + name.split(" ")[1][0]}
            </div>
          )}
        </div>
        <div className="_info-container">
          <h3 className="text-[--secondary-text-slate] text-lg">{name}</h3>
          <p className="text-[--secondary-text-dim]">{contact}</p>
        </div>
      </div>

      <div className="_right flex items-center justify-center gap-1 h-full p-2 aspect-square rounded-full cursor-pointer active:scale-110">
        <div className="_dot w-1 h-1 rounded-full bg-[--primary-text-slate]"></div>
        <div className="_dot w-1 h-1 rounded-full bg-[--primary-text-slate]"></div>
        <div className="_dot w-1 h-1 rounded-full bg-[--primary-text-slate]"></div>
      </div>
    </div>
  );
};

export default ContactItem;
