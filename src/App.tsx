///<reference path='./typings/typings.d.ts'/>
import * as React from 'react';
import SelectState from './components/SelectState';
import SelectCollege from './components/SelectCollege';
import Matrix from './components/Matrix';
//import fetchJsonp from 'fetch-jsonp';

class App extends React.Component<AppRoot.AppProps, AppRoot.AppState> {
  constructor(props: AppRoot.AppProps) {
    super(props);

    this.state = {
      stateCode: "",
      schoolCode: "",
      schoolName: "",
      //matrix: [],
      step: 0
    }
  }

  saveStateCode = (code: string) => {
    let s: HTMLSelectElement = document.querySelector("#state-select") as HTMLSelectElement;

    let value: string = s.options[s.selectedIndex].value;
    this.setState({
      stateCode: value,
      step: 1
    });
    return true;
  }

  saveCollegeCode = (code: string) => {
    let c: HTMLSelectElement = document.querySelector("#college-select") as HTMLSelectElement;

    let value: string = c.options[c.selectedIndex].value;
    let sName: string = c.options[c.selectedIndex].id;
    this.setState({
      schoolCode: value,
      schoolName: sName,
      step: 2
    });

    return true;
  }
  
  

  /* NOTE: Test component to illustrate JSONP */
  // jsonPTest = () => {
  //   fetchJsonp('https://tltc.shu.edu/projects/equiv/index.php?STS=1')
  //   .then(res => res.json())
  //   .then(json => console.log(json));
  //   return true;
  // }

  render () {
    switch(this.state.step) {
      case 0: return <SelectState saveStateCode={this.saveStateCode} />

      case 1: return <SelectCollege stateCode={this.state.stateCode} saveCollegeCode={this.saveCollegeCode} />

      case 2: return <Matrix schoolCode={this.state.schoolCode} />

      default: return <p>Loading...</p>
    }
  }
}

export default App;
