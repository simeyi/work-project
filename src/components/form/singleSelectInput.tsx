import { Listbox } from "@headlessui/react";
import { useState } from "react";

type TSelectInput = {
  inputLabel: string;
  items: string[];
};

export const SingleSelectInput = ({ inputLabel, items }: TSelectInput) => {
  //TODO: find what should be default value
  // should it be first item or a place holder with no value?
  const [selectedItem, setSelectedItem] = useState(" ");

  return (
    <>
      <label>{inputLabel}</label>
      <Listbox value={selectedItem} onChange={setSelectedItem}>
        <Listbox.Button className="w-full text-left border-2 rounded-md p-2">
          {selectedItem}
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
