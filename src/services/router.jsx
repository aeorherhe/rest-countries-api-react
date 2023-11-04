import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/ui/HomeLayout";
import ErrorPage from "../components/utils/ErrorPage";
import App from "../App";
import CountryDetails from "../components/ui/CountryDetails";
import { queryClient } from "./queryClient";

import { loader as appLoader } from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: appLoader(queryClient),
      },
      {
        path: "/:country",
        element: <CountryDetails />,
      },
    ],
  },
]);

export default router;
