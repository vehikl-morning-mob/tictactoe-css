import checkWinner from './CheckWinner';

describe('CheckWinner', () => {
    it('returns null if there is no winner', () => {
        expect(checkWinner(['','','','','','','','',''])).toBeNull()
    })

    it.each([
        [['X','X','X','','','','','','']],
        [['','','','X','X','X','','','']],
        [['','','','','','','X','X','X']],
        [['X','','','X','','','X','','']],
        [['','X','','','X','','','X','']],
        [['','','X','','','X','','','X']],
    ])('X is the winner', (state) => {
        expect(checkWinner(state)).toBe('X')
    })
});