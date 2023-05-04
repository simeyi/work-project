import { useState } from "react";

export const FileUpload = ({ label, fileType, fileMax }: any) => {
  const [selectedFile, setSelectedFile] = useState<any[]>([]);

  const onSelectFile = (event: any) => {
    let aFiles: any[] = [];
    if (selectedFile.length !== 0) {
      selectedFile.map((selectedFileItem) => {
        aFiles.push(selectedFileItem);
      });
    }
    for (var i in event.target.files) {
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
      <label className="block text-gray-900">{label}</label>
      <div className="relative flex flex-col text-gray-400 border border-gray-200 border-dashed rounded cursor-pointer">
        <input
          accept="*"
          type="file"
          onChange={onSelectFile}
          multiple
          className="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
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

      <table className="min-w-full divide-y divide-gray-200">
        <tbody className="divide-y divide-gray-200">
          {files.map((file: any) => (
            <tr key={file.name}>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {file.name}
              </td>
              <td>
                <svg
                  onClick={() => onDeleteFile(file)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 cursor-pointer"
                >
                  <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={printFileDetails}
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Upload
      </button>
    </>
  );
};
