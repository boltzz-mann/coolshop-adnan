import { Action } from './actions'
import { RowStateObject } from './states'

var rowCount = 1

// Note: Object can be used instead of arrays for better performance
//     : at the cost of more memory/space
export function inputRowReducer(
    // state: Record<number, RowStateObject>,
    state: RowStateObject[],
    action: Action
) {
    const { type } = action
    let newSate = [...state]

    switch (type) {
        case 'ADD_ROW':
            newSate.push({
                id: rowCount,
                disabled: false,
                operator: '+',
                value: 10
            })
            rowCount += 1
            return newSate

        case 'REMOVE_ROW':
            return newSate.filter((row) => row.id !== action.rowId)

        case 'TOGGLE_ROW':
            return newSate.map((row) => {
                if (row.id === action.rowId) row.disabled = !row.disabled
                return row
            })

        case 'UPDATE_VAL':
            return newSate.map((row) => {
                if (row.id === action.rowId) row.value = action.value
                return row
            })

        case 'CHANGE_OPERATOR':
            return newSate.map((row) => {
                if (row.id === action.rowId) row.operator = action.operator
                return row
            })

        default:
            return state
    }
}
