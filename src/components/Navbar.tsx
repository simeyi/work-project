import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="border-2 border-black m-1 grid grid-cols-1 md:grid-cols-2">
      <Link className="justify-self-center md:justify-self-start" to="/">
        Home
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center">
        <div>Notifications</div>
        <Link to="/orders">Orders</Link>
        <div>Other</div>
        <div>Help</div>
      </div>
    </div>
  );
};
