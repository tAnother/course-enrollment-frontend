import React from "react";
import CourseTable from "../components/CourseTable";
import { CourseService } from "../services/CourseService";

export default class EnrolledCourses extends React.Component {
  state = {
    courses: [],
  }
  
  componentDidMount() {
    CourseService.getEnrolledCourses()
      .then(res => {
        this.setState({
          courses: res.data
        });
      }).catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <>
        <div>
          <h1>Enrolled:</h1>
        </div>
        <div>
          <CourseTable courses={this.state.courses} />
        </div>
      </>
    )
  }
} 