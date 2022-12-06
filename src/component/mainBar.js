import './mainBar.css';
import React, {useState} from "react";
import { AppBar, Tabs, Tab, InputBase, Toolbar, IconButton, Typography, Menu, MenuItem, Button} from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Logo from './logo.png';

function MainBar(props) {

    const [value, setValue] =  useState(props.val);
    const handleValue = (event, newValue) => { setValue(newValue); }
    
    return (
      <div>
        <AppBar position="static" color="default">
        <Toolbar >
            <img src={Logo} width = '120px'/>
            <Tabs value={value} onChange={handleValue} className="mainTab" indicatorColor="primary" textColor="primary">
            <Tab label="HOME" href = "/" />
            <Tab label="PROJECT LIST"  href = "/project"/>
            <Tab label="SUBMISSION"  href = "/submission"/>
            <Tab label="MY PAGE"  href = "/mypage"/>
            </Tabs>

            <div className = "loginButton">
                <IconButton
                  aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={true} color="default">
                <AccountCircle/>
                </IconButton>

                <Button variant="outlined" color="primary" href="/login">
                    Login
                </Button>          
            </div>

          
        </Toolbar>
        
      </AppBar>

      </div>   
    );
  }

  export default MainBar;