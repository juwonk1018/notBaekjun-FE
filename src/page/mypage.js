import React, {useState} from "react";
import MainBar from '../component/mainBar.js';

// 프로젝트 목록에서 프로젝트 선택
// - 해당 프로젝트의 테스트케이스 간략하게 목록화
// - 프로그램 파일 선택 및 제출 폼
// - 제출 주의사항 안내

function Mypage() {

    return (
      <MainBar val = {3}/>
    );
  }

  export default Mypage;