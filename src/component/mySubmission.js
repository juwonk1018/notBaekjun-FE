import React, {useState} from "react";
import { Button } from "@material-ui/core";
import "./mySubmission.css"


function MySubmission() {
    
    return (
      <div>
        <div className = "wrap">
          <div className = "inputDiv">
            <textarea className = "input" placeholder = 'Your Code'>
            </textarea>
            <div className = "inputWrap">
              <form>
                
                
              </form>
            </div>
            
          </div>
          <div className = "option">
            <div id = "uploadedFiles">
                <div className = 'fileDiv'>
                  <input type = "file" id = "fileInput" name = "filename" multiple = "multiple">
                  
                  </input>
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
            <div className = "output"></div>
        </div>
       </div>  
    );
  }

  export default MySubmission;