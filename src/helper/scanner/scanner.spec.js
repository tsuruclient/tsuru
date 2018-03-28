import scanner from './scanner';

const state = ['t', 'e', 's', 't'];

describe('scanner()', () => {
    it('', () => {
        expect(scanner(state, 0, (item) => ('j'))).toEqual(['j', 'e', 's', 't'])
    })
});
