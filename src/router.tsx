import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/index.page"
import Customers from "./pages/customers/index.page"
import Contracts from "./pages/contracts/index.page"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/contracts" element={<Contracts />} />
      </Routes>
    </BrowserRouter>
  )
}
