export enum MainActionType {
    INCREMENT= 'INCREMENT',
    DECREMENT = 'DECREMENT'
}

export interface MainState {
    counter: number
}

export interface IncrementAction {
    type: MainActionType.INCREMENT,
    payload?: number
}

export interface DecrementAction {
    type: MainActionType.DECREMENT,
    payload?: number
}

export type MainAction = IncrementAction | DecrementAction;