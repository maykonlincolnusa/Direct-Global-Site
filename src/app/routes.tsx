import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Solutions } from "./pages/Solutions";
import { DirectGlobal } from "./pages/DirectGlobal";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "sobre", Component: About },
      { path: "solucoes", Component: Solutions },
      { path: "direct-global", Component: DirectGlobal },
      { path: "contato", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
