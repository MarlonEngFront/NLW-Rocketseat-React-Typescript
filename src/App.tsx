<<<<<<< HEAD
import { BrowserRouter, Route } from 'react-router-dom'
=======
import {createContext} from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
>>>>>>> 19b0af957158b450465ebe22d9ffafe16ff7c6ad

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

<<<<<<< HEAD
import { AuthContextProvider } from './contexts/Authcontext'
=======
export const TestContext = createContext('');
>>>>>>> 19b0af957158b450465ebe22d9ffafe16ff7c6ad

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
=======
    <TestContext.Provider value={'Teste'}>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
      </TestContext.Provider>
>>>>>>> 19b0af957158b450465ebe22d9ffafe16ff7c6ad
    </BrowserRouter>
  );
}

export default App;