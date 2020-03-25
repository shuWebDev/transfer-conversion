declare namespace AppRoot {
  interface AppProps {}

  interface AppState {
    stateCode: string,
    schoolCode: string,
    schoolName: string,
    //matrix: CourseMatrix[]
    step: number
  }
}

declare namespace StateComponent {
  interface SState {
    stateNames: string[]
  }

  interface SProps {
    saveStateCode: Function
  }
}

declare namespace CollegeComponent {
  interface CState {
    collegeList: SchoolInfo[]
  }

  interface CProps {
    saveCollegeCode: Function,
    stateCode: string
  }

  interface SchoolInfo {
    schoolCode: string;
    schoolName: string;
  }
}

interface MatrixProps {
  schoolCode: string,
  resetState: Function
}

interface MatrixState {
  matrixData: CourseMatrix
}

interface CourseMatrix {
  courses: [{
    mySchoolCourseNumber: string,
    mySchoolCourseTitle: string,
    shuCourseNumber: string,
    shuCourseTitle: string
  }]
}