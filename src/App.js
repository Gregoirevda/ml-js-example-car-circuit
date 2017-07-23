import React, { Component } from 'react';
import {line, circle as coordinateIsInCircuit} from './circuits';
import {FILL_TO_MAP, HEIGHT, WIDTH} from './constants/index';
import DimensionArray from './DimensionArray';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      world: new Array(HEIGHT)
        .fill(FILL_TO_MAP)
        .map((_, y) => {
          return new Array(WIDTH)
            .fill(FILL_TO_MAP)
            .map((_, x) =>
              coordinateIsInCircuit(x, y) ? 1 : 0
            )
        })
    }
  }

  componentDidMount() {
    console.log(this.state.world);
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, this.state.world.length, this.state.world[0].length);

    ctx.fillStyle = 'red';

    this.state.world
        .map((row, y) =>
          row.map((coordinateIsInCircuit, x) => {
              if(coordinateIsInCircuit) {
                ctx.fillRect(x, y, 1, 1);
              }
          })
        );
  }

  render() {
    return (
      <div className="App">
          <canvas id="canvas"></canvas>
      </div>
    );
  }
}

export default App;
