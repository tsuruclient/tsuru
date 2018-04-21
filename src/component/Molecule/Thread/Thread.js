// @flow
import React from 'react'
import styled from 'styled-components';

import Arrow from '../../Atom/Icon/Arrow';

const Styled = {
    Root: styled.div`
       display: flex;
       flex-wrap: nowrap; 
    `,
    Body: {
         Status: styled.div`
            flex: 1 1 0;
        `,
         NextButton: styled.div`
            flex: 0 1 0;
        `,
    }
};

type Props = {
};

const Thread = (props: Props) => (
    <Styled.Root>
        <Styled.Body.Status>

        </Styled.Body.Status>
        <Styled.Body.NextButton direction={"right"} />
    </Styled.Root>
);

export default Thread;
