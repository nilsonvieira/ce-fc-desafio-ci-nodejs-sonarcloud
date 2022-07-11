const sum = require ("./sum")
const sub = require ("./sub")
const times = require ("./times")

test("add 1 + 2 to be equal 3", ()=> {
    expect(sum(1,2)).toBe(3)
} );
test("add 2 - 1 to be equal 1", ()=> {
    expect(sub(2,1)).toBe(1)
} );
test("add 4 * 2 to be equal 8", ()=> {
    expect(times(4,2)).toBe(8)
} );