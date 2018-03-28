import copyInstance from './copyInstance';



describe('copyInstance()', ()=>{
    it('equally instance method', () => {
        class test{
            constructor(value){
                this.value = value;
                this.array = [value, value*2, value+'todesking']
            }

            testfunc(){
                return this.value;
            }
        }

        let source  = new test(44532);
        expect(copyInstance(source).testfunc === source.testfunc).toBe(true);
    })
});
