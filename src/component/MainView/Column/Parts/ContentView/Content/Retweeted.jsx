// @flow

import React from 'react'
import {pure} from 'recompose';
import styled from 'styled-components';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import Icon from '../Parts/Icon';
import RepeatIcon from 'material-ui-icons/Repeat';

import type Content from '../../../../../../core/view/value/Content'

const Styled = {
    Root: styled.div``,
    Header: styled.div`
        display: flex;
        margin: 2px 0px 0px 48px;
    `,
    Body: styled.div`
        padding: 5px;
        padding-left: 53px;
    `,
};

const style = (theme: Object): Object => ({
    repeatIcon: {
        width: '20px',
        height: '20px',
        fill: '#4EBD67',
        margin: '0px 4px'
    }
});

type Props = {
    classes: Object,
    data: Content,
};

const Retweeted = (props: Props) => (
    <Styled.Root >
        <Styled.Header>
            <RepeatIcon className={props.classes.repeatIcon} />
            <Typography variant="body1">{props.data.user.screenName + ' retweeted'}</Typography>
        </Styled.Header>
        <Styled.Body>
            <Icon src={props.data.target.user.avatar}/>
            <Typography variant="caption">{props.data.target.user.displayName + "@"+ props.data.target.user.screenName}</Typography>
            <Typography variant="body1">{props.data.target.content}</Typography>
        </Styled.Body>
    </Styled.Root>
);

export default pure(withStyles(style)(Retweeted));
