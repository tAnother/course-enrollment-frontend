import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function CourseTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Course ID</TableCell>
            <TableCell align="right">Course Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Instructor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.courses.map((course, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {course.ID}
              </TableCell>
              <TableCell align="right">{course.name}</TableCell>
              <TableCell align="right">{course.description}</TableCell>
              <TableCell align="right">{course.location}</TableCell>
              <TableCell align="right">{course.instructor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}