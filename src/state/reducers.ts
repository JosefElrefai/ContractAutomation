import { combineReducers } from "redux"
import contractsReducers from "./contracts/contracts.reducer"
import customersReducers from "./customers/customers.reducer"

const reducers = combineReducers({
  contracts: contractsReducers,
  customers: customersReducers,
})

export default reducers

export type ReduxState = ReturnType<typeof reducers>
