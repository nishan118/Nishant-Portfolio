
import styles from "./App.module.css"
import { Navbar } from "./components/Navbar/Navbar"
import {Introduction} from './components/Introduction/Introduction'

function App() {
  

  return (
  <div className={styles.App}>
    <Navbar />
    <Introduction/>
  </div>
  )
}
export default App
