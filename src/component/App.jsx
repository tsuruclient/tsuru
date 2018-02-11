// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';

import Sidebar from '../container/Sidebar';
import TimelineView from '../container/TimelineView';
import Dialog from '../container/Dialog';
import Notification from './Notification/Notification';

type Props = {
    classes: Object,
    initApp: Function,
};

const styles = (theme: Object): any => ({
    root: {
        width: "100vw",
        height: "100vh",
    },
    mainView: {
        height: "100%",
        display: "flex",
        flexDirection: "row"
    }
})

const App = (props: Props) => {
    props.initApp();
    return (
        <div className={props.classes.root}>
            <div className={props.classes.mainView}>
                <Sidebar />
                <TimelineView />
            </div>
            <Notification />
            <Dialog />
        </div>
    )
};

export default withStyles(styles)(App);
