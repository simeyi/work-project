import { TextInput } from "../components/form/textInput";
import { FileUpload } from "../components/form/fileUpload";
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
    </div>
  );
};
