
import './App.css'
import ColorMain from './ColorGenerator/Color_1'
//import Loading from './Loading'
//import UseApi from './UseApi'
//import InputChanges from './checkNameError/InputChanges'
//import InputChangesUseAction from './checkNameError/InputChangeUseactionstate'
//import UseReducerHook from './UseReducerHook'
//import MainApi from './MainApi'

function App() {

  return (
    <div>

       {/* <MainApi /> */}
      {
        /* <InputChanges />
      <InputChangesUseAction /> */
      }

     {/*  <UseReducerHook /> */}

      {/**
       * <Loading />
      <UseApi />
       */}

       <ColorMain />
    </div>
  )
}

export default App



/* npm install json-server -> */
/* npx json-server db.json */
/* npx json-server --watch db.json --port 5001 */