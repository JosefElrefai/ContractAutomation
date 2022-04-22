import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import * as customersActionCreators from "../../state/customers/customers.action-creators"
import * as contractsActionCreators from "../../state/contracts/contracts.action-creators"
import { ReduxState } from "../../state/reducers"
import s from "./index.module.css"

export default function Customers() {
  const dispatch = useDispatch()
  const { fetchCustomers, deleteCustomer, fetchContracts } = bindActionCreators(
    { ...customersActionCreators, ...contractsActionCreators },
    dispatch
  )
  const { contracts, customers } = useSelector((state: ReduxState) => state)

  useEffect(() => {
    if (customers == null) {
      fetchCustomers()
    }
    if (contracts == null) {
      fetchContracts()
    }
  }, [])

  if (!customers || !contracts) return <div>Loading...</div>

  return (
    <div className={s.page}>
      <h2>Customers</h2>
      <div className={s.customers}>
        {customers?.map((customer) => {
          const customerContracts = contracts
            ?.filter((contract) => contract.customerId === customer.id)
            .map((contract) => <p>{contract.name}</p>)

          return (
            <div key={customer.id}>
              <p>{customer.name}</p>
              <p>{customer.id}</p>
              <button onClick={() => deleteCustomer(customer.id)}>
                Delete
              </button>
              {customerContracts}
            </div>
          )
        })}
      </div>
    </div>
  )
}
