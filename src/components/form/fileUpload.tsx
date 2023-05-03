export const FileUpload = ({ label, fileType, fileMax }: any) => {
  return (
    <>
      <label className="block text-gray-900">{label}</label>
      <label className="text-center mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
        <input id="file-upload" name="file-upload" type="file" multiple />
        <span className="pl-3 text-xs leading-7 text-gray-600">
          {fileType} up to {fileMax}
        </span>
      </label>
    </>
  );
};
