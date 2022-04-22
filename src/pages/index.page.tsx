import { Link } from "react-router-dom"
import s from "./index.module.css"

export default function Home() {
  return (
    <div className={s.home}>
      <h1>The contract automation platform</h1>
      <div>
        <Link to="/contracts">Contracts</Link>
        <Link to="/customers">Customers</Link>
      </div>
    </div>
  )
}
