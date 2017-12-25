// @flow
import React from 'react';
import {withStyles} from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';

const styles = {
    root:{
        float: "left",
        marginLeft: "-48px"
    },
};

type Props = {
    classes: Object,
    src: string,
};

const Icon = (props: Props) => {
    return (
        <Avatar className={props.classes.root} src={props.src}/>
    )
}

export default withStyles(styles)(Icon);
