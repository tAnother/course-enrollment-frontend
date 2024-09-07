import React from "react";
import { CourseService } from "../service/CourseService";
import CourseTable from "../components/CourseTable";

export default class AllCourses extends React.Component {
    state = {
        courses: [],
    }

    componentDidMount() {
        CourseService.getAllCourses().then(courses => {
            this.setState({
                courses: courses
            });
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