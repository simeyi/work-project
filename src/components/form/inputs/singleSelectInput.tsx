import { Listbox } from "@headlessui/react";
import { useState } from "react";

type TSelectInput = {
  inputLabel: string;
  items: string[];
  placeholderText: string;
};

export const SingleSelectInput = ({
  inputLabel,
  items,
  placeholderText,
}: TSelectInput) => {
  //TODO: find what should be default value
  // should it be first item or a place holder with no value?
  const [selectedItem, setSelectedItem] = useState("");
  console.log(selectedItem);

  return (
    <>
      <label className="block text-gray-900">{inputLabel}</label>
      <Listbox value={selectedItem} onChange={setSelectedItem}>
        <Listbox.Button className="w-full text-left border-2 rounded-md p-2 mt-2">
          {selectedItem ? (
            <p className="text-black">{selectedItem}</p>
          ) : (
            <p className="text-gray-500">{placeholderText}</p>
          )}
        </Listbox.Button>
        <Listbox.Options className="border-2 border-t-0 shadow-md rounded-md">
          {items.map((item, index) => (
            <Listbox.Option
              key={index}
              value={item}
              className="p-2  cursor-pointer ui-active:bg-blue-500 ui-active:text-white  ui-not-active:text-black "
            >
              {item}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </>
  );
};
