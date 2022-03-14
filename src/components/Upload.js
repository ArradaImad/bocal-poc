import { useState } from "react";
import { upload } from "../services/upload";

function Upload() {
    const [selectedFiles, setSelectedFiles] = useState(null);
    const [listOfFiles, setListOfFiles] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();

        let response = await upload.uploadFile(selectedFiles);
        if (!!response) {
            console.log(response);
            window.alert(response.message);
        }

    }

    const handleFilesList = async () => {
        let response = await upload.listFiles();
        if (!!response) {
            setListOfFiles(response);
        }
    }

    return (
        <div className="w-full">
            <form action="" method="POST" encType="multipart/form-data">
                <div className="flex flex-col space-y-2 p-4 border border-gray-300 rounded-lg mb-8">
                    <label className="font-semibold">Upload file to server</label>
                    <input
                        //value={selectedFiles}
                        onChange={e => { console.log(e.target.files); setSelectedFiles(e.target.files) }}
                        type="file"
                        name="files"
                        multiple="multiple"
                        className=""
                    />
                    <button type="submit"
                        onClick={handleSubmit}
                        className="bg-green-700 hover:bg-green-900 text-white font-semibold tracking-wider rounded px-4 py-2 text-lg"
                    >Save</button>
                </div>
                <div className="flex flex-col space-y-2 p-4 border border-gray-300 rounded-lg mb-8">
                    <label className="font-semibold">List files from server</label>
                    {listOfFiles &&
                        <ul className="pl-12 list-disc">
                            {listOfFiles.map((file, index) => {
                                return (
                                    <li key={index} className="flex justify-between">
                                        <img className="w-16 h-16 img-fluid" src={`http://localhost:3003/files/${file.name}`} alt=""/>
                                        <div className="flex flex-col">
                                            <p>{file.name}</p>
                                            <p>{file.url}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    }
                    <button type="button"
                        onClick={handleFilesList}
                        className="bg-green-700 hover:bg-green-900 text-white font-semibold tracking-wider rounded px-4 py-2 text-lg"
                    >List files</button>
                </div>
            </form>
        </div>
    );
}

export default Upload;