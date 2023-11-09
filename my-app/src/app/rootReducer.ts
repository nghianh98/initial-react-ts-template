import { combineReducers } from 'redux'
import apiService from './services/appService'
import userReducer from './redux/User/userSlice'

const rootReducer = combineReducers({
  user: userReducer,
  [apiService.reducerPath]: apiService.reducer
})

export default rootReducer
