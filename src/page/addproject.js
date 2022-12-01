import React, {useState} from "react";
import MainBar from '../component/mainBar.js';
import "./addproject.css"

function AddProject() {
    
    return (
      <div>
        <MainBar val = {1}/>
        프로젝트 이름
        프로젝트 설명
      </div>   
    );
  }

  export default AddProject;