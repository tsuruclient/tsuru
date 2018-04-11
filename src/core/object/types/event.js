// @flow

import type {statusObject} from "./status";
import type {userObject} from "./user";

export const eventType = {
    favorite: 'favorite',
    repeat: 'repeat',
    addUser: 'addUser',
};

export type eventObject = {
    id: string,
    eventType: string, // eventType
    target: userObject,
    targetStatus: ?statusObject,
}
