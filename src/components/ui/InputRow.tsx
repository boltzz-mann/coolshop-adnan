import { ChangeEvent, Dispatch } from 'react'
import { RowStateObject } from '../../services/states'
import { Action } from '../../services/actions'

// caution DO NOT USE key here, it wont update with state
interface Props {
    key: number
    row: RowStateObject
    dispatchRows: Dispatch<Action>
}

// Add styling
// See if
function InputRow({ row, dispatchRows }: Props) {
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        return dispatchRows({
            type: 'UPDATE_VAL',
            rowId: row.id,
            value: e.target.value
        })
    }

    const opChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatchRows({
            type: 'CHANGE_OPERATOR',
            rowId: row.id,
            operator: e.target.value as '+' | '-'
        })
    }

    return (
        <div className="">
            <select
                disabled={row.disabled}
                className="disabled:bg-gray-300 disabled:text-gray-500"
                value={row.operator}
                onChange={opChangeHandler}
                id=""
            >
                <option value="+">+</option>
                <option value="-">-</option>
            </select>

            <input
                disabled={row.disabled}
                value={row.value}
                type="number"
                onChange={changeHandler}
                className="disabled:bg-gray-300 disabled:text-gray-500"
                min={0}
            />

            <button
                className=""
                onClick={() =>
                    dispatchRows({ type: 'TOGGLE_ROW', rowId: row.id })
                }
            >
                {row.disabled ? 'Enable' : 'Disable'}
            </button>

            <button
                className=""
                onClick={() =>
                    dispatchRows({ type: 'REMOVE_ROW', rowId: row.id })
                }
            >
                Remove Field
            </button>
        </div>
    )
}
export default InputRow
