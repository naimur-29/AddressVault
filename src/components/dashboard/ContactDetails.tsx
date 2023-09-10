import { useState } from "react";

// icons:
import { ListPlus } from "lucide-react";

const TAGS = ["Friends", "Family", "Businesses", "Others"];

const ContactDetails = () => {
  // states:
  const [dummyData, setDummyData] = useState<any>({
    name: "John Sina",
    photoURL:
      "https://2.bp.blogspot.com/-_1FR4z9LxNk/TgCq_ciWu_I/AAAAAAAAJsI/0yzNrvHmaFo/s320/5d02a01b0dkl3qq1.jpg",
    relation: "Friend",
    tags: ["Friends"],
  });

  const [isSelectTagOpen, setIsSelectTagOpen] = useState<boolean>(false);

  return (
    <section className="h-[50vh] lg:h-full lg:flex-[1] w-full duration-150">
      <div className="_wrapper flex flex-col w-full h-full bg-[--primary-violet-op55] rounded">
        <div
          className="flex items-center justify-center gap-[20px] py-10 _top-container bg-[--primary-blue-dark] rounded-t"
          style={{
            background:
              "linear-gradient(180deg, #fff3 0%, rgba(10,1,41,1) 45%)",
          }}
        >
          <div className="_left flex-[1] overflow-hidden flex items-center justify-end">
            <img
              className="object-cover object-center w-2/3 border-2 rounded-full aspect-square border-[#fff3]"
              src={dummyData.photoURL}
              alt="profile"
            />
          </div>

          <div className="_right flex-[1]">
            <p className="text-3xl text-[--primary-text-slate] font-bold _name">
              {dummyData.name}
            </p>
            <p className="_relation text-[--secondary-text-slate] mb-4">
              {dummyData.relation}
            </p>
            <div className="relative flex flex-wrap items-center gap-2 mr-4 _tags-container">
              {isSelectTagOpen ? (
                <div
                  style={{ backdropFilter: "blur(5px)" }}
                  className="absolute top-[44px] left-0 w-[90%] flex flex-col bg-[--primary-blue-light-op99] z-[99] p-[10px] gap-1 _select-tags rounded-lg cursor-pointer"
                >
                  {TAGS.map((tag) => (
                    <button
                      onClick={() => {
                        if (dummyData.tags.includes(tag)) {
                          setDummyData((current: any) => ({
                            ...current,
                            tags: [...current.tags].filter((t) => t !== tag),
                          }));
                        } else {
                          setDummyData((current: any) => ({
                            ...current,
                            tags: [...current.tags, tag],
                          }));
                        }
                      }}
                      className="_option flex items-center justify-between text-left text-lg font-semibold text-[--secondary-text-slate] hover:translate-x-1 hover:text-[--primary-text-slate] transition-transform duration-150 w-full"
                    >
                      {dummyData.tags.includes(tag) ? `[ ${tag} ]` : tag}
                    </button>
                  ))}
                </div>
              ) : (
                <></>
              )}

              <button
                onClick={() => setIsSelectTagOpen((current) => !current)}
                className={`_add-tag flex items-center justify-center h-[36px] w-[36px] rounded-full pl-1 active:scale-90 hover:bg-[--primary-blue-light-op99] transition-colors duration-150${
                  isSelectTagOpen
                    ? " bg-[--primary-blue-light-op99]"
                    : " bg-[#fff3]"
                }`}
              >
                <ListPlus />
              </button>
              {dummyData.tags.length ? (
                dummyData.tags.map((tag: string) => (
                  <p className="px-3 py-1 rounded-lg font-semibold bg-[#fff3]">
                    {tag}
                  </p>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
