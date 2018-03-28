import copyInstance from './copyInstance';

class targetClass{
    constructor(value){
        this.value = value;
        this.array = [value, value+'todesking'];
        this.innerArray = [[...this.array], this.array];
    }

    testfunc(){
        return this.value;
    }
}

describe('copyInstance()', ()=>{
    let target  = new targetClass(44532);

    it('copied instance method is exist', () => {
        expect(copyInstance(target).testfunc).not.toBeUndefined();
    });

    it('copied instance value is equally', () => {
        expect(copyInstance(target).value).toEqual(target.value);
    });

    it('copied instance value(array) is equally', () => {
        expect(copyInstance(target).array).toEqual(target.array);
    });

    it('copyInstance is shallow copy', () => {
        let t2 = copyInstance(target);
        t2.array[0] = target.array[0]*2;
        expect(t2.array).toEqual(target.array);
    });
});
