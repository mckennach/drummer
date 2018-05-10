import React, { Component } from 'react';
import DrumPads from './components/DrumPads';
import { DrumData } from './data/DrumData';


class App extends Component {

  handleKeyPress = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return;
    key.parentNode.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  removeKeyTransition = (e) => {
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  componentWillMount(){
    document.addEventListener('keydown', this.handleKeyPress.bind(this));
    document.addEventListener('transitionend', this.removeKeyTransition.bind(this));

  }


componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress.bind(this));

  }

  render() {

    return (
      <div id="app">
        <DrumPads handleKeyPress={this.handleKeyPress} drumData={DrumData} />
      </div>
    );
  }
}

export default App;
