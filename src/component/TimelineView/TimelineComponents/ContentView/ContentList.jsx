// @flow

import React from 'react';
import {onlyUpdateForKeys} from 'recompose';
import {withStyles} from 'material-ui/styles';
import Divider from 'material-ui/Divider'

import ContentObject from '../../../../core/value/Content';

import Content from './Content/Content';
import Event from './Content/Notification';

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
            item instanceof ContentObject ? 
                <div key={index}>
                    <Content data={item}/>
                    <Divider />
                </div>:
                <div key={index}>
                    <Event data={item} />
                    <Divider />
                </div>
        ))}
    </div>
));

export default withStyles(styles)(ContentList);
