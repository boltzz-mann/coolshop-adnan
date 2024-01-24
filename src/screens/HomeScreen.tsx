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

// See whether to place constants outside or inside the rfc
function HomeScreen() {
    const [rows, dispatchRows] = useReducer(inputRowReducer, INITIAL_STATE)

    const total = rows.reduce((acc, row) => {
        if (row.disabled || isNaN(row.value)) return acc
        return row.operator === '+' ? acc + row.value : acc - row.value
    }, 0)

    return (
        <div className="p-6">
            <button
                className=" mb-4 rounded-md bg-black px-4 py-2 text-white hover:bg-gray-700"
                onClick={() => dispatchRows({ type: 'ADD_ROW' })}
            >
                Add Row
            </button>

            <div className="flex flex-col gap-2">
                {rows.map((row) => (
                    <InputRow
                        key={row.id}
                        row={row}
                        dispatchRows={dispatchRows}
                    />
                ))}
            </div>

            <div className="mt-4 font-semibold">Result: {total}</div>
        </div>
    )
}

export default HomeScreen
