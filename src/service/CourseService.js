import axios from "../axios/config";

export const CourseService = {
  getAllCourses: () => {
    return axios.get("/api/courses");
  },
  getEnrolledCourses: () => {
    return axios.get("/api/student/courses");
  },
  enrollCourse: (courseName) => {
    return axios.post(`/api/student/course/${courseName}`);
  },
  dropCourse: (courseName) => {
    return axios.delete(`/api/student/course/${courseName}`);
  },
}