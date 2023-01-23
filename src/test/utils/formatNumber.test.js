import  { formatNumber }  from "../../utils/formatNumber"

describe('formatNumber function', () => {
    test('deberia retornar un numero formatedo', () => {
        const input = '1000'

        const func = formatNumber(input)

        expect(func).toBe('1.0k')
    })
})