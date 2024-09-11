import React from "react";
import { CourseService } from "../services/CourseService";
import CourseTable from "../components/CourseTable";

export default class AllCourses extends React.Component {
  state = {
    courses: [],
  }

  componentDidMount() {
    CourseService.getAllCourses()
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
          <h1>All Courses</h1>
        </div>
        <div>
          <CourseTable courses={this.state.courses} />
        </div>
      </>
    )
  }
}