import React, {useState} from "react";
import { Table, TableBody, TableContainer, TableCell, TableHead, TableRow, Paper} from "@material-ui/core";
import { Button } from "@material-ui/core";


function createData(number, tc, tc1, tc2, tc3, form, validation) {
    return { number, tc, tc1, tc2, tc3, form, validation };
  }
  
const rows = [
    createData('Test Case 1', '테스트케이스 1', 6.0, 24, '테스트케이스 example 1', 'Input/Output', 1),
    createData('Test Case 2', '테스트케이스 2', 9.0, 37, '테스트케이스..', 'Input/Output', 1),
    createData('Test Case 3', '테스트케이스 3', 16.0, 24, '테스트케이스..', 'Input/Output', 0),
    createData('Test Case 4', '테스트케이스 4', 3.7, 67, '테스트케이스..', 'Input/Output', 1),
    createData('Test Case 5', '테스트케이스 5', 16.0, 49, '테스트케이스..', 'Input/Output', 0),
];

function ProjectDisplay(){
    return(
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">No</TableCell>
              <TableCell align="center">Content</TableCell>
              <TableCell align="center">ETC 1</TableCell>
              <TableCell align="center">ETC 2</TableCell>
              <TableCell align="center">ETC 3</TableCell>
              <TableCell align="center">테스트 형태</TableCell>
              <TableCell align="center">Validation</TableCell>
              <TableCell align="center">Submit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.number}>
                <TableCell component="th" scope="row">
                  {row.number}
                </TableCell>
                <TableCell align="center">{row.tc}</TableCell>
                <TableCell align="center">{row.tc1}</TableCell>
                <TableCell align="center">{row.tc2}</TableCell>
                <TableCell align="center">{row.tc3}</TableCell>
                <TableCell align="center">{row.form}</TableCell>
                <TableCell align="center">{row.validation}</TableCell>
                <TableCell align="center">
                  <Button variant="outlined" href="./submission">제출</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    );
      
  }

  export default ProjectDisplay;