declare namespace AppRoot {
  interface AppProps {}

  interface AppState {
    stateCode: string,
    schoolCode: string,
    schoolName: string,
    matrix: CourseMatrix
  }

  interface CourseMatrix {
    mySchoolCourseNumber: string,
    mySchoolCourseTitle: string,
    shuCourseNumber: string,
    shuCourseTitle: string
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
    saveCollegeCode: Function
  }

  interface SchoolInfo {
    schoolCode: string;
    schoolName: string;
  }
}

