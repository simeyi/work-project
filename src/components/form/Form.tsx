import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const Form = () => {
  const [elements, setElements] = useState<any>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const fields = elements?.map((field: any, i: number) => {
    const validation = {
      required: false,
      maxLength: {
        value: Number.parseInt(field._attributes?.MaxLength),
        message: "MaxLength", // JS only: <p>error message</p> TS only support string
      },
      valueAsNumber: field._attributes.Type === "Edm.Int32" ? true : false,
    };
    return {
      field_label: field._attributes["sap:label"],
      field_placeholder: field._attributes.Name,
      field_type: field._attributes.Type,
      name: field._attributes.Name,
      register: register,
      validation: { ...validation },
      errorMessage: errors[field._attributes.Name]?.message,
    };
  });

  useEffect(() => {
    //setElements(formJSON);
  }, []);

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-3"
        >
          {fields
            ? fields.map((input: Field, i: number) => (
                <div key={i}>
                  <Element {...input} />
                  <p></p>
                </div>
              ))
            : null}
          <button className="w-fit border-black border-2 rounded-md p-2 bg-teal-200 block hover:bg-teal-400">
            Submit Data
          </button>
        </form>
      </div>
    </>
  );
};
