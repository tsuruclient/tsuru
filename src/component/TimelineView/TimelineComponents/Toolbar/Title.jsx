// @flow

import React from 'react'
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
};

const Title = (props: Props) => (
    <div className={props.classes.root}>
        <Typography type="headline" style={{marginBottom: "-8px"}}>
            {props.timelineName}
        </Typography>
        <br />
        <Typography type="caption" style={{marginTop: "-8px"}}>
            {'wakaru ukeru kami'}
        </Typography>
    </div>
);

export default withStyles(styles)(Title);
