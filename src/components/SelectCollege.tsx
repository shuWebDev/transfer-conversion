///<reference path='../typings/typings.d.ts'/>
import * as React from 'react';


class SelectCollege extends React.Component<CollegeComponent.CProps, CollegeComponent.CState> {
  constructor(props:CollegeComponent.CProps) {
    super(props);

    this.state = {
      collegeList: []
    };
  }

  componentDidMount = () => {
    let dataURL = "/njcolleges.json";

    fetch(dataURL)
    .then(response => { return response.json(); })
    .then(data => {
      let cl: CollegeComponent.SchoolInfo[] = data.codes;
      this.setState({
        collegeList: cl
      });
    });
  }

  createCollegeOptions = (cl: CollegeComponent.SchoolInfo[]) => {
    let output: JSX.Element[] = [];

    for(let i=0; i<cl.length; i++) {
      output.push(
        <option key={`key${i}`} value={`${cl[i].schoolCode}`}>
          {`${cl[i].schoolName}`}
        </option>
      );
    }

    return output;
  }

  render() {
    if(this.state.collegeList.length) {
      return (
        <>
            <label>Select school you are transferring from:</label>
            <br />
            <select name="college-select" id="college-select">
              {this.createCollegeOptions(this.state.collegeList)}
            </select>
      <button onClick={() => {this.props.saveCollegeCode()}}>Submit</button>
          </>
      )
    } else {
      return <p>Loading College List...</p>;
    }
  }

}

export default SelectCollege;