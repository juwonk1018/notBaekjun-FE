import React, {useState} from "react";

import "./mypage.css"

import MainBar from '../component/mainBar.js';
import Footer  from '../component/footer.js';
import MyTestCase from "../component/myTestCase";

// 나의 테스트케이스 제출 목록
// - 테스트케이스 목록(프로젝트 명, 테스트케이스 명, 성공/실패 여부, 시간) 



function Mypage() {

    return (
      <div className = "myPageWrapper">
        <MainBar val = {3}/>
        <div className = "mainContent">
          <MyTestCase/>
        </div>
        <Footer/>
      </div>
    );
  }

  export default Mypage;