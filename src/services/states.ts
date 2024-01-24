export type Operator = '+' | '-'

export interface RowStateObject {
    id: number
    disabled: boolean
    operator: Operator
    value: number
}
