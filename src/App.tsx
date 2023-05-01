import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Help } from "./pages/Help";
import { Home } from "./pages/Home";
import { Notifications } from "./pages/Notifications";
import { Order } from "./pages/Order";
import { Other } from "./pages/Other";
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="m-2 border-2 shadow-md">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/other" element={<Other />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
