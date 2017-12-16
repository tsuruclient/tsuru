// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';

type Props = {
    classes: Object,
};

const styles = theme => ({
    root: {

    }
})

const TimelineView = (props: Props) => (
    <div>{'これからは無の時代'}</div>
);

export default withStyles(styles)(TimelineView);
