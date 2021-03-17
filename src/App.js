import './App.css';
import runimg from './runimg.png';
import helpimg from './help.png';
import encimg from './encimg.png';
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
            <div className="title">Translater</div>
            <div className="my_name">Pyo Insu</div>
          </div>

          <div className="scrollarea">
            <div className="title">Usage</div>
            <div className="desc">Press Ctrl + Tab at the same time</div>
            <img src={runimg}></img>
          </div>

          <div className="scrollarea">
            <div className="title">To enter a command</div>
            <div className="desc">Enter Help and press Enter to display the available commands.</div>
            <img src={helpimg}></img>
          </div>

          <div className="scrollarea">
            <div className="title">Example commands</div>
            <div className="desc">Encyclopedia Deogyeong High School</div>
            <img src={encimg}></img>
            <div className="desc"><span className="H">Click</span> on the search results to go to the page that shows more details.</div>
          </div>

        </div>
      </div>

    );
  }
}
