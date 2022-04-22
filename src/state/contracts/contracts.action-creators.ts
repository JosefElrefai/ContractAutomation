import { Dispatch } from "redux"
import axios from "axios"
import { ContractsActionTypes, ContractsAction } from "./contracts.types"

export const fetchContracts = () => {
  return async (dispatch: Dispatch<ContractsAction>) => {
    const resp = await axios.get("contracts.json")
    if (resp.status !== 200) {
      console.error("Failed to fetch contracts")
      return {}
    }

    dispatch({
      type: ContractsActionTypes.FetchContracts,
      payload: resp.data,
    })
  }
}

export const deleteCustomerContracts = (customerId: number) => {
  return {
    type: ContractsActionTypes.DeleteCustomerContracts,
    payload: customerId,
  }
}
