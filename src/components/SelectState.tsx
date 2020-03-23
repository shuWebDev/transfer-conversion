///<reference path='../typings/typings.d.ts'/>
import * as React from 'react';
//import fetchJsonp  from 'fetch-jsonp';

class SelectState extends React.Component<StateComponent.SProps, StateComponent.SState> {
  constructor(props:StateComponent.SProps) {
    super(props);

    this.state = {
      stateNames: []
    };
  }

  componentDidMount = () => {
    // NOTE: change to TLTC server URL for live data b/c of CORS issue on localhost
    //let dataURL = "https://tltc.shu.edu/projects/equiv/index.php?STS=1";
    let dataURL = "/states.json";

    fetch(dataURL)
    .then(response => { return response.json(); })
    .then(data => {
      let s: string[] = data.states;
      this.setState({
        stateNames: s
      });
    });
  }

  createStateOptions = (stateNames: string[]) => {
    let output: JSX.Element[] = [];

    for(let i=0; i<stateNames.length; i++) {
      output.push(<option key={`key${i}`} value={stateNames[i]}>{stateNames[i]}</option>);
    }

    return output;
  }

  
  render () {
    if(this.state.stateNames.length) {
      return (
        <>
          <label>Select the state your current school is located in</label>
          <br />
          <select name="state-select" id="state-select">
            {this.createStateOptions(this.state.stateNames)}
          </select>
          <button onClick={() => {this.props.saveStateCode()}}>Submit</button>
        </>
      );
    } else {
      return <p>Loading...</p>;
    }
  } 
}

export default SelectState;