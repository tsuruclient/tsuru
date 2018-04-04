// @flow
import React from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography'

import Avatar from '../../Atom/Avatar/Avatar';

const Styled = {
    Root: styled(Paper)`
        width: 260px;
        height: 100px;
        position: relative;
        margin: 4px;
    `,
    Header: styled.div`
        background-image: ${props => 'url(' + props.src + ')'};
        background-size: cover;
        width: 100%;
        height: 100px;
        position: absolute;
    `,
    Info: styled.div`
        width: 100%;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
    `,
    Text: styled.div`
        background-color: rgba(255, 255, 255, 0.7);
        minWidth: 80px;
        padding: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
    `
};

type Props = {
    user: Object //TODO: DEFINE USER OBJECT
};

const UserCard = (props: Props) => (
    <Styled.Root>
        <Styled.Header src={props.user.header} />
        <Styled.Info>
            <Avatar src={props.user.avatar} styles={{size: 40, rect: false}} />
            <Styled.Text>
                <Typography variant={"body1"}>{props.user.displayName}</Typography>
                <Typography variant={'caption'}>{props.user.screenName}</Typography>
            </Styled.Text>
        </Styled.Info>
    </Styled.Root>
);

export default UserCard;
