import { courses } from './dummydata';

export const CourseService = {
    getAllCourses: async () => {
        return courses;
    },
    getEnrolledCourses: () => {},
    enrollCourse: () => {},
    dropCourse: () => {},
}