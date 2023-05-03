import { SingleSelectInput } from "../components/form/singleSelectInput";
import { TextInput } from "../components/form/textInput";

export const Home = () => {
  return (
    <div>
      <>Home</>

      <div className="m-2">
        <TextInput
          label="Name of the Request"
          placeholder="Enter the name"
          error={true}
        />
      </div>
      <div className="m-2">
        <SingleSelectInput />
      </div>
    </div>
  );
};
