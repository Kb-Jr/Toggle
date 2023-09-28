import { useState } from 'react'

import './App.css'

function App() {
  const [buttonText, settoggleText] = useState('On');

  const toggleButton = () => {
    if (buttonText === 'On'){
      settoggleText('Off')
    }
    else {
      settoggleText('On')
    }
  };
 
  return (
    <>
      <button onClick={toggleButton}>
          {buttonText}
        </button>
    </>
  )
}

export default App
