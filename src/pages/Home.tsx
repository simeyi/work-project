import { TextInput } from "../components/form/textInput";

export const Home = () => {
  return (
    <div>
      <>Home</>

      <TextInput
        label="Name of the Request"
        placeholder="Enter the name"
        error={true}
      />
    </div>
  );
};
