// @flow

import type {userObject} from "./user";
import type {contentObject} from "./content";

export const statusType = {
    general: 'general',
    thread: 'thread',
    repeat: 'repeat',
    pin: 'pin',
};

export type statusObject = {
    id: string,
    date: string,
    type: string, // statusType
    user: userObject,
    content: contentObject,
    target: ?statusObject,
};
