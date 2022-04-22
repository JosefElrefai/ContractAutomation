import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import * as contractsActionCreators from "../../state/contracts/contracts.action-creators"
import { ReduxState } from "../../state/reducers"
import s from "./index.module.css"

export default function Contracts() {
  const dispatch = useDispatch()

  const { fetchContracts, deleteCustomerContracts } = bindActionCreators(
    contractsActionCreators,
    dispatch
  )
  const contracts = useSelector((state: ReduxState) => state.contracts)

  useEffect(() => {
    if (contracts == null) {
      fetchContracts()
    }
  }, [])

  return (
    <div className={s.page}>
      <h2>Contracts:</h2>
      <div className={s.grid}>
        {contracts?.map((c) => (
          <div key={c.id}>
            <p>
              <strong>name:</strong> {c.name}
            </p>
            <p>
              <strong>id:</strong> {c.id}
            </p>
            <p>
              <strong>customerId:</strong> {c.customerId}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
