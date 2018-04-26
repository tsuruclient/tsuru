// @flow
// Core is singleton.
let instance: ?Core;

class Core {
    instance: Core;
    constructor() {
        this.instance = this;
    }
}

export default () => {
    if(instance){
        return instance;
    }

    instance = new Core();
    return instance;
};
