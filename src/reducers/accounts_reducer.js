import { FETCH_ACCOUNTS_ERROR } from '../actions/types'
import { FETCH_ACCOUNTS_SUCCESS } from '../actions/types'
import { FETCH_TRANSACTIONS_SUCCESS } from '../actions/types'
import { FETCH_TRANSACTIONS_ERROR } from '../actions/types'
import { CLEAR_ACTIVE_ACCOUNT } from '../actions/types'
import { TRANSFER_COMPLETE } from '../actions/types'
import { TRANSFER_ERROR } from '../actions/types'
import { CLEAR_TRANSFER } from '../actions/types'

const initialState = {
    accounts: [],
    account: null,
    error: null,
    transferStatus: false
}

export default (state = initialState, action) => {

    switch (action.type){
        case FETCH_ACCOUNTS_SUCCESS:
            return {...state, accounts: action.payload};
        case FETCH_ACCOUNTS_ERROR:
            return {...state, error: action.payload}
        case FETCH_TRANSACTIONS_SUCCESS:
            return {...state, account:action.payload}
        case FETCH_TRANSACTIONS_ERROR:
            return {...state, error:action.payload}
        case CLEAR_ACTIVE_ACCOUNT:
            return {...state, account:null}
        case TRANSFER_COMPLETE:
            return {...state, transferStatus: true}
        case TRANSFER_ERROR:
            return {...state, transferStatus: false, error: action.payload}
        case CLEAR_TRANSFER:
            return {...state, transferStatus: false, error: null}
        default:
            return state
    }

    return state
}