// @flow

import React from 'react';
import {MuiThemeProvider, createMuiTheme, withStyles} from 'material-ui/styles';

import Sidebar from '../container/Sidebar';
import TimelineView from '../container/TimelineView';
import Dialog from '../container/Dialog';

type Props = {
    classes: Object,
    theme: Object,
    initApp: Function,
};

const styles = (theme: Object): any => ({
    root: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        backgroundColor: theme.palette.background.default,
    },
});


const App = (props: Props) => {
    props.initApp();
    console.log(props.theme.palette.background.default);
    return (
        <MuiThemeProvider theme={props.theme}>
            <div className={props.classes.root}>
                <Sidebar />
                <TimelineView />
            </div>
            <Dialog />
        </MuiThemeProvider>
    )
};

export default withStyles(styles)(App);
