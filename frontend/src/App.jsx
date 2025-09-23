import { Toaster, toast } from "sonner";
import { BrowserRouter, Routes, Route } from "react-router";

import { LayoutCustomer } from "./components/Layouts";
import Home from "./pages/customer/Home";
import NotFound from "./pages/customer/NotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutCustomer />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
