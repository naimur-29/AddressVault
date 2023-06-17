// libraries:
import { useNavigate } from "react-router-dom";

// main:
const Error = () => {
  // hooks:
  const navigate = useNavigate();

  return (
    <section className="flex flex-col gap-3 items-center justify-center w-full h-full min-h-screen">
      <h2 className="text-3xl">Error 404 not found!</h2>
      <button
        onClick={() => navigate(-1)}
        className="border-2 p-2 border-slate-900 text-2xl rounded"
      >
        Go Back
      </button>
    </section>
  );
};

export default Error;
