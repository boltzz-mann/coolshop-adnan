import { ChangeEvent, Dispatch } from 'react'
import { Operator, RowStateObject } from '../../services/states'
import { Action } from '../../services/actions'

// caution DO NOT USE key here, it wont update with state
interface InputRowProps {
    key: number
    row: RowStateObject
    dispatchRows: Dispatch<Action>
}

// Add styling
// See if
function InputRow({ row, dispatchRows }: InputRowProps) {
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // Note: We are not handling 'NaN' here as we do not want to add trailing zero in the field
        let value = parseInt(e.target.value)

        return dispatchRows({
            type: 'UPDATE_VAL',
            rowId: row.id,
            value
        })
    }

    const opChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        // We want a default operator as '+' in case of invalid operators
        let operator: Operator = e.target.value === '-' ? '-' : '+'

        dispatchRows({
            type: 'CHANGE_OPERATOR',
            rowId: row.id,
            operator
        })
    }

    return (
        <div className=" flex gap-4">
            <select
                disabled={row.disabled}
                className="rounded-md border border-black p-2 disabled:border-gray-500 disabled:bg-gray-300 disabled:text-gray-500"
                value={row.operator}
                onChange={opChangeHandler}
            >
                <option value="+">+</option>
                <option value="-">-</option>
            </select>

            <input
                disabled={row.disabled}
                value={row.value}
                type="number"
                onChange={changeHandler}
                className="rounded-md border border-black px-2 disabled:border-gray-500 disabled:bg-gray-300 disabled:text-gray-500"
                min={0}
            />

            <button
                className="rounded-md bg-black px-4 py-2 text-white"
                onClick={() =>
                    dispatchRows({ type: 'TOGGLE_ROW', rowId: row.id })
                }
            >
                {row.disabled ? 'Enable' : 'Disable'}
            </button>

            <button
                className="rounded-md bg-black px-4 py-2 text-white"
                onClick={() =>
                    dispatchRows({ type: 'REMOVE_ROW', rowId: row.id })
                }
            >
                Delete
            </button>
        </div>
    )
}
export default InputRow
