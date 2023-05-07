import { FileUpload } from "../components/form/inputs/fileUpload";
import { SingleSelectInput } from "../components/form/inputs/singleSelectInput";
import { RadioInput } from "../components/form/inputs/radioInput";
import { Banner } from "../components/Banner";

const people = [
  "Durward Reynolds",
  "Kenton Towne",
  "Therese Wunsch",
  "Benedict Kessler",
  "Katelyn Rohan",
];

// const radioList = ["One", "Two", "Three"];
const radioList = [
  { code: "1", text: "One" },
  { code: "2", text: "Two" },
];

export const Home = () => {
  return (
    <div>
      <>Home</>
      <Banner />
      <FileUpload label="Attachment" fileType="XLSX, XLS" fileMax="20MB" />
      <div className="m-2">
        {/*   <TextInput
          label="Name of the Request"
          placeholder="Enter the name"
          error={true}
        /> */}
      </div>
      <div className="m-2">
        <SingleSelectInput
          inputLabel="Select Person"
          items={people}
          placeholderText="Select a Person..."
        />
      </div>
      <div className="m-2">
        <RadioInput
          field_label="Select Radio"
          radio_lists={radioList}
          horizontal={false}
        />
      </div>
    </div>
  );
};
