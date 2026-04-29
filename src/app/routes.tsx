import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Solutions } from "./pages/Solutions";
import { DirectGlobal } from "./pages/DirectGlobal";
import { Contact } from "./pages/Contact";
import { Blog } from "./pages/Blog";
import { NotFound } from "./pages/NotFound";
import { AiAuditPocLanding, CustomAgentSystemLanding } from "./pages/AgentOfferLanding";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "sobre", Component: About },
      { path: "solucoes", Component: Solutions },
      { path: "blog", Component: Blog },
      { path: "direct-global", Component: DirectGlobal },
      { path: "auditoria-agentes-ia", Component: AiAuditPocLanding },
      { path: "sistema-agentes-inteligentes", Component: CustomAgentSystemLanding },
      { path: "contato", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
