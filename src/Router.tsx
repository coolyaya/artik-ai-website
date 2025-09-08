import { Routes, Route } from "react-router-dom";
import Home from "./App";            // your current homepage stays as-is
import BookDemo from "./pages/BookDemo";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book" element={<BookDemo />} />
    </Routes>
  );
}
