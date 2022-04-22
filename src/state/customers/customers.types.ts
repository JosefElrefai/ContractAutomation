export interface Customer {
  id: number
  name: string
}

export enum CustomersActionTypes {
  FetchCustomers = "FETCH_CUSTOMERS",
  DeleteCustomer = "DELETE_CUSTOMER",
}

type FetchCustomersAction = {
  type: CustomersActionTypes.FetchCustomers
  payload: Customer[]
}

type DeleteCustomersAction = {
  type: CustomersActionTypes.DeleteCustomer
  payload: number
}

export type CustomersAction = FetchCustomersAction | DeleteCustomersAction
