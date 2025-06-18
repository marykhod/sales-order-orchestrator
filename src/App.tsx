
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Analytics from "./pages/Analytics";
import Requests from "./pages/Requests";
import Orders from "./pages/Orders";
import Warehouse from "./pages/Warehouse";
import Suppliers from "./pages/Suppliers";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import RequestDetail from "./pages/RequestDetail";
import OrderDetail from "./pages/OrderDetail";
import SupplierProfile from "./pages/SupplierProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Analytics />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/requests/:id" element={<RequestDetail />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:id" element={<OrderDetail />} />
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/suppliers/:id" element={<SupplierProfile />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
