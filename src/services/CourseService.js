import axios from "../axios/config";

export const CourseService = {
  getAllCourses: () => {
    return axios.get("/api/courses");
  },
  getEnrolledCourses: () => {
    return axios.get("/api/student/courses");
  },
  enrollCourse: (courseName) => {
    return axios.post(`/api/student/course`, {
      "courseName": courseName
    });
  },
  dropCourse: (courseName) => {
    // note that axios.delete has a slightly different arg structure than axios.post
    return axios.delete(`/api/student/course`, {
      data: { courseName: courseName },
    });
  },
}