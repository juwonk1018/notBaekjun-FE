import React, {useState} from "react";
import { saveAs } from "file-saver";  
import { FileUploader } from "react-drag-drop-files";
import "./mySubmission.css"



function MySubmission() {
  const [message, setMessage] = useState('');

  const [updated, setUpdated] = useState(message);

  const exportFile = () => {
    let outputText =
      "Here's your intput: " + message;
  
    var blob = new Blob([outputText], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "outputTextFile.txt");
  }

  
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    if(message === 'aaa'){
      setUpdated('aakd');
    }
    else{
      setUpdated("Hello World! I am " + message);
    }
    
  };
    return (
      <div>
        <div className = "wrap">
        <div className = 'inputDiv'>
          <textarea
            type="text"
            className = 'input'
            name="message"
            onChange={handleChange}
            value={message}
          />
        <button onClick={handleClick}>Update</button>
      </div>
      <div className = "option">
        <div id = "uploadedFiles">
          <div className = 'fileDiv'>
            <input type = "file" id = "fileInput" name = "filename" multiple = "multiple" />
              <label className = "fileInputButton" for = "fileInput">
                  Upload
              </label>                  
            </div>                
          </div>
        </div>
      </div>
      <div className = "outputDiv">
        <div className = "outputTitle">
          <h4>Output</h4>
        </div>
        <div className = "output">
          <h2>{updated}</h2>
          <button onClick={() => exportFile()}>exportFile</button>
        </div>
      </div>
    </div>  
  );
}

  export default MySubmission;