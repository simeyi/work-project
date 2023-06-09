import { Link } from "react-router-dom";

export const LinkCard = ({
  label,
  link,
  description,
}: {
  label: string;
  link: string;
  description: string;
}) => {
  return (
    <>
      <Link to={link}>
        <div className="aspect-square border-2 w-48 p-2">
          <div className="border-2 w-full px-2 py-1 font-bold">{label} </div>
          <div className="p-1 overflow-hidden text-ellipsis line-clamp-5">
            {description}
          </div>
        </div>
      </Link>
    </>
  );
};
