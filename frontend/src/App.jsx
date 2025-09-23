import { Toaster, toast } from "sonner";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/customer/home";
import NotFound from "./pages/customer/NotFound";
function App() {
  return (
    <>
    <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
