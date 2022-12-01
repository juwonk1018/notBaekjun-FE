import React, {Component} from "react";
import MainBar from '../component/mainBar.js';
import Footer  from '../component/footer.js';
import './home.css'

// 간소화된 프로젝트 리스트, 프로젝트 생성 버튼


class Home extends Component {


  render() {
    return (
      <div className='wrapper'>
        
        <MainBar val = {0} className = "mainBar"/>
  
        <div className="mainBody">  
          <span>main Body</span>
        </div>
  
        <Footer/>
      </div>
    );
  }

}
  

export default Home;