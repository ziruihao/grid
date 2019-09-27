import React from 'react';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      size: 5,
      divisor: 1,
    }
  }

  componentWillMount() {
    const generateArray = [];
    for (let i = 1; i < this.state.size + 1; i = i + 1) {
      generateArray.push(i);
    }
    this.setState({
      array: generateArray,
    })
  }

  changeSize = (increase) => {
    if (increase) {
      this.setState(prevState => {
        prevState.array.push(prevState.size + 1);
        return {
          size: prevState.size + 1,
          array: prevState.array,
        }
      });
    } else {
      this.setState(prevState => {
        prevState.array.pop();
        return {
          size: prevState.size - 1,
          array: prevState.array,
        }
      });
    }
  }

  calculateMod = (n, m) => {
    return ((n*m) % (this.state.divisor));
  }

  render() {
    return (
      <div className="App">
        <div className="control">
          <div>{this.state.size}</div>
          <button onClick={() => this.changeSize(true)}>+</button>
          <button onClick={() => this.changeSize(false)}>-</button>
          <input value={this.state.divisor} onChange={(e) => this.setState({divisor: e.target.value})} type="number"></input>
        </div>
        <div className="grid">
          <div className="row">
            <div className="box"> </div>
            {this.state.array.map(n => {
              return <div className="box header" key={n}>{n}</div>
            })}
          </div>
          {this.state.array.map(n => {
            return (
              <div className="row" key={n}>
                <div className="box header">{n}</div>
                {this.state.array.map(m => {
                  return <div className="box" key={m}>{this.calculateMod(n, m)}</div>
                })}
              </div>
            )
          })}
        </div>
      </div>
    );
  }

}

export default App;
