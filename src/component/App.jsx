// @flow

import React from 'react';
import {pure, lifecycle} from 'recompose';
import styled from 'styled-components';
import {MuiThemeProvider} from 'material-ui/styles';

import Sidebar from '../container/Sidebar';
import TimelineView from '../container/TimelineView';
import Dialog from '../container/Dialog';

type Props = {
    theme: Object,
    initApp: Function,
};

const Main = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: row;
        background-color: ${props => props.theme.palette.background.default};
`;

const App = (props: Props) => {
    return (
        <MuiThemeProvider theme={props.theme}>
            <Main theme={props.theme}>
                <Sidebar />
                <TimelineView />
            </Main>
            <Dialog />
        </MuiThemeProvider>
    )
};

const AppComponent = lifecycle({
    componentWillMount(){
        this.props.initApp();
    }
})(App);

export default AppComponent;
