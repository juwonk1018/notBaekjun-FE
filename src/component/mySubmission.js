import React, {useState} from "react";
import { saveAs } from "file-saver";  
import { Button } from "@material-ui/core";
import "./mySubmission.css"

function exportFile() {
  let outputText =
    "나는 뽀로로가 좋아!";

  var blob = new Blob([outputText], { type: "text/plain;charset=utf-8" });
  saveAs(blob, "outputTextFile.txt");
}

function MySubmission() {
  const [message, setMessage] = useState('');

  const [updated, setUpdated] = useState(message);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    if(message === 'aaa'){
      setUpdated('aakd');
    }
    else{
      setUpdated('bob alice');
    }
    
  };
    return (
      <div>
        <div className = "wrap">
        <div className = 'inputDiv'>
          <input
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