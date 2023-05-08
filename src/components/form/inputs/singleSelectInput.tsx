import { Listbox } from "@headlessui/react";
import { useState } from "react";

type TSelectInput = {
  field_label: string;
  items: string[];
  field_placeholder: string;
  register: any;
  name: string;
  errorMessage: any | undefined;
  validation: unknown;
};

export const SingleSelectInput = ({
  field_label,
  items,
  field_placeholder,
  register,
  name,
  errorMessage,
  validation,
}: TSelectInput) => {
  //TODO: find what should be default value
  // should it be first item or a place holder with no value?
  const [selectedItem, setSelectedItem] = useState("");
  console.log(selectedItem);

  return (
    <>
      <label className="block text-gray-900">{field_label}</label>
      <Listbox value={selectedItem} onChange={setSelectedItem}>
        <Listbox.Button className="w-full text-left border-2 rounded-md p-2 mt-2">
          {selectedItem ? (
            <p className="text-black">{selectedItem}</p>
          ) : (
            <p className="text-gray-500">{field_placeholder}</p>
          )}
        </Listbox.Button>
        <Listbox.Options className="border-2 border-t-0 shadow-md rounded-md">
          {items.map((item, index) => (
            <Listbox.Option
              key={index}
              value={item}
              {...register(name, validation)}
              className="p-2  cursor-pointer ui-active:bg-blue-500 ui-active:text-white  ui-not-active:text-black "
            >
              {item}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </>
  );
};
