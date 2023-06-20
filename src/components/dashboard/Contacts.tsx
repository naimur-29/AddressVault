const Contacts = () => {
  return (
    <section className="flex-[2] lg:flex-[1] flex flex-col gap-2 overflow-y-scroll max-h-full w-full">
      {/* HEADER */}
      <div className="flex flex-col mb-3">
        <p className="text-sm text-[--primary-text-slate-dim]">{332} TOTAL</p>
        <h3 className="text-2xl">Contacts</h3>
      </div>

      <div className="flex gap-1 mb-3 _menu">
        <div className="bg-[--primary-violet-op55] py-1 px-3 rounded">
          All Contacts
        </div>

        <button className="bg-[--primary-violet-op55] hover:bg-[--primary-violet-op77] py-1 px-3 rounded">
          A-Z
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="_pinned">
        <p className="text-sm text-[--primary-text-slate-dim]">PINNED</p>
      </div>
    </section>
  );
};

export default Contacts;
