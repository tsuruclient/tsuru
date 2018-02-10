// @flow

import React from 'react'
import {pure} from 'recompose'
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
        userSelect: 'none',
    }
});

type Props = {
    classes: Object,
    timelineName: string,
    ownerInfo: Object,
};

const Title = pure((props: Props) => (
    <div className={props.classes.root}>
        <Typography variant="headline" style={{marginBottom: "-8px"}}>
            {props.timelineName}
        </Typography>
        <br />
        <Typography variant="caption" style={{marginTop: "-8px"}}>
            {props.ownerInfo.screenName + '@' + props.ownerInfo.domain}
        </Typography>
    </div>
));

export default withStyles(styles)(Title);
