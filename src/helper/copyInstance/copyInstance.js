// @flow

export default (instance: any): any => {
    return Object.assign(Object.create(Object.getPrototypeOf(instance)), instance);
}
