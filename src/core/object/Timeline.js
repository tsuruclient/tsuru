// @flow

import copyInstance from '../../helper/copyInstance';

export default class Timeline {
    ownerIndex: number;
    timelineType: string;
    filtering: Object; // TODO: 頼む
    contentText: string;
    image: Array<any>;
    error: ?string;

    constructor(ownerIndex: number, timelineType: string) {
        this.ownerIndex = ownerIndex;
        this.timelineType = timelineType;
        this.filtering = {};
        this.contentText = '';
        this.image = [];
        this.error = null;
    }

    updateContentText(value: string): Timeline {
        const r = copyInstance(this);
        r.contentText = value;
        return r;
    }

    filterling(data: Array<any>): Array<any> {
        return data;
    }
    
    clear(): Timeline {
        const r = copyInstance(this);
        r.contentText = '';
        r.image = [];
        return r;
    }
}
