import { Provider as ReduxProvider } from "react-redux"
import { store } from "./state/store"
import Router from "./router"

export default function App() {
  return (
    <ReduxProvider store={store}>
      <Router />
    </ReduxProvider>
  )
}
