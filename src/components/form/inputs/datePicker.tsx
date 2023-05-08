import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DateInput = ({
  field_label,
  errorMessage,
}: {
  field_label: string;
  errorMessage: string | undefined;
}) => {
  const [startDate, setStartDate] = useState();
  return (
    <>
      <div className="grid grid-cols-1">
        <label htmlFor="textInput" className="text-xl">
          {field_label}
        </label>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          className="pl-2 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          selected={startDate}
          onChange={(date: any) => setStartDate(date)}
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div>
    </>
  );
};
