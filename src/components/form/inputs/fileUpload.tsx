import { TrashIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export const FileUpload = ({
  field_label,
  fileType,
  fileMax,
  register,
  fieldname,
  errorMessage,
  validation,
}: {
  field_label: string;
  fileType: any;
  register: any;
  fileMax: any;
  fieldname: string;
  errorMessage: any | undefined;
  validation: unknown;
}) => {
  const [selectedFile, setSelectedFile] = useState<any[]>([]);

  const onSelectFile = (event: any) => {
    const aFiles: any[] = [];
    if (selectedFile.length !== 0) {
      selectedFile.map((selectedFileItem) => {
        aFiles.push(selectedFileItem);
      });
    }
    for (const i in event.target.files) {
      const existFile = aFiles.find(
        (fileItem) => fileItem.name === event.target.files[i].name
      );
      if (!existFile && event.target.files[i].size) {
        aFiles.push(event.target.files[i]);
      }
    }
    setSelectedFile(aFiles);
  };
  const printFileDetails = () => {
    console.log(selectedFile);
    // TODO
  };

  const onDeleteFile = (file: any) => {
    let aFiles: any[] = [];
    if (selectedFile.length !== 0) {
      selectedFile.map((selectedFileItem) => {
        aFiles.push(selectedFileItem);
      });
    }
    const existFile = aFiles.find((fileItem) => fileItem.name === file.name);
    if (existFile) {
      aFiles = aFiles.filter((aFilesItem) => aFilesItem.name !== file.name);
    }
    setSelectedFile(aFiles);
  };

  const files = selectedFile;

  return (
    <>
      <label className="block text-gray-900">{field_label}</label>
      <div className="relative flex flex-col text-gray-400 border border-gray-200 border-dashed rounded cursor-pointer">
        <input
          accept="*"
          type="file"
          onChange={onSelectFile}
          multiple
          className="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
          {...register(fieldname, validation)}
        />
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <svg
            className="w-6 h-6 mr-1 text-current-50"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="m-0">Drag your files here or click in this area.</p>
          <p className="m-0 text-xs">
            {fileType} up to {fileMax}
          </p>
        </div>
      </div>

      <div>
        {files.map((file: any, index) => (
          <div key={index} className="grid grid-cols-2">
            <div className="px-4 py-2 text-sm text-gray-800 ">{file.name}</div>
            <div>
              <button
                type="button"
                className="px-4 py-2"
                onClick={() => onDeleteFile(file)}
              >
                <TrashIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      <button
        onClick={printFileDetails}
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Upload
      </button>
    </>
  );
};
