// @flow

import { createSelector } from 'reselect';

const timelineList = (state: Object): Array<any> => (state.timeline);

export const contentBoxText = createSelector(
    [timelineList],
    (Timeline: Array<any>): Function => (
        (index: number): Object => ({
            contentText: Timeline[index].contentText,
            imageList: Timeline[index].image,
        })),
);
