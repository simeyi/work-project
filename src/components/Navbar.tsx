import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="border-2 border-black m-2 grid grid-cols-2">
      <Link to="/">Home</Link>
      <div className="grid grid-cols-4 justify-items-center">
        <div>Notifications</div>
        <Link to="/orders">Orders</Link>
        <div>Other</div>
        <div>Help</div>
      </div>
    </div>
  );
};
