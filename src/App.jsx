
import './App.css'
import Loading from './Loading'
//import InputChanges from './checkNameError/InputChanges'
//import InputChangesUseAction from './checkNameError/InputChangeUseactionstate'
import UseReducerHook from './UseReducerHook'
//import MainApi from './MainApi'

function App() {

  return (
    <div>

       {/* <MainApi /> */}
      {
        /* <InputChanges />
      <InputChangesUseAction /> */
      }

      <UseReducerHook />

      <Loading />
    </div>
  )
}

export default App



/* npm install json-server -> */
/* npx json-server db.json */
/* npx json-server --watch db.json --port 5001 */