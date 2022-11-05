import './mainBar.css';
import React, {useState} from "react";
import { AppBar, Tabs, Tab, InputBase, Toolbar, IconButton, Typography, Menu, MenuItem, Button} from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';

function MainBar() {

    const [value, setValue] =  useState(0);
    const handleValue = (event, newValue) => { setValue(newValue); }
    
    return (
      <div>
        <AppBar position="static" color="default">
        <Toolbar>
            <Tabs value={value} onChange={handleValue} className="mainTab">
            <Tab label="HOME" />
            <Tab label="PROJECT LIST" />
            <Tab label="VALIDATION" />
            </Tabs>

            <div className = "loginButton">
                <IconButton
                  aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={true} color="inherit">
                <AccountCircle/>
                </IconButton>

                <Button variant="outlined" color="secondary" href="/login">
                    Login
                </Button>          
            </div>

          
        </Toolbar>
        
      </AppBar>
      </div>   
    );
  }

  export default MainBar;