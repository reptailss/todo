import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import SearchTodo from "../searchTodo/SearchTodo";

import styles from './styles.module.scss'

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar className={styles.bar}
                     variant="dense">
                <div className={styles.inner}>
                    <Typography variant="h6" color="inherit" component="div">
                        TODO
                    </Typography>
                    <PlaylistAddCheckIcon/>
                </div>
                <SearchTodo/>


            </Toolbar>
        </AppBar>
    );
};

export default Header;