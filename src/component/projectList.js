import React, {useState} from "react";
import { Tabs, Tab, Typography, Box } from "@material-ui/core";
import ProjectDisplay from './projectDisplay.js'
import './mainBar.css';
import PropTypes from 'prop-types';
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
    marginTop : 100,
    marginLeft : 50,
    display: 'flex',
    height: 400,
    width: 1000,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function ProjectList() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.projectList}>

        
        <Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange} className={classes.tabs}>
          <Tab label="사용자 프로젝트 1" {...a11yProps(0)} />
          <Tab label="사용자 프로젝트 2" {...a11yProps(1)} />
          <Tab label="사용자 프로젝트 3" {...a11yProps(2)} />
          <Tab label="사용자 프로젝트 4" {...a11yProps(3)} />
          <Tab label="사용자 프로젝트 5" {...a11yProps(4)} />
          <Tab label="사용자 프로젝트 6" {...a11yProps(5)} />
          <Tab label="사용자 프로젝트 7" {...a11yProps(6)} />
        </Tabs>
        
        <TabPanel value={value} index={0}>
          <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
            <Typography>사용자 프로젝트 1 설명</Typography>
          </Box>
          
          <ProjectDisplay/>
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
    );
  }

  export default ProjectList;