import React, { Component } from 'react';
import { GameBox } from '../../Components';

import './styles.css';

class MainScreen extends Component<{}, {}> {
  private box: React.RefObject<any> | any;

  constructor(props:any){
    super(props)
    this.box = React.createRef();

    this.state = {
      isLoaded: false,
    }
  }

  componentDidMount() {
    this.setState({ isLoaded: true })
  }


  render() {

    return (
      <div className="App">
        <div className="game-wrapper">

          <GameBox />

        </div>
      </div>
    );
  }
}

export default MainScreen;
