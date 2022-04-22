import { Dispatch } from "redux"
import axios from "axios"
import { CustomersActionTypes, CustomersAction } from "./customers.types"
import { ReduxState } from "../reducers"
import { deleteCustomerContracts } from "../contracts/contracts.action-creators"

export const fetchCustomers = () => {
  return async (dispatch: Dispatch<CustomersAction>) => {
    const resp = await axios.get("customers.json")
    if (resp.status !== 200) {
      console.error("Failed to fetch customers")
      return
    }

    dispatch({
      type: CustomersActionTypes.FetchCustomers,
      payload: resp.data,
    })
  }
}

export const deleteCustomer = (customerId: number) => {
  return (dispatch: Dispatch, getState: () => ReduxState) => {
    dispatch(deleteCustomerContracts(customerId))

    return dispatch({
      type: CustomersActionTypes.DeleteCustomer,
      payload: customerId,
    })
  }
}
