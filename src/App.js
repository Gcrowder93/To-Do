import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './Views/Auth';
import ToDo from './Views/ToDo';
import { getUser, logout } from './services/users';
import ToDoList from './Components/ToDoList';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <>
                <h1>You are signed in.</h1>
                <ToDoList />
                <button onClick={logoutUser}>Log Out</button>
              </>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
          {/* <Route exact path="/ToDo">
            {!currentUser && <ToDo setCurrentUser={ToDo} />}
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
