import { test } from "./index"

// I heard you like tests so I put a test in your test so you can test your test while you test
describe('test function', () => {
    it('appears to work correctly', () => {
        expect(test()).toBe("Hello World")
    })
})