import React, {useState} from "react";
import { Table, TableBody, TableContainer, TableCell, TableHead, TableRow, Paper} from "@material-ui/core";
import { Button } from "@material-ui/core";
import "./projectDisplay.css";


function createData(number, tc, tc1, tc2, tc3, form, validation) {
    return { number, tc, tc1, tc2, tc3, form, validation };
  }
  
const rows = [
    createData('Test Case 1', '테스트케이스 1', 6.0, 24, '테스트케이스 example 1', 'Console I/O', 1),
    createData('Test Case 2', '테스트케이스 2', 9.0, 37, '테스트케이스 example 2', 'Console I/O', 1),
    createData('Test Case 3', '테스트케이스 3', 16.0, 24, '테스트케이스 example 3', 'Console I/O', 0),
    createData('Test Case 4', '테스트케이스 4', 3.7, 67, '테스트케이스 example 4', 'Console I/O', 1),
    createData('Test Case 5', '테스트케이스 5', 16.0, 49, '테스트케이스 example 5', 'Console I/O', 0),
];

function ProjectDisplay(props){

    const [number, setNumber] = useState([0,0,0,0,0]);
    const [number2, setNumber2] = useState([0,0,0,0,0]);
    const [hasClick, setHasClick] = useState([false,false,false,false,false]);
    const [showDisplay, setShowDisplay] = useState(props.display);

    const createNumber = ()=> {
      rows.map((row, idx) => {
        number.push(0);
      });
      console.log(number);
    }

    function clickIncrease(idx) {
      
      const newNumber2 = [...number2];
      const newClick = [...hasClick];
      
      if(hasClick[idx] === false){
        newNumber2[idx] = number[idx] + 1;
        newClick[idx] = true;
      }
      else{
        newNumber2[idx] = number[idx];
        newClick[idx] = false;
      }
      setNumber2(newNumber2);
      setHasClick(newClick);

      console.log(number2, hasClick);
    }

    function clickDecrease(idx) {
      const newNumber2 = [...number2];
      const newClick = [...hasClick];
      
      if(hasClick[idx] === false){
        newNumber2[idx] = number[idx] - 1;
        newClick[idx] = true;
      }
      else{
        newNumber2[idx] = number[idx];
        newClick[idx] = false;
      }
      setNumber2(newNumber2);
      setHasClick(newClick);
    }


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
              {showDisplay &&
                <TableCell align="center">Validation</TableCell>
              }
              {showDisplay &&
                <TableCell align="center">Submit</TableCell>
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              
              <TableRow key={row.number}>
                <TableCell component="th" scope="row" align="center">
                  {row.number}
                </TableCell>
                <TableCell align="center">{row.tc}</TableCell>
                <TableCell align="center">{row.tc1}</TableCell>
                <TableCell align="center">{row.tc2}</TableCell>
                <TableCell align="center">{row.tc3}</TableCell>
                <TableCell align="center">{row.form}</TableCell>
                {showDisplay && 
                  <TableCell align="center" className = "upDowntable"><button onClick={function() {clickIncrease(idx);}}>+1</button>{number2[idx]}<button onClick={function() {clickDecrease(idx);}}>-1</button></TableCell>
                }
                {showDisplay && 
                  <TableCell align="center">
                    <Button variant="outlined" href="./submission">제출</Button>
                  </TableCell>
                }

                
              </TableRow>
              
              
              ))}

            
          </TableBody>  
          
        </Table>
      </TableContainer>
      
    );
      
  }

  export default ProjectDisplay;