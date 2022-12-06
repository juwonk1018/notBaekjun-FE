import React, {useState} from "react";
import MainBar from '../component/mainBar.js';
import Footer  from '../component/footer.js';
import './home.css'

// 간소화된 프로젝트 리스트, 프로젝트 생성 버튼


function Home() {

    return (
      <div>
        <MainBar val = {0}/>
        <div className = "picDiv">
          사진
        </div>
        <div className = "listDiv_wrap">
          <div className = "listDiv_title">
            <div className = "tempDiv"></div>
            <h2 className = "titleDiv">Project List</h2>
            
              <div className = "buttonDiv">
              <a href = "./addproject">
                <div className = "button_plus"></div>
                </a>
              </div>
            
          </div>
          <div className = "listDiv_list">
              <h3>Project 1</h3>
          </div>
          <div className = "listDiv_list">
              <h3>Project 2</h3>
          </div>
          <div className = "listDiv_list">
              <h3>Project 3</h3>
          </div>
          <div className = "listDiv_list">
              <h3>Project 4</h3>
          </div>
        </div>
        <Footer val = {0}/>
      </div>
    );
  }

  export default Home;