// @flow
import React from 'react';
import { pure } from 'recompose';
import styled from 'styled-components';
import Avatar from '../../../Atom/Avatar/Avatar';
import Typography from 'material-ui/Typography';
import Linkify from 'react-linkify';

const Styled = {
    Root: styled.div`
        display: flex;
        flex-direction: column;
        padding: 6px;
    `,
    Body: styled.div`
        display: flex;
    `,
    Text: styled.section`
        word-wrap : 'break-word';
        overflow-wrap: 'break-word';
        overflow-x: hidden;
    `,
    Bottom: styled.div`
    `
};

type Props = {
    data: Object,
    handler: Object,
}

const Status = (props: Props) => (
    <Styled.Root>
        <Styled.Body>
            <Avatar
                src={props.data.user.avatar}/>
            <Styled.Text>
                <Typography
                    variant="caption">
                    {props.data.user.displayName + '@'+ props.data.user.screenName}
                </Typography>
                <Typography
                    variant="body1">
                    <Linkify>
                        {props.data.content}
                    </Linkify>
                </Typography>
            </Styled.Text>
        </Styled.Body>
    </Styled.Root>
);

export default pure(Status);
