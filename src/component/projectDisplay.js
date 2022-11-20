import React, {useState} from "react";
import { Table, TableBody, TableContainer, TableCell, TableHead, TableRow, Paper} from "@material-ui/core";


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
const rows = [
    createData('Test Case 1', '테스트케이스 1', 6.0, 24, '테스트케이스 example 1',),
    createData('Test Case 2', '테스트케이스 2', 9.0, 37, '테스트케이스..',),
    createData('Test Case 3', '테스트케이스 3', 16.0, 24, '테스트케이스..',),
    createData('Test Case 4', '테스트케이스 4', 3.7, 67, '테스트케이스..',),
    createData('Test Case 5', '테스트케이스 5', 16.0, 49, '테스트케이스..',),
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
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    );
      
  }

  export default ProjectDisplay;