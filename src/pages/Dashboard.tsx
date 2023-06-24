// components:
import Contacts from "../components/dashboard/Contacts";
import ContactDetails from "../components/dashboard/ContactDetails";

// main:
const Dashboard = () => {
  return (
    <section className="flex justify-end">
      <div className="_container p-[10px] bg-[--primary-blue-dark] w-screen min-h-screen sm:w-[calc(100vw-270px)] text-[--primary-text-slate] flex flex-col lg:flex-row lg:gap-5">
        <Contacts />

        <ContactDetails />
      </div>
    </section>
  );
};

export default Dashboard;
