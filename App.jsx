import { createRoot } from "react-dom"
import Main from "./components/Main"

const root=createRoot(document.getElementById("root"))
function App() {

  return (
    <>
      <Main/>
    </>
  )
}

root.render(<App/>)
export default App