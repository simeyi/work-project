export const RadioInput = ({
  field_label,
  radio_lists,
  horizontal,
}: {
  field_label: string;
  radio_lists: any[];
  horizontal: boolean;
}) => {
  return (
    <div>
      <label className="block text-gray-900">{field_label}</label>
      <div className={`mt-2 ${horizontal ? "flex" : ""}`}>
        {radio_lists.map((radio_list, index) => (
          <div key={index} className="flex items-center gap-x-1 mt-1">
            <input
              name={field_label}
              type="radio"
              className="h-3 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label className="block text-sm font-medium leading-6 text-gray-900 pr-4">
              {radio_list.text}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
