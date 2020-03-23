declare namespace AppRoot {
  interface AppProps {}

  interface AppState {
    stateCode: string,
    schoolCode: string
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

