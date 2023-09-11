// components:
import ContactItem from "./ContactItem";
import AnimatedCounter from "../../animations/components/AnimatedCounter";

// main:
const Contacts = () => {
  return (
    <section className="lg:flex-[1] flex flex-col gap-2 h-[70vh] lg:h-screen py-[10px]">
      {/* HEADER */}
      <div className="flex flex-col mb-3">
        <p className="text-sm text-[--primary-text-dim] font-semibold">
          <AnimatedCounter from={999} to={97} /> TOTAL
        </p>
        <h3 className="text-2xl font-semibold text-[--primary-text-slate]">
          Contacts
        </h3>
      </div>

      <div className="flex items-center w-full gap-1 mb-3 _menu">
        <div className="h-full flex items-center bg-[--primary-violet-op55] py-1 px-3 rounded text-[--secondary-text-slate] font-semibold">
          Favorites
        </div>

        <button className="bg-[--primary-violet-op55] hover:bg-[--primary-violet-op77] h-full flex items-center py-1 px-3 rounded text-[--secondary-text-slate] font-semibold">
          A-Z
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="h-full max-h-full pb-4 overflow-y-scroll _main">
        <div className="mb-5 _pinned">
          <p className="text-sm text-[--primary-text-dim] mb-3 font-semibold">
            PINNED
          </p>
          <div className="flex flex-col gap-3 cursor-pointer _contact-item-container">
            <ContactItem
              imgLink="https://w0.peakpx.com/wallpaper/368/441/HD-wallpaper-cute-anime-girl-anime-cat-girl-anime-girl-cartoon-cat-girl-cute-anime-thumbnail.jpg"
              name="Person Name"
              contact="contact-mail@gmail.com"
            />

            <ContactItem
              imgLink=""
              name="Person Name"
              contact="contact-mail@gmail.com"
            />

            <ContactItem
              imgLink=""
              name="Person Name"
              contact="contact-mail@gmail.com"
            />
          </div>
        </div>

        <div className="_contacts">
          <p className="text-sm text-[--primary-text-dim] mb-3 font-semibold">
            A
          </p>
          <div className="flex flex-col gap-3 cursor-pointer _contact-item-container">
            <ContactItem
              imgLink="https://w0.peakpx.com/wallpaper/368/441/HD-wallpaper-cute-anime-girl-anime-cat-girl-anime-girl-cartoon-cat-girl-cute-anime-thumbnail.jpg"
              name="Person Name"
              contact="contact-mail@gmail.com"
            />

            <ContactItem
              imgLink=""
              name="Person Name"
              contact="contact-mail@gmail.com"
            />

            <ContactItem
              imgLink=""
              name="Person Name"
              contact="contact-mail@gmail.com"
            />

            <ContactItem
              imgLink=""
              name="Person Name"
              contact="contact-mail@gmail.com"
            />

            <ContactItem
              imgLink=""
              name="Person Name"
              contact="contact-mail@gmail.com"
            />

            <ContactItem
              imgLink=""
              name="Person Name"
              contact="contact-mail@gmail.com"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
