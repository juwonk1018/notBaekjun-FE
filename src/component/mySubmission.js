import React, {useState} from "react";
import { saveAs } from "file-saver";  
import { Table, TableBody, TableContainer, TableCell, TableHead, TableRow, Paper} from "@material-ui/core";
import "./mySubmission.css"
import Footer from "../component/footer.js";



function MySubmission() {
  const [message, setMessage] = useState('');

  const [updated, setUpdated] = useState(message);

  const exportFile = () => {
    let outputText =
      "Here's your intput: " + message;
  
    var blob = new Blob([outputText], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "outputTextFile.txt");
  }

  const [files, setFiles] = useState([]);

  const handleFileChange = (event) =>{
    setFiles(Array.from(event.target.files || []));
  };

  
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
            <button id = "updateButton" onClick={handleClick} />
            <label className = "fileInputButton" for = "updateButton">Update</label>
          </div>
          <div className = "fileWrap">
            <div className = "uploadedFiles">
              <div className = 'fileDiv'>
                <TableBody>
                  {files.map((file) => (
                    <p id = "fileName"><b>Uploaded File:</b> {file.name}</p>
                  ))}
                </TableBody>
                              
              </div>
              
                          
            </div>
            <div className ="fileButtonDiv">
                <input type = "file" id = "fileInput" name = "filename" onChange = {handleFileChange} />
                <label className = "fileInputButton" for = "fileInput">Upload</label>
            </div>
          </div>
          
        </div>
        <div className = "outputWrap">
          <div className = "outputDiv">
            <div className = "outputTitle">
              <h4>Output</h4>
            </div>
            <div className = "output">
              <p>{updated}</p>
              <button id = "outputButton" onClick={() => exportFile()} />
            </div>
            
          </div>
          <label className = "outputButtonClick" for = "outputButton">Export File!</label>
        </div>
        
        <Footer />
    </div>  
  );
}

  export default MySubmission;