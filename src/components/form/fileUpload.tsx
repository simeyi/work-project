import { useState } from "react";

export const FileUpload = ({ label, fileType, fileMax }: any) => {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files);
    setIsSelected(true);
  };
  const printFileDetails = () => {
    console.log(selectedFile);
  };
  const files = selectedFile ? [...selectedFile] : [];

  return (
    <>
      <label className="block text-gray-900">{label}</label>
      <label className="text-center mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-4 relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
        <input
          id="file-upload"
          name="file-upload"
          type="file"
          onChange={changeHandler}
          multiple
        />
        <span className="pl-3 text-xs leading-7 text-gray-600">
          {fileType} up to {fileMax}
        </span>
      </label>

      {files.map((file: any) => (
        <div>{file.name}</div>
      ))}

      <button
        onClick={printFileDetails}
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Upload
      </button>
    </>
  );
};
