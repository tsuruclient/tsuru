// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';

import Sidebar from '../container/Sidebar';
import TimelineView from '../container/TimelineView';
import Dialog from '../container/Dialog';
import Notification from './Notification/Notification';

type Props = {
    classes: Object,
    setDevData: Function,
};

const styles = (theme: Object): any => ({
    root: {
        width: "100%",
        height: "100vh",
    },
    mainView: {
        height: "100%",
        display: "flex",
        flexDirection: "row"
    }
})

const App = (props: Props) => {
    props.setDevData();
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
