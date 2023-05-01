export const Navbar = () => {
  return (
    <div className="border-2 border-black m-2 grid grid-cols-2">
      <div>Home</div>
      <div className="grid grid-cols-4 justify-items-center">
        <div>Notifications</div>
        <div>Orders</div>
        <div>Other</div>
        <div>Help</div>
      </div>
    </div>
  );
};
