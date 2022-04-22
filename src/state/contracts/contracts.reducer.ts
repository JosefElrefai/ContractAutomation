import {
  ContractsActionTypes,
  Contract,
  ContractsAction,
} from "./contracts.types"

const contractsReducers = (
  contracts: Contract[] | null = null,
  action: ContractsAction
): Contract[] | null => {
  switch (action.type) {
    case ContractsActionTypes.FetchContracts:
      return action.payload

    case ContractsActionTypes.DeleteCustomerContracts:
      if (contracts == null) {
        console.error("Attempted to delete contracts before they were fetched")
        return contracts
      }

      return contracts.filter(
        (contract) => contract.customerId !== action.payload
      )

    default:
      return contracts
  }
}

export default contractsReducers
