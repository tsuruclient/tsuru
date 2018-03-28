// @flow

import React from 'react';
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Radio from 'material-ui/Radio';

import timelineTypes from '../../../core/old/constant/timelineType';

const styles = theme => ({
    root: {
        maxHeight: '320px',
        overflowY: 'auto',
    }
});

type Props = {
    classes: Object,
    selected: string,
    selectTimelineType: Function,
};

const handleItemClick = (type: string, selectTimelineType: Function): Function => (
    () => selectTimelineType({selectedTimelineType: type})
);

const TimelineTypeList = pure((props: Props) => (
    <List className={props.classes.root}>
        {Object.keys(timelineTypes).map((item, index) => (
            <ListItem
                key={index}
                button
                onClick={handleItemClick(item, props.selectTimelineType)}
                aria-label=''>
                <ListItemText primary={item} secondary={timelineTypes[item].description}/>
                <ListItemSecondaryAction>
                    <Radio checked={item === props.selected}/>
                </ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>
));

export default withStyles(styles)(TimelineTypeList);
