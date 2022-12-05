import React, {useState} from "react";
import MainBar from '../component/mainBar.js';
import Footer  from '../component/footer.js';

import "./addtestcase.css"

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'; 


// 테스트케이스 이름, 테스트케이스 설명, 테스트케이스 유형 등을 프로젝트 생성 시 명시.

const testTypes = ['Console I/O', 'File I/O']

const useStyles = makeStyles({
  field1: {
    width : 400
  },

  field2: {
    width : 400
  },

  field3: {
    width : 200,
    textAlign : "left"
  },
  button: {
    width : 170
  },
  input: {
    display: 'none'
  }
});

function AddTestCase() {

    const [testType, setTestType] = useState('');
    const classes = useStyles();

    const handleChange = (event) => {
      setTestType(event.target.value);
    };

    return (
      <div>
        <MainBar val = {1}/>
        <div className='addTestCaseWrapper'>
          
          <div className="formWrapper">
            <form>
              <div><TextField
                className ={classes.field1}
                required
                id="outlined-helpertext"
                defaultValue="테스트케이스 명"
                label="테스트케이스 명"
                multiline={true}
                rows={1}
                margin="normal"
              /></div>
              
              <div>
                <TextField
                className ={classes.field2}
                id="outlined-helperText"
                label="테스트케이스 설명"
                defaultValue=""
                variant="outlined"
                margin="normal"
                multiline={true}
                rows={10}
                size="medium"
                />
              </div>

              

              <div>
                <TextField
                  className ={classes.field3}
                  id="standard-select-currency"
                  select
                  label="테스트케이스 유형 선택"
                  margin="normal"
                  value={testType}
                  onChange={handleChange}
                  helperText="Please select your type">
                  {testTypes.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </div>

              {testType == "Console I/O" &&
              <div>
                <div>
                  <TextField
                  required
                  className ={classes.field2}
                  id="outlined-helperText"
                  label="Text Input"
                  defaultValue=""
                  variant="outlined"
                  margin="normal"
                  multiline={true}
                  rows={1}
                  size="medium"
                  />
                </div>
                <div>
                  <TextField
                  required
                  className ={classes.field2}
                  id="outlined-helperText"
                  label="Text Output"
                  defaultValue=""
                  variant="outlined"
                  margin="normal"
                  multiline={true}
                  rows={1}
                  size="medium"
                  />
                </div>
              </div>
              }

              {testType == "File I/O" &&
              <div className = "fileWrapper">
                <input
                  accept=""
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Input Upload
                  </Button>
                </label>

                <input
                  accept=""
                  className={classes.input}
                  id="contained-button-file2"
                  multiple
                  type="file"
                />
                <span className="blankSpace"/> 
                <label htmlFor="contained-button-file2">
                  <Button variant="contained" color="primary" component="span">
                    Output Upload
                  </Button>
                </label>
              </div>
              }
              
            </form>
            <div className ="buttonGroup">
              <Button href = "./" variant="outlined" className ={classes.button}>테스트케이스 추가</Button>
              <span className="blankSpace"/> 
              <Button href = "./project" variant="outlined" className ={classes.button}>취소</Button>
            </div>
          </div>
          
          
          
        </div>
        
        <Footer/>
        </div>
    );
  }

  export default AddTestCase;