import { combineReducers } from 'redux';
import AuhenticationReducer from './authentication_reducer'
import AccountsReducer from './accounts_reducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    loggedInDetails : AuhenticationReducer,
    accounts: AccountsReducer,
    form: formReducer
});

export default rootReducer;