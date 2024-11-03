import {calculatePasswordStrength} from "../src/calculatePasswordStrength";

describe('Password strength tests for function calculatePasswordStrength', () => {

    test('If Strength <= 2 "Very Weak"', () => {
            expect(calculatePasswordStrength('1234')).toBe("Very Weak")
    })

    test('If Strength = 3 "Weak"', () => {
            expect(calculatePasswordStrength('1aB')).toBe("Weak")
    })

    test('If Strength = 4 "Moderate"', () => {
        expect(calculatePasswordStrength('1aB#')).toBe("Moderate")
    })

    test('If Strength = 5 "Strong"', () => {
        expect(calculatePasswordStrength('1aB#8888')).toBe("Strong")
    })

    test('If Strength >= 6 "Very Strong"', () => {
        expect(calculatePasswordStrength('sdkPassJ#(121212')).toBe("Very Strong")
        //console.log(calculatePasswordStrength('sdkPassJ#(121212'))
    })
})