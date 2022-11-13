import React, {useState} from "react";
import MainBar from '../component/mainBar.js';
import Footer  from '../component/footer.js';
import './home.css'
import Image from './temp.jpg'

// 간소화된 프로젝트 리스트, 프로젝트 생성 버튼

function Home() {

    return (
      <div>
        <MainBar val = {0}/>
        <div class = "picDiv">
          <img src={Image} alt="temp" width="1500" height="800"/>
        </div>
        <div class = "listDiv_wrap">
          <div class = "listDiv_title">
            <div class = "tempDiv"></div>
            <h2 class = "titleDiv">Project List</h2>
            <div class = "buttonDiv">
              <div class = "button_plus"></div>
            </div>
            
          </div>
          <div class = "listDiv_list">
              <h3>Project 1</h3>
          </div>
          <div class = "listDiv_list">
              <h3>Project 2</h3>
          </div>
          <div class = "listDiv_list">
              <h3>Project 3</h3>
          </div>
          <div class = "listDiv_list">
              <h3>Project 4</h3>
          </div>
        </div>
        <Footer val = {0}/>
      </div>
    );
  }

  export default Home;