import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/GlobalStyles.jsx";
import { GlobalContextProvider } from "./services/GlobalContext.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./services/router.jsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./services/queryClient.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalContextProvider>
        <GlobalStyles />
        <RouterProvider router={router}></RouterProvider>
      </GlobalContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
