import { Action } from './actions'
import { RowStateObject } from './states'

var rowCount = 1

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
                value: 0
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
                if (row.id === action.rowId) row.value = parseInt(action.value)
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

// using objects
// export function inputRowReducer(
//     // state: InputRowState[],
//     // state: Record<number, RowStateObject>,
//     state: RowStates,
//     action: Action
// ) {
//     const { type } = action

//     // let newSate = [...state]
//     let newSate = { ...state }

//     const count = Object.keys(newSate).length

//     switch (type) {
//         case 'ADD_ROW':
//             newSate[count] = {
//                 disabled: false,
//                 operator: '+',
//                 value: 0
//             }
//             return newSate

//         case 'REMOVE_ROW':
//             delete newSate[action.rowId]
//             return newSate

//         case 'TOGGLE_ROW':
//             newSate[action.rowId].disabled = !newSate[action.rowId].disabled
//             return newSate

//         case 'UPDATE_VAL':
//             newSate[action.rowId].value = action.value
//             return newSate

//         case 'CHANGE_OPERATOR':
//             newSate[action.rowId].operator = action.operator
//             return newSate

//         default:
//             return state
//     }
// }
