import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
/* import metadata from "../../assets/metadata.json"; */
import { Element } from "./Element";
type FormData = {
  firstName: string;
  age: number;
  lastName: string;
};

type Field = {
  field_type: string;
  field_label: string;
  field_placeholder: string;
  register: any;
  name: string;
  errorMessage: string | undefined;
  validation: {};
};

type TFormMetaData = {
  NAME: string;
  EXTERNAL_NAME: string;
  ENTITY_ID: string;
  SUBSCRIBABLE: string;
  CREATABLE: string;
  UPDATABLE: string;
  DELETABLE: string;
  PAGEABLE: string;
  ADDRESSABLE: string;
  ATTRIBUTE_STRUCT: string;
  TYPE: string;
  FREETEXT_SEARCH: string;
  FILTER_REQUIRED: string;
  SET_NAMES: string[];
  PROPERTIES: TProperties[];
};

type TProperties = {
  NAME: string;
  EXTERNAL_NAME: string;
  ENTITY_ID: string;
  LENGTH: number;
  CORE_TYPE: string;
  IS_OPTIONAL: string;
  IS_READ_ONLY: string;
  CREATABLE: string;
  FILTERABLE: string;
  SORTABLE: string;
  INTERNAL_TYPE: string;
  INTERNAL_LENGTH: number;
  LABEL: string;
};

export const Form = () => {
  const [elements, setElements] = useState<any>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();

  const onSubmit = (data: FormData) => {
    //TODO: get proper form return structure
    console.log(data);
  };

  const fields = elements?.PROPERTIES.map((field: TProperties) => {
    if (field.CREATABLE === "-") {
      return;
    }
    //console.log("🚀 ~ file: Form.tsx:88 ~ fields ~ field:", field);

    //TODO: add validation rules from metadata
    // fill items from look up
    const validation = {
      /*  required: false,
      maxLength: {
        value: Number.parseInt(field._attributes?.MaxLength),
        message: "MaxLength", // JS only: <p>error message</p> TS only support string
      },
      valueAsNumber: field.CORE_TYPE === "Edm.Int32" ? true : false, */
    };
    return {
      field_label: field.LABEL,
      field_placeholder: "field._attributes.Name",
      field_type: field.CORE_TYPE,
      name: field.NAME,
      register: register,
      validation: { ...validation },
      errorMessage: errors[field.NAME]?.message,
    };
  });

  useEffect(() => {
    setElements(metadata);
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
