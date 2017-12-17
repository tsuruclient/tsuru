// @flow

import React from 'react'
import {withStyles} from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = theme => ({

});

type Props = {
    classes: Object,
};

const Menu = (props: Props) => (
    <IconButton>
        <MenuIcon/>
    </IconButton>
);

export default withStyles(styles)(Menu);
