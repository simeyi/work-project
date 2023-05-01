export const Header = () => {
  return (
    <div className="w-full h-full inset-x-0 top-0 border-b-2">
      <div className="grid grid-cols-3">
        <div className="justify-self-start">logo</div>
        <div className="justify-self-center">Title</div>
        <div className="justify-self-end">Log in </div>
      </div>
    </div>
  );
};
