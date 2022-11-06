import React, {useState} from "react";
import MainBar from '../component/mainBar.js';

// 간소화된 프로젝트 리스트, 프로젝트 생성 버튼

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

const ITEM_HEIGHT = 48;

function Home() {

    return (
      <div>
        <MainBar val = {0}/>
      </div>
    );
  }

  export default Home;