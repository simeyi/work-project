import { SingleSelectInput } from "../components/form/singleSelectInput";
import { TextInput } from "../components/form/textInput";
import { FileUpload } from "../components/form/fileUpload";

const people = [
  "Durward Reynolds",
  "Kenton Towne",
  "Therese Wunsch",
  "Benedict Kessler",
  "Katelyn Rohan",
];

export const Home = () => {
  return (
    <div>
      <>Home</>

      <TextInput
        label="Name of the Request"
        placeholder="Enter the name"
        error={false}
      />

      <FileUpload label="Attachment" fileType="XLSX, XLS" fileMax="20MB" />
      <div className="m-2">
        <TextInput
          label="Name of the Request"
          placeholder="Enter the name"
          error={true}
        />
      </div>
      <div className="m-2">
        <SingleSelectInput
          inputLabel="Select Person"
          items={people}
          placeholderText="Select a Person..."
        />
      </div>
    </div>
  );
};
