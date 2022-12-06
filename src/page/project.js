import React, {useState} from "react";
import MainBar from '../component/mainBar.js';
import ProjectList from '../component/projectList.js';
import Footer  from '../component/footer.js';

import './project.css'
// 프로젝트 목록에서 프로젝트 선택
//   → TC 목록 (TC 평가 기능)
//   → TC 추가
//      → TC 추가 페이지로 이동
//   → 사용자 프로그램 검증

function Project() {

    return (
        <div className = "projectWrapper">
            <MainBar val = {1}/>
            <ProjectList show = {true} width = {1500}/>
            <Footer/>
        </div>

    );
  }

  export default Project;