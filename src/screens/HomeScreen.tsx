import { useReducer } from 'react'
import InputRow from '../components/ui/InputRow'
import { RowStateObject } from '../services/states'
import { inputRowReducer } from '../services/reducers'

const INITIAL_STATE: RowStateObject[] = [
    {
        id: 0,
        disabled: false,
        operator: '+',
        value: 10
    }
]

// let INITIAL_STATE: RowStates = {
//     0: {
//         disabled: false,
//         operator: '+',
//         value: 10
//     }
// }

function HomeScreen() {
    let [rows, dispatchRows] = useReducer(inputRowReducer, INITIAL_STATE)

    const total = rows.reduce((acc, row) => {
        if (row.disabled) return acc
        return row.operator === '+' ? acc + row.value : acc - row.value
    }, 0)

    return (
        <div className="">
            <button
                className=""
                onClick={() => dispatchRows({ type: 'ADD_ROW' })}
            >
                Add Row
            </button>
            {rows.map((row) => (
                <InputRow key={row.id} row={row} dispatchRows={dispatchRows} />
            ))}
            <span className="">Result: {total}</span>
        </div>
    )
}

// Using objects
// function HomeScreen(props: Props) {
//     let [rows, dispatchRows] = useReducer(inputRowReducer, INITIAL_STATE)

//     const rowIds = Object.keys(rows)
//     const total = Object.values(rows).reduce((acc, row) => {
//         if (row.disabled) return acc
//         return row.operator === '+' ? acc + row.value : acc - row.value
//     }, 0)

//     return (
//         <div className="relative h-full w-full p-6">
//             <button
//                 className="mb-4 rounded bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-700"
//                 onClick={() => dispatchRows({ type: 'ADD_ROW' })}
//             >
//                 Add Row
//             </button>
//             {rowIds.map((rowId) => (
//                 <InputRow
//                     key={parseInt(rowId)}
//                     row={rows[parseInt(rowId)]}
//                     dispatchRows={dispatchRows}
//                 />
//             ))}
//             <span className="absolute bottom-0 font-semibold text-indigo-400">
//                 Result: {total}
//             </span>
//         </div>
//     )
// }
export default HomeScreen
