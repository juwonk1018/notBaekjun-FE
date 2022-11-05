import React, {useState} from "react";
import MainBar from '../component/mainBar.js';
import MySubmission from '../component/mySubmission.js';

// 프로젝트 목록에서 프로젝트 선택
// → 해당 Project의 설명 및 TC 목록
//   → 프로그램 파일 선택 및 제출 폼
//   → 제출 주의사항 안내
//      → 제출 후 MYPAGE로 redirect

function Submission() {

    return (
        
    <div>
        <MainBar val = {2}/>
        <MySubmission/>
    </div>
      
    );
  }

  export default Submission;