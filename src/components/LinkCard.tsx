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
        <div className="aspect-square border-2 w-48 md:w-48 p-2">
          <div className="border-2 w-4/5 px-2 py-1">{label} </div>
          <div className="p-1 overflow-hidden text-ellipsis line-clamp-5">
            {description}
          </div>
        </div>
      </Link>
    </>
  );
};
