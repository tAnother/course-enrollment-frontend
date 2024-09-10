import axios from "../axios/config";

export const CourseService = {
    getAllCourses: async () => {
        return axios.get("/api/courses");
    },
    getEnrolledCourses: () => {},
    enrollCourse: () => {},
    dropCourse: () => {},
}