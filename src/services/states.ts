export interface RowState {
    disabled: boolean
    operator: '+' | '-'
    value: number
}

export interface RowStateObject {
    id: number
    disabled: boolean
    operator: '+' | '-'
    value: number
}

export type RowStates = Record<string, RowState>
