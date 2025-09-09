import { Routes, Route } from "react-router-dom";
import Home from "./App";            // your current homepage stays as-is
import BookDemo from "./pages/BookDemo";
import ServiceDetails from "./pages/ServiceDetails";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book" element={<BookDemo />} />
      <Route path="/service/:id" element={<ServiceDetails />} /> {/* ← add this */}
    </Routes>
  );
}
