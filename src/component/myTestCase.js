import React, {useState} from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";

import "./myTestCase.css"

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(testCase, success, time, submit, result) {
    return { testCase, success, time, submit, result };
  }
  
  const rows = [
    createData('Test Case 1', 'O', 232, 32, ''),
    createData('Test Case 2', 'O', 123, 33, ''),
    createData('Test Case 3', 'O', 216, 35, ''),
    createData('Test Case 4', 'X', 231, 31, ''),
    createData('Test Case 5', 'O', 741, 27, ''),
  ];
  
  const rows2 = [
    createData('Test Case 1', 'X', 732, 29, ''),
    createData('Test Case 2', 'X', 623, 27, ''),
    createData('Test Case 3', 'O', 1616, 32, ''),
    createData('Test Case 4', 'X', 231, 34, ''),
    createData('Test Case 5', 'O', 743, 27, ''),
  ];
  
  const useStyles = makeStyles({
    table: {
      width : 700,
      minWidth: 700,
      marginBottom : 30,
    },
  });

  function MyTestCase() {
    const classes = useStyles();

    return (
      <div>
      <div className = "testCase">
          <div className = "testCase1">
          <TableContainer component={Paper} className={classes.table}>
            <Table  aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>사용자 프로젝트 1 결과</StyledTableCell>
                  <StyledTableCell align="right">성공 여부</StyledTableCell>
                  <StyledTableCell align="right">소요 시간&nbsp;(ms)</StyledTableCell>
                  <StyledTableCell align="right">전체 제출&nbsp;(명)</StyledTableCell>
                  <StyledTableCell align="center">결과</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.testCase}>
                    <StyledTableCell component="th" scope="row">
                      {row.testCase}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.success}</StyledTableCell>
                    <StyledTableCell align="center">{row.time}</StyledTableCell>
                    <StyledTableCell align="center">{row.submit}</StyledTableCell>
                    <StyledTableCell align="center"><Button variant = "outlined" color = "primary" href="./" >결과 보기</Button></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </div>
          
          
          <div className = "testCase2">
          <TableContainer component={Paper} className={classes.table}>
            <Table  aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>사용자 프로젝트 2 결과</StyledTableCell>
                  <StyledTableCell align="right">성공 여부</StyledTableCell>
                  <StyledTableCell align="right">소요 시간&nbsp;(ms)</StyledTableCell>
                  <StyledTableCell align="right">전체 제출&nbsp;(명)</StyledTableCell>
                  <StyledTableCell align="center">결과</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows2.map((row) => (
                  <StyledTableRow key={row.testCase}>
                    <StyledTableCell component="th" scope="row">
                      {row.testCase}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.success}</StyledTableCell>
                    <StyledTableCell align="center">{row.time}</StyledTableCell>
                    <StyledTableCell align="center">{row.submit}</StyledTableCell>
                    <StyledTableCell align="right"><Button variant = "outlined" color = "primary" href="./" >결과 보기</Button></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </div>
          
        </div>

        <div className = "testCase">
          <div className = "testCase1">
          <TableContainer component={Paper} className={classes.table}>
            <Table  aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>사용자 프로젝트 1 결과</StyledTableCell>
                  <StyledTableCell align="right">성공 여부</StyledTableCell>
                  <StyledTableCell align="right">소요 시간&nbsp;(ms)</StyledTableCell>
                  <StyledTableCell align="right">전체 제출&nbsp;(명)</StyledTableCell>
                  <StyledTableCell align="center">결과</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.testCase}>
                    <StyledTableCell component="th" scope="row">
                      {row.testCase}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.success}</StyledTableCell>
                    <StyledTableCell align="center">{row.time}</StyledTableCell>
                    <StyledTableCell align="center">{row.submit}</StyledTableCell>
                    <StyledTableCell align="right"><Button variant = "outlined" color = "primary" href="./" >결과 보기</Button></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </div>


          <div className = "testCase2">
          <TableContainer component={Paper} className={classes.table}>
            <Table  aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>사용자 프로젝트 2 결과</StyledTableCell>
                  <StyledTableCell align="right">성공 여부</StyledTableCell>
                  <StyledTableCell align="right">소요 시간&nbsp;(ms)</StyledTableCell>
                  <StyledTableCell align="right">전체 제출&nbsp;(명)</StyledTableCell>
                  <StyledTableCell align="center">결과</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows2.map((row) => (
                  <StyledTableRow key={row.testCase}>
                    <StyledTableCell component="th" scope="row">
                      {row.testCase}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.success}</StyledTableCell>
                    <StyledTableCell align="center">{row.time}</StyledTableCell>
                    <StyledTableCell align="center">{row.submit}</StyledTableCell>
                    <StyledTableCell align="right"><Button variant = "outlined" color = "primary" href="./" >결과 보기</Button></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </div>
          

        </div>
        </div>
    );
  }

  export default MyTestCase;