// importing libraries:
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// importing contexts:
import { UserContextProvider } from "./contexts/userContext";

// importing components:
import Root from "./components/Root";
import Unauthorized from "./components/Unauthorized";

// importing pages:
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Mail from "./pages/Mail";
import Error from "./pages/Error";

// main:
function App() {
  // create router:
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        {/* Lading Page "/" */}
        <Route index element={<LandingPage />} />

        {/* Dashboard on "/dashboard" */}
        <Route
          path="dashboard"
          element={
            <Unauthorized>
              <Dashboard />
            </Unauthorized>
          }
        />

        {/* Mail on "/mail" */}
        <Route
          path="mail"
          element={
            <Unauthorized>
              <Mail />
            </Unauthorized>
          }
        />

        {/* Error Routes includes "/*" */}
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
