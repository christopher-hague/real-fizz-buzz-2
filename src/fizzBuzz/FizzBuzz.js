import React from 'react';
import {
  getNumbers,
  isBuzzy,
  isFizzBuzz,
  isFizzy,
  isLucky
} from './helpers'

export default class FizzBuzz extends React.Component {
  state = {
    endNum: 20,
    startNum: 1,
  }

  handleStartChange = (e) => {
    const val = e.target.value;

    if (val === "") {
      this.setState({
        startNum: 0
      })
    } else {
      this.setState({
        startNum: parseInt(val)
      })
    };
  }

  handleEndChange = (e) => {
    const val = e.target.value;

    if (val === "") {
      this.setState({
        endNum: 0
      })
    } else {
      this.setState({
        endNum: parseInt(val)
      })
    };
  }

  render() {
    const getFizzBuzz = () => {
      const { endNum, startNum } = this.state;
      const nums = getNumbers(startNum, endNum);

      if (startNum > endNum) {
        return 'End number must be greater than or equal to start number!'
      } else {
        return nums.map((n) => {
          if (isLucky(n)) {
            return 'lucky'
          } else if (isFizzBuzz(n)) {
            return 'fizzbuzz';
          } else if (isFizzy(n)) {
            return 'fizz';
          } else if (isBuzzy(n)) {
            return 'buzz';
          } else {
            return `${n}`;
          }
        }).join(' ');
      };
    }

    return (
      <div>
        <label htmlFor="startNum">Start Number: </label>
        <input type="number" onChange={this.handleStartChange} placeholder={this.state.startNum} /><br/>
        <label htmlFor="endNum" value={this.state.endNum}>End Number: </label>
        <input type="number" onChange={this.handleEndChange} placeholder={this.state.endNum} /><br/>
        <div>
          {getFizzBuzz()}
        </div>
      </div>
    )
  }
}