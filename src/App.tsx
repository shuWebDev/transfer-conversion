///<reference path='./typings/typings.d.ts'/>
import * as React from 'react';
import SelectState from './components/SelectState';
import SelectCollege from './components/SelectCollege';

class App extends React.Component<AppRoot.AppProps, AppRoot.AppState> {
  constructor(props: AppRoot.AppProps) {
    super(props);

    this.state = {
      stateCode: "",
      schoolCode: "",
      schoolName: ""
    }
  }

  saveStateCode = (code: string) => {
    let s: HTMLSelectElement = document.querySelector("#state-select") as HTMLSelectElement;

    let value: string = s.options[s.selectedIndex].value;
    this.setState({
      stateCode: value
    });
    return true;
  }

  saveCollegeCode = (code: string) => {
    let c: HTMLSelectElement = document.querySelector("#college-select") as HTMLSelectElement;

    let value: string = c.options[c.selectedIndex].value;
    let sName: string = c.options[c.selectedIndex].id;
    this.setState({
      schoolCode: value,
      schoolName: sName
    });

    return true;
  }
  
  render () {
    // Step 1, select your state
    if(this.state.stateCode === "") {
      return (
        <div className="App">
          <SelectState saveStateCode={this.saveStateCode} />
        </div>
      );
    // Step 2, given state, select your school
    } else {
      if(this.state.schoolCode === "") {
        return (
          <>
            <p>State selected: <br /><strong>{this.state.stateCode}</strong></p>
            <SelectCollege saveCollegeCode={this.saveCollegeCode} />
          </>
        );
      } else {
        return (
          <>
            <p>State selected: <br /><strong>{this.state.stateCode}</strong></p>
            <p>College selected: <br /><strong>{this.state.schoolName}</strong></p>
          </>
        );
      }
    } 
  }
}

export default App;
