import  { calculateTimeDifference } from '../../utils/formatDate'

describe('FormatDate Function', () => {
    test('deberia retornar la diferencia entre dos fechas timestamp', () => {
        const input1 = '1674402353000'
        const input2 = '1674428054450'

        const func = calculateTimeDifference(input1, input2)

        expect(func).toBe(7)
    })
})