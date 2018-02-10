// @flow
import {Twitter} from '../Services';
import Content from '../value/Content';
import Event from '../value/Event';
import type {allocatedObject} from "./allocatedObjectType";
import createAllocatedObject from "./createAllocatedObject";

// todo: やれ
export default (data: Array<Object> | Object, ownerId: string): allocatedObject => {
    if(Array.isArray(data)){
        return createAllocatedObject(
            data.filter(item => item.text !== undefined).map(item => new Content(Twitter, item)),
            [],
            []
        );
    }else{
        return createAllocatedObject(
            data.text !== undefined ? [new Content(Twitter, data)] : [],
            [],
            []
        );
    }
}
