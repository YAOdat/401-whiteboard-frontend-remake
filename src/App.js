import './App.css';
import SignIn from './components/Signin'
import { useState, createContext } from 'react'
import cookies from 'react-cookies';
import { When } from 'react-if';
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup, useColorMode } from '@chakra-ui/react'

export const OutButtonContext = createContext();

function App() {
  const [signOutButton, setSignOutButton] = useState(false)
  const { colorMode, toggleColorMode } = useColorMode()


  const signout = () => {
    setSignOutButton(true)
  }

  let username = cookies.load('username')


  return (
    <ChakraProvider>
      <div className="App">
        <div className="nav">
          <div className="nav-header">
            <div className="nav-title" >
              Pomment
            </div>
          </div>


          <div className="nav-links">



            <a href="https://pomment.netlify.app/" className='home-button'>Home Page</a>
            <Button onClick={toggleColorMode}>
              Current Theme: {colorMode === 'light' ? 'Light' : 'Dark'}
            </Button>

            <When condition={username}>
              <>
                <span className='welcome-message'>Hey {username}!</span>
                <button className='sign-out-button' onClick={signout}>Sign Out? <span> Cry </span></button>
              </>
            </When>

          </div>
        </div>
        <header className="App-header">

          <h1> <span id='Pomment'> Pomment </span>, Where You Post and Comment</h1>
          <OutButtonContext.Provider value={{ signOutButton, setSignOutButton }}>
            <SignIn />
          </OutButtonContext.Provider>

        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;