import Family from "./prop-drill/Family";
import { FamilyContext } from "./prop-drill/FamilyContext"
import './App.css'

function App() {

  const familyMessage = {
    familyName: 'Darth Vaders'
  }

  return (
    <>
      <FamilyContext.Provider value={familyMessage}>
        <Family />
      </FamilyContext.Provider>
    </>
  );
}

export default App;
