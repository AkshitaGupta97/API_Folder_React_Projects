
import './App.css'
import InputChanges from './checkNameError/InputChanges'
import InputChangesUseAction from './checkNameError/InputChangeUseactionstate'
//import MainApi from './MainApi'

function App() {

  return (
    <div>

       {/* <MainApi /> */}
      <InputChanges />
      <InputChangesUseAction />
    </div>
  )
}

export default App



/* npm install json-server -> */
/* npx json-server db.json */
/* npx json-server --watch db.json --port 5001 */