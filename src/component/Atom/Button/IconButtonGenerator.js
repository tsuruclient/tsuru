// @flow
import React from 'react';
import ButtonBase from 'material-ui/ButtonBase';

type Props = {
    onclick: Function,
};

export default (Component: Object, props: Props) => (
    () => (
        <ButtonBase onClick={props.onclick}>
            <Component/>
        </ButtonBase>
    )
);
