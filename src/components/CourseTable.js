import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CourseService } from '../services/CourseService';
import Button from '@mui/material/Button';

export default function CourseTable(props) {
  const enroll = (courseName) => {
    CourseService.enrollCourse(courseName)
      .then(res => {
        alert(`You've successfully enrolled in: ${courseName}`);
      }).catch(err => {
        alert(`Error: Enrollment failed due to: ${err.message}`);
      });
  }

  const drop = (courseName) => {
    CourseService.dropCourse(courseName)
      .then(res => {
        alert(`You've successfully dropped: ${courseName}`);
      }).catch(err => {
        alert(`Error: Dropping failed due to: ${err.message}`);
      });
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Course Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Instructor</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.courses.map((course, index) => {
            return (
              <TableRow
                key={course.courseName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{index+1}</TableCell>
                <TableCell align="right">{course.courseName}</TableCell>
                <TableCell align="right">{course.courseDescription}</TableCell>
                <TableCell align="right">{course.courseLocation}</TableCell>
                <TableCell align="right">{course.instructorId}</TableCell>
                <TableCell align="right">
                  <Button 
                    variant="outlined"
                    style={{ color: course.isEnrolled ? "red" : "green" }}
                    onClick={() => course.isEnrolled ? drop(course.courseName) : enroll(course.courseName)}
                  >
                    {course.isEnrolled ? "Drop" : "Enroll"}
                  </Button>
                </TableCell>
              </TableRow>
            )})}
        </TableBody>
      </Table>
    </TableContainer>
  );
}