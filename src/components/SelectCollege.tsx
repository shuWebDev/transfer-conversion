///<reference path='../typings/typings.d.ts'/>
import * as React from 'react';
import fetchJsonp from 'fetch-jsonp';


class SelectCollege extends React.Component<CollegeComponent.CProps, CollegeComponent.CState> {
  constructor(props:CollegeComponent.CProps) {
    super(props);

    this.state = {
      collegeList: []
    };
  }

  componentDidMount = () => {
    let dataURL = `https://tltc.shu.edu/projects/equiv/index.php?ST=${this.props.stateCode}`;

    fetchJsonp(dataURL)
    .then(response => response.json())
    .then(json => {
      let cl: CollegeComponent.SchoolInfo[] = json.codes;
      this.setState({
        collegeList: cl
      });
    });
  }

  createCollegeOptions = (cl: CollegeComponent.SchoolInfo[]) => {
    let output: JSX.Element[] = [];

    for(let i=0; i<cl.length; i++) {
      output.push(
        <option key={`key${i}`} id={`${cl[i].schoolName}`} value={`${cl[i].schoolCode}`}>
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