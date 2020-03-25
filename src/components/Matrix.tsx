///<reference path='../typings/typings.d.ts'/>
import * as React from 'react';
import fetchJsonp from 'fetch-jsonp';

class Matrix extends React.Component<MatrixProps, MatrixState> {
  constructor(props: MatrixProps){
    super(props);

    this.state = {
      matrixData: {
        courses: [{
          mySchoolCourseNumber: "",
          mySchoolCourseTitle: "",
          shuCourseNumber: "",
          shuCourseTitle: ""
        }]
      }
    };
  }

  componentDidMount = () => {
    let dataURL = `https://tltc.shu.edu/projects/equiv/index.php?UNIV=${this.props.schoolCode}`; 

    fetchJsonp(dataURL)
    .then(response => response.json())
    .then(json => {
      this.setState({
        matrixData: json
      });
    });
  }

  createMatrix = (data: CourseMatrix) => {
    let matrix: JSX.Element = <></>;
       
    matrix = <>
              {this.createMatrixRows(data)}
            </>;
    return matrix;
  }

  createMatrixRows = (rowData: CourseMatrix) => {
    let rows: JSX.Element[] = [];

    for(let i=0; i<rowData.courses.length; i++) {
      console.log(rowData.courses[i].mySchoolCourseNumber);
      rows.push(
        <tr key={`key-${i}`}>
          <td>{rowData.courses[i].mySchoolCourseNumber}</td>
          <td>{rowData.courses[i].mySchoolCourseTitle}</td>
          <td>{rowData.courses[i].shuCourseNumber}</td>
          <td>{rowData.courses[i].shuCourseTitle}</td>
        </tr>
      );
    }
    return rows;
  }

  render() {
    if(this.state.matrixData.courses.length) {
      return (
        <>
        <table style={{width: "50vw"}}>
          <thead>
            <tr>
              <td colSpan={4}>Course Conversion</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th style={{textAlign: "center"}}>Transfer School Course Code</th>
              <th>Transfer School Course Title</th>
              <th>Seton Hall Course Code</th>
              <th>Seton Hall Course Title</th>
            </tr>
            {this.createMatrix(this.state.matrixData)}
          </tbody>
        </table>
        <button onClick={() => this.props.resetState()}>Start Over</button>
        </>
      );
    } else {
      return <p>Loading....</p>
    }
  }

}

export default Matrix;