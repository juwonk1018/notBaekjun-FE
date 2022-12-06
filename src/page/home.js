import React, {Component} from "react";
import MainBar from '../component/mainBar.js';
import Footer  from '../component/footer.js';
import ProjectList  from '../component/projectList.js';
import MyTestCase from "../component/myTestCase";
import './home.css'

// 간소화된 프로젝트 리스트, 프로젝트 생성 버튼


class Home extends Component {


  render() {
    return (
      <div>
        
        <MainBar val = {0} className = "mainBar"/>
        <div className='homeWrapper'>
          <ProjectList show = {false}/>
          <MyTestCase/>
        </div>
        <Footer/>
      </div>
    );
  }

}
  

export default Home;