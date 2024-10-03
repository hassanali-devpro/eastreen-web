import data from "../../constants/data";

const DownloadFiles = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md px-[10%]">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Download Job Description Files</h2>
      <ul className="space-y-4">
        {data.files.map((file, index) => (
          <li key={index} className="p-4 bg-white rounded-lg shadow-md flex justify-between">
            <div className="">
            <a href={file.path} download className="text-blue-600 font-semibold hover:underline">
              {file.name}
            </a>
            <p className="text-gray-600 mt-2">{file.description}</p>
            </div>
            <a
              href={file.path}
              download
              className=" mt-2 bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 transition flex items-center rounded-full"
            >
              Download File
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DownloadFiles;
