export interface Contract {
  id: number
  name: string
  customerId: number
}

export enum ContractsActionTypes {
  FetchContracts = "FETCH_CONTRACTS",
  DeleteCustomerContracts = "DELETE_CUSTOMER_CONTRACTS",
}

type FetchContractsAction = {
  type: ContractsActionTypes.FetchContracts
  payload: Contract[]
}

type DeleteCustomerContractsAction = {
  type: ContractsActionTypes.DeleteCustomerContracts
  payload: number
}

export type ContractsAction =
  | FetchContractsAction
  | DeleteCustomerContractsAction
