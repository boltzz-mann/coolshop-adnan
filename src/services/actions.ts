interface AddRow {
    type: 'ADD_ROW'
}

interface RemoveRow {
    type: 'REMOVE_ROW'
    rowId: number
}

interface ToggleRow {
    type: 'TOGGLE_ROW'
    rowId: number
}

// Change to number
interface UpdateVal {
    type: 'UPDATE_VAL'
    rowId: number
    value: number
}

interface ChangeOperator {
    type: 'CHANGE_OPERATOR'
    rowId: number
    operator: '+' | '-'
}

export type Action = AddRow | RemoveRow | ToggleRow | UpdateVal | ChangeOperator
