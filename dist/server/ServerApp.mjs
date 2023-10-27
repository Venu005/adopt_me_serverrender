import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { createContext, lazy, useState, Suspense } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as jsxRuntime from "react/jsx-runtime";
const AdoptedPetContext = createContext({});
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const Details = lazy(() => import("./assets/Details.f9506b90.mjs"));
const SearchParams = lazy(() => import("./assets/SearchParams.0c84c5fa.mjs"));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity
    }
  }
});
const App = () => {
  const adoptedPet = useState(null);
  return /* @__PURE__ */ jsx(AdoptedPetContext.Provider, {
    value: adoptedPet,
    children: /* @__PURE__ */ jsx(QueryClientProvider, {
      client: queryClient,
      children: /* @__PURE__ */ jsxs(Suspense, {
        fallback: /* @__PURE__ */ jsx("div", {
          className: "loading-pane",
          children: /* @__PURE__ */ jsx("h2", {
            className: "loader",
            children: "\u{1F436}"
          })
        }),
        children: [/* @__PURE__ */ jsx("header", {
          children: /* @__PURE__ */ jsx(Link, {
            to: "/",
            children: /* @__PURE__ */ jsx("h1", {
              children: "Adopt Me!"
            })
          })
        }), /* @__PURE__ */ jsxs(Routes, {
          children: [/* @__PURE__ */ jsx(Route, {
            path: "/details/:id",
            element: /* @__PURE__ */ jsx(Details, {})
          }), /* @__PURE__ */ jsx(Route, {
            path: "/",
            element: /* @__PURE__ */ jsx(SearchParams, {})
          })]
        })]
      })
    })
  });
};
function render(url, opts) {
  const stream = renderToPipeableStream(/* @__PURE__ */ jsx(StaticRouter, {
    location: url,
    children: /* @__PURE__ */ jsx(App, {})
  }), opts);
  return stream;
}
export {
  AdoptedPetContext as A,
  jsx as a,
  render as default,
  jsxs as j
};
