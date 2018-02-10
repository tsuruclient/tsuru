// @flow
import type {allocatedObject} from "./allocatedObjectType";

export default (home: Array<any>, activity: Array<any>, directmail: Array<any>): allocatedObject => ({
    home,
    activity,
    directmail
});
