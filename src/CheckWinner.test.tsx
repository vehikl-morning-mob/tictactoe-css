import checkWinner from './CheckWinner';

describe('CheckWinner', () => {
    it('returns null if there is no winner', () => {
        expect(checkWinner(['','','','','','','','',''])).toBeNull()
    })
});