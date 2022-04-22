import {
  CustomersActionTypes,
  Customer,
  CustomersAction,
} from "./customers.types"

const customersReducers = (
  customers: Customer[] | null = null,
  action: CustomersAction
): Customer[] | null => {
  switch (action.type) {
    case CustomersActionTypes.FetchCustomers:
      return action.payload

    case CustomersActionTypes.DeleteCustomer:
      if (customers == null) {
        console.error("Attempted to delete customers before they were fetched")
        return customers
      }

      const i = customers.findIndex(
        (customer) => customer.id === action.payload
      )
      if (i === -1) {
        console.error(
          "Attempted to delete customer with id that does not exist"
        )
        return customers
      }

      const newArray = [...customers]
      newArray.splice(i, 1)
      return newArray

    default:
      return customers
  }
}

export default customersReducers
