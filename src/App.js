import './App.css';
import runimg from './runimg.png';
import helpimg from './help.png';
import encimg from './encimg.png';
import { render } from '@testing-library/react';
import React, { Component } from 'react';

export default class App extends React.Component {
  componentDidMount() {
    this.autoscroll = setTimeout(this.scrollNext, 2000);
    document.getElementById('introduce').addEventListener('scroll', () => {
      console.log("scroll");
      if (this.autoscroll) clearTimeout(this.autoscroll);
      this.autoscroll = setTimeout(this.scrollNext, 6500);
    })
  }

  scrollNext() {
    let a = document.getElementById('introduce');
    console.log(a.scrollTop);
    if (a.scrollTop == a.scrollHeight - window.innerHeight)
      a.scrollTo({top: 0, behavior: 'smooth'});
    else
      a.scrollTo({top: a.scrollTop+parseInt(a.scrollHeight*30/100), behavior: 'smooth'});
  }

  render() {
    return (

      <div className="App">
      
        <div className="introduce" id="introduce">
          
          <div className="scrollarea">
            <div className="title">번역 및 추가 기능 프로그램</div>
            <div className="my_name">표인수</div>
          </div>

          <div className="scrollarea">
            <div className="title">사용 방법</div>
            <div className="desc">컨트롤 + 탭 키를 동시에 누릅니다</div>
            <img src={runimg}></img>
          </div>

          <div className="scrollarea">
            <div className="title">명령어 입력 방법</div>
            <div className="desc">도움말을 입력하고 엔터를 누르면 사용 가능한 명령어들이 표시됩니다.</div>
            <img src={helpimg}></img>
          </div>

          <div className="scrollarea">
            <div className="title">예시 명령어</div>
            <div className="desc">백과사전 덕영고등학교</div>
            <img src={encimg}></img>
            <div className="desc"><span className="H">검색 결과 클릭시</span> 자세한 내용을 보여주는 페이지로 이동합니다.</div>
          </div>

        </div>
      </div>

    );
  }
}
