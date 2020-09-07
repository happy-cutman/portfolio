import React, {useState} from 'react';
import {Grid, Paper} from '@material-ui/core';

import Main from './components/Main/Main';
import SideBar from './components/SideBar/SideBar';
import styles from './App.module.css'


const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [local, setLocal] = useState(false);

    if (darkMode) {
        document.body.style.backgroundColor = '#303030'
    } else {
        document.body.style.backgroundColor = '#EEEEEE'
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={1} justify='center'>
                <Grid item lg={3} md={4} sm={4} xs={12}>
                    <Paper elevation={5} className={darkMode ? styles.darkMode : null}>
                        <SideBar dark={darkMode} local={local}/>
                    </Paper>
                </Grid>
                <Grid item lg={8} md={8} sm={8} xs={12}>
                    <Paper elevation={5} className={darkMode ? styles.darkMode : null}>
                        <Main dark={darkMode}
                              toggleDark={setDarkMode}
                              local={local}
                              toggleLocal={setLocal}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
};

export default App;