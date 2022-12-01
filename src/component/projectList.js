import ProjectDisplay from './projectDisplay.js'
import Footer  from '../component/footer.js';
import './mainBar.css';
import './projectList.css';


import React, {useState} from "react";
import { Tabs, Tab, Typography, Box, Button, Link } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box color="text.primary" p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  projectList: {
    flexGrow: 1,
    marginTop : 50,
    marginLeft : 50,
    display: 'flex',
    height: 800,
    width: 1500,
    align: 'center'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));



// Code

function ProjectList() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
          <div className = "listContainer">
            <div className={classes.projectList}>
              <Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange} className={classes.tabs}>
                <div className = "addButtondiv">
                  <Button variant="outlined" href="./addproject">New Project</Button>
                </div>
                  <Tab value = {0} label="사용자 프로젝트 1" {...a11yProps(0)} />
                  <Tab value = {1} label="사용자 프로젝트 2" {...a11yProps(1)} />
                  <Tab value = {2} label="사용자 프로젝트 3" {...a11yProps(2)} />
                  <Tab value = {3} label="사용자 프로젝트 4" {...a11yProps(3)} />
                  <Tab value = {4} label="사용자 프로젝트 5" {...a11yProps(4)} />
                  <Tab value = {5} label="사용자 프로젝트 6" {...a11yProps(5)} />
                  <Tab value = {6} label="사용자 프로젝트 7" {...a11yProps(6)} />
                  <Tab value = {7} label="사용자 프로젝트 8" {...a11yProps(7)} />
                  <Tab value = {8} label="사용자 프로젝트 9" {...a11yProps(8)} />
              </Tabs>
              
              <TabPanel value={value} index={0}>
                <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
                  <Typography>사용자 프로젝트 1</Typography>
                </Box>

                <Box textAlign="left" width="1000px">
                　프로젝트트 트 프로젝트 설명젝트 설명프로젝트 설명프로젝트 설명로젝트 설명프로젝트 설프
                </Box>
                
                <ProjectDisplay/>

                <div className = "testCaseAdd">
                  <Button variant = "outlined" color = "primary" href="./submission" component={Link} >New TestCase</Button>
                </div>
              </TabPanel>
                
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
              <TabPanel value={value} index={3}>
                Item Four
              </TabPanel>
              <TabPanel value={value} index={4}>
                Item Five
              </TabPanel>
              <TabPanel value={value} index={5}>
                Item Six
              </TabPanel>
              <TabPanel value={value} index={6}>
                Item Seven
              </TabPanel>

                
            </div>        
          </div>
        <Footer/>
      </div>   
    );
  }

  export default ProjectList;