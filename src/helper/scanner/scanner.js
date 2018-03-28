// @flow
export default (state: Array<any>, targetIndex: number, closure: Function): Array<any> => (
    state.map((item: any, index: number): any => (
        index === targetIndex ? closure(item) : item
    ))
);