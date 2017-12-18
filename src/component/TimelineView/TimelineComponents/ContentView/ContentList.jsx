// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    root: {

    }
});

type Props = {
    classes: Object,
    service: string,
    contents: Array<any>,
};

const ContentList = (props: Props) => (
    <div></div>
);

export default withStyles(styles)(ContentList);
