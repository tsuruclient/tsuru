// @flow

import React from 'react';
import {onlyUpdateForKeys} from 'recompose';
import {withStyles} from 'material-ui/styles';
import Divider from 'material-ui/Divider'

import Content from '../../../../core/value/Content';
import Event from '../../../../core/value/Event';

import Contents from './Content/Content';

const styles = theme => ({
    root: {
        overflowY: 'auto'
    }
});

type Props = {
    classes: Object,
    service: string,
    contents: Array<any>,
};

const ContentList = onlyUpdateForKeys(['contents'])((props: Props) => (
    <div className={props.classes.root}>
        {props.contents.map((item, index) => (
            item instanceof Content ? 
                <div key={index}>
                    <Contents
                        data={item}/>
                    <Divider />
                </div>:
                <div key={index}></div>
        ))}
    </div>
));

export default withStyles(styles)(ContentList);
