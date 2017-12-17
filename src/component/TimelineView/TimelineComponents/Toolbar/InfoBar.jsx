// @flow

import React from 'react'
import {withStyles} from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';

import Title from './Title';
import Menu from './Menu';
import ProgressBar from './ProgressBar';

const styles = theme => ({

});

type Props = {
    classes: Object,
    inProgress: boolean,
};

const InfoBar = (props: Props) => (
    <div>
        <Toolbar>
            <div style={{marginRight: 'auto'}}>
                <Title timelineName={'Hogehgoe'}/>
            </div>
            <div style={{marginLeft: 'auto'}}>
                <Menu />
            </div>
        </Toolbar>
        <ProgressBar inProgress={props.inProgress} />
    </div>
);

export default withStyles(styles)(InfoBar);
