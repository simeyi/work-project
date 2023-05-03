export const TextInput = (props:any) => {
  const { label, placeholder, error } = props;
  return (
    <>
      {error === "false" && ( 
      <>
        <div className="sm:col-span-4">
          <label className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
          <div className="mt-2">
            <input type="text" placeholder={placeholder} className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </>
      )}
      {error === "true" && ( 
      <>
        <div className="sm:col-span-4">
          <label className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
          <div className="mt-2">
            <input type="text" placeholder={placeholder} className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring ring-inset ring-red-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </>
      )}
    </>
  );
};
