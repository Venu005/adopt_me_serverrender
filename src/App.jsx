import { useState, lazy, Suspense } from "react";

import { Link, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AdoptedPetContext from "./AdoptedPetContext";
const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const App = () => {
  const adoptedPet = useState(null);
  return (
    /*don't forget to return --- I keep forgetting */

    <AdoptedPetContext.Provider value={adoptedPet}>
      <QueryClientProvider client={queryClient}>
        <Suspense
          fallback={
            <div className="loading-pane">
              <h2 className="loader">🐶</h2>
            </div>
          }
        >
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </Suspense>
      </QueryClientProvider>
    </AdoptedPetContext.Provider>
  );
};
export default App;
